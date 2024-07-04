const slides = document.querySelectorAll('.slides img');

let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  slides[currentSlide].style.transform = 'translateX(-100%)';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.transform = 'translateX(0)';
  slides[currentSlide].addEventListener('transitionend', () => {
    if (currentSlide === 0) {
      slides[slides.length - 1].style.transform = 'translateX(100%)';
    }
  });
}








let productsContainer = document.getElementById('productsContainer');


fetch('fetch_products.php')
    .then(response => response.json())
    .then(products => {
        
        productsContainer.innerHTML = '';

        
        products.forEach(product => {
            let productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}">
                <div class="details">
                    <h3>${product.name}</h3>
                    <p>Price: ${product.price} ksh</p>
                </div>
            `;
            productsContainer.appendChild(productElement);
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });




    var countDownDate = new Date().getTime() + (10 * 24 * 60 * 60 * 1000);


var x = setInterval(function() {
    
    var now = new Date().getTime();
    
    
    var distance = countDownDate - now;
    
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-clock").innerHTML = "EXPIRED";
    }
}, 1000);




function toggleLike(element) {
  
  element.classList.toggle('liked');
}

 
function toggleWishlist(element) {
 
  element.classList.toggle('added');
}



function toggleAnswer(id) {
  var answer = document.getElementById("answer" + id);
  if (answer.style.display === "none") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}







