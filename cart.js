document.addEventListener('DOMContentLoaded', () => {
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    
    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');

        
        cartItems.innerHTML = '';

        
        let total = 0;

        
        cart.forEach(item => {
            const listItem = document.createElement('li');

            
            listItem.innerHTML = `${item.name} - ₹${item.price} (x${item.quantity}) `;

            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';
            removeButton.addEventListener('click', () => {
                removeFromCart(item.id);
            });

            
            listItem.appendChild(removeButton);
            cartItems.appendChild(listItem);

            total += item.price * item.quantity;
        });

        
        cartTotal.textContent = `Total: ₹${total}`;

        
        localStorage.setItem('cart', JSON.stringify(cart));
    }

   
    function removeFromCart(productId) {
        
        cart = cart.filter(item => item.id !== productId);

        
        updateCart();
    }


    function addToCart(productId, productName, productPrice) {
        
        const item = cart.find(item => item.id === productId);

        if (item) {
            
            item.quantity++;
        } else {
            
            cart.push({
                id: productId,
                name: productName,
                price: parseFloat(productPrice),
                quantity: 1
            });
        }

        
        updateCart();
    }

    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); 
            const productId = button.getAttribute('data-product-id');
            const productName = button.getAttribute('data-product-name');
            const productPrice = button.getAttribute('data-product-price');

            addToCart(productId, productName, productPrice);
        });
    });

    
    updateCart();

    
    document.querySelector('.user-action img[src="cart.svg"]').addEventListener('click', () => {
        document.getElementById('cart-sidebar').classList.add('show');
    });

    
    document.querySelector('.close-btn').addEventListener('click', () => {
        document.getElementById('cart-sidebar').classList.remove('show');
    });

   
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        
        alert('Proceeding to checkout');
    });
});
