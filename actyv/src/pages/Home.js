import React from 'react';
import Formules from '../components/Formules';
import logo from '../img/actyv.logo.1.png'
import Searchbar from '../components/Searchbar'
import HomeButtons from '../components/HomeButtons';
import AboutMe from '../components/AboutMe';
import ContactForm from '../components/ContactForm';
import Swipe from '../components/Swipe';
import {Link} from 'react-scroll'


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
    </div>
  )
}

export default Home 