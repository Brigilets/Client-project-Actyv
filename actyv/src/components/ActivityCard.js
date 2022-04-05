import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


import './ActivityCard.css'

const ActivityCard = ({ activity }) =>{
  
    return(
        <Card >
          <CardMedia
            component="img"
            height="250"
            image={activity?.photo.file.url}
            alt={activity?.nom}
          />
          <CardContent sx={{backgroundColor:"#30C9B0", color:"white", textAlign:"left", height:"5em"}}>
            <Typography gutterBottom variant="h6" className='raleway-typography' fontFamily="Raleway" component="div">
            { activity?.nom }
            </Typography>
            <Typography variant="h6" component="p">
              {activity?.prix}€
            </Typography>
          </CardContent>
        </Card>
        
    )
}
export default ActivityCard;