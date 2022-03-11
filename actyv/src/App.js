import React from 'react'
import Organiser from './components/Organiser';
import './App.css';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';

const theme = createTheme({
  // Custom color palette
  palette: {
    // Orange tones
    primary: {
      main: '#f87f49',
      light: '#FC9918',
      lightest: '#FC991833'
      // lightest: '#33FC9918'
      // Lightest at 20% opacity
    },
    // Purple tones
    secondary: {
      main: '#370665',
      lighter: '#6342AC',
      light: '#6342AC33'
      // light: '#336342AC'
      // Light at 20% opacity
    },
    // Green tones
    tertiary: {
      main: '#30C9B0',
      light: '#30C9B080',
      // light: '#8030C9B0',
      // Light at 50% opacity
    }
  },

  // Custom typography
  typography: {
    headers: {
      fontFamily: ['Caveat', 'cursive']
    },
    paragraphs: {
      fontFamily: ['Raleway', 'sans-serif']
    },
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar/>
        <Home />
    
        <header className="App-header">
          
        </header>
        </div>
    </ThemeProvider>
  );
}

export default App;
