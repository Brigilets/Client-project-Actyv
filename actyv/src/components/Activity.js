import * as React from 'react';
import { useEffect, useState } from "react";
import { Typography } from '@mui/material';
import { Grid,Box } from '@mui/material';
import "./ActivityCard.css"
import Link from '@mui/material/Link';
import useActivities from "../useActivities";

import ActivityCard from './ActivityCard';
import {useParams} from 'react-router-dom';


// See SearchOrganisateurs !!!!!
const Activity = () =>{
  const { id } = useParams()
  const { nom } = useParams()

  const [activities, setActivities] = useState([]);
  const { getActivites } = useActivities();

  useEffect(() => {
    const getapi = () => {
    getActivites().then((response) => setActivities(response));
    };
    getapi();
  }, []);

  // const p = activities.map(o => o)
  // console.log(p)

  return(
      <Box 
        sx={{ 
          marginBottom: '5rem',
          '@media (min-width: 992px)': { padding: '1rem 5rem' },
          '@media (min-width: 768px) and (max-width: 992px)': { padding: '1rem 5rem'},
          '@media (min-width: 680px) and (max-width: 768px)': { padding: '1rem 3rem' },
          '@media (min-width: 380px) and (max-width: 680px)': { padding: '1rem 2rem' },
          '@media (max-width: 380px)': { padding: '1rem 1rem' },
      }}>
          
        <Typography 
        // ml={10} mt={4} 
        className="title-formules"
        color="primary"
        fontFamily="Caveat"
        fontWeight={600}
        fontSize="44px"
        textAlign="start"
        display="block"
        >
            Formules / Activités proposées
        </Typography>

          {/* <Grid container spacing={2} style={{display:'flex', flexDirection: 'row'}} boxSizing="border-box">
            { activities.map((activity, index) => {
              return <Grid item xs={12} sm={12} md={6} lg={3}>
                  <Link href={`/searchresults/${activity.id}`} sx={{ textDecoration:"none" }}>
                    <ActivityCard key={index} activity={activity}/>
                  </Link>
              </Grid> 
            })}
         </Grid> */}

         {/* Reverse map : const array = ['a', 'b', 'c', 'd', 'e']
          const result = array.reverse().map(item => item)
          console.log(result) */}
          <Grid container spacing={2} style={{display:'flex', flexDirection: 'row'}} boxSizing="border-box">
            { activities.slice().reverse().map((activity, index) => {
              return <Grid item xs={12} sm={12} md={6} lg={3}>
                  <Link href={`/searchresults/${activity.id}`} sx={{ textDecoration:"none" }}>
                    <ActivityCard key={index} activity={activity}/>
                  </Link>
              </Grid> 
            })}
         </Grid>
    </Box>
  )
}

export default Activity