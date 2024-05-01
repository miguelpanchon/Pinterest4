import './Header.css';
import { paintLogo } from './LogoMP/LogoMP';
import { paintSearchImages } from './SearchImages/SearchImages';


// Define different click handlers for each instance
export function logoClickHandler1() {
    console.log("Logo 1 was clicked");
    // Additional logic specific to logo 1 click handler
}

export function logoClickHandler2() {
    console.log("Logo 2 was clicked");
    // Additional logic specific to logo 2 click handler
}



export function paintHeader() {
    paintLogo("./Unsplash.jpg", "Logotipo de esta página web", 'logo', logoClickHandler1);
    paintSearchImages();
    paintLogo("./MP_logo.jpg", "Resetea el valor de búsqueda", 'reset', logoClickHandler2);
}



