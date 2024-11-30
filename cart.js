document.addEventListener('DOMContentLoaded', () => {
    const removeButtons = document.querySelectorAll('.remove-btn');
    const totalItemsElement = document.getElementById('total-items');
    const totalPriceElement = document.getElementById('total-price');

    function updateCart() {
        const cartItems = document.querySelectorAll('.cart-item');
        let totalItems = 0;
        let totalPrice = 0;

        cartItems.forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').value, 10);
            const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
            totalItems += quantity;
            totalPrice += price * quantity;
        });

        totalItemsElement.textContent = totalItems;
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    removeButtons.forEach(button => {
        button.addEventListener('click', event => {
            const item = event.target.closest('.cart-item');
            item.remove();
            updateCart();
        });
    });

    document.querySelectorAll('.quantity').forEach(input => {
        input.addEventListener('change', updateCart);
    });
});
