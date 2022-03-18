import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from '../img/actyv.logo.2.png';

const Footer = () => {
    return ( 
        <Container 
            style={{
              display:'flex',
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
              margin: "0em auto",
              width: "90%",
              padding: "1em 0em",
              maxWidth: "1800px",
            }}
          >
              {/* Custom logo */}
              <img src={logo} width="65" height="65" alt='logo-2'/>

              <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' }, justifyContent:'flex-end' }}>

              </Box>

              <Box sx={{ 
                flexGrow: 0, 
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
                alignContent: 'flex-end',
              }}>
                <Typography color='white' textTransform='none' fontSize='12px' fontFamily='Raleway' fontWeight='bold'>
                    Copyright &#169; 2022 Actyv.be
                </Typography>
              </Box>
        </Container>
    );
}
 
export default Footer;