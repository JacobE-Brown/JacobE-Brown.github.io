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
const menuButton = document.getElementById('menu-button') as HTMLInputElement | null;

if (menuButton) {
    menuButton.onclick = showHideNavigation;
} else {
    console.error('Menu button not found');
}


function showHideNavigation() {
    // alert("button was pressed")

    // Creating a variable to hold the navigation object by means of its id
    let navigationMenu = document.getElementById("primary-header__navigation");
    // Getting the current status of the opacity levels
    let menuOpenVariable = window.getComputedStyle(navigationMenu!).opacity;

    // If the opacity of the menu is 0, then the opacity is change to one. Else it is reversed.
    // Apparently adding an '!' to navigationMenu tells TS that this variable will never be null. 
    // I don't know if it is best practice but it works.
    if (menuOpenVariable == "0") {
        navigationMenu!.style.opacity = "1";
        navigationMenu!.style.zIndex = "5";
    } else {
        navigationMenu!.style.opacity = "0";
        navigationMenu!.style.zIndex = "-5";
    }
}


// Making it possible to have the active page be colored.

// Get the current page URL
const currentLocation: string = window.location.pathname;

// Select all the navigation links
const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('nav a');

// Loop through the links
navLinks.forEach((link: HTMLAnchorElement) => {
    // Check if the link's href matches the current location
    if (link.href === window.location.href) {
        link.classList.add('active'); // Add 'active' class to the current page link
    }
});
