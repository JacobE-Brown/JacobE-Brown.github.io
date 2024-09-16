"use strict";

document.getElementById('contactForm').addEventListener('submit', function (event) {
    // Prevent form from submitting
    event.preventDefault();

    // Clear previous error messages
    let errors = document.querySelectorAll('.error-message');
    errors.forEach(error => error.textContent = '');

    // Form validation
    let valid = true;

    // Check each required field
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let subject = document.getElementById('subject').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        valid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        valid = false;
    }

    if (subject === '') {
        document.getElementById('subjectError').textContent = 'Subject is required.';
        valid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required.';
        valid = false;
    }

    // If all fields are valid, submit the form
    if (valid) {
        document.getElementById('contactForm').submit();
    }
});

// Function to validate email format
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}