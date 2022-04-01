import React from 'react';
import Formules from '../components/Formules';
import logo from '../img/actyv.logo.1.png'
import Searchbar from '../components/Searchbar'
import HomeButtons from '../components/HomeButtons';
import AboutMe from '../components/AboutMe';
import ContactForm from '../components/ContactForm';
import Swipe from '../components/Swipe';
// import {Link} from 'react-scroll'
import { Box } from '@mui/system';
import ActivityHome from '../components/ActivityHome';

function Home() {
  return (
    <div>

      <Box sx={{margin:"10em 0em 0em 0em"}} >
        <img src={logo} width="340" height="340" alt='logo-2'/>
      </Box>
        <Searchbar />
         <Swipe />
        {/*<Formules />*/}
        <ActivityHome/>
        <AboutMe />
        <ContactForm />
        <HomeButtons />

    </div>
  )
}

export default Home 