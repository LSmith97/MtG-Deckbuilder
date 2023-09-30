import {
  Box,
  Button,
  Card,
  Paper,
  Drawer,
  Stack,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { searchCard } from "../../utilities/scryfall-service";
import { createCard } from "../../utilities/card-serivce";

export default function Sidebar({ state, setState, deck, setDeck }) {
  const [search, setSearch] = useState({
    query: "",
    filter: false,
    filterParams: {},
  });
  const [searchResults, setResults] = useState(null);
  const [selected, setSelected] = useState(null);

  function toggleOff() {
    setState(false);
  }

  function handleChange(event) {
    setSearch({ ...search, [event.target.name]: event.target.value });
  }

  function filterChange(event) {
    setSearch({...search, filterParams: {...search.filterParams, [event.target.name]: event.target.value}})
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
      const returned = await createCard(selected);
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
          <div>
            <h4>{card.name}</h4>
            <Paper
              square={false}
              elevation={6}
              className="results-card"
              onClick={() => {
                setSelected(card);
              }}
            >
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
          </div>
        );
      });
      return (
        <div className="selected">
          <h3>Results:</h3>
          <Card
            square={false}
            elevation={6}
            style={{ maxHeight: "50vmin", overflow: "auto" }}
            className="results-box"
            sx={{ backgroundColor: "lightgrey", border: "1px solid grey" }}
          >
            <div id="results-columns">{cardResults}</div>
          </Card>
          <h3>Selected Card:</h3>
          {selected ? (
            <>
              <p>{selected.name}</p>
              <Button onClick={handleSubmit} variant="outlined">
                Add to Deck
              </Button>
            </>
          ) : (
            <p>None</p>
          )}
        </div>
      );
    } else {
      return (
        <p>
          Enter your search above and press the search button to find a card
        </p>
      );
    }
  }

  function filtermenu() {
    return (
      <Card className="filter-menu" elevation={6}>
        <h3>Filter By:</h3>

        <label>
          Color:
          <Select
            onChange={filterChange}
            defaultValue={false}
            inputProps={{
              name: "color",
            }}
          >
            <MenuItem value={false}>Any</MenuItem>
            <MenuItem value={"w"}>White</MenuItem>
            <MenuItem value={"u"}>Blue</MenuItem>
            <MenuItem value={"b"}>Black</MenuItem>
            <MenuItem value={"r"}>Red</MenuItem>
            <MenuItem value={"g"}>Green</MenuItem>
          </Select>
        </label>

        <label>
          Mana Cost:
          <Select
            onChange={filterChange}
            defaultValue={false}
            inputProps={{
              name: "cmc",
            }}
          >
            <MenuItem value={false}>Any</MenuItem>
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </label>

        <label>
          Power:
          <Select
            onChange={filterChange}
            defaultValue={false}
            inputProps={{
              name: "pow",
            }}
          >
            <MenuItem value={false}>Any</MenuItem>
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </label>

        <label>
          Toughness:
          <Select
            onChange={filterChange}
            defaultValue={false}
            inputProps={{
              name: "tough",
            }}
          >
            <MenuItem value={false}>Any</MenuItem>
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem></Select>
        </label>
      </Card>
    );
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
          <input
            type="text"
            value={search.query}
            name="query"
            onChange={handleChange}
          ></input>

          <Button onClick={handleSearch} variant="outlined">
            Search
          </Button>
          <Button
            onClick={() => {
              setSearch({ ...search, filter: !search.filter });
            }}
            variant="outlined"
          >
            Filter
          </Button>
        </Stack>

        {search.filter ? filtermenu() : searched()}
      </Box>
    </Drawer>
  );
}
