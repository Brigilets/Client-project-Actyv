import * as React from 'react';
import { useEffect, useState } from "react";
import useContentful from "../useContentful";
import OrganiserCard from './OrganiserCard';

const Organiser = () =>{
  const [x, setX] = useState('')
  const [organisers, setOrganisers] = useState([]);
  const { getOrganisers } = useContentful();

  useEffect(() => {
    getOrganisers().then((response) => setOrganisers(response));
   /* console.log(organisers) */
  }, [getOrganisers]);

  const key = 0

  useEffect(() => {
    (function(){
      setX(key)
    })()
  }, [key])
  


  return (
   <div data-testid="organiser" >
      {/* <OrganiserCard data-testid="organiser-card" key={index} organiser={organisers[x]}/> */}
  {
     organisers.map((organiser, index) => 
    <OrganiserCard data-testid="organiser-card" key={index} organiser={organiser}/>
    )
   } 
   
   </div>
  )
}
export default Organiser
