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
  let idx = 0;

  useEffect(() => {
    setDeck(fetchedDeck);
  }, [fetchedDeck]);

  const updateQuestion = (updatedQuestion) => {
    setDeck({
      ...deck,
      questions: deck.questions.map((question) =>
        question.id === updatedQuestion.id ? updatedQuestion : question
      ),
    });
  };

  const handleOnclick = () => {};

  return (
    <div>
      <h1>Deck number {id} </h1>
      {deck == null ? (
        <h2>Loading</h2>
      ) : (
        <Question
          question={deck.questions[idx]}
          deckId={id}
          updateQuestion={updateQuestion}
        />
      )}
      <Button
        onClick={() => navigate("/")}
        sx={{ mt: 1, mr: 1 }}
        variant="outlined"
      >
        END TEST
      </Button>
    </div>
  );
}

export default Deck;
