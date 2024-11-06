const follower = document.querySelector('.follower'); // Select the follower element

// Function to update the position of the follower element
function moveFollower(event) {
    const x = event.clientX; // Get the X position of the cursor
    const y = event.clientY; // Get the Y position of the cursor

    // Update the follower's position
    follower.style.left = `${x}px`;  // Set the left position
    follower.style.top = `${y}px`;   // Set the top position
}

// Attach the event listener to track mouse movements
document.addEventListener('mousemove', moveFollower);