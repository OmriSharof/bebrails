import React, { useState } from 'react';
import './TrainSchedule.css'; // Your existing CSS
import RouteDetails from './RouteDetails'; // Import the RouteDetails component you will create

const TrainSchedule = ({ scheduleData }) => {
  const [selectedTrain, setSelectedTrain] = useState(null);

  // This function is called when a train box is clicked.
  // It sets the selected train in the state which will be used to pass data to the RouteDetails component.
  const handleTrainClick = (train) => {
    setSelectedTrain(train);
  };

  return (
    <div className="train-schedule">
      <h1>Available trains</h1>
      <div className="train-list">
        {scheduleData.travels.map((travel, index) => (
          <div key={index} className="train" onClick={() => handleTrainClick(travel)}>
            <div className="train-details">
              <div className="train-time">
                <span className="departure-time"> 
                  {new Date(travel.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
                <span className="travel-time">
                  {Math.floor((new Date(travel.arrivalTime) - new Date(travel.departureTime)) / 60000)} min
                </span>
                <span className="arrival-time">
                  {new Date(travel.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <div className="train-platforms">
                <span>Platform {travel.trains[0].originPlatform}</span>
                <span>No changes</span>
                <span>Platform {travel.trains[0].destPlatform}</span>
              </div>
            </div>
            <button className="prices-btn">Prices</button>
          </div>
        ))}
      </div>
      {selectedTrain && (
        <RouteDetails
          isOpen={Boolean(selectedTrain)}
          onClose={() => setSelectedTrain(null)}
          train={selectedTrain}
        />
      )}
    </div>
  );
};

export default TrainSchedule;
