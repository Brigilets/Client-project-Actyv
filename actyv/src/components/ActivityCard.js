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
          image="https://images.unsplash.com/photo-1543906965-f9520aa2ed8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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