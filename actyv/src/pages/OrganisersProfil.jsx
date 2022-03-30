import { Container, Typography, Grid } from "@mui/material";
import React, {useState, useEffect } from "react";
import OrganiserProfileCard from "../components/OrganiserProfileCard";
import useContentful from "../useContentful";
// import useActivities from "../useActivities"
// import Accordions from "../components/Accordion";
// import OrganiserCard from '../components/OrganiserCard';
import {useParams} from 'react-router-dom'

const ProfilOrganisateur = () => {
  const {id} = useParams()

  const [organisers, setOrganisers] = useState([]);
  const { getOrganisers } = useContentful();
  // const [activities, setActivities] = useState([])
  // const {getActivites} = useActivities()

  useEffect(() => {
    const getapi = () => {getOrganisers().then((response) => setOrganisers(response))};
    getapi()
   }, []);

  // useEffect(() => {
  //   const getapi = () => {getActivites().then((response) => setActivities(response))};
  //   getapi()
  //  }, []);

   const display = () => {
    if (!(organisers[id])){
      return (<Grid container justifyContent='center' alignItems='center' sx={{height : '80vh'}}>
        <Typography sx={{fontSize: '2rem', fontWeight: 600}}>Désolé, cet organisateur n'existe pas encore !</Typography>
        
        </Grid>)
    } else {
      return (
      <Container 
        style={{ 
          maxWidth: '100%',
          margin: '8em auto 3em',
          width: '90%',
        }}>
      <Typography
        variant="h2"
        color="primary"
        textAlign="left"
        mb={3}
        sx={{ fontFamily: "Caveat" }}
      >
        Organisateur
        {/* {organiser?.role} */}

      </Typography>
      {/* <OrganiserCard data-testid="organiser-card"  organiser={organisers[id]}/>  */}
      <OrganiserProfileCard data-testid="organiser-card" organiser={organisers[id]}/> 
      {/* <Typography
        variant="h2"
        color="primary"
        textAlign="left"
        mt={10}
        mb={5}
        sx={{ fontFamily: "Caveat" }}
      >
        Vos formules et activités
      </Typography>
      <Accordions /> */}
      </Container>)
    }
  }

  return (
    <>{display()}</>
   /*  <Container>
      
      <Typography
        variant="h2"
        color="primary"
        textAlign="left"
        mb={3}
        sx={{ fontFamily: "Caveat" }}
      >
        Organisateur
      </Typography>
      <Organiser id={id}/>
      <Typography
        variant="h2"
        color="primary"
        textAlign="left"
        mt={15}
        mb={5}
        sx={{ fontFamily: "Caveat" }}
      >
        Vos formules et activités
      </Typography>

      <Accordions />
    </Container> */
  );
};

export default ProfilOrganisateur;
