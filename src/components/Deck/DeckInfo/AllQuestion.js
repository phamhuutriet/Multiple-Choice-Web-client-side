import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import * as api from "../../../api/index";
import QuestionInfo from "./QuestionInfo";

function AllQuestion() {
  const { id } = useParams();
  const questions = useSelector((state) => {
    const fetchedDeck = state.deck.find((deck) => deck.id == id);
    return fetchedDeck != null ? fetchedDeck.questions : [];
  });

  return (
    <div>
      {questions.length == 0 ? (
        <h3>You don't have any questions</h3>
      ) : (
        <div>
          {questions.map((question, idx) => {
            return <QuestionInfo key={idx} question={question} deckId={id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default AllQuestion;
