import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom'
import LoginButton from '../Auth/LoginButton';

export default function Nav(){
    return(
        <Stack spacing={3} direction="row" className='nav'>
            <Link to="/" >
                <div className='nav-item'>
                    About
                </div>
            </Link>
            <Link to="/decks" >
                <div className='nav-item'>
                    View Decks
                </div>
            </Link>
            <Link to="/decks/new" >
                <div className='nav-item'>
                    Deck Builder
                </div>
            </Link>
            <LoginButton />
        </Stack>
    )
}