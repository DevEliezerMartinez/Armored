import React, { useState } from 'react';
import steeringWheel from "../assets/steering-wheel-car-svgrepo-com.svg";
import '../styles/index.css'


const NumericSlider = () => {
  const [value, setValue] = useState(360);

  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
  };

  const getRotationStyle = () => {
    return {
      transform: `rotate(${value}deg)`,
    };
  };

  return (
    <div className='wheel_container'>
      <input
        type="range"
        min="0"
        max="720"
        value={value}
        onChange={handleSliderChange}
      />
     
        <img
          src={steeringWheel}  // Reemplaza con la URL de tu imagen
          alt="Rotating Image"
          className='logo'
          style={getRotationStyle()}


        />

        <p>Valores: {value-360}</p>
     
    </div>
  );
};

export default NumericSlider;
