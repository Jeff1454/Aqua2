import { GoogleMap } from '@react-google-maps/api';
import { mapStyles } from './mapStyles';
import { getZoomLevel } from '../../utils/mapUtils';

const Map = ({ center, radius }) => {
  return (
    <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={getZoomLevel(parseFloat(radius) || 5)}
      center={center}
    />
  );
};

export default Map; 