import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";

import "./TrainSchedule.css";
import "./RouteDetails.css";

const stations = [
  { label: "Afula R.Eitan", id: 1260 },
  { label: "Ahihud", id: 1820 },
  { label: "Ako", id: 1500 },
  { label: "Ashdod-Ad Halom (M.Bar Kochva)", id: 5800 },
  { label: "Ashkelon", id: 5900 },
  { label: "Atlit", id: 2500 },
  { label: "Bat Yam-Komemiyut", id: 4690 },
  { label: "Bat Yam-Yoseftal", id: 4680 },
  { label: "Be'er Sheva-Center", id: 7320 },
  { label: "Be'er Sheva-North/University", id: 7300 },
  { label: "Be'er Ya'akov", id: 5300 },
  { label: "Beit She'an", id: 1280 },
  { label: "Ben Gurion Airport", id: 8600 },
  { label: "Bet Shemesh", id: 6300 },
  { label: "Bet Yehoshu'a", id: 3400 },
  { label: "Binyamina", id: 2800 },
  { label: "Bnei Brak", id: 4100 },
  { label: "Caesarea-Pardes Hana", id: 2820 },
  { label: "Dimona", id: 7500 },
  { label: "HaMifrats Central Station", id: 1220 },
  { label: "Hadera-West", id: 3100 },
  { label: "Haifa Center-HaShmona", id: 2100 },
  { label: "Haifa-Bat Galim", id: 2200 },
  { label: "Haifa-Hof HaKarmel (Razi`el)", id: 2300 },
  { label: "Hertsliya", id: 3500 },
  { label: "Hod HaSharon-Sokolov", id: 9200 },
  { label: "Holon Junction", id: 4640 },
  { label: "Holon-Wolfson", id: 4660 },
  { label: "Hutsot HaMifrats", id: 1300 },
  { label: "Jerusalem - Yitzhak Navon", id: 680 },
  { label: "Jerusalem-Biblical Zoo", id: 6500 },
  { label: "Jerusalem-Malha", id: 6700 },
  { label: "Karmiel", id: 1840 },
  { label: "Kfar Habad", id: 4800 },
  { label: "Kfar Sava-Nordau (A.Kostyuk)", id: 8700 },
  { label: "Kiryat Gat", id: 7000 },
  { label: "Kiryat Hayim", id: 700 },
  { label: "Kiryat Malakhi – Yoav", id: 6150 },
  { label: "Kiryat Motzkin", id: 1400 },
  { label: "Lehavim-Rahat", id: 8550 },
  { label: "Lod", id: 5000 },
  { label: "Lod-Gane Aviv", id: 5150 },
  { label: "Mazkeret Batya", id: 6900 },
  { label: "Migdal Ha'emek-Kfar Barukh", id: 1250 },
  { label: "Modi'in-Center", id: 400 },
  { label: "Nahariya", id: 1600 },
  { label: "Netanya", id: 3300 },
  { label: "Netanya-Sapir", id: 3310 },
  { label: "Netivot", id: 9650 },
  { label: "Ofakim", id: 9700 },
  { label: "Pa'ate Modi'in", id: 300 },
  { label: "Petah Tikva-Kiryat Arye", id: 4170 },
  { label: "Petah Tikva-Segula", id: 4250 },
  { label: "Ra'anana South", id: 2960 },
  { label: "Ra'anana West", id: 2940 },
  { label: "Ramla", id: 5010 },
  { label: "Rehovot (E. Hadar)", id: 5200 },
  { label: "Rishon LeTsiyon-HaRishonim", id: 9100 },
  { label: "Rishon LeTsiyon-Moshe Dayan", id: 9800 },
  { label: "Rosh Ha'Ayin-North", id: 8800 },
  { label: "Sderot", id: 9600 },
  { label: "Tel Aviv-HaHagana", id: 4900 },
  { label: "Tel Aviv-HaShalom", id: 4600 },
  { label: "Tel Aviv-Savidor Center", id: 3700 },
  { label: "Tel Aviv-University", id: 3600 },
  { label: "Yavne-East", id: 5410 },
  { label: "Yavne-West", id: 9000 },
  { label: "Yokne'am-Kfar Yehoshu'a", id: 1240 },
];

