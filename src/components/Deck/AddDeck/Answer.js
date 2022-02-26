import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Answer({ updateChoice, idx }) {
  const [choice, setChoice] = useState({ body: "", isAnswer: false });

  useEffect(() => {
    updateChoice(idx, choice);
  }, [choice]);

  const onChangeBody = (e) => {
    setChoice((prev) => ({
      ...choice,
      body: e.target.value,
    }));
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: "25ch" }}>
        <OutlinedInput
          value={choice.body}
          onChange={onChangeBody}
          placeholder="Please enter answer"
        />
      </FormControl>
      <Button sx={{ mt: 1, mr: 1 }} variant="outlined">
        IS ANSWER
      </Button>
    </Box>
  );
}
