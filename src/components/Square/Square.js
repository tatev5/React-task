import React from 'react';
import './square.css'

let start=0;
let elems = document.getElementsByClassName("squareDiv");
let keysPressed = {};

const Square=()=>{
    
    const handleKeyDown = (event) => {
        keysPressed[event.key] = true;
 
        if(event.key==='ArrowRight'){
          start+=2
            elems[0].style.left=start+'px'
        }
        else if(event.key==='ArrowLeft'){
            start-=2
              elems[0].style.left=start+'px'
          }
       else if(event.key==='ArrowDown'){
            start+=2
            elems[0].style.top=start+'px'
         }
        else if(event.key==='ArrowUp'){
            start-=2
         elems[0].style.top=start+'px'
         } 
    
          if (keysPressed['ArrowRight'] && event.key === 'ArrowUp') {
            start+=2
            elems[0].style.left=start+'px';
            elems[0].style.top=start+'px'
         }
          
      };

    return(
        <div>
            <div className='squareDiv' tabIndex={0} onKeyDown={handleKeyDown}></div>
        </div>
    )
}
export default Square