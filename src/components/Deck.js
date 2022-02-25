import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Question from "./question/Question";
import Button from "@mui/material/Button";

function Deck() {
  const { id } = useParams();
  const fetchedDeck = useSelector((state) =>
    state.deck.find((deck) => deck.id == id)
  );
  const [deck, setDeck] = useState(fetchedDeck);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setDeck(fetchedDeck);
  }, [fetchedDeck]);

  const handleOnClick = async () => {
    navigate("/");
  };

  const setIndex = () => {
    setIdx(Math.min(idx + 1, deck.questions.length));
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
          setIndex={setIndex}
        />
      )}

      {deck != null && idx == deck.questions.length ? (
        <Button
          onClick={() => handleOnClick()}
          sx={{ mt: 1, mr: 1 }}
          variant="outlined"
        >
          END TEST
        </Button>
      ) : null}
    </div>
  );
}

export default Deck;
