document.addEventListener('DOMContentLoaded', function () {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
        button.addEventListener('click', function () {
            const faqItem = this.closest('.faq-item');
            const content = faqItem.querySelector('.faq-content');
            const icon = this.querySelector('.faq-icon');

            // Check if elements exist before manipulating them
            if (!content || !icon) return;

            const isCurrentlyOpen = !content.classList.contains('max-h-0');

            // Close all other FAQ items
            faqButtons.forEach(otherButton => {
                if (otherButton !== this) {
                    const otherItem = otherButton.closest('.faq-item');
                    const otherContent = otherItem ? otherItem.querySelector('.faq-content') : null;
                    const otherIcon = otherButton.querySelector('.faq-icon');

                    if (otherContent) {
                        otherContent.classList.add('max-h-0');
                        otherContent.classList.remove('max-h-20');
                    }
                    if (otherIcon) {
                        otherIcon.classList.remove('rotate-45');
                    }
                }
            });

            // Toggle current FAQ item
            if (isCurrentlyOpen) {
                content.classList.add('max-h-0');
                content.classList.remove('max-h-20');
                icon.classList.remove('rotate-45');
            } else {
                content.classList.remove('max-h-0');
                content.classList.add('max-h-20');
                icon.classList.add('rotate-45');
            }
        });
    });
});