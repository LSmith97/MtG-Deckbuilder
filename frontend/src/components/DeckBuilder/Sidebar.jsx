import { Box, Button, Card, Paper, Drawer, Stack } from "@mui/material";
import { useState } from "react";
import { searchCard } from "../../utilities/scryfall-service";
import { createCard } from "../../utilities/card-serivce";

export default function Sidebar({ state, setState, deck, setDeck }) {
  const [search, setSearch] = useState("");
  const [searchResults, setResults] = useState(null);

  function toggleOff() {
    setState(false);
  }

  function handleChange(event) {
    setSearch(event.target.value);
  }

  async function handleSearch() {
    try {
      const foundCard = await searchCard(search);
      setResults(foundCard);
    } catch (error) {
      console.log(error);
      setResults("error");
    }
  }

  async function handleSubmit() {
    try {
      const returned = await createCard(searchResults);
      setSearch("");
      setResults(null);
      const newDeck = { ...deck };
      newDeck.cardList.push({
        id: returned._id,
        number: 1,
        image: returned.imageUrl,
      });
      setDeck(newDeck);
    } catch (error) {
      console.log(error);
    }
  }

  function searched() {
    if (searchResults === "error") {
      return <p>No card found. Change your search and try again.</p>;
    } else if (searchResults) {
      const cardResults = searchResults.data.map((card) => {
        return (
          <>
            <h4>{card.name}</h4>
            <Paper square={false} elevation={6} className="results-card">
              <img
                src={
                  card.image_uris
                    ? card.image_uris.normal
                    : "https://i.imgur.com/h34xOBF.png"
                }
                width="200px"
                alt={card.name}
              />
            </Paper>
          </>
        );
      });
      return (
        <>
          <h2>Results:</h2>
          <Card
            square={false}
            elevation={6}
            style={{ maxHeight: "50vmin", overflow: "auto" }}
            className="results-box"
            sx={{ backgroundColor: "lightgrey" }}
          >
            <Stack spacing={2} alignItems="center" justifyContent="center">
              {cardResults}
            </Stack>
          </Card>
        </>
      );
    } else {
      return (
        <p>
          Enter your search above and press the search button to find a card
        </p>
      );
    }
  }

  return (
    <Drawer anchor="right" open={state} onClose={toggleOff}>
      <Box
        sx={{
          width: "50rem",
        }}
        className="sidebar"
      >
        <Stack padding="2" direction="row">
          <input type="text" value={search} onChange={handleChange}></input>

          <Button onClick={handleSearch} variant="outlined">
            Search
          </Button>
        </Stack>

        {searched()}
      </Box>
    </Drawer>
  );
}
