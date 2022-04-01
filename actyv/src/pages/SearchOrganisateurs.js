import React from 'react';
import { useEffect, useState } from "react";
import { Typography, Box, Grid, Link } from '@mui/material';
import Filters from '../components/Filters';
import useContentful from "../useContentful";
import ResultCardsOrganisateurs from '../components/ResultsCardsOrganisateurs';
// import { useParams } from "react-router-dom";

const SearchOrganisateurs = () => {
    // const { id } = useParams();
    
    const [organisers, setOrganisers] = useState([]);
    const { getOrganisers } = useContentful();

    useEffect(() => {
    const getapi = () => {getOrganisers().then((response) => setOrganisers(response))};
    getapi()
    }, []);

   const p = organisers.map(o => o)
   console.log(p)

    return ( 
        <div>
            <Filters />
            <Box 
            sx={{ 
                marginBottom: '5rem',
                '@media (min-width: 992px)': { padding: '1rem 5rem' },
                '@media (min-width: 768px) and (max-width: 992px)': { padding: '1rem 5rem'},
                '@media (min-width: 680px) and (max-width: 768px)': { padding: '1rem 3rem' },
                '@media (min-width: 380px) and (max-width: 680px)': { padding: '1rem 2rem' },
                '@media (max-width: 380px)': { padding: '1rem 1rem' },
            }}
            >
                <Typography className="title-formules"
                    color="primary"
                    fontFamily="Caveat"
                    fontWeight={700}
                    fontSize="44px"
                    textAlign="start"
                >
                    Résultats selon vos recherches
                </Typography>
                <Grid container spacing={2}>
                    {organisers.map((organiser, index) => {
                        return <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Link href={`/organisateur/${organiser.id}`} style={{textDecoration:"none"}}> 
                                <ResultCardsOrganisateurs key={index} organiser={organiser}/>
                            </Link>
                        </Grid>;
                    })} 
                </Grid>
            </Box>
        </div>
    );
}
 
export default SearchOrganisateurs;