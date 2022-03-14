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
   <div>
   {
     organisers.map((organiser, index) => 
    <OrganiserCard key={index} organiser={organiser}/>
    )
   }</div>
  )
}
export default Organiser
