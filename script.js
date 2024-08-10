const sideMenu = document.querySelector('#sideMenu');
const navbar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll',()=>{
    if(scrollY > 50){
        navbar.classList.add('bg-white','bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20')
        navLinks.classList.remove('bg-white', 'shadow-sm','bg-opacity-50', 'dark:border', 'dark:border-white/50',"dark:bg-transparent");
    }else{
        navbar.classList.remove('bg-white','bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20')
        navLinks.classList.add('bg-white', 'shadow-sm','bg-opacity-50', 'dark:border', 'dark:border-white/50',"dark:bg-transparent");
    }
})
//--light mode and dark mode-------

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function toggleTheme(){
    document.documentElement.classList.toggle('dark')
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light';
    }
  }

window.onload = function() {
  const popup = document.getElementById('popup');
  const closeButton = document.querySelector('.close');

  function showPopup() {
    popup.style.display = 'flex';
  }

  setTimeout(showPopup, 2000);

  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });
};





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
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
   var slides = document.getElementsByClassName("mySlides");
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) { slideIndex = 1 }
   slides[slideIndex - 1].style.display = "block";
   setTimeout(showSlides, 4000); // Change image every 2 seconds
}
  