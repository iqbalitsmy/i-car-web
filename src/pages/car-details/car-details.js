
// Image gallery functionality
document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.getElementById('mainImage');
    const imageCounter = document.getElementById('imageCounter');
    const thumbnailItems = document.querySelectorAll('.thumbnail-item');
    const favoriteBtn = document.getElementById('favoriteBtn');

    // Thumbnail click functionality
    thumbnailItems.forEach(function (thumbnail) {
        thumbnail.addEventListener('click', function () {
            // Remove active state from all thumbnails
            thumbnailItems.forEach(item => {
                item.classList.remove('ring-2', 'ring-blue-500');
            });

            // Add active state to clicked thumbnail
            this.classList.add('ring-2', 'ring-blue-500');

            // Get image data from clicked thumbnail
            const newSrc = this.getAttribute('data-src');
            const newAlt = this.getAttribute('data-alt');
            const newIndex = this.getAttribute('data-index');

            // Update main image with fade effect
            mainImage.style.opacity = '0.7';

            setTimeout(() => {
                mainImage.src = newSrc;
                mainImage.alt = newAlt;
                imageCounter.textContent = newIndex;
                mainImage.style.opacity = '1';
            }, 150);
        });
    });

    // Favorite button functionality
    favoriteBtn.addEventListener('click', function () {
        const heartIcon = this.querySelector('i');

        if (heartIcon.classList.contains('fas')) {
            // Already favorited - remove favorite
            heartIcon.classList.remove('fas', 'text-red-500');
            heartIcon.classList.add('far', 'text-gray-600');
        } else {
            // Not favorited - add favorite
            heartIcon.classList.remove('far', 'text-gray-600');
            heartIcon.classList.add('fas', 'text-red-500');
        }
    });

    // Keyboard navigation (optional)
    document.addEventListener('keydown', function (e) {
        const currentActive = document.querySelector('.thumbnail-item.ring-2.ring-blue-500');
        let currentIndex = Array.from(thumbnailItems).indexOf(currentActive);

        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            thumbnailItems[currentIndex - 1].click();
        } else if (e.key === 'ArrowRight' && currentIndex < thumbnailItems.length - 1) {
            thumbnailItems[currentIndex + 1].click();
        }
    });
});