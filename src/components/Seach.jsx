import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

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

  const handleGetStarted = () => {
    setStep(1);
  };

  const handleSourceSelect = (city) => {
    setSrc(city);
    setStep(2);
  };

  const handleDestinationSelect = (city) => {
    setDest(city);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  async function FindRoute() {
    try {
      const response = await axios.get("http://44.204.86.203:5000/run-script", {
        params: {
          src: src.label,
          dest: dest.label,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching route:", error);
    }
  }

  return (
    <div>
      {step === 0 && <GetStarted onClick={handleGetStarted} />}
      {step === 1 && (
        <SearchField
          label="Source"
          onSelect={handleSourceSelect}
          onBack={handleBack}
        />
      )}
      {step === 2 && (
        <div>
          <SearchField
            label="Destination"
            onSelect={handleDestinationSelect}
            onBack={handleBack}
          />
          <div className="p-3 flex justify-center items-center">
            <Button variant="contained" onClick={FindRoute}>
              Find Route
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function GetStarted({ onClick }) {
  return (
    <div
      className="hero min-h-screen flex flex-col justify-center items-center text-center p-4"
      style={{
        background:
          "linear-gradient(to right, #121212, #121212 85%, #00df9a 100%)",
      }}
    >
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
          backgroundColor: "#00df9a", // Your accent color
          color: "white",
          fontWeight: "bold",
          padding: "1rem 2rem",
          borderRadius: "0.5rem",
          boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            backgroundColor: "#ffffff", // A darker shade for the hover state
          },
        }}
      >
        Plan your journey
      </Button>
    </div>
  );
}

function SearchField({ label, onSelect, onBack }) {
  return (
    <div className="flex justify-center items-center">
      <div>
        <Button variant="outlined" onClick={onBack} style={{ zIndex: 100 }}>
          Back
        </Button>
      </div>
      <Autocomplete
        sx={{
          zIndex: 100,
          width: 500,
          bgcolor: "background.paper",
          color: (theme) =>
            theme.palette.getContrastText(theme.palette.background.paper),
        }}
        size="small"
        onChange={(event, newValue) => {
          onSelect(newValue);
        }}
        disablePortal
        id="combo-box"
        options={stations}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </div>
  );
}

export default Search;
export { stations };
