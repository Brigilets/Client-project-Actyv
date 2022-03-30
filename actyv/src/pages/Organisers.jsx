import { Container, Typography, Grid } from "@mui/material";
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
  activities.forEach((activity) => {
    if (activity.emailOrganisateur === organisers[id].email) {organiserActivities.push(activity)};
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
        <Container 
          // sx={{ padding: 5, paddingBottom: 10 }}
          style={{ 
            maxWidth: '100%',
            margin: '8em auto 3em',
            width: '90%',
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
          <Accordions fullDay={fullDay} halfDay={halfDay} tailorMade={tailorMade} />
        </Container>
      );
      // <Container 
      //   style={{ 
      //     // padding: 5, 
      //     // paddingBottom: 10,
      //     maxWidth: '100%',
      //     margin: '8em auto 3em',
      //     width: '90%',
      //   }}>
      // <Typography
      //   variant="h2"
      //   color="primary"
      //   textAlign="left"
      //   mb={3}
      //   sx={{ fontFamily: "Caveat" }}
      // >
      //   Organisateur
      // </Typography>
      // <OrganiserCard data-testid="organiser-card"  organiser={organisers[id]}/> 
      // <Typography
      //   variant="h2"
      //   color="primary"
      //   textAlign="left"
      //   mt={10}
      //   mb={5}
      //   sx={{ fontFamily: "Caveat" }}
      // >
      //   Vos formules et activités
      // </Typography>
      // <Accordions />
      // </Container>)
    }
  };

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

export default Organisers;
