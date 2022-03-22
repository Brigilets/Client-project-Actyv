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
import {a} from '@mui/material/Link';
import {Link} from "react-scroll";
import {animateScroll as scroll} from 'react-scroll';




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

    return (
        <AppBar 
          position="static" 
          style={{
            backgroundColor: 'white',
            boxShadow: "0px 0px 0px 0px",
            }}>
          <Container 
            style={{
              display:'flex',
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
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

              {/* Custom logo */}
              <Link onClick={() =>
              scroll.scrollToTop()}>
                <img src={logo} width="65" height="65" alt='logo-3'/>
              </Link>

              <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' }, justifyContent:'flex-end' }}>

                {/* Mobile menu button */}
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="secondary"
                  display="flex"
                  justifyContent="flex-end"
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
 
                    <MenuItem  onClick={handleCloseNavMenu}>
                      <Link to="formules"smooth={true} durattion={1000} textAlign="center" color="#370665" fontSize="14px" fontWeight='bold' fontFamily='Raleway' > Formules et activités proposées</Link>
                    </MenuItem>
                    <MenuItem  onClick={handleCloseNavMenu}>
                      <Link  to="aboutme"smooth={true} durattion={1000} textAlign="center" color="#370665" fontSize="14px" fontWeight='bold' fontFamily='Raleway' > À propos</Link>
                    </MenuItem>
                    <MenuItem  onClick={handleCloseNavMenu}>
                      <Link to="contact"smooth={true} durattion={1000} textAlign="center" color="#370665" fontSize="14px" fontWeight='bold' fontFamily='Raleway' > Contact</Link>
                    </MenuItem>
                </Menu>
              </Box>

              <Box sx={{ 
                flexGrow: 0, 
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
                alignContent: 'flex-end',
              
              }}>
                {/* Expanded menu list (as buttons) */}
          
                  <Button
                    
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, ml: 3 }}
                  >
                    <Link to='formules' smooth={true} duration={1000} color="#370665"  textTransform='none' fontSize='14px' fontFamily='Raleway' fontWeight='bold'>
                     Formules et activités proposées
                    </Link>
                    
                  </Button>

                  <Button
                    
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, ml: 3 }}
                  >
                    <Link to="aboutme" smooth={true}  color="#370665" duration={1000} textTransform='none' fontSize='14px' fontFamily='Raleway' fontWeight='bold'>
                    À propos
                    </Link>
                    
                  </Button>

                  <Button
                    
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, ml: 3 }}
                  >
                    <Link to="contact" smooth={true} color="#370665"  duration={1000}  textTransform='none' fontSize='14px' fontFamily='Raleway' fontWeight='bold'>
                    Contact
                    </Link>
                    
                  </Button>

                  
               
              </Box>
            {/* </Toolbar> */}
          </Container>
        </AppBar>
      );
}

export default Navbar;