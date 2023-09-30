import { Stack, Paper } from "@mui/material";
import "./About.css"

export default function About(){
    return(
        <Stack spacing={4} className="about">
            <h2>Getting Started</h2>
            <Paper elevation={6} className="about-card">
                <h3>How do I make a deck?</h3>
                <p>To create a new deck, head to the Deck Builder page. Add cards  to your deck by clicking on the 'Add Cards' button and searching for your desired card. When you're finished, click the 'submit' button.</p>
            </Paper>
            <Paper elevation={6} className="about-card">
                <h3>Where can I see my Decks?</h3>
                <p>To view an existing deck, head to the 'View Decks' page. Here, you can see a list of all the decks that have been created. To see details on a particular deck, click on the card for the deck you want to view.</p>
            </Paper>
            <Paper elevation={6} className="about-card">
                <h3>How do I edit or delete existing decks?</h3>
                <p>To change or remove an existing deck, head to the deck details page for the deck you want to change and click on the "edit" and "delete" buttons respectively.</p>
            </Paper>
        </Stack>
    )
}