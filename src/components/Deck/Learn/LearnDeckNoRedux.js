import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Question from "../../question/Question";
import Button from "@mui/material/Button";
import * as api from "../../../api/index";

function LearnDeckNoRedux({ shuffleQuestion, shuffleChoice }) {
  const { id } = useParams();
  const [deck, setDeck] = useState([]);
  const navigate = useNavigate();
  const [idx, setIdx] = useState(0);
  const [completeQuestions, setCompleteQuestions] = useState(new Set());

  useEffect(() => {
    const fetchDeck = async () => {
      const { data } = await api.fetchDeckQuestionById(id, true, true);
      setDeck(data);
    };
    fetchDeck();
  }, []);

  const handleOnClick = async () => {
    navigate(`/decks/${id}`);
  };

  const setIndex = (sign) => {
    if (sign == "asc") {
      setIdx(Math.min(idx + 1, deck.length));
    } else if (sign == "desc") {
      setIdx((idx - 1 + deck.length) % deck.length);
    }
  };

  const inCompletedSet = (questionIdx) => {
    return completeQuestions.has(questionIdx);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {deck == null ? <h1>LOADING DECK</h1> : <h1>{deck.name}</h1>}

      {deck.length == 0 ? (
        <h2>Loading</h2>
      ) : idx == deck.length ? (
        <h2>You've finished all the cards</h2>
      ) : (
        <Question
          question={deck[idx]}
          deckId={id}
          setCompleteQuestions={setCompleteQuestions}
          questionIdx={idx}
          inCompletedSet={inCompletedSet}
          setIndex={setIndex}
        />
      )}

      {/* {deck == null || idx == deck.questions.length ? null : (
        <div>
          <Button
            onClick={() => setIndex("desc")}
            sx={{ mt: 1, mr: 1 }}
            variant="outlined"
          >
            BACK
          </Button>
          <Button
            onClick={() => setIndex("asc")}
            sx={{ mt: 1, mr: 1 }}
            variant="outlined"
          >
            NEXT
          </Button>
        </div>
      )} */}

      {deck.length == 0 && idx == deck.length ? (
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

export default LearnDeckNoRedux;
