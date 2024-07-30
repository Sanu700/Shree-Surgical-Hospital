document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    let counter = 1;
    const size = images[0].clientWidth;

    carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';

    nextBtn.addEventListener('click', () => {
        if (counter >= images.length - 1) return;
        carouselImages.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        carouselImages.style.transition = 'transform 0.4s ease-in-out';
        counter--;
        carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    carouselImages.addEventListener('transitionend', () => {
        if (images[counter].id === 'lastClone') {
            carouselImages.style.transition = 'none';
            counter = images.length - 2;
            carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if (images[counter].id === 'firstClone') {
            carouselImages.style.transition = 'none';
            counter = images.length - counter;
            carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });

    window.addEventListener('resize', () => {
        const newSize = images[0].clientWidth;
        carouselImages.style.transition = 'none';
        carouselImages.style.transform = 'translateX(' + (-newSize * counter) + 'px)';
    });
});
