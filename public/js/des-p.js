const carousel = document.getElementById('projectCarousel');
const itemDescription = document.getElementById('itemDescription');

// Set initial description based on the first carousel item
itemDescription.innerHTML = carousel.querySelector('.carousel-item.active').getAttribute('data-description');

carousel.addEventListener('slide.bs.carousel', function (event) {
  const activeIndex = event.relatedTarget.getAttribute('data-index');
  const description = event.relatedTarget.getAttribute('data-description');
  itemDescription.innerHTML = description; // Update description based on active index
});