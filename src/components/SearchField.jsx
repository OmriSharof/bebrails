import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { stations } from "./SearchOption";

function SearchField(props) {
  return (
    <Autocomplete
      size="small"
      value={props.city.label}
      onChange={(event, newValue) => {
        props.setCity({ label: newValue.label, id: newValue.id });
      }}
      disablePortal
      id="combo-box"
      options={stations}
      sx={{ width: 500, bgcolor: "background.paper" }}
      renderInput={(params) => <TextField {...params} label={props.dest} />}
    />
  );
}

export default SearchField;
