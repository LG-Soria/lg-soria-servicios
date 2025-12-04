// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL || "";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      business,
      email,
      phone,
      message,
    }: {
      name?: string;
      business?: string;
      email?: string;
      phone?: string;
      message?: string;
    } = body ?? {};

    const trimmedName = (name ?? "").trim();
    const trimmedEmail = (email ?? "").trim();
    const trimmedPhone = (phone ?? "").trim();
    const trimmedBusiness = (business ?? "").trim();
    const trimmedMessage = (message ?? "").trim();

    const contact = trimmedEmail || trimmedPhone;

    // Validación mínima del lado servidor
    if (!trimmedName || !contact) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Faltan datos obligatorios: nombre y al menos un medio de contacto.",
        },
        { status: 400 }
      );
    }

    if (!CONTACT_FROM_EMAIL) {
      console.error(
        "[CONTACT_FORM] Falta CONTACT_FROM_EMAIL en variables de entorno."
      );
      return NextResponse.json(
        {
          ok: false,
          error:
            "Configuración de envío de correo incompleta. Intente nuevamente más tarde.",
        },
        { status: 500 }
      );
    }

    // -------- 1) Email interno para vos --------
    const subject = `Nueva consulta desde la web - ${trimmedName}`;

    const lines = [
      `Nombre: ${trimmedName}`,
      trimmedBusiness && `Negocio / Empresa: ${trimmedBusiness}`,
      trimmedEmail && `Email: ${trimmedEmail}`,
      trimmedPhone && `Teléfono: ${trimmedPhone}`,
      "",
      "Mensaje:",
      trimmedMessage || "(sin mensaje)",
    ].filter(Boolean);

    const textContent = lines.join("\n");

    const notifyOwnerPromise = resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      subject,
      text: textContent,
      // Si dejó email, se usa como reply-to
      replyTo: trimmedEmail || undefined,
    });

    // -------- 2) Email de confirmación para la persona --------
    const confirmationPromise = trimmedEmail
      ? resend.emails.send({
        from: CONTACT_FROM_EMAIL,
        to: trimmedEmail,
        subject: "¡Recibí tu mensaje!",
        text: [
          `Hola ${trimmedName},`,
          "",
          "Gracias por escribirme. Recibí tu mensaje y te voy a responder lo antes posible.",
          "",
          "Resumen de lo que enviaste:",
          trimmedBusiness && `- Negocio / Empresa: ${trimmedBusiness}`,
          trimmedPhone && `- Teléfono: ${trimmedPhone}`,
          "",
          "Mensaje:",
          trimmedMessage || "(sin mensaje)",
          "",
          "Si querés agregar algo más, podés responder directamente a este correo.",
          "",
          "Saludos,",
          "Lucas",
        ]
          .filter(Boolean)
          .join("\n"),
      })
      : Promise.resolve({ error: null } as any);

    const [notifyOwnerResult, confirmationResult] = await Promise.all([
      notifyOwnerPromise,
      confirmationPromise,
    ]);

    // Si falla el mail interno, se considera error del backend
    if (notifyOwnerResult.error) {
      console.error(
        "[CONTACT_FORM] Error al enviar email interno con Resend:",
        notifyOwnerResult.error
      );
      return NextResponse.json(
        {
          ok: false,
          error:
            "Se recibió el formulario, pero hubo un problema al enviar el email. Intente nuevamente más tarde.",
        },
        { status: 500 }
      );
    }

    // Si solo falla el mail de confirmación, se registra pero no se rompe la respuesta
    if (confirmationResult && (confirmationResult as any).error) {
      console.error(
        "[CONTACT_FORM] Error al enviar email de confirmación al usuario:",
        (confirmationResult as any).error
      );
    }

    console.log("[CONTACT_FORM] Nuevo mensaje enviado correctamente:", {
      name: trimmedName,
      business: trimmedBusiness,
      email: trimmedEmail || null,
      phone: trimmedPhone || null,
    });

    return NextResponse.json(
      { ok: true, message: "Formulario enviado correctamente." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT_FORM] Error al procesar el formulario:", error);

    return NextResponse.json(
      {
        ok: false,
        error:
          "Hubo un problema al enviar el formulario. Intente nuevamente.",
      },
      { status: 500 }
    );
  }
}
