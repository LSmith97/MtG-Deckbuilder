import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom'

export default function Nav(){
    return(
        <Stack spacing={1} direction="row" className='div'>
            <Link to="/" >
                <div className='div-item'>
                    About
                </div>
            </Link>
            <Link to="/decks" >
                <div className='div-item'>
                    View Decks
                </div>
            </Link>
            <Link to="/decks/new" >
                <div className='div-item'>
                    Deck Builder
                </div>
            </Link>
        </Stack>
    )
}