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

    function MouseOver(event) {
      event.target.style.cursor = 'pointer';
    }
    function MouseOut(event){
      event.target.style.cursor="default";
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
              <Link to='/'
              // sx={{ '&:hover': {cursor: "pointer"}}}
              onMouseOver={MouseOver} onMouseOut={MouseOut}
              onClick={() =>
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
                      <Link to="formules"smooth={true} duration={1000} textAlign="center" fontFamily='Raleway'> <Typography color="secondary" fontWeight='bold' fontSize="14px">Formules et activités proposées</Typography></Link>
                    </MenuItem>
                    <MenuItem  onClick={handleCloseNavMenu}>
                      <Link to="aboutme"smooth={true} duration={1000} textAlign="center" fontFamily='Raleway'> <Typography color="secondary" fontWeight='bold' fontSize="14px">À propos</Typography></Link>
                    </MenuItem>
                    <MenuItem  onClick={handleCloseNavMenu}>
                      <Link to="contact"smooth={true} duration={1000} textAlign="center" fontFamily='Raleway'> <Typography color="secondary" fontWeight='bold' fontSize="14px">Contact</Typography></Link>
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
                    <Link to='formules' smooth={true} duration={1000}><Typography color="secondary"  textTransform='none' fontSize='16px' fontWeight='bold'>Formules et activités proposées</Typography>
                    </Link>
                  </Button>
                  
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, ml: 3 }}
                  >
                    <Link to='aboutme' smooth={true} duration={1000}><Typography color="secondary"  textTransform='none' fontSize='16px' fontWeight='bold'>À propos</Typography>
                    </Link>
                  </Button>
                  
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, ml: 3 }}
                  >
                    <Link to='contact' smooth={true} duration={1000}><Typography color="secondary"  textTransform='none' fontSize='16px' fontWeight='bold'>Contact</Typography>
                    </Link>
                  </Button>
              </Box>
            {/* </Toolbar> */}
          </Container>
        </AppBar>
      );
}

export default Navbar;