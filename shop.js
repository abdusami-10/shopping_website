document.addEventListener('DOMContentLoaded', () => {
    const filterLinks = document.querySelectorAll('.categories a');
    const products = document.querySelectorAll('.product');

    filterLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const category = link.getAttribute('data-category');

            filterLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');

            products.forEach(product => {
                if (category === 'all' || product.dataset.category === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
});
