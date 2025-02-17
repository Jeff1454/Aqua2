import { useRef } from 'react';
import { StandaloneSearchBox } from '@react-google-maps/api';
import './SearchBox.css';

const SearchBox = ({ onPlaceSelect }) => {
  const searchBoxRef = useRef();

  const onPlacesChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    if (places && places.length > 0) {
      const location = {
        lat: places[0].geometry.location.lat(),
        lng: places[0].geometry.location.lng(),
      };
      onPlaceSelect(location);
    }
  };

  return (
    <div className="search-box">
      <StandaloneSearchBox
        ref={searchBoxRef}
        onPlacesChanged={onPlacesChanged}
      >
        <input
          type="text"
          placeholder="Search for a location..."
        />
      </StandaloneSearchBox>
    </div>
  );
};

export default SearchBox; 