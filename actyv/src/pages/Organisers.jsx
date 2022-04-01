import { Box, Typography, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
// import Organiser from "../components/Organiser";
import useContentful from "../useContentful";
import useActivities from "../useActivities";
import Accordions from "../components/Accordion";
import OrganiserCard from "../components/OrganiserCard";
import { useParams } from "react-router-dom";

const Organisers = () => {
  const { id } = useParams();

  const [organisers, setOrganisers] = useState([]);
  const { getOrganisers } = useContentful();
  const [activities, setActivities] = useState([]);
  const { getActivites } = useActivities();

  useEffect(() => {
    const getapi = () => {
      getOrganisers().then((response) => setOrganisers(response));
    };
    getapi();
  }, []);

  useEffect(() => {
    const getapi = () => {
      getActivites().then((response) => setActivities(response));
    };
    getapi();
  }, []);


  // fetching activities data by user
  const organiserActivities = []
  activities?.forEach((activity) => {
    if (activity?.emailOrganisateur === organisers[id]?.email) {organiserActivities.push(activity)};
    console.log(organisers[id]?.nom);
  });
  
  // fetching activities for full day
  const fullDay = []
  organiserActivities.forEach((fullday) =>{
    if (fullday.dure === "journée") {fullDay.push(fullday)}
  })

  // fetching activities for halfday
  const halfDay = []
  organiserActivities.forEach((activities) =>{
    if (activities.dure === "demi-journée") {halfDay.push(activities)}
  })

  // fetching activities for tailormade
  const tailorMade = []
  organiserActivities.forEach((activities) =>{
    if (activities.dure === "sur-mesure") {halfDay.push(activities)}
  })


  const display = () => {
    if (!organisers[id]) {
      return (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "80vh" }}
        >
          <Typography sx={{ fontSize: "2rem", fontWeight: 600 }}>
            Désolé, cet organisateur n'existe pas encore !
          </Typography>
        </Grid>
      );
    } else {
      return (
        <Box 
          // sx={{ padding: 5, paddingBottom: 10 }}
          sx={{ 
            marginBottom: '5rem',
            '@media (min-width: 992px)': { padding: '8rem 5rem 5rem' },
            '@media (min-width: 768px) and (max-width: 992px)': { padding: '1rem 5rem'},
            '@media (min-width: 680px) and (max-width: 768px)': { padding: '1rem 3rem' },
            '@media (min-width: 380px) and (max-width: 680px)': { padding: '1rem 2rem' },
            '@media (max-width: 380px)': { padding: '1rem 1rem' },
        }}
        >
          <Typography
            variant="h2"
            color="primary"
            textAlign="left"
            mb={3}
            sx={{ fontFamily: "Caveat" }}
          >
            Organisateur
          </Typography>
          <OrganiserCard
            data-testid="organiser-card"
            organiser={organisers[id]}
          />
          <Typography
            variant="h2"
            color="primary"
            textAlign="left"
            mt={10}
            mb={5}
            sx={{ fontFamily: "Caveat" }}
          >
            Vos formules et activités
          </Typography>
          <Accordions fullDay={fullDay} halfDay={halfDay} tailorMade={tailorMade} id={id} />
        </Box>
      );
    }
  };

  return (
    <>{display()}</>
  );
};

export default Organisers;
