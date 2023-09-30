import { Card, Paper, Stack, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

export default function DeckCard({ deck }) {
  let cardNo = 0;
  deck.cardList.forEach((card) => {
    cardNo += card.number;
  });
  return (
    <Link to={`/decks/${deck._id}`}>
      <Card
        elevation={6}
        className="deck-card"
        sx={{
          backgroundColor: "lightgrey",
          borderRadius: "1rem",
        }}
      >
        <h3>{deck.name}</h3>
        <Stack spacing={0} className="deck-stats">
          <Stack
            spacing={1}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <h4>Created By:</h4>
            <Avatar
              alt={deck.owner.nickname}
              src={deck.owner.picture}
              sx={{ height: 30, width: 30 }}
            />
            <h4>{deck.owner.nickname}</h4>
          </Stack>
          <h4>Total Cards: {cardNo}</h4>
          <h4>Unique Cards: {deck.cardList.length}</h4>
        </Stack>

        <Paper className="img-container" square={false} elevation={6}>
          <img src={deck.cardList[0].image} width="100px" alt="card preview" />
        </Paper>
      </Card>
    </Link>
  );
}
