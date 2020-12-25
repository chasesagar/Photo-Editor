import React from 'react'

export default function Slider({ min, max, value, handleChange}) {
    return (
        <div className="slider-container">
            <input 
            type="range" 
            className="form-control-range" 
            min={min}
            max={max}
            value={value}
            onChange={handleChange} // callback function to give a call to function lying in parent component which gonna save changes to array.
            />
        </div>
    )
}
