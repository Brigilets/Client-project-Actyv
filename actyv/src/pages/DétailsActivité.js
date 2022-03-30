import * as React from 'react';
import { useEffect, useState } from "react";
import useActivities from "../useActivities";
import {useParams} from 'react-router-dom'

import Détails from '../components/Détails';


const DétailsActivité = () => {
    const {id} = useParams()

    const [activites, setActivites] = useState([]);
    const { getActivites } = useActivities();
  
    useEffect(() => {
     const getapi= () => {getActivites().then((response) => setActivites(response))};
    getapi()
     //  console.log(activites)
    }, []);

    return ( 
        <div>
            <Détails activite={activites[id]}/>
        </div>
     );
}
 
export default DétailsActivité;