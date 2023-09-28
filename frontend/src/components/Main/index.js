import { Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import Decks from "../../pages/Decks/";
import Show from "../../pages/Show/";
import New from "../../pages/New";
import Edit from "../../pages/Edit";
import Profile from "../../pages/Profile";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/decks" element={<Decks />} />
        <Route path="/decks/new" element={<New />} />
        <Route path="/decks/:id" element={<Show />} />
        <Route path="/decks/:id/edit" element={<Edit />} />
        <Route path="/users/:id" element={<Profile />} />
      </Routes>
    </main>
  );
}
