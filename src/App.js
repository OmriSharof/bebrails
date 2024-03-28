import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Trainpic from "./components/Trainpic";
import Search from "./components/Seach";
import Results from "./components/Results";

import TrainSchedule from "./components/TrainSchedule";
function App() {


  return (
    <div>
      <Navbar />
      <Results/>
      <Search/>

      <TrainSchedule/>
      <Trainpic />
    </div>
  );
}


export default App;
