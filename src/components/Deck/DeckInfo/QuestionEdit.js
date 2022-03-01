import React, { useEffect } from "react";
import { useState } from "react";
import Answer from "../AddDeck/Answer";
import Description from "../AddDeck/Description";
import NumAnswerSelect from "../AddDeck/NumAnswerSelect";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateQuestion } from "../../../redux/actions/actions";
import FormHelperText from "@mui/material/FormHelperText";
import * as api from "../../../api/index";

// CONSTANTS
const initDescription = "";
const initNumAnswer = 0;
const initChoices = [];
const initAnswerIdx = null;
const initHelperText = "";

export default function QuestionEdit() {
  // INSTANCES
  const { id, questionId } = useParams();
  const [description, setDescription] = useState(initDescription);
  const [numAnswer, setNumAnswer] = useState(initNumAnswer);
  const [choices, setChoices] = useState(initChoices);
  const [answerIdx, setAnswerIdx] = useState(initAnswerIdx);
  const [helperText, setHelperText] = React.useState(initHelperText);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // USE EFFECTS SITE
  console.log(choices);

  // Set number of choices effect
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

  // Set index effect
  useEffect(() => {
    updateAnswerIndex(answerIdx);
  }, [answerIdx]);

  // Fetch question effect
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.fetchQuestionById(questionId);
      setDescription((prev) => data.description);
      setChoices((prev) => data.choices);
      setNumAnswer((prev) => data.choices.length);

      for (let i = 0; i < data.choices.length; i++) {
        if (data.choices[i].isAnswer == true) {
          setAnswerIdx((prev) => i);
        }
      }
    };
    fetchData();
  }, []);

  // METHODS
  const updateChoice = (idx, updatedChoice) => {
    setChoices((prev) => choices.map((choice, i) => (i == idx ? { ...choice, body: updatedChoice.body, isAnswer: updatedChoice.isAnswer } : choice)));
  };

  const updateAnswerIndex = (idx) => {
    setChoices((prev) => choices.map((choice, i) => (i == idx ? { ...choice, isAnswer: true } : { ...choice, isAnswer: false })));
  };

  const resetDefault = () => {
    setDescription((prev) => initDescription);
    setChoices((prev) => initChoices);
    setNumAnswer((prev) => initNumAnswer);
    setAnswerIdx((prev) => initAnswerIdx);
    setHelperText((prev) => initHelperText);
  };

  const updateQuestionToDeck = () => {
    if (answerIdx != null) {
      if (!isChoiceBodyCollided()) {
        const updatedQuestion = { description: description, choices: choices };
        console.log(updatedQuestion);
        dispatch(updateQuestion(updatedQuestion, questionId, id));
        setHelperText((prev) => "");
        resetDefault();
        navigate(`/decks/${id}/deckinfo/allQuestions`);
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
      <h2>Edit Question</h2>
      <Description setParentDescription={setDescription} description={description} />

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
            body={choice != null ? choice.body : ""}
          />
          <br />
        </div>
      ))}

      <Button onClick={() => updateQuestionToDeck()} sx={{ mt: 1, mr: 1 }} variant="outlined">
        SUBMIT
      </Button>

      <FormHelperText style={{ textAlign: "center", color: "red" }}>{helperText}</FormHelperText>
    </div>
  );
}
