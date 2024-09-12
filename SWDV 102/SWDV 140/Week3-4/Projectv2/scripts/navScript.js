// 9-1-24
// Jacob Brown

// This script is meant to show and hide the menu when the menu icon element
// is pressed when the screen size is under 426px.
// The menu is always present but invisible.
// When the screen is larger than 426px, 
// the menu disapears and the naviagation menu changes to be a horizontal
// always visible element.

document.getElementById('menu-button').onclick = showHideNavigation;

function showHideNavigation() {
    // alert("button was pressed")

    // Creating a variable to hold the navigation object by means of its id
    let navigationMenu = document.getElementById("primary-header__navigation");
    // Getting the current status of the opacity levels
    let menuOpenVariable = window.getComputedStyle(navigationMenu).opacity;

    // If the opacity of the menu is 0, then the opacity is change to one. Else it is reversed.
    // This is 
    if (menuOpenVariable == "0") {
        navigationMenu.style.opacity = "1";
    } else {
        navigationMenu.style.opacity = "0";
    }
}
