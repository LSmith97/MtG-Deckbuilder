import DeckBuilder from "../../components/DeckBuilder";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { getDeck, updateDeck } from "../../utilities/deck-service";
import { useAuth0 } from "@auth0/auth0-react";

export default function New() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [editDeck, setEditDeck] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await updateDeck(id, editDeck);
      navigate(`/decks/${id}`);
    } catch (error) {
      console.log(error);
      navigate("/decks/new");
    }
  }

  useEffect(() => {
    handleRequest();
  }, []);

  async function handleRequest() {
    try {
      const deckData = await getDeck(id);
      setEditDeck(deckData);
    } catch (error) {
      console.log(error);
      navigate(`/decks/${id}`);
    }
  }

  function loaded() {
    return (
      <>
        {!isLoading && isAuthenticated && user.email === editDeck.owner.email ? (
          <DeckBuilder
            handleSubmit={handleSubmit}
            deck={editDeck}
            setDeck={setEditDeck}
          />
        ) : (
          <h2>You don't have access to edit this deck</h2>
        )}
      </>
    );
  }

  function loading() {
    return <h2>Loading...</h2>;
  }

  return editDeck ? loaded() : loading();
}
