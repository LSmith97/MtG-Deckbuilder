import Sidebar from "./Sidebar";
import "./DeckBuilder.css";
import { useState } from "react";
import { Button, Paper, Stack } from "@mui/material";

export default function DeckBuilder({ handleSubmit, deck, setDeck }) {
  const [showBar, setShowBar] = useState(false);

  function toggleBar() {
    setShowBar(!showBar);
  }

  const cardDisplays = deck.cardList.map((item) => {
    return (
      <Paper square={false} elevation={6} className="card-container">
        <img
          src={item.image}
          width="200px"
          alt={item.id}
        />
        <Stack
            spacing={1}
            padding={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Button variant="outlined">+</Button>
            <p>{item.number}</p>
            <Button variant="outlined">-</Button>
        </Stack>
      </Paper>
    );
  });

  return (
    <div>
      <Button onClick={toggleBar} variant="outlined">
        Add Card
      </Button>
      <div className="card-field">
        {cardDisplays}
      </div>
      <Sidebar
        state={showBar}
        setState={setShowBar}
        deck={deck}
        setDeck={setDeck}
      />
    </div>
  );
}
