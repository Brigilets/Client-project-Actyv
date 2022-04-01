import * as React from 'react';
import { useEffect, useState } from "react";
import useActivities from "../useActivities";
// import useContentful from "../useContentful";
import {useParams} from 'react-router-dom';
// import { Box, Typography } from "@mui/material";

import Détails from '../components/Détails';


const DétailsActivité = () => {
    const { id } = useParams()
    const { nom } = useParams()

    const [activities, setActivities] = useState([]);
    const { getActivites } = useActivities();

    useEffect(() => {
        const getapi = () => {
        getActivites().then((response) => setActivities(response));
        };
        getapi();
        // console.log(activities[id].nom);
        // console.log(activities[nom]);
    }, []);

    return (
        // <>{display()}</>
        
            <div>
                <Détails data-testid="activity-card" activity={activities[nom]}/>
            </div>
        
      );

    // fetching activities data by user
    // const organiserActivities = []
    // activities?.forEach((activity) => {
    //     if (activity?.emailOrganisateur === organisers[id]?.email) {organiserActivities.push(activity)};
    //     console.log(organisers[id]?.nom);
    // });

    // const organiserActivities = []
    //     activities?.forEach((activity) => {
    //         if (activity?.nom === organisers[id]?.nom) {organiserActivities.push(activity)};
    //     // if (activity?.id === ${activity.id}) {organiserActivities.push(activity)};
    //     // if (activity?.organisateur === organisers[nom]?.nom) {organiserActivities.push(activity)};
    //     // if (activity?.emailOrganisateur === organisers[id]?.email) {organiserActivities.push(activity)};

    //     // console.log(activity?.emailOrganisateur)
    //     console.log(activity?.nom)
    //     console.log(organisers[id]?.nom)
    //     // console.log(organiser)
    // });


    // const display = () => {
        // if (!activities[id]) {
        //     return (
        //     <Box
        //         container
        //         justifyContent="center"
        //         alignItems="center"
        //         sx={{ height: "80vh" }}
        //     >
        //         <Typography sx={{ fontSize: "2rem", fontWeight: 600 }}>
        //         Désolé, cette activité n'existe pas encore/ n'existe plus !
        //         </Typography>
        //     </Box>
        //     );
        // } 
        // else {
            // return ( 
            //     <div>
            //         <Détails activity={activities[nom]}/>
            //     </div>
            // );
        // };
    // }
    
}
 
export default DétailsActivité;