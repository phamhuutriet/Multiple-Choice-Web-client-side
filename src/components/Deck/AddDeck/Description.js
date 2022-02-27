import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";

export default function Description({ description, setParentDescription }) {
  const onChangeDesc = (e) => {
    setParentDescription((prev) => e.target.value);
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: "50ch", marginTop: 10 }}>
        <h3>Description</h3>
        <OutlinedInput
          value={description}
          onChange={onChangeDesc}
          placeholder="Please enter description"
        />
      </FormControl>
    </Box>
  );
}
