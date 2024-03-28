import React from 'react';
import './RouteDetails.css'; // Make sure to link the correct CSS file path

// Station mapping data
const stations = [
    { label: "Tel Aviv Savidor Center", id: 3700 },
    { label: "Hertsliya", id: 3500 },
    { label: "Hadera West", id: 3100 },
    { label: "Binyamina", id: 2800 },
    { label: "Caesarea Pardes Hana", id: 2820 },
    { label: "Haifa Bat Galim", id: 2200 },
    { label: "Hutsot Hamifrats", id: 1300 },
    { label: "Kiryat Hayim", id: 700 },
    { label: "Kiryat Motzkin", id: 1400 },
    { label: "Ako", id: 1500 },
    { label: "Haifa Hof Hakarmel (Razi`el)", id: 2300 },
    { label: "Netanya", id: 3300 },
    { label: "Jerusalem Biblical Zoo", id: 6500 },
    { label: "Bet Shemesh", id: 6300 },
    { label: "Kiryat Gat", id: 7000 },
    { label: "Lod", id: 5000 },
    { label: "Beer Sheva North/University", id: 7300 },
    { label: "Tel Aviv Hashalom", id: 4600 },
    { label: "Haifa Center Hashmona", id: 2100 },
    { label: "Ramla", id: 5010 },
    { label: "Rosh Haayin North", id: 8800 },
    { label: "Beer Yaakov", id: 5300 },
    { label: "Rehovot (E. Hadar)", id: 5200 },
    { label: "Yavne East", id: 5410 },
    { label: "Rishon Letsiyon Harishonim", id: 9100 },
    { label: "Ashdod Ad Halom (M.Bar Kochva)", id: 5800 },
    { label: "Petah Tikva Segula", id: 4250 },
    { label: "Bnei Brak", id: 4100 },
    { label: "Tel Aviv University", id: 3600 },
    { label: "Beer Sheva Center", id: 7320 },
    { label: "Ben Gurion Airport", id: 8600 },
    { label: "Jerusalem Malha", id: 6700 },
    { label: "Ashkelon", id: 5900 },
    { label: "Dimona", id: 7500 },
    { label: "Hod Hasharon Sokolov", id: 9200 },
    { label: "Petah Tikva Kiryat Arye", id: 4170 },
    { label: "Lod Gane Aviv", id: 5150 },
    { label: "Lehavim Rahat", id: 8550 },
    { label: "Paate Modiin", id: 300 },
    { label: "Modiin Center", id: 400 },
    { label: "Holon Junction", id: 4640 },
    { label: "Holon Wolfson", id: 4660 },
    { label: "Bat Yam Yoseftal", id: 4680 },
    { label: "Bat Yam Komemiyut", id: 4690 },
    { label: "Rishon Letsiyon Moshe Dayan", id: 9800 },
    { label: "Yavne West", id: 9000 },
    { label: "Sderot", id: 9600 },
    { label: "Netivot", id: 9650 },
    { label: "Ofakim", id: 9700 },
    { label: "Netanya Sapir", id: 3310 },
    { label: "Yokneam Kfar Yehoshua", id: 1240 },
    { label: "Migdal Haemek Kfar Barukh", id: 1250 },
    { label: "Afula R.Eitan", id: 1260 },
    { label: "Beit Shean", id: 1280 },
    { label: "Ahihud", id: 1820 },
    { label: "Karmiel", id: 1840 },
    { label: "Raanana West", id: 2940 },
    { label: "Raanana South", id: 2960 },
    { label: "Kiryat Malakhi – Yoav", id: 6150 },
    { label: "Jerusalem Yitzhak Navon", id: 680 },
    { label: "Mazkeret Batya", id: 6900 },
  ];

  const RouteDetails = ({ isOpen, onClose, train }) => {
    if (!isOpen) {
      return null;
    }
  
    // Function to get station name by ID
    const getStationName = (id) => {
      const station = stations.find(s => s.id === id);
      return station ? station.label : 'Unknown Station';
    };
  
    // Check if the current station is the origin or destination
    const isHighlighted = (stationId) => {
      return train.trains[0].orignStation === stationId || train.trains[0].destinationStation === stationId;
    };
  
    return (
      <div className={`route-details ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={onClose}>Close</button>
        <h2>Route Details for Train {train.trains[0].trainNumber}</h2>
        <div className="station-list">
          {train.trains[0].routeStations.map((station, index) => (
            <div key={index} className={`station ${isHighlighted(station.stationId) ? 'highlight' : ''}`}>
              <div>Station: {getStationName(station.stationId)}</div>
              <div>Arrival Time: {station.arrivalTime}</div>
              <div>Platform: {station.platform}</div>
              <div>Crowded: {`${station.crowded * 100}%`}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default RouteDetails;
