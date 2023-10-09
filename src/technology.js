import './assets/css/typography.css';
import './assets/css/navbar.css';
import './assets/css/technology.css';

import vehiclePortrait from './assets/images/technology/image-launch-vehicle-portrait.jpg';


const img = document.querySelector('[data-tech-img]');
const nav = document.querySelector('[data-tech-nav]');
const li = document.querySelectorAll('[data-tech-nav] li');
const text = document.querySelectorAll('.text');


img.src = vehiclePortrait;



nav.addEventListener('click',(e)=>{
    const target = e.target;
    if(!(target.tagName.toLowerCase() === 'li')) return;
    else{
        removeSelectedClass(li);
        addSelectedClass(target)
    }
    
});

function removeSelectedClass(array){
    array.forEach(element => {
        element.classList.remove('selected');
    });
}

function addSelectedClass(element){
    element.classList.add('selected');
}