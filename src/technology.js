import './assets/css/typography.css';
import './assets/css/navbar.css';
import './assets/css/technology.css';

//vehicle
import vehiclePortrait from './assets/images/technology/image-launch-vehicle-portrait.jpg';
import vehicleLandscape from './assets/images/technology/image-launch-vehicle-landscape.jpg';

//spaceport 

import spacePortPortrait from './assets/images/technology/image-spaceport-portrait.jpg';
import spacePortLandscape from './assets/images/technology/image-spaceport-landscape.jpg';

//capsule

import capsulePortrait from './assets/images/technology/image-space-capsule-portrait';
import capsuleLandscape from './assets/images/technology/image-spaceport-landscape';


const img = document.querySelector('[data-tech-img]');
const nav = document.querySelector('[data-tech-nav]');
const li = document.querySelectorAll('[data-tech-nav] li');
const text = document.querySelectorAll('.text');


img.src = vehiclePortrait;



nav.addEventListener('click',(e)=>{
    const target = e.target;
    if(!(target.tagName.toLowerCase() === 'li')) return;
    else{
        const selectedId = target.textContent;
        removeSelectedClass(li);
        addSelectedClass(target);
        removeVisibleClass(text);
        addVisibleClass(selectedId,text);
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
function removeVisibleClass(arr){
    arr.forEach(element => {
        element.classList.remove('visible');
    })
}
function addVisibleClass(selectedId,arr){
    arr.forEach(element =>{
        if(element.id === selectedId){
            element.classList.add('visible');
        }
    })
}