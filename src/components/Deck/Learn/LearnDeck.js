import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Question from "../../question/Question";
import Button from "@mui/material/Button";

function LearnDeck() {
  const { id } = useParams();
  const deck = useSelector((state) => state.deck.find((deck) => deck.id == id));
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

  return (
    <div style={{ textAlign: "center" }}>
      {deck == null ? <h1>LOADING DECK</h1> : <h1>{deck.name}</h1>}

      {deck == null ? (
        <h2>Loading</h2>
      ) : idx == deck.questions.length ? (
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

export default LearnDeck;
