import DeckBuilder from "../../components/DeckBuilder";
import { useState } from "react";
import { useNavigate } from "react-router";
import { createDeck } from "../../utilities/deck-service";

export default function New() {
  const [newDeck, setNewDeck] = useState({
    name: "",
    cardList: [],
  });

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await createDeck(newDeck);
      navigate(`/decks`);
    } catch (error) {
      console.log(error);
      navigate("/decks/new");
    }
  }

  return (
  <DeckBuilder 
    handleSubmit={handleSubmit}
    deck={newDeck}
    setDeck={setNewDeck}
  />
  )
}
