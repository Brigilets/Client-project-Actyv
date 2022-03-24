import { useState, useEffect } from "react";
import React  from "react";


const query = `query{
    activitesCollection{
   items{
    name
    id
    description
    prix
    photoPrincipal{
      url
    }
  photoDesActrivitesCollection{
    items{
      url
    }
  }
  
  }   
      
    }
  }`

 const ActivityQL = () =>{
     const [activites , setActivites] = useState('')
 
     useEffect(()=>{
         window
         .fetch(`https://graphql.contentful.com/content/v1/spaces/gj7ykyejvpw4?access_token=bqsOzsXjHI-9FQ31LQHxAXbmubsukBUho7OysKtIHr8`, {
             method: "POST",
             header: {
                 "Content-Type": "application/json",
               
             },//send graphQL query
             body: JSON.stringify({ query }),
         }).then((response) => response.json())
         .then(({ data, errors }) => {
           if (errors) {
             console.error(errors);
           }
   
           // rerender the entire component with new data
           setActivites(data.activitesCollection.items[0]);
         });
     });
   { /* if(!activites){
         return "Loading...";
     }*/}
    // !activites && return "Loading..."
     
    return(
       <div className='activite'>
           <header className="activite-header">
            { /*  <img src={activites.photoPrincipal.url} className='Activity-logo' alt='photo'/>*/}
           </header>
           <p>{activites.name}</p>
       </div>
    )
 }

 export default ActivityQL;