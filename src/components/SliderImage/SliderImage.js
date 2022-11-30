import React from 'react'
import SliderItem from "./SliderItem";
import "./SliderImage.css"

const SliderImage=({slides})=>{

  return(
  <div className='containStyle'>
    <SliderItem slides={slides}/>
    </div>
    )
}
export default SliderImage;