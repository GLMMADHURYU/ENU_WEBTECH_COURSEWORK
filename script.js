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

//Adding Images to Carousel
const images = [
  'british-delights.jpg',
  'asian-delights.jpg',
  'simply-vegan.jpg'
];

const slides = document.querySelectorAll('.carousel .slide');

slides.forEach((slide, index) => {
  const img = document.createElement('img');
  img.src = images[index];
  slide.appendChild(img);
});


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
var bannerTitle = document.getElementById("banner-title");

bannerTitle.addEventListener("click", function() {
    bannerTitle.classList.toggle("bold");
});

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error = document.querySelectorAll(".error");

  if (name == "") {
    error[0].innerHTML = "Please enter your name";
    return false;
  } else if (email == "") {
    error[1].innerHTML = "Please enter your email address";
    return false;
  } else if (message == "") {
    error[2].innerHTML = "Please enter a message";
    return false;
  } else {
    document.getElementById("success").innerHTML = "Your message has been sent successfully!";
    document.getElementById("success").style.display = "block";
    document.getElementById("success").style.color = "green";
    document.getElementById("success").style.fontSize = "16px";
    document.getElementById("success").style.textAlign = "center";
    setTimeout(function(){document.getElementById("success").style.display = "none";}, 5000);
    return true;
  }
}



// Smooth scrolling for anchor links
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
    
    
    // ADD TO CART FEATURE IN MENU PAGE
    
    
    // Select elements
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.querySelector('.cart-items');
const cartCount = document.querySelector('.cart-count');
const cartTotal = document.querySelector('.cart-total');
const checkoutButton = document.querySelector('.checkout');

// Initialize cart
let cart = [];

// Add event listeners
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
// Get all the "Add to Cart" buttons on the page
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add a click event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the parent card element of the clicked button
    const parentCard = button.closest('.card');

    // Get the title, price, and image source of the product
    const title = parentCard.querySelector('.card-title').textContent;
    const price = parentCard.querySelector('.price').textContent;
    const imageSrc = parentCard.querySelector('.card-img-top').src;

    // Create a new cart item element
    const cartItem = document.createElement('li');
    cartItem.classList.add('list-group-item');
    cartItem.innerHTML = `
      <div class="row">
        <div class="col-3">
          <img src="${imageSrc}" class="img-fluid" alt="${title}">
        </div>
        <div class="col-6">
          <h6>${title}</h6>
          <span class="price">${price}</span>
        </div>
        <div class="col-3">
          <button class="btn btn-sm btn-danger remove-item">Remove</button>
        </div>
      </div>
    `;

    // Get the cart list and add the new item to it
    const cartList = document.querySelector('.cart-list');
    cartList.appendChild(cartItem);

    // Update the cart total
    updateCartTotal();
  });
});

// Add a click event listener to the "Remove" buttons on each cart item
const removeItemButtons = document.querySelectorAll('.remove-item');
removeItemButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the parent cart item element of the clicked button
    const parentCartItem = button.closest('.list-group-item');

    // Remove the parent cart item element from the cart list
    parentCartItem.remove();

    // Update the cart total
    updateCartTotal();
  });
});

// Update the cart total
function updateCartTotal() {
  // Get all the cart item price elements
  const cartItemPrices = document.querySelectorAll('.cart-list .price');

  // Calculate the total price of all the cart items
  let totalPrice = 0;
  cartItemPrices.forEach(price => {
    totalPrice += parseFloat(price.textContent.replace('£', ''));
  });

  // Update the total price element
  const totalElement = document.querySelector('.cart-total');
  totalElement.textContent = `£${totalPrice.toFixed(2)}`;

  // Update the cart badge with the number of items in the cart
  const cartBadge = document.querySelector('.cart-badge');
  cartBadge.textContent = cartItemPrices.length;
}
