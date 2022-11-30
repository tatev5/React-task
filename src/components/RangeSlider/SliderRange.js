import React, { useState } from 'react';
import { Slider } from 'antd';
import 'antd/dist/reset.css';

const start = 18;

function SliderRange() {
  
  const niceBytes = (bytesValue) => {
    const units = ['KB', 'MB', 'GB', 'TB'];

    let l = 0, num = 2 ** parseInt(bytesValue,10);

    while (num >= 1024 && ++l) {
      num = num / 1024;
    }
    return (num + ' ' + units[l]);
  }

  const [val, setVal] = useState(niceBytes(start));

  const formatter = (value) => niceBytes(value);

  const changeByte = (event) => {

    setVal(niceBytes(event));
    
  };

  return (
    <div className='container'>
      <Slider className='inputRange'
        tooltip={{ formatter }}
        min={6}
        max={30}
        step={1}
        defaultValue={start}
        onChange={changeByte}
      />
      <p>Storage: {val}</p>
    </div>
  )
}
export default SliderRange;