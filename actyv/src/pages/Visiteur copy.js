import React from 'react';
import {
    Container,
    Grid,
    Box,
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
// import ActivityVisiteur from '../components/ActivityVisiteur';
import photo from '../img/actyv_logo_3.png';
import activityLogo from '../img/Picture16.jpg';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const Visiteur = () => {
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
                            height="100%"
                            src={photo}
                            alt="visiteur-photo"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={9} backgroundColor="secondary.light"
                sx={{
                    padding:"1em 2em",
                    '@media (maxWidth: 640px)': { padding: "0em 0.2em"}
                  }}
                  >
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
                                            Une jeune passionn??e par les mythologies de toutes les cultures du monde, int??ress??e ?? les d??couvrir ?? travers les diff??rentes mani??res respectives de les raconter.
                                        </Typography>  
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                        <Typography color="secondary" fontWeight="bold" fontStyle='italic'>
                                            Int??r??ts
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
                                            Fran??ais, anglais.
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
                                            Dipl??m??e d'un Bachelier et d'un Master dans le D??partement d'Histoire, Arts et Arch??ologie de l'ULB, je me suis ensuite lanc??e dans une s??rie de voyages ?? diff??rentes parties du monde, ?? la recherche de nouveaux cercles de partage de mythes et l??gendes, afin de mieux comprendre comment ils se propagent au sein de leurs milieux culturels respectifs et au-del??, et ??voluent dans notre ??re contemporain.
                                        </Typography>  
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Box display="flex" justifyContent="end" width="100%">
                    <Link href="/profil_visiteur">
                        <Button 
                        sx={{ 
                            float:"left", fontSize:"20px", margin:"2em 0em", backgroundColor:"tertiary.light", padding: "0.5em"
                        }}> 
                            <Typography color="secondary" fontFamily="Caveat" fontWeight="bold">
                                Modifiez votre profile
                            </Typography> 
                        </Button>
                    </Link>
                </Box>
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
                Formules et activit??s r??alis??es
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
                    backgroundColor="#30C9B080"
                    padding="2em"
                    align="left"
                >
                    <Typography color="secondary" fontWeight="bold" fontStyle='italic'>Tralala ASBL</Typography>
                    <br />
                    <Typography color="secondary">
                    -	Atelier de percussion africaine <br />
                    - Atelier d?????veil musical et corporel <br />
                    -	Cours de danse, workshops et musique d???Afrique de l???Ouest (GC Ten Noey, C-Ramic, Ulb, De Markten, Cardijnschool, h??tel de ville de Saint Gilles, h??tel de ville de 1000 Bruxelles).<br />
                    -	Animations musicale (fanfare) dans les brocantes de quartier.<br />
                    -	Concerts et jam session (Kumba, Platform 241, Toukoul, Centre Communautaire Maritime, Maison des Cultures de Molenbeek, VK, Caf?? Flow, De Central, Place de la Libert?? , Th????tre National , Bonnefoi , Matongu?? en Couleurs , Horloge du Sud , Tour et Taxis ,  Square des Lib??rateurs, de Bruxelles et d???Ailleurs , Azeb Caf?? , Sazz n Jazz ,  F??te de la Lumi??re ?? Saint Josse , festival Anti Tapas, Bonfire Inna de Yard???)<br />
                    -	Organisation de la tourn??e rencontre des fanfakids en Afrique de l???Ouest.
                    </Typography> 
                    {/* <ActivityVisiteur/> */}
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