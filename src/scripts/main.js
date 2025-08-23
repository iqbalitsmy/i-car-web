// Go to Top Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const goToTopBtn = document.getElementById('goToTop');
    const goToTopResponsive = document.getElementById('goToTopResponsive');
    
    // Show/hide button based on scroll position
    function toggleGoToTopButton() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 300) {
            if (goToTopBtn) {
                goToTopBtn.classList.remove('opacity-0', 'invisible');
                goToTopBtn.classList.add('opacity-100', 'visible');
            }
            if (goToTopResponsive) {
                goToTopResponsive.classList.remove('opacity-0', 'invisible');
                goToTopResponsive.classList.add('opacity-100', 'visible');
            }
        } else {
            if (goToTopBtn) {
                goToTopBtn.classList.add('opacity-0', 'invisible');
                goToTopBtn.classList.remove('opacity-100', 'visible');
            }
            if (goToTopResponsive) {
                goToTopResponsive.classList.add('opacity-0', 'invisible');
                goToTopResponsive.classList.remove('opacity-100', 'visible');
            }
        }
    }
    
    // Smooth scroll to top function
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Event listeners
    window.addEventListener('scroll', toggleGoToTopButton);
    
    if (goToTopBtn) {
        goToTopBtn.addEventListener('click', scrollToTop);
    }
    if (goToTopResponsive) {
        goToTopResponsive.addEventListener('click', scrollToTop);
    }
    
    // Initial check
    toggleGoToTopButton();
});

// WhatsApp button click tracking (optional)
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Optional: Add analytics tracking here
            console.log('WhatsApp button clicked');
        });
    });
});