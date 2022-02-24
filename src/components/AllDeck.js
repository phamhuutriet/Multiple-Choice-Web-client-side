import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function AllDeck() {
  const decks = useSelector((state) => state.deck);

  const navigateToURL = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      {decks.length == 0 ? (
        <h1>LOADING</h1>
      ) : (
        decks.map((deck) => (
          <div>
            <h2 key={deck.id}>{deck.name}</h2>
            <Button
              onClick={() => navigateToURL(`/decks/${deck.id}`)}
              sx={{ my: 1, color: "red", display: "block" }}
            >
              Start Deck
            </Button>
          </div>
        ))
      )}
    </div>
  );
}

export default AllDeck;
