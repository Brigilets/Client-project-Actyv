import * as React from 'react';
import { useEffect, useState } from "react";
import useActivities from "../useActivities";
import ActivityCard from './ActivityCard';

const Activity = () =>{
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
    <ActivityCard  key={index} activite={activite}/>
    )
    } </div>
  )
}
export default Activity
