import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginTop: '3em',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

// Search container styles
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Search input styles
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '15em',
      '&:focus': {
        width: '20em',
      },
    },
  },
}));

const slogan = 'Représenter Bruxelles à travers toute sa diversité';

export default function Searchbar() {
  return (
    <Box sx={{ 
            flexGrow: 1,
            
        }}>
      <AppBar position="static"
        style={{
            background: "linear-gradient(180deg, #ffffff 0%, var(--token-dbb08f27-7ee1-48fd-bd6a-2da0de62c852, rgb(248, 127, 73))",
            padding: "8em 3em 7em",
            boxShadow: "0px 0px"
        }}
      >
        <Box>
            <Typography color='secondary' textTransform='none' fontSize='18px' fontStyle='italic'>
                {slogan}
            </Typography>
        </Box>
        
        <Container
        style={{
            display:'flex',
            placeContent: "center",
            alignContent: "center",
            alignItems: "center",
            maxWidth: "1800px"
            }}
        >
            {/* <Toolbar> */}
                <Search>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    sx={{ width:"25em" }}
                    placeholder="Découvrez les activités culturelles..."
                    inputProps={{ 'aria-label': 'search', width:"20em"  }}
                    type="search"
                    fullWidth
                    />
                </Search>
            {/* </Toolbar> */}
          </Container>
      </AppBar>
    </Box>
  );
}