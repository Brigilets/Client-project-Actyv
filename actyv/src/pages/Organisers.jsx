import { Container, Typography, Grid } from "@mui/material";
import React from "react";
import Organiser from "../components/Organiser";
import Accordions from "../components/Accordion";
import {useParams} from 'react-router-dom'

const Organisers = () => {
  const {id} = useParams()
  return (
    <Container>
      <Typography
        variant="h2"
        color="primary"
        textAlign="left"
        mb={3}
        sx={{ fontFamily: "Caveat" }}
      >
        Organisateur
      </Typography>
      <Organiser /* id={id} *//>
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
    </Container>
  );
};

export default Organisers;
