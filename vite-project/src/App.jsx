import { useState } from 'react'
import { LoadScript } from '@react-google-maps/api';
import Map from './components/Map/Map';
import RadiusControl from './components/RadiusControl/RadiusControl';
import { defaultCenter } from './components/Map/mapStyles';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [radius, setRadius] = useState(5);
  const [center, setCenter] = useState(defaultCenter);

  const handleRadiusChange = (e) => {
    const value = e.target.value;
    if (value === '' || parseFloat(value) > 0) {
      setRadius(value);
    }
  };

  return (
    <>
      <h1>React + Google Maps</h1>
      <div className="card">
        <div className="search-controls">
          <div className="address-input">
            <LoadScript 
              googleMapsApiKey="AIzaSyCExTp8r8aszeyxMO7JMbonn1JZdFJGK4s"
              libraries={["places"]}
            >
              <RadiusControl 
                radius={radius} 
                onRadiusChange={handleRadiusChange}
              />
              <Map center={center} radius={radius} />
            </LoadScript>
          </div>
        </div>
        
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App 
