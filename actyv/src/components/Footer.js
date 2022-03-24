import * as React from 'react';
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
              <Typography color='white' textTransform='none' fontSize='13px' fontWeight='bold'>
                  Copyright &#169; 2022 Actyv.be
              </Typography>
        </Container>
    );
}
 
export default Footer;