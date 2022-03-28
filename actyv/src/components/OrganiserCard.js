import React from "react";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Button } from "@mui/material";

const OrganiserCard = ({ organiser }) => {

  return (
    <Grid container>
      <Grid item xs={12} lg={4} >
        <CardMedia
          component="img"
          height="100%"
          image={organiser?.avatar.file.url}
          alt={organiser?.nom}
        />
      </Grid>

      <Grid item xs={12} lg={8}>

        <Grid
          container
          
          p={3}
        >
          <Grid item xs={12}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="secondary"
              sx={{ textAlign: "left", fontWeight: 800 }}
            >
              {organiser?.nom}{' '}
            
            </Typography>

            <Typography sx={{color: 'secondary.main', textAlign: 'left'}}>{organiser?.role}</Typography>
            <Typography
              color="secondary"
              sx={{ fontStyle: "italic", textAlign: "left", fontWeight: 600 }}
            >
              Intérêts:
            </Typography>
            <Typography
              color="secondary"
              mb={2}
              sx={{ fontStyle: "italic", textAlign: "left", fontWeight: 600 }}
            >
              Langue(s):
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "justify" }}
            >
              {organiser?.description}
            </Typography>
          </Grid>

          <Grid container justifyContent='flex-start' mt={3} item xs={4}>
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
