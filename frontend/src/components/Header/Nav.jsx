import { Stack, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import LoginButton from "../Auth/LoginButton";
import LogoutButton from "../Auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function Nav() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <Stack spacing={3} direction="row" className="nav">
      <Link to="/">
        <div className="nav-item">About</div>
      </Link>
      <Link to="/decks">
        <div className="nav-item">View Decks</div>
      </Link>
      <Link to="/decks/new">
        <div className="nav-item">Deck Builder</div>
      </Link>
      {!isLoading && isAuthenticated ? (
        <>
          <Stack
            className="nav-end"
            spacing={1}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <h3>Signed in as:</h3>
            <Avatar
              alt={user.name}
              src={user.picture}
              sx={{ height: 30, width: 30 }}
            />
            <h3>{user.nickname}</h3>
          </Stack>
          <LogoutButton />
        </>
      ) : (
        <LoginButton  className="nav-end"/>
      )}
    </Stack>
  );
}
