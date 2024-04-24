export function SearchImage() {
    console.log("SearchImage function triggered");
    // Add your code here to perform the search
}

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

// Add an event listener to the input
input.addEventListener("input", () => {
    if (input.value !== "") {
        input.placeholder = "";
    } else {
        input.placeholder = placeholderText;
    }
});

// Add an event listener to the button
button.addEventListener("click", () => {
    const searchTerm = document.getElementById("search-input").value;
    console.log(`Searching for images with term: ${searchTerm}`);
});

// Append the input and button to the SearchImages element
searchImages.appendChild(input);
searchImages.appendChild(button);