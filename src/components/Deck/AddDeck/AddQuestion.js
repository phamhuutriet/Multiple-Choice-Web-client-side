import React, { useEffect } from "react";
import { useState } from "react";
import Answer from "./Answer";
import Description from "./Description";
import NumAnswerSelect from "./NumAnswerSelect";
import Button from "@mui/material/Button";

export default function AddQuestion() {
  const [description, setDescription] = useState("");
  const [numAnswer, setNumAnswer] = React.useState(0);
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    setChoices((prev) => [...Array(numAnswer)]);
  }, [numAnswer]);

  const updateChoice = (idx, updatedChoice) => {
    setChoices((prev) =>
      choices.map((choice, i) => (i == idx ? updatedChoice : choice))
    );
  };

  console.log(choices);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Add Question</h2>
      <Description setDescription={setDescription} description={description} />

      <div>
        <h4> Number of Answers </h4>
        <NumAnswerSelect numAnswer={numAnswer} setNumAnswer={setNumAnswer} />
      </div>

      {choices.map((e, i) => (
        <div key={i}>
          <Answer updateChoice={updateChoice} idx={i} />
          <br />
        </div>
      ))}

      <Button sx={{ mt: 1, mr: 1 }} variant="outlined">
        SUBMIT
      </Button>
    </div>
  );
}
