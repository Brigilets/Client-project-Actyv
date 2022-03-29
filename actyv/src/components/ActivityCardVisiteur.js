import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ActivityCardVisiteur = ({activite}) =>{
  console.log(activite)
    return(
        <Card sx={{ backgroundColor:'#30C9B080'}}>
        <CardMedia
          component="img"
          height="140"
          alt={activite.nom}
          padding="1em"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="left" color="secondary" fontWeight="bold">
           { activite.nom }
          </Typography>
          <br />
          <Typography variant="body2" color="secondary" align="left">
            {activite.description}
          </Typography>
          <br />
          <Typography variant="h5" component="p" >
            {activite.prix} €
          </Typography>
        </CardContent>
        </Card>
    )
}
export default ActivityCardVisiteur;