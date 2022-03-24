import React from 'react';
import Formules from '../components/Formules';
import logo from '../img/actyv.logo.1.png'
import Searchbar from '../components/Searchbar'
import HomeButtons from '../components/HomeButtons';
import AboutMe from '../components/AboutMe';
import ContactForm from '../components/ContactForm';
import Swipe from '../components/Swipe';
import {Link} from 'react-scroll';
import Reservation from '../components/ReservationForm';
//import Activity from '../components/Activity';
import ActivityQL from '../components/activitegraphiql';


function Home() {
  return (
    <div>
        <img src={logo} width="340" height="340" alt='logo-2' />
        <Searchbar />
        <Swipe />
        <Formules />
        <AboutMe />
        <ContactForm />
        <HomeButtons />
        <Reservation/>
     <ActivityQL/>
    </div>
  )
}

export default Home 