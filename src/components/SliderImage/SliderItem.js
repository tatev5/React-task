import { useState } from "react";

const SliderItem=({slides})=>{
  const [currentIndex,setCurrentIndex]=useState(0)

 
const slideStyles={
    backgroundImage:`url(${slides[currentIndex].url})`
}
const  prev=()=>{
    const isFirstSlide = currentIndex===0;
    const newIndex=isFirstSlide ? slides.length-1:currentIndex-1;
    setCurrentIndex(newIndex)
}
const  next=()=>{
    const isLastSlide = currentIndex===slides.length-1;
    const newIndex=isLastSlide ? 0:currentIndex+1;
    setCurrentIndex(newIndex)
}
const nextSlide=(slideIndex)=>{
    setCurrentIndex(slideIndex)
}
  return(
  <div className="sliderStyles">
    <div className="PrevStyle" onClick={prev}>&#8249;</div>
    <div className="NextStyle" onClick={next}>&#8250; </div>
    <div style={slideStyles} className="slideStyles"> </div>
    <div className="dotsContainer">
        {slides.map((slide,slideIndex)=>(
        <div key={slideIndex} className='dotStyle' onClick={()=>nextSlide(slideIndex)}></div>
        ))}
    </div>
</div>
    )
}
export default SliderItem;