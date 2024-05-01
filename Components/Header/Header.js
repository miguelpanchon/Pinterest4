import './Header.css';
import { paintLogo } from './LogoMP/LogoMP';
import { paintSearchImages } from './SearchImages/SearchImages';


export function paintHeader() {


    paintLogo("./public/Unsplash.jpg", "Logotipo de esta página web", 'logo');
    paintSearchImages();
    paintLogo("./public/MP_logo.jpg", "Resetea el valor de búsqueda", 'reset');




}


