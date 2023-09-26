import { Box, Button, Drawer, Stack } from "@mui/material";
import { useState } from "react";
import { searchCard } from "../../utilities/scryfall-service";
import { createCard } from "../../utilities/card-serivce";

export default function Sidebar({ state, setState }) {
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
        const returned = await createCard(searchResults)
        console.log(returned)
    } catch (error) {
        console.log(error)
    }
  }

  function searched() {
    if (searchResults === "error") {
      return <p>No card found. Change your search and try again.</p>;
    } else if (searchResults) {
      return (
        <>
          <img
            src={searchResults.image_uris.normal}
            width="300px"
            alt={searchResults.name}
          />
          <Button onClick={handleSubmit} variant="outlined">Add to Deck</Button>
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
