"use strict";

let imgSmall = document.getElementsByTagName('img')[0];
let imgSmallW = imgSmall.getBoundingClientRect().width;
let imgSmallH = imgSmall.getBoundingClientRect().height;

let body = document.body;
let zoom;

imgSmall.addEventListener('mouseover', ()=>{
    zoom = document.createElement('div');    
    zoom.className='zoom';
    zoom.style.backgroundImage=`url(${imgSmall.dataset.big})`;
    body.append(zoom);			
})

imgSmall.addEventListener('mouseout', ()=>{
    body.removeChild(zoom);			
})

imgSmall.addEventListener('mousemove', ()=>{
    let x = (event.offsetX*100)/imgSmallW;
    let y = (event.offsetY*100)/imgSmallH;
    zoom.style.backgroundPosition=`${x}% ${y}%`;		
})
