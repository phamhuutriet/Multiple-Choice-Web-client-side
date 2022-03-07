import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Question from "../../question/Question";
import Button from "@mui/material/Button";
import { updatePriorityScore } from "../../../redux/actions/actions";

function LearnDeck() {
  const jwt = useSelector((state) => state.userInfo).jwt;
  const dispatch = useDispatch();
  const { id } = useParams();
  const fetchedDeck = useSelector((state) => state.deck.find((deck) => deck.id == id));
  const [deck, setDeck] = useState(fetchedDeck);
  const navigate = useNavigate();
  const [idx, setIdx] = useState(0);
  const [completeQuestions, setCompleteQuestions] = useState(new Set());
  const [wrongQuestions, setWrongQuestions] = useState(new Set());

  const handleOnClick = async () => {
    for (var questionId of wrongQuestions) {
      console.log("iterate set ", questionId);
      const thisQuestion = deck.questions.find((question) => question.id == questionId);
      dispatch(updatePriorityScore(jwt, { ...thisQuestion, priorityScore: Math.max(0, thisQuestion.priorityScore + 1) }, id));
    }
    navigate(`/decks/${id}`);
  };

  const setIndex = () => {
    setIdx(Math.min(idx + 1, deck.questions.length));
  };

  const handleWrongQuestion = (questionIdx) => {
    const questionId = deck.questions[questionIdx].id;
    setWrongQuestions((prev) => {
      const newSet = new Set(prev);
      newSet.add(questionId);
      return newSet;
    });
    setDeck({ ...deck, questions: [...deck.questions, deck.questions[questionIdx]] });
  };

  const inCompletedSet = (questionIdx) => {
    return completeQuestions.has(questionIdx);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {deck == null ? <h1>LOADING DECK</h1> : <h1>{deck.name}</h1>}

      {deck == null ? (
        <h2>Loading</h2>
      ) : idx >= deck.questions.length ? (
        <h2>You've finished all the cards</h2>
      ) : (
        <Question
          question={deck.questions[idx]}
          deckId={id}
          setCompleteQuestions={setCompleteQuestions}
          questionIdx={idx}
          inCompletedSet={inCompletedSet}
          setIndex={setIndex}
          handleWrongQuestion={handleWrongQuestion}
          wrongQuestions={wrongQuestions}
        />
      )}

      {deck != null && idx >= deck.questions.length ? (
        <Button onClick={() => handleOnClick()} sx={{ mt: 1, mr: 1 }} variant="outlined">
          END TEST
        </Button>
      ) : null}
    </div>
  );
}

export default LearnDeck;
