import React from "react";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router";

function DeckHome() {
  const { id } = useParams();
  const navigate = useNavigate();

  const navigateLearn = () => {
    navigate(`/decks/${id}/learn`);
  };

  const navigateAddCard = () => {
    navigate(`/decks/${id}/addCard`);
  };

  return (
    <div>
      <Button sx={{ mt: 1, mr: 1 }} variant="outlined">
        DECK INFO
      </Button>
      <Button
        onClick={() => navigateLearn()}
        sx={{ mt: 1, mr: 1 }}
        variant="outlined"
      >
        LEARN
      </Button>
      <Button
        onClick={() => navigateAddCard()}
        sx={{ mt: 1, mr: 1 }}
        variant="outlined"
      >
        ADD CARDS
      </Button>
    </div>
  );
}

export default DeckHome;
