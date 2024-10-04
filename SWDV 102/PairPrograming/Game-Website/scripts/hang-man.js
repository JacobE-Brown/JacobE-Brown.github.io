"use strict";

const wordinput = document.querySelector("#hangman-initial-word-input");
const letterinput = document.querySelector("#hangman-letter-guess");
const wronginput = document.querySelector('#missed-guesses');
const messagetag = document.querySelector('#message');
const missedguesses = document.querySelector('#number-of-misses')

let misses = 0;
let hits = 0;


function getword(word) {
    let chosenword = word.value.toUpperCase();
    return chosenword;
}

function guess(guess, chosenword) {
    if (chosenword.includes(guess.toUpperCase())) {
        revealletter(guess, chosenword);
        hits += 1;
    }
    else {
        wrongguess(guess);
        misses += 1;
        missedguesses.innerHTML = misses;
    }

}

function revealletter(guess, chosenword) {
    const ptags = document.querySelectorAll('p');
    for (let i = 0; i < chosenword.length; i++) {
        if (chosenword[i].toUpperCase() === guess.toUpperCase()) {
            ptags[i].classList.remove('hidden');
        }
    }
}

function wrongguess(guess) {
    if (wronginput.innerHTML.includes(guess.toUpperCase())) {
        return;
    } else {
        wronginput.innerHTML += guess.toUpperCase();
    }
}

function postwordHTML(word) {
    for (let i = 0; i < word.length; i++) {
        const p = document.createElement('p');
        p.textContent = word[i].toUpperCase();
        p.classList.add('hidden');
        document.getElementById("hangman-guesses-box").appendChild(p);
    }
}

function removeletters() {
    const ptags = document.querySelectorAll('#hangman-guesses-box p');
    for (let i = 0; i < ptags.length; i++) {
        ptags[i].remove();
    }

    wronginput.innerHTML = '';
}

function message(message) {
    messagetag.innerHTML = message;
}

function checkwin(misses, hits, word) {
    if (misses == 6) {
        message("Sorry you loose. :(")
    }

    if (hits == word.length) {
        message("You won! Congradulations!")
    }
}


function submitword() {
    removeletters();
    const word = getword(wordinput);
    postwordHTML(word);
}
// Submits the letter for the guess and checks if we win
function submitguess() {
    const word = getword(wordinput);
    const letter = getword(letterinput);

    guess(letter, word);

    checkwin(misses, hits, word);
}

function resetgame() {
    removeletters();
    postwordHTML("animal");

    const ptags = document.querySelectorAll('#hangman-guesses-box p');
    for (let i = 0; i < ptags.length; i++) {
        ptags[i].classList.remove('hidden');
    }

    message('');

    misses = 0;
    hits = 0;
    missedguesses.innerHTML = 0;
}