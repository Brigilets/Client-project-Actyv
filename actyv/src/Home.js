import React from 'react';
import Formules from './Formules';
import logo from './img/actyv.logo.1.png'
import Searchbar from './Searchbar';
import AboutMe from "./AboutMe";
import Swipe from './Swipe';


function Home() {
  return (
    <div>
        <img src={logo} width="330" height="340" alt='logo-2'/>
  
     
        <Searchbar />
        <Swipe />
        <Formules />
        <AboutMe />
    </div>
  )
}

export default Home