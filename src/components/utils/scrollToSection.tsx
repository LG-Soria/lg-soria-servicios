/**
 * Scrolls smoothly to a section by its ID, accounting for a fixed header offset.
 *
 * @param sectionId - The ID of the HTML element to scroll to.
 * @param callback - Optional callback function to execute before scrolling (e.g., closing a menu).
 */
export const scrollToSection = (sectionId: string, callback?: () => void) => {
    console.log("Attempting to scroll to:", sectionId);
    const element = document.getElementById(sectionId);

    if (element) {
        console.log("Element found:", element);

        // Execute callback if provided (e.g., close menu)
        if (callback) {
            callback();
        }

        // Use setTimeout to ensure any previous state changes (like menu closing) don't interfere
        setTimeout(() => {
            // Get the header height to offset the scroll
            const headerOffset = 64; // 4rem = 64px (h-16 class)
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            console.log("Scrolling to position:", offsetPosition);

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }, 150);
    } else {
        console.error(`Section with id "${sectionId}" not found`);
        // Even if element is not found, we might want to trigger the callback (e.g. close menu)
        if (callback) {
            callback();
        }
    }
};