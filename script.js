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
