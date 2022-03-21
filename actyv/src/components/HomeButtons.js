import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import {Link} from 'react-router-dom';
import Link from '@mui/material/Link';


const slogan = 'Venez voir Bruxelles à travers nos yeux !';

const HomeButtons = () => {
    return ( 
        <Container
            style={{
                background: "linear-gradient(180deg, #ffffff 0%, rgba(252, 153, 24, 0.6) 100%)",
                padding: "8em 3em 7em",
                boxShadow: "0px 0px",
                maxWidth: '100%'
            }}
        >
            <Typography 
                color='secondary' 
                textTransform='none'  
                fontSize='18px' 
                fontFamily='Raleway' 
                fontStyle='italic'>
                    {slogan}
            </Typography>

            
            <br /> <br />
            <Box>
                <Button variant='contained' color='secondary' 
                sx={{borderRadius:'20px'}} >
                    <Link href='/inscription' style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}>
                        <Typography textTransform='none' fontFamily="Caveat" fontSize="20px">
                            S'inscrire
                        </Typography>
                    </Link>
                </Button>
                <br />
                <br />
                <Button variant='contained' color='primary'
                sx={{borderRadius:'20px'}} >
                    <Link href='/connexion' style={{
                        textDecoration: 'none',
                        color: '#370665',
                    }}>
                        <Typography textTransform='none' fontFamily="Caveat" fontSize="20px">
                            Se connecter
                        </Typography>
                    </Link>
                </Button>
            </Box>

        </Container>
     );
}
 
export default HomeButtons;