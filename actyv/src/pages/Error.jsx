import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: "91vh" }}
      >
        <Grid item xs={12}>
          <Typography variant="h1" color="secondary" mb={0.5} sx={{ fontWeight: 800, textAlign: 'center' }}>
            Erreur 404
          </Typography>
          <Typography color="primary" mb={4} sx={{ fontWeight: 600, textAlign: 'center' }}>
            La page que vous souhaitez atteindre n'existe malheureusement pas.
          </Typography>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ textTransform: "none", fontWeight: 800 }}
            >
              Découvrons Actyv
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Error;
