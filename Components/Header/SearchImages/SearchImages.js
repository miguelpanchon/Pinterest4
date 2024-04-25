import './SearchImages.css'

export function paintSearchImages() {

    //quitar luego xx
    console.log("entra en paintSearchImages() ")

    // Get the SearchImages element
    const searchImages = document.getElementById("SearchImages");

    // Create a variable for the placeholder text
    const placeholderText = "Search images...";

    // Create an input element
    const input = document.createElement("input");
    input.type = "text";
    input.id = "search-input";
    input.placeholder = placeholderText;

    // Create a button element
    const button = document.createElement("button");
    button.textContent = "Search";
    button.id = "search-button";


    // Append the input and button to the SearchImages element
    searchImages.appendChild(input);
    searchImages.appendChild(button);
}