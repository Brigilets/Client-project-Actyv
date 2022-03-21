import * as React from 'react';
import { createClient } from "contentful"

const useActivities = () => {
const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    host: ""
})
const getActivites = async () =>{
    try{
        const entries =await client.getEntries({
            content_type: "activites",
            select: "fields",
        })
    
   const sanitizedEntries = entries.items.map((item)=>{
       //  const photo = item.fields.photoPrincipal
            return {
            ...item.fields,
          //  photo
           }
        })
       // console.log('fetched activities data from contentful',sanitizedEntries)
       return sanitizedEntries;
    } catch(error){
console.log(`Error fetching activities: ${error}`)
    }
}

return {getActivites}
}
export default useActivities