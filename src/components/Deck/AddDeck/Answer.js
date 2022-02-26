import * as React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Answer() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: "25ch" }}>
        <OutlinedInput placeholder="Please enter answer" />
      </FormControl>
      <Button sx={{ mt: 1, mr: 1 }} variant="outlined">
        IS ANSWER
      </Button>
    </Box>
  );
}
