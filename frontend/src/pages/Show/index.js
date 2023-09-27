import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { getDeck, deleteDeck } from "../../utilities/deck-service";
import { Button, Paper, Stack } from "@mui/material";
import "./Show.css";

export default function Show() {
  const { id } = useParams();
  const [deck, setDeck] = useState(null);

  useEffect(() => {
    handleRequest();
  }, []);

  async function handleRequest() {
    try {
      const deckData = await getDeck(id);
      setDeck(deckData);
    } catch (error) {
      console.log(error);
    }
  }

  function loaded() {
    let cardNo = 0;
    deck.cardList.forEach((card) => {
      cardNo += card.number;
    });

    const cardDisplays = deck.cardList.map((item, index) => {
      return (
        <div>
          <h4>x{item.number}</h4>
          <Paper square={false} elevation={6}>
            <img src={item.image} width="200px" alt={item.id} />
          </Paper>
        </div>
      );
    });

    return (
      <>
        <h2>Deck Details</h2>
        <Paper className="show-stats" elevation={6}>
          <Stack>
            <h3>Deck Name: {deck.name}</h3>
            <h4>Total Cards: {cardNo} </h4>
            <h4>Unique Cards: {deck.cardList.length}</h4>
          </Stack>
        </Paper>
        <h2>Decklist:</h2>
        <div className="show-cards">{cardDisplays}</div>
        <Stack spacing={2} padding={2} direction="row" alignItems="center" justifyContent="center">
            <Button variant="outlined">Edit</Button>
            <Button variant="outlined">Delete</Button>
        </Stack>
      </>
    );
  }

  function loading() {
    return <h2>Loading...</h2>;
  }

  return deck ? loaded() : loading();
}
