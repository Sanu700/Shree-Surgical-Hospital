document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    let counter = 0;
    const size = images[0].clientWidth;

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

    // Loop back to the start or end when reaching the last or first image
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
});
