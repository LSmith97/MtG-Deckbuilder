import { Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import Decks from "../../pages/Decks/";
import Show from "../../pages/Show/";
import New from "../../pages/New";

export default function Main(){
    return(
        <main>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/decks" element={<Decks />} />
                <Route path="/decks/new" element={<New />} />
                <Route path="/decks/:id" element={<Show />} />
            </Routes>
        </main>
    )
}