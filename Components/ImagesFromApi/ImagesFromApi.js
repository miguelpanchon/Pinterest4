

//only search the images
const photoQuery = 'random';
const page = 1;
import { apiKey } from "./config.js";
const apiKeyParam = apiKey;
const appContainer = document.getElementById("app");

export async function searchImages(photoQuery, page, apiKeyParam) {

    try {
        //fetch photos
        const url = `https://api.unsplash.com/search/photos?&page=${page}&query=${photoQuery}&per_page=10&client_id=${apiKeyParam}`;
        const response = await fetch(url);
        const data = await response.json();
        const photos = data.results;
        console.log(photos);
        return photos;
    }

    catch (error) {
        console.error(error);
        alert('An error occurred while searching for photos.');
        searchImages(photoQuery, page, apiKeyParam);
    }
}

// paint the images 
export async function paintImages() {
    try {
        // Fetch photos
        const photos = await searchImages(photoQuery, page, apiKeyParam);

        // Clean previous content
        cleanImages();

        // Loop through each photo and create HTML elements
        photos.forEach(photo => {
            const img = document.createElement("img");
            img.src = photo.urls.regular;
            img.alt = photo.alt_description;
            appContainer.appendChild(img);
        });
    } catch (error) {
        console.error(error);
        alert('An error occurred while fetching and painting photos.');
    }
}


//clean images area
export function cleanImages() {
    appContainer.innerHTML = "";

}







// export async function fetchPhotos(page) {
//     try {






//         // Paint each photo and create a link to the picture
//         photos.forEach(photo => {
//             // Check if photo ID is already displayed
//             if (!displayedPhotoIds.has(photo.id)) {
//                 const img = document.createElement('img');
//                 const link = document.createElement('a');
//                 link.href = photo.links.html;
//                 link.target = "_blank";
//                 img.classList.add('card');
//                 img.src = photo.urls.small;
//                 img.alt = photo.description || 'An Unsplash photo';
//                 link.appendChild(img);
//                 photosContainer.appendChild(link);

//                 // Add photo ID to the set of displayed IDs
//                 displayedPhotoIds.add(photo.id);
//             }
//         });

//     } catch (error) {
//         console.error(error);
//         alert('An error occurred while searching for photos.');
//     }
// }

