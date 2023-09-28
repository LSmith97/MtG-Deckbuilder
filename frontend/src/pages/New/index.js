import DeckBuilder from "../../components/DeckBuilder";
import { useState } from "react";
import { useNavigate } from "react-router";
import { createDeck } from "../../utilities/deck-service";
import { useAuth0 } from "@auth0/auth0-react";

export default function New() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [newDeck, setNewDeck] = useState({
    name: "",
    cardList: [],
  });

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setNewDeck({ ...newDeck, owner: user });
    try {
      await createDeck(newDeck);
      navigate(`/decks`);
    } catch (error) {
      console.log(error);
      navigate("/decks/new");
    }
  }

  return (
    <>
      {!isLoading && isAuthenticated ? (
        <DeckBuilder
          handleSubmit={handleSubmit}
          deck={newDeck}
          setDeck={setNewDeck}
        />
      ) : (
        <h2>Please Log in to use the deck builder</h2>
      )}
    </>
  );
}
