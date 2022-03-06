import React from "react";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuestion } from "../../../redux/actions/actions";

function QuestionInfo({ question, deckId }) {
  const jwt = useSelector((state) => state.userInfo).jwt;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToEdit = () => {
    navigate(`/decks/${deckId}/deckinfo/allQuestions/${question.id}/edit`);
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(jwt, question.id, deckId));
  };

  return (
    <div style={{ justifyContent: "center", display: "flex", flexDirection: "row" }}>
      <h4>
        Question ID {question.id}: {question.description.slice(0, 30) + "..."}
      </h4>
      <Button onClick={() => navigateToEdit()} sx={{ mt: 1, mr: 1 }} variant="outlined">
        EDIT
      </Button>
      <Button onClick={() => handleDelete()} sx={{ mt: 1, mr: 1 }} variant="outlined">
        DELETE
      </Button>
    </div>
  );
}

export default QuestionInfo;
