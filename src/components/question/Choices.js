import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";

const initValue = "";
const initError = false;
const initHelperText = "Choose wisely";
const initIsComplete = false;
const initDisableButton = false;

export default function Choices({ choices, setCompleteQuestions, questionIdx, inCompletedSet, setIndex, dispatchPriority }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("Choose wisely");
  const [isComplete, setIsComplete] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (!inCompletedSet(questionIdx)) {
      resetDefault();
    } else {
      handleComplete();
    }
  }, [questionIdx]);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.slice(0, 4) === "true") {
      setHelperText("You got it!");
      setError(false);
      handleComplete();
      dispatchPriority("true");
    } else if (value.slice(0, 5) === "false") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
      handleComplete();
      dispatchPriority("false");
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };

  const handleComplete = () => {
    setIsComplete((prev) => true);
    setDisableButton((prev) => true);
    setCompleteQuestions((prev) => {
      const newSet = new Set(prev);
      newSet.add(questionIdx);
      return newSet;
    });
  };

  const resetDefault = () => {
    setValue((prev) => initValue);
    setError((prev) => initError);
    setHelperText((prev) => initHelperText);
    setIsComplete((prev) => initIsComplete);
    setDisableButton((prev) => initDisableButton);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <RadioGroup aria-labelledby="demo-error-radios" name="quiz" value={value} onChange={handleRadioChange}>
          {choices.map((choice, idx) => {
            return (
              <FormControlLabel
                key={idx}
                value={choice.isAnswer + choice.id.toString()}
                control={<Radio />}
                label={choice.body}
                disabled={disableButton}
              />
            );
          })}
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>

        {isComplete ? (
          <Button onClick={() => setIndex("asc")} sx={{ mt: 1, mr: 1 }} variant="outlined">
            NEXT
          </Button>
        ) : (
          <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            Check Answer
          </Button>
        )}
      </FormControl>
    </form>
  );
}
