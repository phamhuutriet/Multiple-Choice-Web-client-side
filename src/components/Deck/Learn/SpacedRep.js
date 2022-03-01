import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Question from "../../question/Question";
import Button from "@mui/material/Button";

const timeHandle = (str) => {
  const times = str
    .slice(0, 10)
    .split("-")
    .map((time) => parseInt(time));
  const date = new Date(times[0], times[1] - 1, times[2]);
  date.setDate(date.getDate() - 1);
  return date;
};

function SpacedRep() {
  const { id } = useParams();
  const deck = useSelector((state) => {
    const fetchedDeck = { ...state.deck.find((deck) => deck.id == id) };
    const now = new Date();
    if (fetchedDeck != null) {
      fetchedDeck.questions = fetchedDeck.questions
        .filter((question) => timeHandle(question.spacedRepetition).getTime() <= now.getTime())
        .sort((q1, q2) => q1.priorityScore - q2.priorityScore);
    }
    return fetchedDeck != null ? fetchedDeck : null;
  });

  const navigate = useNavigate();
  const [idx, setIdx] = useState(0);
  const [completeQuestions, setCompleteQuestions] = useState(new Set());

  const handleOnClick = async () => {
    navigate(`/decks/${id}`);
  };

  const setIndex = (sign) => {
    if (sign == "asc") {
      setIdx(Math.min(idx + 1, deck.questions.length));
    } else if (sign == "desc") {
      setIdx((idx - 1 + deck.questions.length) % deck.questions.length);
    }
  };

  const inCompletedSet = (questionIdx) => {
    return completeQuestions.has(questionIdx);
  };

  console.log("deck is null ", deck == null);

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
        />
      )}

      {deck != null && idx == deck.questions.length ? (
        <Button onClick={() => handleOnClick()} sx={{ mt: 1, mr: 1 }} variant="outlined">
          END TEST
        </Button>
      ) : null}
    </div>
  );
}

export default SpacedRep;
