import React from 'react';
import {
    Container,
    Grid,
    Card, 
    CardMedia,
    // TextField,
    Typography,
    Table, TableBody, TableCell, TableContainer, TableRow
    // FormControl,
    // RadioGroup,
    // FormControlLabel,
    // Radio,
    // Button,
    // TextareaAutosize,
  } from "@mui/material";
// import Reservation from '../components/reservationForm';
import ActivityVisiteur from '../components/ActivityVisiteur';
import photo from '../img/actyv_logo_3.png';
import activityLogo from '../img/Picture16.jpg';

const Visiteur = () => {
    return ( 
        <div>
        <Container
            style = {{
                padding:'0',
                maxWidth: '100%',
                margin: '3em auto',
                width: '90%',
            }}
        >
            <Typography fontSize="44px" fontWeight="600" color="primary" fontFamily="Caveat" textAlign="left" mb={3}>
            {" "}
                Visiteur
            </Typography>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="400"
                            src={photo}
                            alt="visiteur-photo"
                           
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={8} padding="1em 2em">
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="left">
                                        <Typography color="secondary" fontWeight="bold" fontStyle='italic'>
                                            Nom
                                        </Typography> 
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography color="secondary">
                                            TC
                                        </Typography>  
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                        <Typography color="secondary" fontWeight="bold" fontStyle='italic'>
                                            Petit descriptif
                                        </Typography> 
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography color="secondary">
                                            ...
                                        </Typography>  
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                        <Typography color="secondary" fontWeight="bold" fontStyle='italic'>
                                            Intérêts
                                        </Typography> 
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography color="secondary">
                                            Danse, musique, mythologies
                                        </Typography>  
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                        <Typography color="secondary" fontWeight="bold" fontStyle='italic'>
                                            Langues
                                        </Typography> 
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography color="secondary">
                                            Français, anglais.
                                        </Typography>  
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                        <Typography color="secondary" fontWeight="bold" fontStyle='italic'>
                                            Bio
                                        </Typography> 
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography color="secondary">
                                            ...
                                        </Typography>  
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
        <Container
            style = {{
                padding:'0',
                maxWidth: '100%',
                margin: '3em auto',
                width: '90%',
            }}
        >
            <Typography fontSize="44px" fontWeight="600" color="primary" fontFamily="Caveat" textAlign="left" mb={3}>
                Formules et activités réalisées
            </Typography>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="400"
                            src={activityLogo}
                            alt="visiteur-photo"
                           
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={8}
                    backgroundColor="#30C9B050"
                    padding="1em"
                >
                    <ActivityVisiteur/>
                </Grid>
            </Grid>
            <br /> <br />
            {/* <ActivityVisiteur/> */}
        </Container>
        {/* <Reservation/> */}
        </div>
        
     );
}
 
export default Visiteur;