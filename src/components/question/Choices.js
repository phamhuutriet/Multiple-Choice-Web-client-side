import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

export default function Choices({
  choices,
  description,
  setPriority,
  setIndex,
}) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.slice(0, 4) === "true") {
      setPriority("true");
      setHelperText("You got it!");
      setError(false);
      setIndex();
    } else if (value.slice(0, 5) === "false") {
      setPriority("false");
      setHelperText("Sorry, wrong answer!");
      setError(true);
      setIndex();
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value={choices[0].isAnswer + choices[0].id.toString()}
            control={<Radio />}
            label={choices[0].body}
          />
          <FormControlLabel
            value={choices[1].isAnswer + choices[1].id.toString()}
            control={<Radio />}
            label={choices[1].body}
          />
          <FormControlLabel
            value={choices[2].isAnswer + choices[2].id.toString()}
            control={<Radio />}
            label={choices[2].body}
          />
          <FormControlLabel
            value={choices[3].isAnswer + choices[3].id.toString()}
            control={<Radio />}
            label={choices[3].body}
          />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
    </form>
  );
}
