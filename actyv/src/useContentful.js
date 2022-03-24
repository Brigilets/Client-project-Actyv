
import * as React from 'react';
import { createClient } from "contentful"


const useContentful = () => {
const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    host: ""
})

const getOrganisers = async() =>{
try{
const entries = await client.getEntries({
    content_type: "organisateur",
    select: "fields",
})


const sanitizedEntries = entries.items.map((item) => {
    const avatar = item.fields.photoDeProfil.fields
    return{
        ...item.fields,
        avatar
    }
})
//console.log('fetched organiser data from contentful',sanitizedEntries)
return sanitizedEntries;
} catch(error){
console.log(`Error fetching authors: ${error}`)
}
}

/*const getActivites =async () =>{
    try{
        const entries =await client.getEntries({
            content_type: "activites",
            select: "fields",
        })
    
   const sanitizedEntries = entries.items.map((item)=>{
         const image = item.fields.photoPrincipal.fields
            return {
            ...item.fields,
            image
           }
        })
        console.log('fetched activities data from contentful',sanitizedEntries)
       return sanitizedEntries;
    } catch(error){
console.log(`Error fetching activities: ${error}`)
    }
}*/

return {getOrganisers}
}
export default useContentful