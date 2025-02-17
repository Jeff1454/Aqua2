import React from 'react';
import './AQIColorKey.css';

const AQIColorKey = () => {
  return (
    <div className="aqi-color-key">
      <h3>Air Quality Index (AQI)</h3>
      <div className="color-key-grid">
        <div className="key-item">
          <div className="key-color" style={{ backgroundColor: '#00E400' }}></div>
          <span>Good (0-50)</span>
        </div>
        <div className="key-item">
          <div className="key-color" style={{ backgroundColor: '#FFFF00' }}></div>
          <span>Moderate (51-100)</span>
        </div>
        <div className="key-item">
          <div className="key-color" style={{ backgroundColor: '#FF7E00' }}></div>
          <span>Unhealthy for Sensitive Groups (101-150)</span>
        </div>
        <div className="key-item">
          <div className="key-color" style={{ backgroundColor: '#FF0000' }}></div>
          <span>Unhealthy (151-200)</span>
        </div>
        <div className="key-item">
          <div className="key-color" style={{ backgroundColor: '#8F3F97' }}></div>
          <span>Very Unhealthy (201-300)</span>
        </div>
        <div className="key-item">
          <div className="key-color" style={{ backgroundColor: '#7E0023' }}></div>
          <span>Hazardous (301+)</span>
        </div>
      </div>
      <a href="/info" className="learn-more-link">Learn more about air quality</a>
    </div>
  );
};

export default AQIColorKey; 