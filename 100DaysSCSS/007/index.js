//Finding saerch icon and assigning it to variable searchIcon
const searchIcon = document.querySelector(".search-icon");

// Select all elements with the "search-header" class
const searchHeaders = document.querySelectorAll(".search-header");

const menuElements = document.querySelectorAll(".menu-active")

// Iterate over each element found and toggle if it is hidden or not
function toggleSearch() {
    for (let i = 0; i < searchHeaders.length; i++) {
        searchHeaders[i].classList.toggle("hidden");
    }
}

function toggleMenu() {

}
