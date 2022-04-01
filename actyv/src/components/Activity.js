import * as React from 'react';
import { useEffect, useState } from "react";
import { Typography } from '@mui/material';
import { Grid,Box } from '@mui/material';
import "./ActivityCard.css"
import Link from '@mui/material/Link';
import useActivities from "../useActivities";
import ActivityCard from './ActivityCard';

// See SearchOrganisateurs !!!!!
const Activity = () =>{
  const [activites, setActivites] = useState([]);
  const { getActivites } = useActivities();

  useEffect(() => {
   const getapi= () => {getActivites().then((response) => setActivites(response))};
  getapi()
   //  console.log(activites)
  }, []);

  const p = activites.map(o => o)
 /* const show = () =>{
    if(!(activites[id])){
      return <Typography>Cette activité n'existe pas encore</Typography>
    } else{
return <ActivityCard data-testid="activity-card" activite={activites[id]} />
    }
  }
      <div>{show()}</div>*/

  return(
      <Box 
        sx={{ 
          marginBottom: '5rem',
          '@media (min-width: 992px)': { padding: '1rem 5rem' },
          '@media (min-width: 768px) and (max-width: 992px)': { padding: '1rem 5rem'},
          '@media (min-width: 680px) and (max-width: 768px)': { padding: '1rem 3rem' },
          '@media (min-width: 380px) and (max-width: 680px)': { padding: '1rem 2rem' },
          '@media (max-width: 380px)': { padding: '1rem 1rem' },
      }}
      // id="formules"
      >
          
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

            <Grid container spacing={2} style={{display:'flex', flexDirection: 'row'}} boxSizing="border-box">
            {
            activites.map((activite, index) => 
          
            <Grid item xs={12} sm={12} md={6} lg={3}>
                <Link href={`/searchresults/${activite.id}`} sx={{ textDecoration:"none" }}>
                  <ActivityCard key={index} activite={activite}/>
                </Link>
              </Grid> 
              
            )}

                {/*<Link href="/searchresults">
                    <Button sx={{ margin:"3em 0em 0em", float:"left", fontFamily:"Caveat", fontSize:"20px" }} color="tertiary"> 
                        Découvrir plus 
                    </Button>
                </Link>*/}
         </Grid>
    </Box>
  )
}


export default Activity

// import * as React from 'react';
// import { useEffect, useState } from "react";
// import useActivities from "../useActivities";
// import ActivityCard from './ActivityCard';
// import { Typography } from '@mui/material';
// import { Grid,Box } from '@mui/material';
// import "./ActivityCard.css"
// import Link from '@mui/material/Link';
// import Button from '@mui/material/Button';

// const Activity = () =>{
//   const [activites, setActivites] = useState([]);
//   const { getActivites } = useActivities();

//   useEffect(() => {
//    const getapi= () => {getActivites().then((response) => setActivites(response))};
//   getapi()
//    //  console.log(activites)
//   }, []);

//  /* const show = () =>{
//     if(!(activites[id])){
//       return <Typography>Cette activité n'existe pas encore</Typography>
//     } else{
// return <ActivityCard data-testid="activity-card" activite={activites[id]} />
//     }
//   }
//       <div>{show()}</div>*/

//   return(

//     <div > 
//         <Typography ml={10} mt={4} className="title-formules"
//              color="primary"
//              fontFamily="Caveat"
//              fontWeight={600}
//              fontSize="44px"
//              textAlign="start"
//              display="block"
//              >
//                 Formules / Activités proposées
//             </Typography>
//          <Box id="formules" className="box-formules" 
//           sx={{ 
//               flexGrow: 1,
//               boxSizing: "border-box",
//               marginBottom:"4em",
//               padding:"1rem 5rem",
//               '@media (maxWidth: 768px)': { padding:"3rem 3rem" },
//               '@media (maxWidth: 680px)': { padding:"3rem 2rem" },
//               '@media (maxWidth: 380px)': { padding:"3rem 1rem" },
//           }} >
            
//           <Grid container spacing={2} style={{display:'flex', flexDirection: 'row'}} boxSizing="border-box">
//           {
//           activites.map((activite, index) => 
        
//             <Grid item xs={12} sm={12} md={6} lg={3}>
//               <Link href={`/searchresults/${activite.id}`} sx={{ textDecoration:"none" }}>
//                 <ActivityCard key={index} activite={activite}/>
//               </Link>
//             </Grid>  
//           )
//           }

//             {/* <Link href="/searchresults">
//                 <Button sx={{ margin:"3em 0em 0em", float:"left", fontFamily:"Caveat", fontSize:"20px" }} color="tertiary"> 
//                     Découvrir plus 
//                 </Button>
//             </Link> */}
//           </Grid>
//         </Box>
//       </div>
//   )
//     }


// export default Activity