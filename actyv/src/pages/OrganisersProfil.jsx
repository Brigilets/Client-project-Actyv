import { Box, Typography, Grid } from "@mui/material";
import React, {useState, useEffect } from "react";
import OrganiserProfileCard from "../components/OrganiserProfileCard";
import useContentful from "../useContentful";
import {useParams} from 'react-router-dom'

const ProfilOrganisateur = () => {
  const {id} = useParams()

  const [organisers, setOrganisers] = useState([]);
  const { getOrganisers } = useContentful();

  useEffect(() => {
    const getapi = () => {getOrganisers().then((response) => setOrganisers(response))};
    getapi()
   }, []);

   const display = () => {
    if (!(organisers[id])){
      return (<Grid container justifyContent='center' alignItems='center' sx={{height : '80vh'}}>
        <Typography sx={{fontSize: '2rem', fontWeight: 600}}>Désolé, cet organisateur n'existe pas encore !</Typography>
        
        </Grid>)
    } else {
      return (
        <Box 
          sx={{ 
            marginBottom: '5rem',
            '@media (min-width: 992px)': { padding: '8rem 5rem 5rem' },
            '@media (min-width: 768px) and (max-width: 992px)': { padding: '1rem 5rem' },
            '@media (min-width: 680px) and (max-width: 768px)': { padding: '1rem 3rem' },
            '@media (min-width: 380px) and (max-width: 680px)': { padding: '1rem 2rem' },
            '@media (max-width: 380px)': { padding: '1rem 1rem' },
        }}> 
          <Typography
            variant="h2"
            color="primary"
            textAlign="left"
            mb={3}
            sx={{ fontFamily: "Caveat" }}
          >
            Organisateur
          </Typography>
  
          <OrganiserProfileCard data-testid="organiser-card" organiser={organisers[id]}/> 
        
        </Box>
      )
    }
  }

  return (
    <>{display()}</>
  );
};

export default ProfilOrganisateur;
