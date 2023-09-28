import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { getDeck, deleteDeck } from "../../utilities/deck-service";
import { Button, Paper, Stack, Avatar } from "@mui/material";
import "./Show.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Show() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { id } = useParams();
  const [deck, setDeck] = useState(null);

  const navigate = useNavigate();

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

  async function handleDelete() {
    try {
      const deletedResp = await deleteDeck(id);
      navigate("/decks");
    } catch (error) {
      console.log(error);
      navigate(`/decks/${id}`);
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
            <Stack
              spacing={1}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <h4>Created By:</h4>
              <Avatar
                alt={deck.owner.name}
                src={deck.owner.picture}
                sx={{ height: 30, width: 30 }}
              />
              <h4>{deck.owner.name}</h4>
            </Stack>
            <h4>Total Cards: {cardNo} </h4>
            <h4>Unique Cards: {deck.cardList.length}</h4>
          </Stack>
        </Paper>
        <h2>Decklist:</h2>
        <div className="show-cards">{cardDisplays}</div>

        {!isLoading && isAuthenticated && user.email === deck.owner.email ? (
          <Stack
            spacing={2}
            padding={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Link to={`/decks/${id}/edit`}>
              <Button variant="outlined">Edit</Button>
            </Link>
            <Button variant="outlined" onClick={handleDelete}>
              Delete
            </Button>
          </Stack>
        ) : null}
      </>
    );
  }

  function loading() {
    return <h2>Loading...</h2>;
  }

  return deck ? loaded() : loading();
}
