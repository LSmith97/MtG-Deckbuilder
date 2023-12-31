import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Card } from "@mui/material";
import { getUser } from "../../utilities/user-service";
import DeckCard from "./DeckCard";
import "./Profile.css";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    handleRequest();
  }, []);

  async function handleRequest() {
    try {
      const userData = await getUser(id);
      setProfile(userData);
    } catch (error) {
      console.log(error);
    }
  }

  function loaded() {
    const deckDisplays = profile.decks.map((deck) => {
      return <DeckCard deck={deck} />;
    });

    return (
      <>
        <h2>User Details:</h2>

        <Card
          className="user-profile"
          elevation={6}
          sx={{
            backgroundColor: "lightgrey",
            borderRadius: "1rem",
          }}
        >
          <h2>{profile.user.nickname}</h2>

          <h4>Created Decks: {profile.decks.length}</h4>
        </Card>

        <h2>{profile.user.nickname}'s Decks:</h2>

        <div className="all-decks">{deckDisplays}</div>
      </>
    );
  }

  function loading() {
    return <h2>Loading...</h2>;
  }

  return profile ? loaded() : loading();
}
