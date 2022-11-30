import React from 'react';
import SliderRange from './components/RangeSlider/SliderRange'
import SliderImage from './components/SliderImage/SliderImage';
import Square from './components/Square/Square';


function App() {
const slides  =[
 {url: "https://images.unsplash.com/photo-1496972513318-25940dc2f5a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dS5zLnxlbnwwfHwwfHw%3D&w=1000&q=80"},
 {url: "https://images.unsplash.com/photo-1638486071992-536e48c8fa3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9vayUyMGJhY2t8ZW58MHx8MHx8&w=1000&q=80"},
 {url: "https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"},
  {url:"https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
]
    return (
      <div className='myApp'>
        
        {/* Task 1-> */}
        {/* <SliderRange  />  */}

         {/* Task 2-> */}
        <SliderImage slides={slides} />

         {/* Task 3> */}
        {/* <Square/> */}
      </div>
    ) 
}
export default App;
