import * as React from 'react';
import { useEffect, useState } from "react";
import useActivities from "../useActivities";
import ActivityCardVisiteur from './ActivityCardVisiteur';

const ActivityVisiteur = () =>{
  const [activites, setActivites] = useState([]);
  const { getActivites } = useActivities();

  useEffect(() => {
    getActivites().then((response) => setActivites(response));
  //  console.log(activites)
  });

  return(
   <div > 
   {
    activites.map((activite, index) => 
    <ActivityCardVisiteur key={index} activite={activite}/>
    )
    } </div>
  )
}
export default ActivityVisiteur
