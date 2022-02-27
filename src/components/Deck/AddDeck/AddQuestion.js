import React, { useEffect } from "react";
import { useState } from "react";
import Answer from "./Answer";
import Description from "./Description";
import NumAnswerSelect from "./NumAnswerSelect";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addQuestionToDeck } from "../../../redux/actions/actions";

export default function AddQuestion() {
  const { id } = useParams();
  const [description, setDescription] = useState("");
  const [numAnswer, setNumAnswer] = React.useState(0);
  const [choices, setChoices] = useState([]);
  const [answerIdx, setAnswerIdx] = useState(null);
  const dispatch = useDispatch();

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

  const addCardToDeck = () => {
    const newQuestion = { description: description, choices: choices };
    dispatch(addQuestionToDeck(newQuestion, id));
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

      <Button
        onClick={() => addCardToDeck()}
        sx={{ mt: 1, mr: 1 }}
        variant="outlined"
      >
        SUBMIT
      </Button>
    </div>
  );
}
