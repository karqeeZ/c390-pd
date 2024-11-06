document.addEventListener('DOMContentLoaded', function() {
    const carouselElement = document.getElementById('projectCarousel');
    const videoElement = document.getElementById('projectVideo');
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 7000 // 5-second interval for image slides
    });

    // Pause carousel when video slide is active
    carouselElement.addEventListener('slide.bs.carousel', function(event) {
        if (event.to === document.querySelectorAll('.carousel-item').length - 1) { // Last item, which is the video
            carousel.pause();
            if (videoElement) {
                videoElement.play();
            }
        }
    });

    // Resume carousel when video ends
    if (videoElement) {
        videoElement.addEventListener('ended', function() {
            carousel.next();
            carousel.cycle(); // Resume carousel cycling
        });
    }
});