function Search() {
  const [src, setSrc] = useState(null);
  const [dest, setDest] = useState(null);
  const [step, setStep] = useState(0);
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);

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
    setOpen(true);
    const routeData = await FindRoute(); // Assuming src, dest, and date are accessible
    setFetchedData(routeData); // Assume you have a useState to hold this data
    setOpen(false);
    setStep(4);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  async function FindRoute() {
    try {
      const response = await axios.get("https://free.bebrails.com/", {
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
            source={src.label}
          />
        </div>
      )}
      {step === 3 && (
        <ChooseDate
          onSelect={handleDateSelect}
          onBack={handleBack}
          onRequest={handleRequest}
          source={src.label}
          destination={dest.label}
        />
      )}
      {open && (
        <Backdrop
          sx={{ color: "#00df9a", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {step === 4 && (
        <TrainSchedule
          scheduleData={fetchedData}
          source={src.label}
          destination={dest.label}
          date={date.format("ddd, DD MMM")}
          onBack={handleBack}
          startNewSearch={() => setStep(1)}
        />
      )}
    </div>
  );
}

function GetStarted({ onClick }) {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Ready for an Adventure?
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        With BebRails, find the perfect route and enjoy the journey.
      </p>
      <Button
        variant="contained"
        onClick={onClick}
        sx={{
          backgroundColor: "#00df9a",
          color: "#192033",
          fontWeight: "bold",
          padding: "1rem 2rem",
          borderRadius: "0.5rem",
          boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.2)",
          transition:
            "transform 0.3s ease-out, box-shadow 0.3s ease-out, background-color 0.3s ease-out",
          "&:hover": {
            backgroundColor: "#00df9a",
            boxShadow: "0 0 15px rgba(0, 223, 154, 0.5)",
            transform: "scale(1.05)",
            color: "#F9F6EE",
          },
          "&:active": {
            backgroundColor: "#017c4b", // Even darker shade for an 'active' or 'pressed' state
            boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.2)", // Revert to the original shadow
          },
        }}
      >
        Plan my journey
      </Button>
    </div>
  );
}

function SearchField({ title, label, onSelect, onBack, source }) {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#00df9a",
    },
  });

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center p-4 space-y-6">
      {/* Main Title */}
      <h1 className="text-5xl md:text-7xl font-bold text-white">
        {title}{" "}
        {/* Assuming 'title' variable holds something like "Plan Your Journey" */}
      </h1>

      {/* Source Location */}
      {source && (
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          From: {source}
        </h2>
      )}

      {/* Destination Autocomplete Field */}
      <div className="w-full max-w-md">
        <Autocomplete
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#9ca3af",
              },
              "&:hover fieldset": {
                borderColor: "#00df9a",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#00df9a",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#00df9a",
            },
            "& .MuiInputBase-input": {
              color: "#00df9a",
            },
            bgcolor: "#1F2937",
            "& .MuiSvgIcon-root": {
              color: "#00df9a",
            },
          }}
          size="big"
          onChange={(event, newValue) => onSelect(newValue)}
          disablePortal
          id="combo-box"
          options={stations}
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "#1F2937",
                },
                color: "#F9F6EE", // Default text color
                backgroundColor: "#1F2937", // Default background color
              }}
              {...props}
            >
              {option.label}
            </Box>
          )}
          renderInput={(params) => (
            <CssTextField
              {...params}
              label={label}
              inputProps={{
                ...params.inputProps,
              }}
            />
          )}
        />
      </div>

      {/* Back Button */}
      <Button
        variant="outlined"
        onClick={onBack}
        startIcon={<ArrowBackIcon />}
        sx={{
          borderColor: "#00df9a",
          color: "#00df9a",
          fontWeight: "bold",
          textTransform: "none",
          padding: "10px 20px",
          borderRadius: "4px",
          transition: "background-color 0.3s ease, color 0.3s ease",
          "&:hover": {
            backgroundColor: "rgba(0, 223, 154, 0.1)",
            color: "#00df9a",
            borderColor: "#00df9a",
          },
        }}
      >
        Back
      </Button>
    </div>
  );
}

