document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // --- Project Card Spotlight Effect ---
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element.
            const y = e.clientY - rect.top;  // y position within the element.

            // Set the CSS variables
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        card.addEventListener('mouseleave', () => {
            // Reset position when mouse leaves
            card.style.setProperty('--mouse-x', `50%`);
            card.style.setProperty('--mouse-y', `50%`);
        });
    });

});