import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Question from "./question/Question";
import Button from "@mui/material/Button";
import { updatePriorityScore } from "../redux/actions/actions";

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

  const updateQuestion = (updatedQuestion) => {
    setDeck({
      ...deck,
      questions: deck.questions.map((question) =>
        question.id === updatedQuestion.id ? updatedQuestion : question
      ),
    });
  };

  const handleOnClick = () => {
    for (const question of deck.questions) {
      console.log(question);
      dispatch(updatePriorityScore(question, id));
    }
    navigate("/");
  };

  const setIndex = () => {
    setIdx(Math.min(idx + 1, deck.questions.length - 1));
  };

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
          setIndex={setIndex}
        />
      )}

      {deck == null ? null : (
        <Button
          onClick={() => setIndex()}
          sx={{ mt: 1, mr: 1 }}
          variant="outlined"
        >
          NEXT QUESTION
        </Button>
      )}

      {deck != null && idx == deck.questions.length - 1 ? (
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
