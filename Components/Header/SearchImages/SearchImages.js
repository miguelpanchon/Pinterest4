import './SearchImages.css'

export function paintSearchImages() {


    // Get the SearchImages element
    const searchImages = document.getElementById("SearchImages");

    // Create a variable for the placeholder text
    const placeholderText = "Search images...";

    // Create an input element
    const input = document.createElement("input");
    input.type = "text";
    input.id = "search-input";
    input.placeholder = placeholderText;

    // Event listener for the input box
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const searchTerm = input.value;
            //xx quitar
            console.log("Search term:", searchTerm);
            if (searchTerm.length > 0) {
                console.log("Search term not null:", searchTerm);
            }

        }
    });

    // Create a button element
    const button = document.createElement("button");
    button.textContent = "Search";
    button.id = "search-button";

    // Event listener for the search buttón
    button.addEventListener("click", () => {
        // Function to handle button click event
        // You can put your search logic here
        console.log("Search button clicked");
    });


    // Append the input and button to the SearchImages element
    searchImages.appendChild(input);
    searchImages.appendChild(button);
}