import DeckBuilder from "../../components/DeckBuilder";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { getDeck, updateDeck } from "../../utilities/deck-service";

export default function New() {
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

  function loaded(){
    return (
    <DeckBuilder 
    handleSubmit={handleSubmit}
    deck={editDeck}
    setDeck={setEditDeck}
  />
  )
  }

  function loading(){
    return <h2>Loading...</h2>
  }

  return editDeck ? loaded() : loading();
}
