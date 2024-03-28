import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Trainpic from "./components/Trainpic";
import Search from "./components/Seach";

function App() {


  return (
    <div>
      <Navbar />
      <Search/>
      <Trainpic />
    </div>
  );
}


export default App;
