let form = document.querySelector('#contact-form');
const submitButton = document.querySelector('#submit-button');

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // Added type assertions to the variable declaration
        let name = document.querySelector('#name') as HTMLInputElement | null;
        let email = document.querySelector('#email') as HTMLInputElement | null;
        let subject = document.querySelector('#subject') as HTMLInputElement | null;
        let message = document.querySelector('#message') as HTMLInputElement | null;

        // Added a check to see if the variables exist to make TS happy
        if (name && name.value.trim() === "") {
            alert("Please Enter A Name!");
        } else if (email && !isValidEmail(email.value)) {
            alert("Please Enter A Valid Email Address!");
        } else if (subject && subject.value.trim() === "") {
            alert("Please Enter Subject!");
        } else if (message && message.value.trim() === "") {
            alert("Please Enter A Message!");
        } else {
            // because I already checked to see if everything existed, 
            // I added the "non-null assertion operator" because for sure they exist. 
            alert("This form has been successfully submitted! \nThank you!");
            name!.value = "";
            email!.value = "";
            subject!.value = "";
            message!.value = "";
        }
    });
}

// Function to validate email format using regex
function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return emailRegex.test(email);
}