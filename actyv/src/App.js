import React from 'react'
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SidebarTest from "./components/SidebarTest";

// Pages
import Home from './pages/Home';
import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';
import SearchResults from './pages/SearchResults';
import DétailsActivité from './pages/DétailsActivité'
import SearchOrganisateurs from './pages/SearchOrganisateurs';
import Organisers from './pages/Organisers';
import ProfilOrganisateur from './pages/OrganisersProfil';
import Visiteur from './pages/Visiteur';
import ProfilVisiteur from './pages/ProfilVisiteur';
import ReservationVisiteur from './pages/Reservation';
import Erreur from './pages/Error';


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
    fontFamily: [
      "Raleway", "Caveat"
    ].join(",")

    // headers: {
    //   fontFamily: ['Caveat', 'cursive']
    // },
    // paragraphs: {
    //   fontFamily: ['Raleway', 'sans-serif']
    // },
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <div className="App">
        <header className="App-header">
         <Navbar /> 
        </header>

   <div className='Sidebar'>
        <SidebarTest /> 
        </div>
          <Routes>
            <Route exact path="/" element={ <Home /> } />
            {/* <Route exact path="/formules" element={ <Home /> } /> */}

            <Route path="/searchresults" element={ <SearchResults /> } />
            <Route path="/searchresults/:id" element={ <DétailsActivité /> } />

            <Route path="/inscription" element={ <Inscription /> } />
            <Route path="/connexion" element={ <Connexion /> } />
            <Route path="/organisateur" element={ <SearchOrganisateurs /> } />
            <Route path='/organisateur/:id' element={ <Organisers />} />
            <Route path='/organisateur/:id/profil' element={ <ProfilOrganisateur />} />
            <Route path="/visiteur" element={ <Visiteur /> } />
            <Route path="/profil_visiteur" element={ <ProfilVisiteur /> } />
            <Route path="/reservation/:id" element={ <ReservationVisiteur /> } />
            <Route path='*' element={<Erreur />} />
          </Routes>

        <footer>
          <Footer/>
        </footer>
      </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;