// Smooth Scrolling for Navigation Links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (event) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hero Button Animation
const heroButton = document.querySelector('.btn');
heroButton.addEventListener('mouseover', () => {
    heroButton.style.transform = 'scale(1.1)';
    heroButton.style.transition = 'transform 0.3s ease-in-out';
});
heroButton.addEventListener('mouseout', () => {
    heroButton.style.transform = 'scale(1)';
});

// Category Hover Effect (Optional)
const categories = document.querySelectorAll('.category');
categories.forEach(category => {
    category.addEventListener('mouseover', () => {
        category.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        category.style.transform = 'scale(1.05)';
        category.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
    category.addEventListener('mouseout', () => {
        category.style.boxShadow = 'none';
        category.style.transform = 'scale(1)';
    });
});
