
export function paintHeader() {

    const logoMPElement = document.getElementById("logoMP");

    // Create the logo element
    const logo = document.createElement("img");
    logo.src = "././././public/MP_logo.jpg";
    logo.alt = "Logo MP";
    logo.className = "logo";

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