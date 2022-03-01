import React from "react";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router";

function DeckHome() {
  const { id } = useParams();
  const navigate = useNavigate();

  const navigateLearn = () => {
    navigate(`/decks/${id}/learn/controller/`);
  };

  const navigateAddCard = () => {
    navigate(`/decks/${id}/addCard`);
  };

  const navigateDeckInfo = () => {
    navigate(`/decks/${id}/deckinfo`);
  };

  const navigateSpacedRep = () => {
    navigate(`/decks/${id}/spacedRep`);
  };

  return (
    <div>
      <Button onClick={() => navigateDeckInfo()} sx={{ mt: 1, mr: 1 }} variant="outlined">
        DECK INFO
      </Button>
      <Button onClick={() => navigateSpacedRep()} sx={{ mt: 1, mr: 1 }} variant="outlined">
        SPACED REPETITION
      </Button>
      <Button onClick={() => navigateLearn()} sx={{ mt: 1, mr: 1 }} variant="outlined">
        CUSTOM LEARN
      </Button>
      <Button onClick={() => navigateAddCard()} sx={{ mt: 1, mr: 1 }} variant="outlined">
        ADD CARDS
      </Button>
    </div>
  );
}

export default DeckHome;
