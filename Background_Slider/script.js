const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

// Initial setup when the page loads
setBgToBody();
setActiveSlide();

rightBtn.addEventListener('click', () => {
    activeSlide++;
    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }
    setActiveSlide();
    setBgToBody(); // Call setBgToBody here to update background after slide change
});

leftBtn.addEventListener('click', () => {
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
    setActiveSlide();
    setBgToBody(); // Call setBgToBody here to update background after slide change
});

function setBgToBody() {
    // Corrected typo: 'bosy' to 'body'
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active');
    // setBgToBody(); // Removed this call as it's now explicitly called in the event listeners
}