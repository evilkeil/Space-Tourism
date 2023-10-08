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
const destinations = document.querySelectorAll('[data-destination-ul] li')

img.src = moon;

nav.addEventListener('click',(e)=>{
    const target = e.target;
    if(!(target.tagName.toLowerCase() === 'li')) return;
    else{
        const selected = target.textContent;
        removeActiveClass(destinations);
        addActiveClass(target);
        removeVisibilityClass(descriptions);
        addVisibilityClass(selected,descriptions);
        addImage(selected);
    }
})


function removeVisibilityClass(array){
    array.forEach(element => {
        element.classList.remove('visible');
    });
}

function addVisibilityClass(id,array){
    array.forEach(element=>{
        if(element.id === id){
            element.classList.add('visible')
        }
    });
}

function addImage(id){
    const temp = id.toLowerCase();
    if(temp === "moon"){
        img.src = moon;
    }else if(temp === "mars"){
        img.src = mars;
    }else if(temp === "titan"){
        img.src = titan;
    }else if(temp === "europa"){
        img.src = europa;
    }
   
}

function removeActiveClass(array){
    array.forEach(element=>{
        element.classList.remove('active');
    })
}

function addActiveClass(target){
    target.classList.add('active');
}