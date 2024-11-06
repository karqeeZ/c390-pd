const carouselElement = document.getElementById('projectCarousel');

carouselElement.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent the default scroll behavior
    if (event.deltaY > 0) {
        // Scroll to the next item
        carouselElement.carousel('next');
    } else {
        // Scroll to the previous item
        carouselElement.carousel('prev');
    }
});