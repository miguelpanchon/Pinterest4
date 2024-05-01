import './ImagesFromApi.css';

//only search the images
const photoQuery = 'random';
const page = 1;
import { apiKey } from "./config.js";
const apiKeyParam = apiKey;
const appContainer = document.getElementById("app");

export async function searchImages(photoQuery, page, apiKeyParam) {
    //fetch photos
    const url = `https://api.unsplash.com/search/photos?&page=${page}&query=${photoQuery}&per_page=10&client_id=${apiKeyParam}`;
    const response = await fetch(url);
    const data = await response.json();
    const photos = data.results;
    console.log(photos);
    return photos;
}

// paint the images 
export async function paintImages() {
    try {
        // Fetch photos
        const photos = await searchImages(photoQuery, page, apiKeyParam);

        // Clean previous content
        appContainer.innerHTML = "";

        //  container element for the photos (for scalability purposes)
        const photoContainer = document.createElement("div");
        photoContainer.classList.add("photo-container");

        // Append the photo container to the app container
        appContainer.appendChild(photoContainer);

        // Loop through each photo and create HTML elements
        photos.forEach(photo => {
            // Create an anchor element
            const link = document.createElement("a");
            link.href = photo.links.html; // Set the URL of the webpage associated with the image
            link.target = "_blank"; // Open the link in a new tab

            // Create an image element
            const img = document.createElement("img");
            img.src = photo.urls.regular;
            img.alt = photo.alt_description;
            img.classList.add("photo"); // Add the 'photo' class

            // Append the image element to the anchor element
            link.appendChild(img);

            // Append the anchor element to the photo container
            photoContainer.appendChild(link);
        });

    } catch (error) {
        console.error(error);
        alert('An error occurred while fetching and painting photos.');
    }
}