function ChooseDate({ onSelect, onBack, onRequest, source, destination }) {
  const [value, setValue] = useState(dayjs());
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#2196f3",
      },
      background: {
        paper: "#1F2937",
        default: "#ffffff",
      },
    },
  });

  // Picker component based on screen size
  const DatePickerComponent = isSmallScreen
    ? MobileDatePicker
    : StaticDatePicker;

  // Determine actions based on screen size
  const actionBarActions = isSmallScreen
    ? ["cancel", "accept", "today"]
    : ["today"];

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center p-4 space-y-6">
      {/* Conditionally render the source and destination if they exist */}
      {/* Main Title */}
      <h1 className="text-5xl md:text-7xl font-bold text-white">
        Which date?
        {/* Assuming 'title' variable holds something like "Plan Your Journey" */}
      </h1>
      {source && (
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          From: {source}
        </h2>
      )}
      {destination && (
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          To: {destination}
        </h2>
      )}

      {/* Display the DatePickerComponent */}
      <ThemeProvider theme={darkTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePickerComponent
            orientation={isSmallScreen ? "portrait" : "landscape"}
            showToolbar={false} // Toolbar visible
            showDaysOutsideCurrentMonth={true} // Show days outside of month
            openTo="day"
            views={["month", "day"]}
            sx={{
              border: "2px solid #00df9a",
              borderRadius: "5px",
              ".MuiPickersToolbar-content": {
                color: "#00df9a",
              },
              ".MuiPickersCalendarHeader-label": {
                color: "#00df9a",
              },
              ".MuiPickersDay-today": {
                borderColor: "#00df9a",
              },
              ".MuiPickersMonth-root": {
                color: "#fffff0",
              },
            }}
            slotProps={{
              actionBar: {
                actions: actionBarActions,
              },
            }}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              onSelect(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </ThemeProvider>

      {/* Action buttons for Back and Search Trains */}
      <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button
          variant="outlined"
          onClick={onBack}
          startIcon={<ArrowBackIcon />}
          sx={{
            borderColor: "#00df9a",
            color: "#00df9a",
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            transition: "background-color 0.3s ease, color 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(0, 223, 154, 0.1)",
              color: "#00df9a",
              borderColor: "#00df9a",
            },
          }}
        >
          Back
        </Button>

        <Button
          variant="outlined"
          onClick={onRequest}
          startIcon={<SearchIcon />}
          sx={{
            borderColor: "#00df9a",
            color: "#00df9a",
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(0, 223, 154, 0.1)",
              color: "#00df9a",
              boxShadow: "0 4px 20px rgba(0, 223, 154, 0.25)", // more pronounced glow effect on hover
              transform: "scale(1.05)", // button grows larger on hover
              borderColor: "#00df9a",
            },
            "&:active": {
              backgroundColor: "rgba(0, 223, 154, 0.2)", // slightly darker on click
              boxShadow: "0 1px 5px rgba(0, 223, 154, 0.3)", // more pronounced shadow on click
              transform: "translateY(1px)", // button appears pressed on click
            },
          }}
        >
          Search Trains
        </Button>
      </div>
    </div>
  );
}

