import { getDecks } from "../../utilities/deck-service";
import { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import DeckCard from "./DeckCard";
import "./Decks.css";

export default function Decks() {
  const [deckList, setDeckList] = useState(null);

  useEffect(() => {
    handleRequest();
  }, []);

  async function handleRequest() {
    try {
      const deckData = await getDecks();
      setDeckList(deckData);
    } catch (error) {
      console.log(error);
    }
  }

  function loading() {
    return <h2>Loading...</h2>;
  }

  function loaded() {
    const deckDisplays = deckList.map((deck) => {
      return <DeckCard deck={deck} />;
    });

    return (
      <div className="all-decks">
        {deckDisplays}
      </div>
    );
  }

  return (
    <div>
      <h2>All Decks</h2>
      {deckList ? loaded() : loading()}
    </div>
  );
}
