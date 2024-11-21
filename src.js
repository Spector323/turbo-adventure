function toggleMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    burgerMenu.classList.toggle('active');
}


let slide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.destination');
    const totalSlides = slides.length;

    slide += direction;
    if (slide < 0) {
        slide = totalSlides - 1;
    } else if (slide >= totalSlides) {
        slide = 0;
    }

    const offset = -100 * slide;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

    // Обновляем классы для активного слайда
    slides.forEach((slide, index) => {
        if (index === slide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}