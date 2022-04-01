import * as React from 'react';
import { useEffect, useState } from "react";
import useActivities from "../useActivities";
import useContentful from "../useContentful";
import {useParams} from 'react-router-dom'
import { Box, Typography, Grid } from "@mui/material";

import Détails from '../components/Détails';


const DétailsActivité = () => {
    const {id} = useParams()

    const [organisers, setOrganisers] = useState([]);
    const { getOrganisers } = useContentful();
    const [activities, setActivities] = useState([]);
    const { getActivites } = useActivities();

    useEffect(() => {
        const getapi = () => {
        getOrganisers().then((response) => setOrganisers(response));
        };
        getapi();
    }, []);

    useEffect(() => {
        const getapi = () => {
        getActivites().then((response) => setActivities(response));
        };
        getapi();
    }, []);

    // fetching activities data by user
    const organiserActivities = []
        activities?.forEach((activity) => {
        if (activity?.emailOrganisateur === organisers[id]?.email) {organiserActivities.push(activity)};
    });

    const display = () => {
        if (!activities[id]) {
            return (
            <Box
                container
                justifyContent="center"
                alignItems="center"
                sx={{ height: "80vh" }}
            >
                <Typography sx={{ fontSize: "2rem", fontWeight: 600 }}>
                Désolé, cet organisateur n'existe pas encore !
                </Typography>
            </Box>
            );
        } 
        else {
            return ( 
                <div>
                    <Détails activity={activities[id]}/>
                </div>
            );
        };
    }

    return (
        <>{display()}</>
      );
    
}
 
export default DétailsActivité;