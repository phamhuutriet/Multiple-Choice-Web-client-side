import * as React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";

export default function Description({ description, setDescription }) {
  const onChangeDesc = (e) => {
    setDescription((prev) => e.target.value);
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: "50ch", marginTop: 10 }}>
        <h4>Description</h4>
        <OutlinedInput
          onChange={onChangeDesc}
          placeholder="Please enter description"
        />
      </FormControl>
    </Box>
  );
}
