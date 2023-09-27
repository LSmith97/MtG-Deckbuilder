import { Card } from "@mui/material";
import { Link } from "react-router-dom";

export default function DeckCard({ deck }) {
  return (
    <Link to={`/decks/${deck._id}`}>
      <Card
        sx={{
          backgroundColor: "lightgrey",
          borderRadius: "3rem",
          width: "50%",
        }}
      >
        <h3>{deck.name}</h3>
      </Card>
    </Link>
  );
}
