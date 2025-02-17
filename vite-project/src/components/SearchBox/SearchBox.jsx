import { useState } from 'react';
import { StandaloneSearchBox } from '@react-google-maps/api';
import './SearchBox.css';

const SearchBox = ({ onPlaceSelect }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchBox, setSearchBox] = useState(null);

  const onLoad = ref => {
    setSearchBox(ref);
  };

  const handleSearch = () => {
    if (searchBox) {
      const places = searchBox.getPlaces();
      if (places && places.length > 0) {
        const place = places[0];
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        console.log('Selected location:', location);
        onPlaceSelect(location);
      }
    }
  };

  return (
    <div className="search-box">
      <StandaloneSearchBox
        onLoad={onLoad}
        onPlacesChanged={handleSearch}
      >
        <input
          type="text"
          placeholder="Search for a location..."
          className="search-input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </StandaloneSearchBox>
    </div>
  );
};

export default SearchBox; 