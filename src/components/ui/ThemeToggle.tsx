"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun, FiMonitor } from "react-icons/fi";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Evitar mismatch de hidratación
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="h-9 w-9" />; // Placeholder para evitar layout shift
    }

    return (
        <div className="flex items-center rounded-full border border-slate-200 bg-white p-1 dark:border-slate-800 dark:bg-slate-950">
            <button
                onClick={() => setTheme("light")}
                className={`rounded-full p-1.5 transition-colors ${theme === "light"
                        ? "bg-slate-100 text-brand dark:bg-slate-800"
                        : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                    }`}
                aria-label="Tema claro"
            >
                <FiSun className="h-4 w-4" />
            </button>
            <button
                onClick={() => setTheme("system")}
                className={`rounded-full p-1.5 transition-colors ${theme === "system"
                        ? "bg-slate-100 text-brand dark:bg-slate-800"
                        : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                    }`}
                aria-label="Tema del sistema"
            >
                <FiMonitor className="h-4 w-4" />
            </button>
            <button
                onClick={() => setTheme("dark")}
                className={`rounded-full p-1.5 transition-colors ${theme === "dark"
                        ? "bg-slate-100 text-brand dark:bg-slate-800"
                        : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                    }`}
                aria-label="Tema oscuro"
            >
                <FiMoon className="h-4 w-4" />
            </button>
        </div>
    );
}
