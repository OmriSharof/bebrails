import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";

import "./TrainSchedule.css";
import "./RouteDetails.css";

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

function Search() {
  const [src, setSrc] = useState(null);
  const [dest, setDest] = useState(null);
  const [step, setStep] = useState(0);
  const [date, setDate] = useState(null);

  const [scheduleData, setScheduleData] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);

  const handleGetStarted = () => {
    setStep(1);
  };

  const handleSourceSelect = (city) => {
    setSrc(city);
    setStep(2);
  };

  const handleDestinationSelect = (city) => {
    setDest(city);
    setStep(3);
  };

  const handleDateSelect = (date) => {
    setDate(date);
  };

  const handleRequest = async () => {
    const routeData = await FindRoute(); // Assuming src, dest, and date are accessible
    setFetchedData(routeData); // Assume you have a useState to hold this data
    setStep(4);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  // TODO: Back to Home with click on Name BebRails.

  async function FindRoute() {
    try {
      const response = await axios.get("http://44.204.86.203:5000/run-script", {
        params: {
          src: src.label,
          dest: dest.label,
          date: date,
        },
      });
      console.log("Route fetched successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching route:", error);
    }
  }

  useEffect(() => {
    FindRoute()
      .then((data) => {
        setScheduleData(data);
      })
      .catch((error) => {
        console.error("Failed to fetch route data:", error);
      });
  }, []);

  return (
    <div>
      {step === 0 && <GetStarted onClick={handleGetStarted} />}
      {step === 1 && (
        <SearchField
          title="From where?"
          label="Origin Station"
          onSelect={handleSourceSelect}
          onBack={handleBack}
        />
      )}
      {step === 2 && (
        <div>
          <SearchField
            title="To where?"
            label="Destination Station"
            onSelect={handleDestinationSelect}
            onBack={handleBack}
          />
        </div>
      )}
      {step === 3 && (
        <ChooseDate
          onSelect={handleDateSelect}
          onBack={handleBack}
          onRequest={handleRequest}
        />
      )}
      {step === 4 && <TrainSchedule scheduleData={fetchedData} />}
    </div>
  );
}

function GetStarted({ onClick }) {
  return (
    <div className="hero min-h-screen flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Ready for an Adventure?
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        With BebRails, find the perfect route and enjoy the journey.
      </p>
      <Button
        variant="contained"
        onClick={onClick}
        style={{
          backgroundColor: "#00df9a",
          color: "white",
          fontWeight: "bold",
          padding: "1rem 2rem",
          borderRadius: "0.5rem",
          boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.2)",
          transition: "0.3s ease-out", // Transition for smooth effects
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#019568"; // Darker shade on hover
          e.currentTarget.style.boxShadow = "0 6px 9px 3px rgba(0, 0, 0, 0.3)"; // Larger shadow for depth
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#00df9a"; // Original color
          e.currentTarget.style.boxShadow = "0 3px 5px 2px rgba(0, 0, 0, 0.2)"; // Original shadow
        }}
      >
        Plan your journey
      </Button>
    </div>
  );
}

function SearchField({ title, label, onSelect, onBack }) {
  return (
    <div className="hero min-h-screen flex flex-col justify-center items-center text-center p-4">
      {/* Display dynamic title */}
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        {title}
      </h1>

      <div className="flex flex-col justify-center items-center space-y-4">
        <Button
          variant="outlined"
          onClick={onBack}
          startIcon={<ArrowBackIcon />}
          style={{
            borderColor: "#00df9a",
            color: "#00df9a",
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            transition: "0.3s", // Smooth transition for hover effects
          }}
        >
          Back
        </Button>

        <Autocomplete
          sx={{
            width: 300, // Default width for mobile
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#00df9a", // Customizing the border color
              },
              "&:hover fieldset": {
                borderColor: "white", // Change border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#00df9a", // Border color when focused
              },
            },
            "& .MuiInputLabel-root": {
              color: "#ffffff", // Label color
            },
            bgcolor: "#121212", // Background color for the input field
          }}
          size="big"
          onChange={(event, newValue) => onSelect(newValue)}
          disablePortal
          id="combo-box"
          options={stations}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => <TextField {...params} label={label} />}
        />
      </div>
    </div>
  );
}

