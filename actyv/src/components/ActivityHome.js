import * as React from 'react';
import { useEffect, useState } from "react";
import useActivities from "../useActivities";
import ActivityCard from './ActivityCard';
import { Typography } from '@mui/material';
import { Grid,Box } from '@mui/material';
import "./ActivityCard.css"
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const ActivityHome = () =>{
  const [activities, setActivities] = useState([]);
  const { getActivites } = useActivities();

  useEffect(() => {
    const getapi = () => {
    getActivites().then((response) => setActivities(response));
    };
    getapi();
}, []);

  return(

    <div > 
        <Typography ml={10} mt={4} className="title-formules"
             color="primary"
             fontFamily="Caveat"
             fontWeight={600}
             fontSize="44px"
             textAlign="start"
             display="block"
             >
                Formules / Activités proposées
            </Typography>
         <Box id="formules" className="box-formules" 
          sx={{            
              flexGrow: 1,
              boxSizing: "border-box",
              marginBottom:"4em",
              '@media (min-width: 768px)': { padding: '1rem 5rem' },
              '@media (min-width: 680px) and (max-width: 768px)': { padding: '1rem 3rem' },
              '@media (min-width: 380px) and (max-width: 680px)': { padding: '1rem 2rem' },
              '@media (max-width: 380px)': { padding: '1rem 1rem' },
          }} >
       
     <Grid container spacing={2} style={{display:'flex', flexDirection: 'row'}} boxSizing="border-box">
    {
<<<<<<< HEAD
     activites.slice(0,4).map((activite, key) => 
  
     <Grid item  xs={12} sm={12} md={6} lg={3}>
     <ActivityCard  key={key} activite={activite}/>
=======
     activities.slice(0,4).map((activity, index) => 
  
     <Grid item  xs={12} sm={12} md={6} lg={3}>
     <ActivityCard  key={index} activity={activity}/>
>>>>>>> 966a4cc2bb9858485ec81f5c9b9292dd3e350c66
     
     </Grid>
       
     )}

      <Link href="/searchresults">
          <Button sx={{ margin:"2em 1em 0em", float:"left", fontFamily:"Caveat", fontSize:"20px" }} color="tertiary"> 
              Découvrir plus 
          </Button>
      </Link>
     </Grid>
        </Box>
      </div>
  )
    }


export default ActivityHome