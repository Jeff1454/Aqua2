import { GoogleMap } from '@react-google-maps/api';
import { mapStyles } from './mapStyles';
import { getZoomLevel } from '../../utils/mapUtils';
import { useState, useCallback } from 'react';

const Map = ({ center, radius }) => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const handleMapClick = useCallback((e) => {
    // Remove previous marker if exists
    if (marker) {
      marker.setMap(null);
    }

    const scale = Math.max(0.5, (20 - map.getZoom()) / 10);
    
    // Create custom marker
    const newMarker = new google.maps.Marker({
      position: e.latLng,
      map: map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 5 * scale,
        fillColor: '#000bde',
        fillOpacity: 1,
        strokeColor: 'beige',
        strokeWeight: 1,
      },
      zIndex: 1000, // Ensure it's above water features
    });

    setMarker(newMarker);
  }, [map, marker]);

  return (
    <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={getZoomLevel(parseFloat(radius) || 5)}
      center={center}
      onLoad={onLoad}
      onClick={handleMapClick}
      options={{
        mapTypeId: 'terrain',
      }}
    />
  );
};

export default Map; 