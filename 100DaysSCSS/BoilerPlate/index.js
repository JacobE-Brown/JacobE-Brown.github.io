// I am unfimillar with JavaScript, though I am learning,
// I had ChatGPT help me write this, overall I am happy with the result. Obviously I want to get to the point I could code this myself, but for now I prefer to not Bash my head into a wall fo rno reason.

document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.menu-icon');
    var line1 = document.querySelector('.line-1');
    var line2 = document.querySelector('.line-2');
    var line3 = document.querySelector('.line-3');
    var pupil = document.querySelector('.pupil');

    function switchAnimation() {
        line1.classList.toggle('no-animation');
        line1.classList.toggle('active');
        line2.classList.toggle('no-animation');
        line2.classList.toggle('active');
        line3.classList.toggle('no-animation');
        line3.classList.toggle('active');
        pupil.classList.toggle('visible'); // Toggle the visibility of the pupil
    }

    menuIcon.addEventListener('click', switchAnimation);
});

//Eye Animation

const eye = document.querySelector(".eye");
const pupil = eye.querySelector(".pupil");

// Function to update the position of the pupil
function updatePupilPosition(event) {
    // Get the position of the eye element relative to the viewport
    const eyeRect = eye.getBoundingClientRect();

    // Calculate the position of the mouse relative to the center of the eye element
    const mouseX = event.clientX - eyeRect.left;
    const mouseY = event.clientY - eyeRect.top;
    const centerX = eyeRect.width / 2;
    const centerY = eyeRect.height / 2;

    // Calculate the distance between the mouse position and the center of the eye
    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;
    const distance = Math.min(
        Math.sqrt(deltaX * deltaX + deltaY * deltaY),
        Math.min(centerX, centerY)
    );

    // Calculate the angle from the center of the eye to the mouse position
    let angle = Math.atan2(deltaY, deltaX);

    // Limit the distance to stay within the bounds of the eye's circle
    const maxDistance = Math.min(
        distance,
        centerX - pupil.offsetWidth / 2,
        centerY - pupil.offsetHeight / 2
    );
    const pupilX = centerX + maxDistance * Math.cos(angle);
    const pupilY = centerY + maxDistance * Math.sin(angle);

    // Update the position of the pupil
    pupil.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
}

// Add event listener to track mouse movement on the entire document
document.addEventListener("mousemove", updatePupilPosition);
