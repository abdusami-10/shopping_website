document.addEventListener('DOMContentLoaded', () => {
    console.log('Home page loaded successfully!');
});

document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('categories');
    const products = document.querySelectorAll('.product');

    categoryFilter.addEventListener('change', () => {
        const selectedCategory = categoryFilter.value;

        products.forEach(product => {
            if (selectedCategory === 'all' || product.dataset.category === selectedCategory) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.querySelector('.btn');

    addToCartButton.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const quantityInputs = document.querySelectorAll('.quantity');
    const removeButtons = document.querySelectorAll('.remove-btn');
    const totalPriceElement = document.querySelector('.total-price');

    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
            const quantity = parseInt(item.querySelector('.quantity').value, 10);
            total += price * quantity;
        });
        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    }

    quantityInputs.forEach(input => {
        input.addEventListener('change', updateTotalPrice);
    });

    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const item = e.target.closest('.cart-item');
            item.remove();
            updateTotalPrice();
        });
    });
});
