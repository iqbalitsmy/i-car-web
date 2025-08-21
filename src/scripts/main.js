// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    if (mobileMenu.style.maxHeight === '0px' || mobileMenu.style.maxHeight === '') {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
    } else {
        mobileMenu.style.maxHeight = '0px';
    }
});

// Mobile dropdown toggle
function toggleMobileDropdown(button) {
    const dropdown = button.nextElementSibling;
    const arrow = button.querySelector('span');

    if (dropdown.style.maxHeight === '0px' || dropdown.style.maxHeight === '') {
        dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
        arrow.style.transform = 'rotate(180deg)';
    } else {
        dropdown.style.maxHeight = '0px';
        arrow.style.transform = 'rotate(0deg)';
    }
}

// carousel
class Carousel {
    constructor() {
        this.carousel = document.getElementById('carousel');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.indicators = document.querySelectorAll('.indicator');
        this.playPauseBtn = document.getElementById('playPauseBtn');
        this.playIcon = document.getElementById('playIcon');
        this.pauseIcon = document.getElementById('pauseIcon');

        this.currentSlide = 0;
        this.totalSlides = 3;
        this.autoPlay = true;
        this.autoPlayInterval = null;

        this.init();
    }

    init() {
        // Set initial active indicator
        this.updateIndicators();

        // Event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        this.playPauseBtn.addEventListener('click', () => this.toggleAutoPlay());

        // Indicator click events
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Touch/swipe support
        this.addTouchSupport();

        // Start autoplay
        this.startAutoPlay();
    }

    goToSlide(slideIndex) {
        this.currentSlide = slideIndex;
        const translateX = -this.currentSlide * 100;
        this.carousel.style.transform = `translateX(${translateX}%)`;
        this.updateIndicators();
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(this.currentSlide);
    }

    prevSlide() {
        this.currentSlide = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
        this.goToSlide(this.currentSlide);
    }

        updateIndicators() {
        this.indicators.forEach((indicator, index) => {
            indicator.classList.remove(
                'bg-opacity-50',
                'bg-opacity-100',
                'w-1', 'h-1', 'sm:w-2', 'sm:h-2',
                'w-2', 'h-2', 'sm:w-3', 'sm:h-3',
                'active-indicator', "indicator"
            );
            if (index === this.currentSlide) {
                indicator.classList.add('bg-opacity-100', 'w-2', 'h-2', 'sm:w-3', 'sm:h-3', 'active-indicator');
            } else {
                indicator.classList.add('bg-opacity-50', 'w-1', 'h-1', 'sm:w-2', 'sm:h-2', 'indicator');
            }
        });
    }

    startAutoPlay() {
        if (this.autoPlay) {
            this.autoPlayInterval = setInterval(() => {
                this.nextSlide();
            }, 4000);
            this.playIcon.classList.add('hidden');
            this.pauseIcon.classList.remove('hidden');
        }
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
            this.playIcon.classList.remove('hidden');
            this.pauseIcon.classList.add('hidden');
        }
    }

    toggleAutoPlay() {
        this.autoPlay = !this.autoPlay;
        if (this.autoPlay) {
            this.startAutoPlay();
        } else {
            this.stopAutoPlay();
        }
    }

    addTouchSupport() {
        let startX = 0;
        let endX = 0;

        this.carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        this.carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe();
        });

        this.carousel.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            this.carousel.style.cursor = 'grabbing';
        });

        this.carousel.addEventListener('mouseup', (e) => {
            endX = e.clientX;
            this.handleSwipe();
            this.carousel.style.cursor = 'grab';
        });
    }

    handleSwipe() {
        const threshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }
}

// Initialize carousel
new Carousel();