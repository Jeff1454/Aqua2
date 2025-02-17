import { GoogleMap } from '@react-google-maps/api';
import { mapStyles } from './mapStyles';
import { useState, useEffect } from 'react';

const Map = ({ center, showAirQuality }) => {
  const [map, setMap] = useState(null);
  const [airQualityLayer, setAirQualityLayer] = useState(null);

  const onLoad = (map) => {
    setMap(map);
    
    // Create the air quality layer
    const layer = new window.google.maps.ImageMapType({
      getTileUrl: function(coord, zoom) {
        return `https://tiles.aqicn.org/tiles/usepa-aqi/${zoom}/${coord.x}/${coord.y}.png?token=YOUR_AQICN_TOKEN`;
      },
      tileSize: new window.google.maps.Size(256, 256),
      maxZoom: 18,
      minZoom: 3,
      name: 'Air Quality'
    });
    
    setAirQualityLayer(layer);
  };

  // Update air quality layer when showAirQuality changes
  useEffect(() => {
    if (map && airQualityLayer) {
      if (showAirQuality) {
        map.overlayMapTypes.push(airQualityLayer);
      } else {
        map.overlayMapTypes.clear();
      }
    }
  }, [map, airQualityLayer, showAirQuality]);

  return (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={12}
        center={center}
        onLoad={onLoad}
        options={{
          clickableIcons: false
        }}
      />
    </div>
  );
};

export default Map;