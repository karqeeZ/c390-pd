window.addEventListener('scroll', function() {
    const header = document.querySelector('.intro h1');
    const scrollY = window.scrollY; // Get the current scroll position
    const rotation = scrollY * 0.8; // Adjust the multiplier for spin speed
    header.style.transform = `rotateX(20deg) rotateY(20deg) rotateZ(${rotation}deg)`; // Apply the rotation along the Z-axis
});
