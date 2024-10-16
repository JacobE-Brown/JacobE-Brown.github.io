"use strict";
class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="header-title-and-cars wrapper">
                <div class="header-container">
                    <h1><a href="./index.html">Uncle Sam's Car Lot</a></h1>
                </div>
                <div class="car-container">
                    <img src="./images/CarSVGs/car-blue-svgrepo-com.svg" alt="Blue Car" />
                    <img src="./images/CarSVGs/car-red-svgrepo-com.svg" alt="Red Car" />
                    <img src="./images/CarSVGs/car-yellow-svgrepo-com.svg" alt="Yellow Car" />
                </div>
            </div>
            <nav class="wrapper">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="inventory.html">Inventory</a></li>
                    <li><a href="mediaGallery.html">Media Gallery</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </nav>
        `;
    }
}
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="footer-content wrapper">
                <h2>Uncle Sam's Car Lot</h2>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="inventory.html">Inventory</a></li>
                        <li><a href="media-gallery.html">Media Gallery</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </nav>
                <p>&copy; 2024 Uncle Sam's Car Lot. All rights reserved.</p>
            </div>
            
        `;
    }
}
customElements.define('custom-header', CustomHeader);
customElements.define('custom-footer', CustomFooter);
