import * as React from 'react';
import { useEffect, useState } from "react";
import useContentful from "../useContentful";
import OrganiserCard from './OrganiserCard';

const Organiser = () =>{
  const [x, setX] = useState('')
  const [organisers, setOrganisers] = useState([]);
  const { getOrganisers } = useContentful();

  useEffect(() => {
   const getapi = () => {getOrganisers().then((response) => setOrganisers(response))};
   getapi()
  }, []);

  console.log(organisers)
  return (
   <div data-testid="organiser" >
      <OrganiserCard data-testid="organiser-card" /* key={index} */ organiser={organisers[1]}/>
  {/* {
     organisers.map((organiser, index) => 
    <OrganiserCard data-testid="organiser-card" key={index} organiser={organiser}/>
    )
   }  */}
   
   </div>
  )
}
export default Organiser
