import { useState } from "react";
import './App.css';
import { Container } from "react-bootstrap";
import Slider from "./Slider"
import SidebarItem from "./SidebarItem"

// constant values these gonna help us in manupluating css and for showing names as well
const DEFAULT_VALUE = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range:{
      min: 0,
      max: 200,
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range:{
      min: 0,
      max: 200,
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range:{
      min: 0,
      max: 200,
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range:{
      min: 0,
      max: 100,
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range:{
      min: 0,
      max: 100,
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range:{
      min: 0,
      max: 360,
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range:{
      min: 0,
      max: 20,
    },
    unit: 'px'
  },
]

// main parent function
function App() {
  // state and constants
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [options, setOptions] = useState(DEFAULT_VALUE)
  const selectedOption = options[selectedOptionIndex]

  // function to handle sliders values change i.e min max value 
  function handleSliderChange({ target }) {
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => { // index gives location of that element in array in short id
        if (index !== selectedOptionIndex) return option // if no changes to a property it gonna return default
        return {...option, value: target.value} // ...option returning values that doesn`t changed and  value: target.value returning changed values
      })
    })
  }

  // function to add changed property which present in array DEFAULT_VALUE to actual css using style properties.
  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})` // need more understanding for this step 
    })
    return { filter: filters.join(' ')} // properties need spacing to work so adding spacing to properties
  }

  return (
    <Container className="align-items-center justify-content-center">
      <div className="row">
        <h2 className="mt-3 ml-3">Photo Editor</h2>
      </div>
      
      <div className="row">
        <div className="col-md-10 main-image-bg">
          <div className="main-image" style={getImageStyle()} /> {/*  implementing function call */}
          
        </div>
        <div className="col-md-2">
          {options.map((option, index) => {
            return ( 
              <SidebarItem 
                key={index}
                name={option.name} // sending data as props but using state function
                active={index === selectedOptionIndex} // only gonna set active when index matches selectedOptionIndex till that index going yo try every value like a for loop thanks to map function.
                handleClick={() => setSelectedOptionIndex(index)} // changing state selectedOptionIndex to selected value
              />
            ) 
          })}
        </div>
      </div>
      <div className="row align-items-center mt-1"> 
        <div className="col-md-10 ">
          <Slider
            min={selectedOption.range.min}
            max={selectedOption.range.max}
            value={selectedOption.value}
            handleChange={handleSliderChange} // callback function for hanndling slider changes 
          />
        </div>
      </div>
      
    </Container>
  );
}

export default App;
