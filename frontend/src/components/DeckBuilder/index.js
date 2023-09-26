import Sidebar from "./Sidebar";
import "./DeckBuilder.css";
import { useState } from "react";
import { Button } from "@mui/material";

export default function DeckBuilder({ handleSubmit, deck, setDeck }) {
  const [showBar, setShowBar] = useState(false);

  function toggleBar() {
    setShowBar(!showBar);
  }

  return (
    <div>
      <Button
        onClick={toggleBar}
      >
        Add Card
      </Button>
      <Sidebar state={showBar} />
    </div>
  );
}
