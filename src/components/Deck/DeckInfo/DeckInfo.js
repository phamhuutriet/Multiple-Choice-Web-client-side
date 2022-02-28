import React from "react";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router";

function DeckInfo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const navigateAllQuestion = () => {
    navigate(`/decks/${id}/deckinfo/allQuestions`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h4>DECK INFO</h4>
      <Button onClick={() => navigateAllQuestion()} sx={{ mt: 1, mr: 1 }} variant="outlined">
        ALL QUESTIONS
      </Button>
    </div>
  );
}

export default DeckInfo;
