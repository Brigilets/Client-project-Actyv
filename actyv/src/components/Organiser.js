import * as React from 'react';
import { useEffect, useState } from "react"
import { Typography } from '@mui/material';
import useContentful from "../useContentful";
import OrganiserCard from './OrganiserCard';

const Organiser = ({id}) =>{
  const [organisers, setOrganisers] = useState([]);
  const { getOrganisers } = useContentful();

  useEffect(() => {
   const getapi = () => {getOrganisers().then((response) => setOrganisers(response))};
   getapi()
  }, []);

  const display = () => {
    if (!(organisers[id])){
      return <Typography>Cet organisateur n'existe pas encore</Typography>
    } else {
      return <OrganiserCard data-testid="organiser-card"  organiser={organisers[id]}/> 
    }
  }
  display()
  return (
    <>{display()}</>
  
  )
}
export default Organiser