function ChooseDate({ onSelect, onBack, onRequest }) {
  const [value, setValue] = React.useState(dayjs());

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#2196f3",
      },
      background: {
        paper: "#1F2937",
        default: "#ffffff",
      },
    },
  });

  return (
    <div className="hero min-h-screen flex flex-col justify-center items-center text-center p-4">
      <div className="flex flex-col justify-center items-center space-y-4">
        <Button
          variant="outlined"
          onClick={onBack}
          startIcon={<ArrowBackIcon />}
          style={{
            borderColor: "#00df9a",
            color: "#00df9a",
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            transition: "0.3s", // Smooth transition for hover effects
          }}
        >
          Back
        </Button>

        <ThemeProvider theme={darkTheme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              displayStaticWrapperAs="" // Static desktop mode
              orientation="landscape" // Landscape orientation
              showToolbar={false} // Toolbar visible
              showDaysOutsideCurrentMonth={true} // Show days outside of month
              sx={{
                ".MuiPickersToolbar-root": {
                  color: "#bbdefb",
                  borderRadius: "3px",
                  borderWidth: "3px",
                  borderColor: "#2196f3",
                  border: "3px solid",
                  backgroundColor: "#00df9a",
                },
                ".MuiDateCalendar-root": {
                  color: "#bbdefb",
                  borderRadius: "3px",
                  borderWidth: "3px",
                  borderColor: "#2196f3",
                  border: "3px solid",
                  backgroundColor: "#00df9a",
                },
              }}
              slotProps={{
                actionBar: {
                  actions: ["today"],
                },
              }}
              openTo="day"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
                onSelect(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </ThemeProvider>

        <Button
          variant="outlined"
          onClick={onRequest}
          startIcon={<SearchIcon />} // Add the search icon to the button
          style={{
            borderColor: "#00df9a",
            color: "#00df9a",
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            transition: "0.3s ease-out", // Transition for smooth effects
          }}
          // We can use onMouseOver and onMouseOut to simulate hover effects
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#00df9a";
            e.target.style.color = "white";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#00df9a";
          }}
        >
          Search Trains
        </Button>
      </div>
    </div>
  );
}

function TrainSchedule({ scheduleData }) {
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // This function is called when a train box is clicked.
  // It sets the selected train and index in the state.
  const handleTrainClick = (train, index) => {
    setSelectedTrain(train);
    setSelectedIndex(index);
  };

  return (
    <div className="train-schedule">
      <h1>Available trains</h1>
      <div className="train-list">
        {scheduleData.result.travels.map((travel, index) => (
          <div
            key={index}
            className={`train ${index === selectedIndex ? "selected" : ""}`}
            onClick={() => handleTrainClick(travel, index)}
          >
            <div className="train-details">
              <div className="train-time">
                <span className="departure-time">
                  {new Date(travel.departureTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <span className="travel-time">
                  {Math.floor(
                    (new Date(travel.arrivalTime) -
                      new Date(travel.departureTime)) /
                      60000
                  )}{" "}
                  min
                </span>
                <span className="arrival-time">
                  {new Date(travel.arrivalTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
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
          onClose={() => {
            setSelectedTrain(null);
            setSelectedIndex(null); // Reset the selected index when closing the details
          }}
          train={selectedTrain}
        />
      )}
    </div>
  );
}

function RouteDetails({ isOpen, onClose, train }) {
  if (!isOpen) {
    return null;
  }

  // Function to get station name by ID
  const getStationName = (id) => {
    const station = stations.find((s) => s.id === id);
    return station ? station.label : "Unknown Station";
  };

  // Check if the current station is the origin or destination
  const isHighlighted = (stationId) => {
    return (
      train.trains[0].orignStation === stationId ||
      train.trains[0].destinationStation === stationId
    );
  };

  return (
    <div className={`route-details ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
      <h2>Route Details for Train {train.trains[0].trainNumber}</h2>
      <div className="station-list">
        {train.trains[0].routeStations.map((station, index) => (
          <div
            key={index}
            className={`station ${
              isHighlighted(station.stationId) ? "highlight" : ""
            }`}
          >
            <div>Station: {getStationName(station.stationId)}</div>
            <div>Arrival Time: {station.arrivalTime}</div>
            <div>Platform: {station.platform}</div>
            <div>Crowded: {`${station.crowded * 100}%`}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
export { stations };
