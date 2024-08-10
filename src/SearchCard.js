import React, { useState } from 'react';
import './SearchCard.css';

const SearchCard = () => {
  const [leavingFrom, setLeavingFrom] = useState('Sharjah');
  const [destination, setDestination] = useState('Armenia');
  const [leavingOn, setLeavingOn] = useState('2024-08-16');
  const [returning, setReturning] = useState('2024-08-21');
  const [travelers, setTravelers] = useState('1 room, 2 adults');

  const handleSearch = () => {
    alert(`Searching for trips from ${leavingFrom} to ${destination} from ${leavingOn} to ${returning} for ${travelers}.`);
  };

  return (
    <div className="search-card-container">
      <div className="search-card">
        <h2>Holidays to Armenia</h2>
        <h4>E-visa for India, Philippines and many more.</h4>
        <form>
          <div className="form-group">
            <label>Leaving From</label>
            <input type="text" value={leavingFrom} onChange={(e) => setLeavingFrom(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Destination</label>
            <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Leaving on</label>
            <input type="date" value={leavingOn} onChange={(e) => setLeavingOn(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Returning</label>
            <input type="date" value={returning} onChange={(e) => setReturning(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Number of Travelers</label>
            <input type="text" value={travelers} onChange={(e) => setTravelers(e.target.value)} />
          </div>
          <button type="button" onClick={handleSearch}>Search</button>
        </form>
      </div>
    </div>
  );
};

export default SearchCard;
