import './assets/css/typography.css';
import './assets/css/navbar.css';
import './assets/css/crew.css';

import commander from './assets/images/crew/image-douglas-hurley.png';
import specialist from './assets/images/crew/image-mark-shuttleworth.png';
import pilot from './assets/images/crew/image-victor-glover.png';
import engineer from './assets/images/crew/image-anousheh-ansari.png';

const img = document.querySelector('[data-crew-img]');
const nav = document.querySelectorAll('.current-crew li');
const ul = document.querySelector('.current-crew');
const descriptions = document.querySelectorAll('.crew-description');

img.src = commander;

ul.addEventListener('click',(e)=>{
    const target= e.target;
    if(!(target.tagName.toLowerCase() === 'li')) return;
    else{
        const selectedId = target.dataset.selected ;
        removeVisibleClass(descriptions);
        addVisibleClass(selectedId,descriptions)
        removeSelectedClass(nav);
        addSelectedClass(nav,selectedId);
        // console.log(selectedId)
    }
});

function removeVisibleClass(arr){
    arr.forEach(element => {
        element.classList.remove('visible')
    });
}

function addVisibleClass(selected,arr){
    arr.forEach(element=>{
        if(element.id === selected){
            element.classList.add('visible');
        }
    })
}

function removeSelectedClass(arr){
    arr.forEach(element=>{
        element.classList.remove('selected');
    })
}
function addSelectedClass(arr,selected){
    arr.forEach(element=>{
        if(element.dataset.selected === selected){
            element.classList.add('selected');
        }
    })
}