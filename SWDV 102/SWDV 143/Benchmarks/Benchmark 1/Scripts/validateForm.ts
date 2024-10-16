// This TypeScript was given to me by ChatGPT to validate the Form elements. used 10-15-24

function validateForm(): boolean {
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;

    if (!emailElement || !nameElement) {
        alert('Form elements not found.');
        return false;
    }

    const email = emailElement.value;
    const name = nameElement.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    const nameRegex = /^[a-zA-Z ]+$/; // Only letters and spaces for the name

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!nameRegex.test(name)) {
        alert('Please enter a valid name (letters and spaces only).');
        return false;
    }

    return true; // Form is valid
}