function TrainSchedule({
  scheduleData,
  source,
  destination,
  date,
  onBack,
  startNewSearch,
}) {
  const [selectedTravel, setSelectedTravel] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleTravelClick = (travel, index) => {
    setSelectedTravel(travel); // Set the entire travel object
    setSelectedIndex(index);
  };

  const formatTravelTime = (startTime, endTime) => {
    const duration = new Date(endTime) - new Date(startTime);
    const minutes = Math.floor(duration / 60000);
    return `${minutes} min`;
  };

  const hasChanges = (trains) => trains.length > 1;

  return (
    <div className="train-schedule">
      {/* Display From, To, and Date at the top */}
      <div class="text-center mb-8">
        <div class="flex items-center justify-center gap-4 text-xl md:text-3xl lg:text-4xl font-bold text-white">
          <span>{source}</span>
          <svg
            class="h-8 w-8 lg:h-10 lg:w-10 text-accent"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          <span>{destination}</span>
        </div>
        <div class="mt-4 font-bold text-2xl md:text-3xl lg:text-4xl text-white">
          {date}
        </div>
      </div>

      {/* Action buttons for Back and New Search */}
      <div className="action-buttons text-center my-4">
        <Button
          variant="outlined"
          onClick={onBack}
          startIcon={<ArrowBackIcon />}
          sx={{
            borderColor: "#00df9a",
            color: "#00df9a",
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            marginRight: "20px", // Creates space between the two buttons
            "&:hover": {
              backgroundColor: "rgba(0, 223, 154, 0.1)",
              color: "#00df9a",
              borderColor: "#00df9a",
            },
          }}
        >
          Back
        </Button>
        <Button
          variant="outlined"
          onClick={startNewSearch}
          sx={{
            borderColor: "#00df9a",
            color: "#00df9a",
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(0, 223, 154, 0.1)",
              color: "#00df9a",
              boxShadow: "0 4px 20px rgba(0, 223, 154, 0.25)", // more pronounced glow effect on hover
              transform: "scale(1.05)", // button grows larger on hover
              borderColor: "#00df9a",
            },
            "&:active": {
              backgroundColor: "rgba(0, 223, 154, 0.2)", // slightly darker on click
              boxShadow: "0 1px 5px rgba(0, 223, 154, 0.3)", // more pronounced shadow on click
              transform: "translateY(1px)", // button appears pressed on click
            },
          }}
        >
          New Search
        </Button>
      </div>

      {/* Train list container */}
      <div className="train-list">
        {scheduleData.result.travels.map((travel, index) => (
          <div
            key={index}
            className={`travel-item ${
              index === selectedIndex ? "selected" : ""
            }`}
            onClick={() => handleTravelClick(travel, index)}
          >
            {/* Train details */}
            <div className="travel-details">
              {/* Train number */}
              <span className="train-number">
                🚆 {travel.trains[0].trainNumber}
              </span>

              {/* Time and platform details */}
              <div className="time-and-platform">
                <span className="departure-time">
                  Depart:{" "}
                  {new Date(travel.departureTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </span>
                <span className="travel-duration">
                  Duration:{" "}
                  {formatTravelTime(travel.departureTime, travel.arrivalTime)}
                </span>
                <span className="arrival-time">
                  Arrive:{" "}
                  {new Date(travel.arrivalTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </span>
              </div>

              {/* Platform details */}
              <div className="platform-details">
                <span>Platform {travel.trains[0].originPlatform}</span>
                <span>
                  {hasChanges(travel.trains) ? "1 Change" : "No changes"}
                </span>
                <span>
                  Platform{" "}
                  {travel.trains[travel.trains.length - 1].destPlatform}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Display selected route details */}
      {selectedTravel && (
        <RouteDetails
          isOpen={Boolean(selectedTravel)}
          onClose={() => {
            setSelectedTravel(null);
            setSelectedIndex(null);
          }}
          travel={selectedTravel}
        />
      )}
    </div>
  );
}

function RouteDetails({ isOpen, onClose, travel }) {
  const [expanded, setExpanded] = useState(false);

  if (!isOpen) {
    return null;
  }

  const getStationName = (id) => {
    // Assume stations is available in the context or via props
    const station = stations.find((s) => s.id === id);
    return station ? station.label : "Unknown Station";
  };

  const isSourceOrDestination = (stationId, train) => {
    return (
      stationId === train.orignStation || stationId === train.destinationStation
    );
  };

  const getRelevantStations = (train) => {
    const route = train.routeStations;
    const startIndex = route.findIndex(
      (station) => station.stationId === train.orignStation
    );
    const endIndex = route.findIndex(
      (station) => station.stationId === train.destinationStation
    );

    return startIndex !== -1 && endIndex !== -1
      ? route.slice(startIndex, endIndex + 1)
      : route;
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">Route Details</h2>
          <button className="modal-close-btn" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="modal-trains-list">
          {travel.trains.map((train, index) => {
            const routeStationsToShow = expanded
              ? train.routeStations
              : getRelevantStations(train);

            return (
              <div key={index} className="modal-train-details">
                <span className="modal-train-title">
                  🚆 {train.trainNumber}
                </span>
                <div className="modal-stations-list">
                  <div className="modal-stations-titles">
                    <div className="modal-station-name-title">Station Name</div>
                    <div className="modal-platform-title">Platform</div>
                    <div className="modal-arrival-title">Arrival Time</div>
                  </div>
                  {routeStationsToShow.map((station, stationIndex) => (
                    <div
                      key={stationIndex}
                      className={`modal-station ${
                        isSourceOrDestination(station.stationId, train)
                          ? "modal-highlighted-station"
                          : ""
                      }`}
                    >
                      <div className="modal-station-name">
                        {getStationName(station.stationId)}
                      </div>
                      <div className="modal-platform-number">
                        {station.platform}
                      </div>
                      <div className="modal-arrival-time">
                        {station.arrivalTime}
                      </div>
                    </div>
                  ))}
                </div>

                {index < travel.trains.length - 1 && (
                  <div className="modal-train-change-notice">
                    Change to next train
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button
          className="modal-toggle-expand-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Collapse" : "Expand"} All
        </button>
      </div>
    </div>
  );
}

export default Search;
export { stations };
