import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Question from "./Question";

function Deck() {
  const { id } = useParams();
  const deck = useSelector((state) => state.deck.find((deck) => deck.id == id));
  let idx = 0;

  return (
    <div>
      <h1>Deck number {id} </h1>
      {deck == null ? (
        <h2>Loading</h2>
      ) : (
        <Question question={deck.questions[idx]} deckId={id} />
      )}
    </div>
  );
}

export default Deck;
