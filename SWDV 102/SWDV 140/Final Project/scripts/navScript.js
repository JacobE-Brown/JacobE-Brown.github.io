"use strict";
// 9-1-24
// Jacob Brown
// This script is meant to show and hide the menu when the menu icon element
// is pressed when the screen size is under 426px.
// The menu is always present but invisible.
// When the screen is larger than 426px, 
// the menu disapears and the naviagation menu changes to be a horizontal
// always visible element.
// 9-28-24 
// Jacob Brown
// Attempting TypeSCript Conversion.
// TS was giving me an error saying that menuButton may be null, so I needed to add some conditional logic. 
// I learned later that an '!' which is the "non-null assertion operator" may have worked as well.
// But I figured I will leave this as is to show I know how to make it work.
const menuButton = document.getElementById('menu-button');
if (menuButton) {
    menuButton.onclick = showHideNavigation;
}
else {
    console.error('Menu button not found');
}
function showHideNavigation() {
    let navigationMenu = document.getElementById("primary-header__navigation");
    if (navigationMenu) {
        // Toggle the 'hidden' class
        navigationMenu.classList.toggle('hidden');
    }
    else {
        console.error('Navigation menu not found');
    }
}
// Making it possible to have the active page be colored.
// Get the current page URL
const currentLocation = window.location.pathname;
// Select all the navigation links
const navLinks = document.querySelectorAll('nav a');
// Loop through the links
navLinks.forEach((link) => {
    // Check if the link's href matches the current location
    if (link.href === window.location.href) {
        link.classList.add('active'); // Add 'active' class to the current page link
    }
});
