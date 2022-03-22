import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, CardMedia, Typography } from '@mui/material';
import picture from '../img/Picture1.jpg';


export default function BasicGrid() {
    return (
        <Box id="aboutme" sx={{backgroundColor:"rgba(252, 153, 24, 0.2)", padding:"3rem 5rem"}} >
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
                <Grid item lg={8} md={8} sm={12} xs={12} >
                <Typography 
                    color="primary"
                    fontFamily="Caveat"
                    fontWeight="600"
                    fontSize={44}
                    textAlign="justify"
                    padding="0.5rem"
                > À propos </Typography>
             
                    <Typography
                    textAlign="justify" fontFamily="Raleway" sx={{alignItems:"center", padding:"0.5rem"}}
                    >
                    Je me nomme Arzina Ismael Fataki (Belge). Née au Congo RDC et je vis en Belgique depuis 1991, j’ai milité dans plusieurs associations culturelles en Belgique et en France. Toujours active dans l’associatif, je suis notamment passée par le Service Civil International (SCI) dont j’ai été membre du conseil d’administration de 2002 à 2010. En 2015, j’ai été sélectionné parmi les finalistes pour le projet CMM « Connais Moi Mieux » au concours Beforbusiness. Je suis vendeuse de formation avec une expériences de 17 ans dans la même entreprise située au 7 rue neuve à Bruxelles.   
                    </Typography>
                </Grid>
            </Grid>
        </Box>


    
    );
}