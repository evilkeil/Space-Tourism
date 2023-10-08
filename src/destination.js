import './assets/css/typography.css';
import './assets/css/navbar.css';
import './assets/css/destination.css';

import moon from './assets/images/destination/image-moon.png';
import mars from './assets/images/destination/image-mars.png';
import titan from './assets/images/destination/image-titan.png';
import europa from './assets/images/destination/image-europa.png';

const img = document.querySelector('[data-destination-image]');
const descriptions = document.querySelectorAll('.description-main'); //grab all the descriptions
const nav = document.querySelector('[data-destination-nav]'); //grab the destination nav




img.src= moon;
