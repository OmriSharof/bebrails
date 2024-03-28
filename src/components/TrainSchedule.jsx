import React from 'react';
import trainScheduleData from './train.json'; // Adjust the import path as needed

const TrainSchedule = () => {
  const schedule = trainScheduleData.result.travels;

  return (
    <div>
      <h2>Train Schedule</h2>
      <ul>
        {schedule.map((travel, index) => (
          <li key={index}>
            <p>Departure: {travel.departureTime} - Arrival: {travel.arrivalTime}</p>
            <p>Free Seats: {travel.freeSeats}</p>
            <h4>Trains:</h4>
            <ul>
              {travel.trains.map((train, trainIndex) => (
                <li key={trainIndex}>
                  <p>Train Number: {train.trainNumber}</p>
                  <p>From Station: {train.orignStation} To Station: {train.destinationStation}</p>
                  <p>Departure: {train.departureTime} - Arrival: {train.arrivalTime}</p>
                  <h5>Stops:</h5>
                  <ul>
                    {train.stopStations.map((stop, stopIndex) => (
                      <li key={stopIndex}>
                        <p>Station: {stop.stationId}</p>
                        <p>Arrival: {stop.arrivalTime} - Departure: {stop.departureTime}</p>
                        <p>Crowdedness: {stop.crowded}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainSchedule;
