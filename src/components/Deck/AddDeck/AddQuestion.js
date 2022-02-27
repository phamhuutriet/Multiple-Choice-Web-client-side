import React, { useEffect } from "react";
import { useState } from "react";
import Answer from "./Answer";
import Description from "./Description";
import NumAnswerSelect from "./NumAnswerSelect";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addQuestionToDeck } from "../../../redux/actions/actions";
import FormHelperText from "@mui/material/FormHelperText";

// CONSTANTS
const initDescription = "";
const initNumAnswer = 0;
const initChoices = [];
const initAnswerIdx = null;
const initHelperText = "";

export default function AddQuestion() {
  // INSTANCES
  const { id } = useParams();
  const [description, setDescription] = useState(initDescription);
  const [numAnswer, setNumAnswer] = useState(initNumAnswer);
  const [choices, setChoices] = useState(initChoices);
  const [answerIdx, setAnswerIdx] = useState(initAnswerIdx);
  const [helperText, setHelperText] = React.useState(initHelperText);
  const dispatch = useDispatch();

  // USE EFFECTS SITE
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

  // METHODS
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

  const resetDefault = () => {
    setDescription((prev) => initDescription);
    setChoices((prev) => initChoices);
    setNumAnswer((prev) => initNumAnswer);
    setAnswerIdx((prev) => initAnswerIdx);
    setHelperText((prev) => initHelperText);
  };

  const addCardToDeck = () => {
    if (answerIdx != null) {
      if (!isChoiceBodyCollided()) {
        const newQuestion = { description: description, choices: choices };
        dispatch(addQuestionToDeck(newQuestion, id));
        setHelperText((prev) => "");
        resetDefault();
      } else {
        setHelperText((prev) => "Answers' bodies collided");
      }
    } else {
      setHelperText((prev) => "Please set the answer before submitting");
    }
  };

  const isChoiceBodyCollided = () => {
    const updatedMap = new Set();
    choices.forEach((choice) => updatedMap.add(choice.body));
    return updatedMap.size < choices.length;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Add Question</h2>
      <Description
        setParentDescription={setDescription}
        description={description}
      />

      <div>
        <h3> Number of Answers </h3>
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

      <FormHelperText style={{ textAlign: "center", color: "red" }}>
        {helperText}
      </FormHelperText>
    </div>
  );
}
