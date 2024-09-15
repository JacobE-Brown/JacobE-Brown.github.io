"use strict";

// Get all the <li> items in the carousel-selector-images
const carouselItems = document.querySelectorAll('.carousel-selector-images li');
const flavorCardItems = document.querySelectorAll('.flavor-card');
const images = document.querySelectorAll('img');

// Add click event listeners to carousel items
for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].addEventListener('click', function () {
        console.log('Clicked item:', this.getAttribute('data-flavor'));

        turnFlavorInvisible(carouselItems);
        turnFlavorColorVisible(this);
        toggleFlavorCard(this);
    });
}

// Preload all images
function preloadImages() {
    for (let i = 0; i < images.length; i++) {
        const img = new Image();
        img.src = images[i].src;
    }
}

document.addEventListener("DOMContentLoaded", preloadImages);

// Turn off all the indicators that the flavor is selected
function turnFlavorInvisible(items) {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('visible');
        items[i].style.color = '#000000';
    }
}

// Turn on the color elements on the clicked item
function turnFlavorColorVisible(item) {
    item.classList.add('visible');
    console.log('Clicked item flavor:', item.getAttribute('data-flavor'));
    // Optionally, set item.style.color based on flavor
}

// Toggle which card is visible upon a click
function toggleFlavorCard(selectedItem) {
    for (let i = 0; i < flavorCardItems.length; i++) {
        if (selectedItem.getAttribute('data-flavor') === flavorCardItems[i].getAttribute('data-flavor')) {
            flavorCardItems[i].classList.remove('hidden');
            flavorCardItems[i].classList.add('visible');
        } else {
            flavorCardItems[i].classList.remove('visible');
            flavorCardItems[i].classList.add('hidden');
        }
    }
}
