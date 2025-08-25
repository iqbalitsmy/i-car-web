// document.addEventListener('DOMContentLoaded', function () {
//     const faqButtons = document.querySelectorAll('.faq-button');

//     faqButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             const faqItem = this.closest('.faq-item');
//             const content = faqItem.querySelector('.faq-content');
//             const icon = this.querySelector('.faq-icon');

//             // Check if elements exist before manipulating them
//             if (!content || !icon) return;

//             const isCurrentlyOpen = !content.classList.contains('max-h-0');

//             // Close all other FAQ items
//             faqButtons.forEach(otherButton => {
//                 if (otherButton !== this) {
//                     const otherItem = otherButton.closest('.faq-item');
//                     const otherContent = otherItem ? otherItem.querySelector('.faq-content') : null;
//                     const otherIcon = otherButton.querySelector('.faq-icon');

//                     if (otherContent) {
//                         otherContent.classList.add('max-h-0');
//                         otherContent.classList.remove('max-h-20');
//                     }
//                     if (otherIcon) {
//                         otherIcon.classList.remove('rotate-45');
//                     }
//                 }
//             });

//             // Toggle current FAQ item
//             if (isCurrentlyOpen) {
//                 content.classList.add('max-h-0');
//                 content.classList.remove('max-h-20');
//                 icon.classList.remove('rotate-45');
//             } else {
//                 content.classList.remove('max-h-0');
//                 content.classList.add('max-h-20');
//                 icon.classList.add('rotate-45');
//             }
//         });
//     });
// });


// Tab and faq functionality
document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // // FAQ accordion functionality for all tabs
    function initializeFAQ() {
        const faqButtons = document.querySelectorAll('.faq-button');

        faqButtons.forEach(button => {
            button.addEventListener('click', function () {
                const faqItem = this.closest('.faq-item');
                const content = faqItem.querySelector('.faq-content');
                const icon = this.querySelector('.faq-icon');

                // Toggle current item
                const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

                if (isOpen) {
                    content.style.maxHeight = '0px';
                    icon.classList.remove('fa-minus', 'rotate-180');
                    icon.classList.add('fa-plus');
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus', 'rotate-180');
                }
            });
        });
    }

    // Tab switching functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons border-primary-darker text-primary-darker
            tabButtons.forEach(btn => {
                btn.classList.remove('border-primary-darker', 'text-primary-darker');
                btn.classList.add('border-transparent', 'text-gray-500', "hover:text-gray-700", "hover:border-gray-300");
            });

            // Add active class to clicked button
            this.classList.add('border-primary-darker', 'text-primary-darker');
            this.classList.remove('border-transparent', 'text-gray-500', "hover:text-gray-700", "hover:border-gray-300");

            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.add('hidden');
                // Close all open FAQs when switching tabs
                const openContents = content.querySelectorAll('.faq-content');
                const openIcons = content.querySelectorAll('.faq-icon');
                openContents.forEach(item => item.style.maxHeight = '0px');
                openIcons.forEach(icon => {
                    icon.classList.remove('fa-minus', 'rotate-180');
                    icon.classList.add('fa-plus');
                });
            });

            // Show target tab content
            document.getElementById(targetTab + '-tab').classList.remove('hidden');
        });
    });

    // Initialize FAQ functionality
    initializeFAQ();
});