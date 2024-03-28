import React from 'react';
import './RouteDetails.css'; // Make sure to link the correct CSS file path

const RouteDetails = ({ isOpen, onClose, train }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={`route-details ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>Close</button>
      <h2>Route Details for Train {train.trains[0].trainNumber}</h2>
      <div className="station-list">
        {train.trains[0].routeStations.map((station, index) => (
          <div key={index} className="station">
            <div>Station ID: {station.stationId}</div>
            <div>Arrival Time: {station.arrivalTime}</div>
            <div>Platform: {station.platform}</div>
            <div>Crowded: {station.crowded}</div>
            {/* Add more station details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RouteDetails;
