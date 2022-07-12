import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, CardMedia, Typography } from '@mui/material';
import picture from '../img/atomium.jpg';


export default function BasicGrid() {
    return (
        <Box id="aboutme" 
        sx={{
            backgroundColor:"rgba(252, 153, 24, 0.2)", 
            padding:"3rem 5rem",
            '@media (min-width: 768px)': { padding: '1rem 5rem' },
            '@media (min-width: 680px) and (max-width: 768px)': { padding: '1rem 3rem' },
            '@media (min-width: 380px) and (max-width: 680px)': { padding: '1rem 2rem' },
            '@media (max-width: 380px)': { padding: '1rem 1rem' },
        }} 
        >
            <Grid container spacing={3}>
                <Grid item lg={4} md={4} sm={6} xs={12} >
                    <Card>
                        <CardMedia
                            component="img"
                            height="400"
                            src={picture}
                            alt="Picture1"
                           
                        />
                    </Card>
                </Grid>
                <Grid item lg={8} md={8} sm={12}>
                    <Typography 
                        color="primary"
                        fontFamily="Caveat"
                        fontWeight="600"
                        fontSize={44}
                        textAlign="justify"
                        padding="0.5rem"
                    > À propos 
                    </Typography>
             
                    <Typography
                    textAlign="justify" fontFamily="Raleway" sx={{alignItems:"center", padding:"0.5rem"}}
                    >
                    Notre objectif est de promouvoir la paix et le dialogue entre communautés à travers les échanges interculturels. La lutte contre le racisme et les préjugés est indispensable pour un meilleur vivre-ensemble et une baisse des tensions qui nous divisent. Notre conviction est que cela passe par une connaissance de l'autre.
                        </Typography>
                </Grid>
            </Grid>
        </Box>


    
    );
}
