import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PopUpNewDeck from "../PopUpNewDeck";

function AllDeck() {
  const decks = useSelector((state) => state.deck);
  const [trigger, setTrigger] = useState(false);

  const navigateToURL = (url) => {
    window.location.href = url;
  };

  const handleOnClickNewDeck = () => {
    setTrigger((prev) => true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {decks.length == 0 ? (
        <h1>You don't have any decks. Let's create a new one</h1>
      ) : (
        decks.map((deck) => (
          <div key={deck.id}>
            <h2>{deck.name}</h2>
            <Button
              variant="outlined"
              onClick={() => navigateToURL(`/decks/${deck.id}`)}
              sx={{ mt: 1, mr: 1 }}
            >
              Start Deck
            </Button>
          </div>
        ))
      )}

      <PopUpNewDeck trigger={trigger} setTrigger={setTrigger} />

      <div style={{ position: "absolute", bottom: 100, left: 870 }}>
        <Button
          onClick={() => handleOnClickNewDeck(true)}
          variant="outlined"
          sx={{
            mt: 1,
            mr: 1,
            color: "green",
          }}
        >
          CREATE NEW DECK
        </Button>
      </div>
    </div>
  );
}

export default AllDeck;
