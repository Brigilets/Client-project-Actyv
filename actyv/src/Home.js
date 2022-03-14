import React from 'react';
import Formules from './Formules';
import logo from './img/actyv.logo.1.png'
import Searchbar from './Searchbar'


function Home() {
  return (
    <div>
        <img src={logo} width="330" height="340" alt='logo-2'/>
        <Searchbar />
        <Formules />
    </div>
  )
}

export default Home