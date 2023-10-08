import './assets/css/typography.css';
import './assets/css/navbar.css';
import './assets/css/crew.css';

import commander from './assets/images/crew/image-douglas-hurley.png';
import specialist from './assets/images/crew/image-mark-shuttleworth.png';
import pilot from './assets/images/crew/image-victor-glover.png';
import engineer from './assets/images/crew/image-anousheh-ansari.png';

const img = document.querySelector('[data-crew-img]');
const nav = document.querySelectorAll('.current-crew li');



img.src = commander;