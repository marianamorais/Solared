const sections = document.querySelector('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    "linear-gradient(to right top, #F2994A, #F2C94C)",
    "linear-gradient(to right top, #6190E8, #A7BFE8)",
    "linear-gradient(to right top, #4e54c8, #8f94fb)"
];

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
  entries.forEach(entry => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute('data-index');
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
        height: coords.height,
        width: coords.width,
        top: coords.top,
        left: coords.left
    };
    if(entry.isIntersection){
        bubble.style.setProperty('left', `${directions.left}px`);
        bubble.style.setProperty('top', `${directions.top}px`);
        bubble.style.setProperty('width', `${directions.width}px`);
        bubble.style.setProperty('height', `${directions.height}px`);
        bubble.style.background = gradients[gradientIndex];
    }
  });
}

sections.forEach(section => {
    observer.observe(section);
  });  