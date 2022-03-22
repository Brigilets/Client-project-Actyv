import React from 'react';
import {
    Container,
    Box,
    Grid,
    Card, 
    CardMedia,
    // TextField,
    Typography,
    Table, TableBody, TableCell, TableContainer, TableRow,
    TextField,
    // FormControl,
    // RadioGroup,
    // FormControlLabel,
    // Radio,
    // Button,
    // TextareaAutosize,
  } from "@mui/material";
// import Reservation from '../components/reservationForm';
// import ActivityVisiteur from '../components/ActivityVisiteur';
import photo from '../img/actyv_logo_3.png';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const ProfilVisiteur = () => {
    return ( 
    <div>
        <Container
            style = {{
                padding:'0',
                maxWidth: '100%',
                margin: '10em auto 3em',
                width: '90%',
            }}
        >
            <Typography fontSize="44px" fontWeight="600" color="primary" fontFamily="Caveat" textAlign="left" mb={3}>
            {" "}
                Visiteur
            </Typography>
            <Grid container>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="400"
                            src={photo}
                            alt="visiteur-photo"
                           
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={9} padding="1em 2em" >
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="left">
                                        <Typography color="secondary" fontWeight="bold" fontStyle='italic'>
                                            Nom
                                        </Typography> 
                                    </TableCell>
                                    <TableCell align="left"  >
                                        <TextField variant="outlined" fullWidth id="Nom" value="TC" 
                                        sx={{ backgroundColor:"primary.lightest"}}>
                                        </TextField> 
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                        <Typography color="secondary" fontWeight="bold" fontStyle='italic'>
                                            Petit descriptif
                                        </Typography> 
                                    </TableCell>
                                    <TableCell align="left">
                                        <TextField variant="outlined" fullWidth multiline id="Descriptif" value="Une jeune passionnée par les mythologies de toutes les cultures du monde, intéressée à les découvrir à travers les différentes manières respectives de les raconter." 
                                        sx={{ backgroundColor:"primary.lightest"}}>
                                        </TextField> 
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                        <Typography color="secondary" fontWeight="bold" fontStyle='italic'>
                                            Intérêts
                                        </Typography> 
                                    </TableCell>
                                    <TableCell align="left">
                                        <TextField variant="outlined" fullWidth multiline id="Intérêts" value="Danse, musique, mythologies" color='secondary' backgroundColor="secondary"
                                        sx={{ backgroundColor:"primary.lightest"}}>
                                        </TextField> 
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                        <Typography color="secondary" fontWeight="bold" fontStyle='italic'>
                                            Langues
                                        </Typography> 
                                    </TableCell>
                                    <TableCell align="left">
                                        <TextField variant="outlined" fullWidth multiline id="Langues" value="Français, anglais." color='secondary' backgroundColor="secondary"
                                        sx={{ backgroundColor:"primary.lightest"}}>
                                        </TextField> 
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                        <Typography color="secondary" fontWeight="bold" fontStyle='italic'>
                                            Bio
                                        </Typography> 
                                    </TableCell>
                                    <TableCell align="left">
                                        <TextField variant="outlined" fullWidth multiline id="Bio" value="Diplômée d'un Bachelier et d'un Master dans le Département d'Histoire, Arts et Archéologie de l'ULB, je me suis ensuite lancée dans une série de voyages à différentes parties du monde, à la recherche de nouveaux cercles de partage de mythes et légendes, afin de mieux comprendre comment ils se propagent au sein de leurs milieux culturels respectifs et au-delà, et évoluent dans notre ère contemporain." color='secondary' backgroundColor="secondary"
                                        sx={{ backgroundColor:"primary.lightest"}}>
                                        </TextField> 
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Box display="flex" justifyContent="end" width="100%">
                    <Button color="secondary" variant='contained'
                    sx={{ 
                        fontSize:"20px", margin:"2em 0em", padding: "0.5em"
                    }}> 
                        <Link href="/visiteur" sx={{textDecoration:"none"}}>
                            <Typography color="white" fontFamily="Caveat" fontWeight="bold">
                                Confirmer
                            </Typography> 
                        </Link>
                    </Button>
                
                    <Button sx={{ 
                        fontSize:"20px", margin:"2em", padding: "0.5em"
                    }}> 
                        <Link href="/visiteur" sx={{textDecoration:"none"}}>
                            <Typography color="secondary" fontFamily="Caveat" fontWeight="bold">
                                Annuler
                            </Typography> 
                        </Link>
                    </Button>
                </Box>
            </Grid>
        </Container>
    </div>
    );
}
 
export default ProfilVisiteur;