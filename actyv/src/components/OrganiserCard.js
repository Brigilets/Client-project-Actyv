import React from "react";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Button } from "@mui/material";
import { fontStyle } from "@mui/system";

const OrganiserCard = ({ organiser }) => {
  return (
    <Grid container sx={{ borderStyle: "dotted", borderColor: "pink" }}>
      <Grid item xs={12} lg={4} sx={{ borderStyle: "dotted" }}>
        <CardMedia
          component="img"
          height="100%"
          image={organiser.avatar.file.url}
          alt={organiser.prnom}
          sx={{ borderStyle: "dotted", borderColor: "blue" }}
        />
      </Grid>

      <Grid item xs={12} lg={8}>

        <Grid
          container
          
          p={3}
          sx={{ borderStyle: "dotted", height: "100%" }}
        >
          <Grid item xs={12} sx={{ borderStyle: "dotted", borderColor: 'red' }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="secondary"
              sx={{ textAlign: "left", fontWeight: 800 }}
            >
              {organiser.prnom}{' '}
              {organiser.name}
            </Typography>
            <Typography
              color="secondary"
              sx={{ fontStyle: "italic", textAlign: "left", fontWeight: 500 }}
            >
              Intérêts:
            </Typography>
            <Typography
              color="secondary"
              mb={2}
              sx={{ fontStyle: "italic", textAlign: "left", fontWeight: 500 }}
            >
              Langue(s):
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "justify" }}
            >
              {organiser.description}
            </Typography>
          </Grid>

          <Grid container justifyContent='flex-start' mt={3} item xs={4} sx={{ borderStyle: "dotted", borderColor: 'yellow' }}>
            <Button
              variant="contained"
              color="secondary"
              size='medium'
              sx={{ textTransform: "none", fontWeight: 800 }}
            >
              Modifier ton profil
            </Button>
          </Grid>

        </Grid>

      </Grid>

    </Grid>
  );
};
export default OrganiserCard;
