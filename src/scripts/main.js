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