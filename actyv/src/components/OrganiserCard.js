import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Button, Link } from "@mui/material";
import {useParams} from 'react-router-dom'

const OrganiserCard = ({ organiser }) => {
  const {id} = useParams();

  return (
    <Grid container>
      <Grid item xs={12} md={4} >
        <CardMedia
          component="img"
          height="500em"
          image={organiser?.avatar.file.url}
          alt={organiser?.nom}
        />
      </Grid>

      <Grid item xs={12} md={8}>

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

          <Grid container justifyContent='flex-start' mt={3}>
            <Link href={`/organisateur/${id}/profil`}>
              <Button
                variant="contained"
                color="secondary"
                size='medium'
                sx={{ textTransform: "none", fontWeight: 800}}
              >
                Modifier ton profil
              </Button>
            </Link>
          </Grid>

        </Grid>

      </Grid>

    </Grid>
  );
};
export default OrganiserCard;
