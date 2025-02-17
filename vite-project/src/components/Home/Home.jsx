import { useState } from 'react';
import Map from '../Map/Map';
import SearchBox from '../SearchBox/SearchBox';
import AQIColorKey from '../AQIColorKey/AQIColorKey';

const Home = ({ center, handlePlaceSelect }) => {
  const [showAirQuality, setShowAirQuality] = useState(false);
  const [zoom, setZoom] = useState(12);

  const handlePlaceSelectWithZoom = (location) => {
    handlePlaceSelect(location);
    setZoom(15); // Zoom in when a new location is selected
  };

  return (
    <div className="app-content">
      <h1>Air Quality Map</h1>
      <div className="card">
        <div className="map-layout">
          <div className="map-sidebar">
            <div className="controls-container">
              <SearchBox onPlaceSelect={handlePlaceSelectWithZoom} />
              <button
                onClick={() => setShowAirQuality(!showAirQuality)}
                className="control-button"
              >
                {showAirQuality ? 'Hide Air Quality' : 'Show Air Quality'}
              </button>
            </div>
          </div>
          <div className="map-wrapper">
            <Map center={center} showAirQuality={showAirQuality} zoom={zoom} />
          </div>
        </div>
        <AQIColorKey />
      </div>
    </div>
  );
};

export default Home; 