const navSlide = () => {
    const burger = document.querySelector('#burger');
    const nav = document.querySelector('.nav-links-container');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{

        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link,index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.8}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";


  
}

var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);


