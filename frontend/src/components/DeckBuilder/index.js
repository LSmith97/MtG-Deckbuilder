import Sidebar from "./Sidebar";
import "./DeckBuilder.css";
import { useState } from "react";
import { Button, Paper, Stack } from "@mui/material";

export default function DeckBuilder({ handleSubmit, deck, setDeck }) {
  const [showBar, setShowBar] = useState(false);

  function toggleBar() {
    setShowBar(!showBar);
  }

  function tickUp(index) {
    const updatedDeck = { ...deck };
    if (updatedDeck.cardList[index].number < 4) {
      updatedDeck.cardList[index].number++;
    }
    setDeck(updatedDeck);
  }

  function tickDown(index) {
    const updatedDeck = { ...deck };
    if (updatedDeck.cardList[index].number > 1) {
      updatedDeck.cardList[index].number--;
    } else {
      updatedDeck.cardList.splice(index, 1);
    }
    setDeck(updatedDeck);
  }

  function handleChange(event) {
    const updatedDeck = { ...deck }
    updatedDeck.name = event.target.value
    setDeck(updatedDeck)
  }

  const cardDisplays = deck.cardList.map((item, index) => {
    return (
      <Paper square={false} elevation={6} className="card-container">
        <img src={item.image} width="200px" alt={item.id} />
        <Stack
          spacing={1}
          padding={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="outlined"
            onClick={() => {
              tickUp(index);
            }}
          >
            +
          </Button>
          <p>{item.number}</p>
          <Button
            variant="outlined"
            onClick={() => {
              tickDown(index);
            }}
          >
            -
          </Button>
        </Stack>
      </Paper>
    );
  });

  return (
    <div>
      <h2>Deck Builder</h2>

      <Stack
        spacing={1}
        padding={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <label>Deck Name:</label>

        <input value={deck.name} onChange={handleChange} required></input>
      </Stack>

      <Button
        onClick={toggleBar}
        variant="outlined"
      >
        Add Cards
      </Button>

      {deck.cardList.length ? (
        <>
        <div className="card-field">{cardDisplays}</div>
        <Button
            variant="outlined"
            onClick={handleSubmit}
        >
            Submit Deck
        </Button>
        </>
      ) : (
        <p>You have no cards! Add some and they'll show up here</p>
      )}

      <Sidebar
        state={showBar}
        setState={setShowBar}
        deck={deck}
        setDeck={setDeck}
      />
    </div>
  );
}
