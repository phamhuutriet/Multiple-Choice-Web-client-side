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
  const [answerIdx, setAnswerIdx] = useState(null);

  useEffect(() => {
    if (numAnswer <= choices.length) {
      setChoices((prev) => choices.slice(0, numAnswer));
    } else if (choices.length == 0) {
      setChoices((prev) => [...Array(numAnswer)]);
    } else {
      const addArray = [...Array(numAnswer - choices.length)];
      setChoices((prev) => choices.concat(addArray));
    }
  }, [numAnswer]);

  useEffect(() => {
    updateAnswerIndex(answerIdx);
  }, [answerIdx]);

  const updateChoice = (idx, updatedChoice) => {
    setChoices((prev) =>
      choices.map((choice, i) => (i == idx ? updatedChoice : choice))
    );
  };

  const updateAnswerIndex = (idx) => {
    setChoices((prev) =>
      choices.map((choice, i) =>
        i == idx
          ? { ...choice, isAnswer: true }
          : { ...choice, isAnswer: false }
      )
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

      {choices.map((choice, i) => (
        <div key={i}>
          <Answer
            isAnswer={i == answerIdx}
            updateChoice={updateChoice}
            idx={i}
            setAnswerIdx={setAnswerIdx}
          />
          <br />
        </div>
      ))}

      <Button sx={{ mt: 1, mr: 1 }} variant="outlined">
        SUBMIT
      </Button>
    </div>
  );
}
