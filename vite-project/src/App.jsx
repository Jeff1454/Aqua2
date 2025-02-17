import { useState, useEffect } from 'react'
import { defaultCenter } from './components/Map/mapStyles';
import Toolbar from './components/Toolbar/Toolbar';
import Home from './components/Home/Home';
import AirQualityInfo from './components/AirQualityInfo/AirQualityInfo';
import { LoadScript } from '@react-google-maps/api';
import './App.css'

// Define libraries array outside component
const libraries = ["places"];

function App() {
  const [center, setCenter] = useState(defaultCenter);

  const handlePlaceSelect = (location) => {
    setCenter(location);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--x', `${x}%`);
      document.documentElement.style.setProperty('--y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Determine which page to show based on current path
  const path = window.location.pathname;

  return (
    <LoadScript 
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <Toolbar />
      {path === '/' ? (
        <Home 
          center={center}
          handlePlaceSelect={handlePlaceSelect}
        />
      ) : path === '/info' ? (
        <AirQualityInfo />
      ) : (
        <Home 
          center={center}
          handlePlaceSelect={handlePlaceSelect}
        />
      )}
    </LoadScript>
  );
}

export default App; 
