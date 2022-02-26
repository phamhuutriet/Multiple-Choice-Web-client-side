import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function NumAnswerSelect({ numAnswer, setNumAnswer }) {
  const handleChange = (event) => {
    setNumAnswer((prev) => event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 90 }}>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={numAnswer}
          onChange={handleChange}
          autoWidth
          label="NumAnswer"
        >
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={6}>Six</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
