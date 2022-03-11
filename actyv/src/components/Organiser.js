import * as React from 'react';
import { useEffect, useState } from "react";
import useContentful from "../useContentful";
import OrganiserCard from './OrganiserCard';

const Organiser = () =>{
  const [organisers, setOrganisers] = useState([]);
  const { getOrganisers } = useContentful();

  useEffect(() => {
    getOrganisers().then((response) => setOrganisers(response));
  });
  return (
   <div data-testid="organiser" >
   {
     organisers.map((organiser, index) => 
    <OrganiserCard data-testid="organiser-card" key={index} organiser={organiser}/>
    )
   }</div>
  )
}
export default Organiser
