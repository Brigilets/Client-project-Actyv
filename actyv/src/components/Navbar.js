import * as React from 'react';
import "../components/Navbar.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../img/actyv_logo_3.png';
// import {a} from '@mui/material/Link';
import Link from '@mui/material/Link';

import { animateScroll as scroll } from 'react-scroll';




const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  function MouseOver(event) {
    event.target.style.cursor = 'pointer';
  }
  function MouseOut(event) {
    event.target.style.cursor = "default";
  }

 

  return (
    <AppBar
      // position="static" 
      position="fixed"
      style={{
        backgroundColor: 'white',
        boxShadow: "0px 0px 0px 0px",
      }}>
      <Container
        style={{
          display: 'flex',
         
          margin: "1em auto",
          width: "90%",
          padding: "0",
          maxWidth: "1800px"
        }}
      >
        {/* <Toolbar
            sx={{
              display:'flex',
              justifyContent: "space-between",
              alignContent: "flex-end"
            }}
            > */}

        




   {/* Mobile menu button */}
        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', marginRight:"2rem" }}>


          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="secondary"
            display="flex"
            justifyContent="space-evenly"
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile menu dropdown */}
          <Menu className='menu-links'
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {/* Dropdown menu contents */}

            <MenuItem onClick={handleCloseNavMenu}>
              <Link  id="text-decoration-none" href="./searchresults" textAlign="center" fontFamily='Raleway' > <Typography color="secondary" fontWeight='bold' fontSize="14px">Formules et activités</Typography></Link>

            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link  id="text-decoration-none" href="./organiser" textAlign="center" fontFamily='Raleway'> <Typography color="secondary" fontWeight='bold' fontSize="14px">Organisateurs</Typography></Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link  id="text-decoration-none" href="./visiteur" textAlign="center" fontFamily='Raleway'> <Typography color="secondary" fontWeight='bold' fontSize="14px">Visiteurs</Typography></Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link  id="text-decoration-none" href="./inscription" textAlign="center" fontFamily='Raleway' backgroundColor="secondary"> <Typography color="secondary" fontWeight='bold' fontSize="14px">S'inscrire</Typography></Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link  id="text-decoration-none" href="./connexion" textAlign="center" fontFamily='Raleway' > <Typography color="secondary" fontWeight='bold' fontSize="14px">Se connecter</Typography></Link>
            </MenuItem>
          </Menu>
        </Box>

{/* Custom logo */}
<a href='/'
          // sx={{ '&:hover': {cursor: "pointer"}}}
          onMouseOver={MouseOver} onMouseOut={MouseOut}
          onClick={() =>
            scroll.scrollToTop()}>
          <img src={logo} width="65" height="65" alt='logo-3' />
        </a>

 {/* Expanded menu list (as buttons) */}
        <Box  sx={{
          flexGrow: 0,
          display: { xs: 'none', md: 'flex' },
 

        }}>
          
          <Button 
            onClick={handleCloseNavMenu}
            sx={{ my: 2, ml: 3, width:"180px" ,textDecoration:"none" }}
          >
            <Link id="text-decoration-none" href='./searchresults' ><Typography color="secondary" textTransform='none' fontSize='16px' fontWeight='bold' textDecoration="none">Formules et activités</Typography>
            </Link>
            
          </Button>

          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, ml: 3 }}
          >
            <Link id="text-decoration-none" href='./organiser' ><Typography color="secondary" textTransform='none' fontSize='16px' fontWeight='bold'>Organisateurs</Typography>
            </Link>
          </Button>

          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, ml: 3 }}
          >
            <Link id="text-decoration-none" href="./visiteur" ><Typography color="secondary" textTransform='none' fontSize='16px' fontWeight='bold'>Visiteurs</Typography>
            </Link>
          </Button>
        </Box>


{/*Connexion buttons*/}

        <Box style={{
          display: 'flex',
          justifyContent: "flex-end",
          alignContent: "end",
          alignItems: "end",
          margin: "1em auto",
          width: "90%",
          padding: "0",
          maxWidth: "1800px"
        }}>

          <Button  id="inscription-button" variant='contained' color='secondary'
            sx={{ borderRadius: '20px', marginLeft:"1em"  }} >
            <Link href='./inscription' style={{
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
          <Button id="connexion-button" variant='contained' color='primary'
            sx={{ borderRadius: '20px',  marginLeft:"1em" }} >
            <Link href='./connexion' style={{
              textDecoration: 'none',
              color: '#370665',
            }}>
              <Typography textTransform='none' fontFamily="Caveat" fontSize="20px">
                Se connecter
              </Typography>
            </Link>
          </Button>
        </Box>


        {/* </Toolbar> */}
      </Container>
    </AppBar>
  );
}





export default Navbar;