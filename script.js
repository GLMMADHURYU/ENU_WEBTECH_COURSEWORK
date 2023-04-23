// Define variables
const items = document.querySelectorAll('.item');
const cartTotal = document.querySelector('#cart-total');
const cartItems = document.querySelector('#cart-items');
const cartBtn = document.querySelector('#cart-btn');
const clearBtn = document.querySelector('#clear-cart-btn');
const cart = [];

// Add event listeners
items.forEach(function(item) {
    item.querySelector('button').addEventListener('click', function() {
        addToCart(item);
    });
});

cartBtn.addEventListener('click', function() {
    showCart();
});

clearBtn.addEventListener('click', function() {
    clearCart();
});

// Add to cart function
function addToCart(item) {
    let itemInfo = {
        name: item.querySelector('.item-name').textContent,
        price: item.querySelector('.item-price').textContent
    };
    cart.push(itemInfo);
    showCart();
}

// Show cart function
function showCart() {
    let cartHTML = '';
    let total = 0;
    cart.forEach(function(item) {
        total += parseInt(item.price);
        cartHTML += `
            <li>${item.name} - ${item.price}</li>
        `;
    });
    cartTotal.textContent = total.toFixed(2);
    cartItems.innerHTML = cartHTML;
}

// Clear cart function
function clearCart() {
    cart.length = 0;
    cartTotal.textContent = '0.00';
    cartItems.innerHTML = '';
}
