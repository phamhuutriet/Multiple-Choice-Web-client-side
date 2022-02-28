import React from "react";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";

function QuestionInfo({ question, id }) {
  const navigate = useNavigate();

  const navigateToEdit = () => {
    navigate(`/decks/${id}/deckinfo/allQuestions/${question.id}/edit`);
  };

  return (
    <div style={{ justifyContent: "center", display: "flex", flexDirection: "row" }}>
      <h4>
        Question ID {question.id}: {question.description.slice(0, 30) + "..."}
      </h4>
      <Button onClick={() => navigateToEdit()} sx={{ mt: 1, mr: 1 }} variant="outlined">
        EDIT
      </Button>
      <Button sx={{ mt: 1, mr: 1 }} variant="outlined">
        DELETE
      </Button>
    </div>
  );
}

export default QuestionInfo;
