import { Box, Button, Drawer } from "@mui/material";
import { useState } from "react";

export default function Sidebar({state, setState}){

    const [search, setSearch] = useState('')

    function toggleOff(){
        setState(false)
    }

    function handleChange(event) {
        setSearch(event.target.value);
    }

    function handleSearch(){
        
    }

    return(
        <Drawer 
        anchor='right'
        open={state}
        onClose={toggleOff}
        >
            <Box 
                sx={{
                    width: "50rem",
                }}
            >
                <input 
                type="text"
                value={search}
                onChange={handleChange}
                ></input>
                <Button
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
        </Drawer>
    )
}