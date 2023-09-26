import { Drawer } from "@mui/material";

export default function Sidebar({state}){
    return(
        <Drawer 
        anchor="right"
        className="sidebar"
        open={state}
        >

        </Drawer>
    )
}