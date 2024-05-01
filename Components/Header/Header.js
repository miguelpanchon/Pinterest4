import './Header.css';
import { paintLogo } from './LogoMP/LogoMP';
import { paintSearchImages } from './SearchImages/SearchImages';


export function paintHeader() {


    paintLogo("./Unsplash.jpg", "Logotipo de esta página web", 'logo');
    paintSearchImages();
    paintLogo("./MP_logo.jpg", "Resetea el valor de búsqueda", 'reset');




}


