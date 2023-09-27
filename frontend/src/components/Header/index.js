import Nav from "./Nav";
import "./Header.css";
import { Stack } from "@mui/material";

export default function Header() {
  return (
    <header  >
      <Stack padding={2} spacing={2} direction="row" alignItems="center" justifyContent="center">
        <img src="https://i.imgur.com/pjg3O8F.png" alt="logo" width="50px" id="logo"/>
        <h1>MtG Deck Builder</h1>
      </Stack>

      <Nav />
    </header>
  );
}
