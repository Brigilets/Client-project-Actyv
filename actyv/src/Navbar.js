import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from './img/actyv_logo_3.png'

const pages = ['Formules et activités proposées', 'À propos', 'Contact'];
// const settings = ['Formules et activités proposées', 'A propos', 'Contact'];

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
              <img src={logo} width="65" height="65" alt='logo-3'/>

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
                <Menu
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
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" color="secondary" fontSize="14px" fontWeight='bold' fontFamily='Raleway' >{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box sx={{ 
                flexGrow: 0, 
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
                alignContent: 'flex-end',
              }}>
                {/* Expanded menu list (as buttons) */}
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, ml: 3 }}
                  >
                    <Typography color='secondary' textTransform='none' fontSize='14px' fontFamily='Raleway' fontWeight='bold'>
                      {page}
                    </Typography>
                  </Button>
                ))}
              </Box>
            {/* </Toolbar> */}
          </Container>
        </AppBar>
      );
}

export default Navbar;