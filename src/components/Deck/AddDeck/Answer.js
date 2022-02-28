import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const isAnswerColor = "green";
const notAnswerColor = "red";

export default function Answer({ isAnswer, updateChoice, idx, setAnswerIdx, body }) {
  const [choice, setChoice] = useState({ body: body, isAnswer: isAnswer });
  const [buttonColor, setButtonColor] = useState(notAnswerColor);

  useEffect(() => {
    updateChoice(idx, choice);
  }, [choice.body]);

  useEffect(() => {
    setButtonColor((prev) => (isAnswer ? isAnswerColor : notAnswerColor));
  });

  const onChangeBody = (e) => {
    setChoice((prev) => ({
      ...choice,
      body: e.target.value,
    }));
  };

  const onClickIsAnswer = () => {
    setChoice((prev) => ({
      ...choice,
      isAnswer: true,
    }));
    setAnswerIdx((prev) => idx);
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: "25ch" }}>
        <OutlinedInput value={choice.body} onChange={onChangeBody} placeholder="Please enter answer" />
      </FormControl>
      <Button onClick={() => onClickIsAnswer()} sx={{ mt: 1, mr: 1, color: buttonColor }} variant="outlined">
        IS ANSWER
      </Button>
    </Box>
  );
}
