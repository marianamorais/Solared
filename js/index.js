const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  if(scrollPos > 10){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})

window.addEventListener('click', () => {
  const positionState = window.fixed;
  
  $('.menu-btn').click(function(e) {
    e.preventDefault();
    var positionState = 'sticky'

    if (clicked == "false") {
    positionState = 'fixed';
    clicked = "true";
    } else {
    overflowState = 'sticky';
    clicked = "false";
    }
    $('html, body').css('position', positionState);
  });
});