import './LogoMP.css';

export function paintLogo(imageSrc, altText, className) {
    const logoMPElement = document.getElementById("SearchImages");

    // Create the logo element
    const logo = document.createElement("img");
    logo.src = imageSrc; // Set the src attribute to the provided image source
    logo.alt = altText; // Set the alt attribute to the provided alt text
    logo.className = className; // Set the class name to the provided class name

    // Append the logo to the logoMP element
    logoMPElement.appendChild(logo);

    // Add an onclick event to the logo
    logo.onclick = function () {
        logoMP();
    };

    // Define the logoMP function
    function logoMP() {
        console.log("Logo was clicked");
        //xx delete box content ()
        //xx fetch/paint images ()
    }
}
