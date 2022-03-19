import React, {useState} from 'react'

function App() {
  const [temperatureValue, setTemperatureValue] = useState(() => -12)
  const [temperatureColor, setTemperatureColor] = useState(() => "cold")
  
  const incrementTemp = () =>{
    const newTemperature = temperatureValue + 1

    if(newTemperature >= 15){
      setTemperatureColor("hot")
    }
    
    if(temperatureValue === 36){
      return null;
    }

    setTemperatureValue(newTemperature)
  }

  const decrementTemp = () =>{
    const newTemperature = temperatureValue + 1
    
    if(newTemperature < 15){
      setTemperatureColor("cold")
    }
    
    if(temperatureValue === -15) return;

    setTemperatureValue(temperatureValue - 1)
  }
  
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}ºC
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => incrementTemp()}>+</button>
        <button onClick={() => decrementTemp()}>-</button>
      </div>

    </div>
  );
}

export default App;
