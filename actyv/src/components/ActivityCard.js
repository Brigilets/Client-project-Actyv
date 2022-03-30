import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './ActivityCard.css'

const ActivityCard = ({activite}) =>{
  /*console.log(activite)*/
    return(
     
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={activite?.photo.file.url}
          alt={activite.nom}
        />
        <CardContent sx={{backgroundColor:"#30C9B0", color:"white", textAlign:"left"}}>
          <Typography gutterBottom variant="h5" className='raleway-typography' fontFamily="Raleway" component="div">
           { activite?.nom }
          </Typography>
    {  /*    <Typography variant="body2" color="text.secondary">
            {activite?.description}
    </Typography>*/}
          <Typography variant="h5" component="p">
            {activite?.prix}€
          </Typography>
        </CardContent>
        </Card>
        
    )
}
export default ActivityCard;