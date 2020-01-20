const navSlide = () => {
 const burger = document.querySelector(".burger");
 const nav = document.querySelector(".nav-links");
 const navLinks = document.querySelectorAll(".nav-links li");

 burger.addEventListener("click", () => {
  //Toggle Nav
  nav.classList.toggle("nav-active");

  //Animate Links
  navLinks.forEach((link, index) => {
   if (link.style.animation) {
    link.style.animation = "";
   } else {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index/7}s`;
   }
  });
 });
};

navSlide();

var animateButton = function(e) {

 e.preventDefault;
 //reset animation
 e.target.classList.remove('animate');
 
 e.target.classList.add('animate');
 setTimeout(function(){
   e.target.classList.remove('animate');
 },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
 bubblyButtons[i].addEventListener('click', animateButton, false);
}