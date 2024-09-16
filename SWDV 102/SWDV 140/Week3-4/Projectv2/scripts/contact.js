"use strict";

let form = document.querySelector('#contact-form');
const submitButton = document.querySelector('#submit-button');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let subject = document.querySelector('#subject');
    let message = document.querySelector('#message');

    if (name.value.trim() === "") {
        alert("Please Enter A Name!");
    } else if (email.value.trim() === "") {
        alert("Please Enter An Email!");
    } else if (subject.value.trim() === "") {
        alert("Please Enter Subject!");
    } else if (message.value.trim() === "") {
        alert("Please Enter A Message!");
    } else {
        alert("This form has been successfully submitted!");
        name.value = "";
        email.value = "";
        subject.value = "";
        message.value = "";
    }
});