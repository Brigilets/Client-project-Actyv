import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardMedia, Typography } from '@mui/material';



export default function BasicGrid() {
    return (
        <Box sx={{ padding:"10px 10px 10px 40px"}} >
            <Grid container spacing={3}>
                <Grid item lg={3} md={6} sm={6} xs={12} >
                    <Card>
                        <CardMedia
                            component="img"
                            height="300"
                            image="https://images.unsplash.com/photo-1543906965-f9520aa2ed8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="green iguana"
                        />
                    </Card>
                </Grid>
                <Grid item lg={8} md={6} sm={12} xs={12} >
                <Typography 
             color="primary"
             fontFamily="Caveat"
             fontWeight={700}
             fontSize={40}
             textAlign="start"
             > A propos </Typography>
                    <Typography
                    textAlign="start"
                    >
                    Je me nomme Arzina Ismael Fataki (Belge). Née au Congo RDC et je vis en Belgique depuis 1991, j’ai milité dans plusieurs associations culturelles en Belgique et en France. Toujours active dans l’associatif, je suis notamment passée par le Service Civil International (SCI) dont j’ai été membre du conseil d’administration de 2002 à 2010. En 2015, j’ai été sélectionné parmi les finalistes pour le projet CMM « Connais Moi Mieux » au concours Beforbusiness. Je suis vendeuse de formation avec une expériences de 17 ans dans la même entreprise située au 7 rue neuve à Bruxelles.   
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
