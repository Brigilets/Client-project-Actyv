import React from 'react';
import {
    Container,
    Grid,
    Box,
    Card, 
    CardMedia,
    Typography,
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
                margin: '8em auto 1em',
                width: '90%',
            }}
        >
            <Typography fontSize="44px" fontWeight="600" color="primary" fontFamily="Caveat" textAlign="left" mb={3}>
            {" "}
                Visiteur
            </Typography>

            <Grid container>
                {/* Photo container */}
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
                    '@media (max-width: 640px)': { padding: "0em 0.2em"}
                  }}
                >
                    {/* Name container */}
                    <Grid container padding="0.5em 0em" borderBottom="solid 1px #6342AC70">
                        <Grid item padding="0.5em" xs={12} sm={2}>
                            <Typography color="secondary" fontWeight="bold" fontSize="14px"> Nom </Typography>
                        </Grid>
                        <Grid item xs={12} sm={10}
                        sx={{
                            padding:"0.5em",
                            '@media (min-width: 640px)': {textAlign:'left'},
                        }}
                        >
                            <Typography color="secondary" fontSize="14px"> TC </Typography>
                        </Grid>
                    </Grid>
                    {/* Description container */}
                    <Grid container padding="0.5em 0em" borderBottom="solid 1px #6342AC70">
                        <Grid item padding="0.5em" xs={12} sm={2}>
                            <Typography color="secondary" fontWeight="bold" fontSize="14px"> Petit descriptif </Typography>
                        </Grid>
                        <Grid item xs={12} sm={10}
                        sx={{
                            padding:"0.5em",
                            '@media (min-width: 640px)': {textAlign:'left'},
                        }}
                        >
                            <Typography color="secondary" fontSize="14px"> Une jeune passionnée par les mythologies de toutes les cultures du monde, intéressée à les découvrir à travers les différentes manières respectives de les raconter. </Typography>
                        </Grid>
                    </Grid>
                    {/* Interests container */}
                    <Grid container padding="0.5em 0em" borderBottom="solid 1px #6342AC70">
                        <Grid item padding="0.5em" xs={12} sm={2}>
                            <Typography color="secondary" fontWeight="bold" fontSize="14px"> Intérêts </Typography>
                        </Grid>
                        <Grid item xs={12} sm={10}
                        sx={{
                            padding:"0.5em",
                            '@media (min-width: 640px)': {textAlign:'left'},
                        }}
                        >
                            <Typography color="secondary" fontSize="14px"> Danse, musique, mythologies </Typography>
                        </Grid>
                    </Grid>
                    {/* Languages container */}
                    <Grid container padding="0.5em 0em" borderBottom="solid 1px #6342AC70">
                        <Grid item padding="0.5em" xs={12} sm={2}>
                            <Typography color="secondary" fontWeight="bold" fontSize="14px"> Langues </Typography>
                        </Grid>
                        <Grid item xs={12} sm={10}
                        sx={{
                            padding:"0.5em",
                            '@media (min-width: 640px)': {textAlign:'left'},
                        }}
                        >
                            <Typography color="secondary" fontSize="14px"> Français, anglais. </Typography>
                        </Grid>
                    </Grid>
                    {/* Bio container */}
                    <Grid container padding="0.5em 0em" borderBottom="solid 1px #6342AC70">
                        <Grid item padding="0.5em" xs={12} sm={2}>
                            <Typography color="secondary" fontWeight="bold" fontSize="14px"> Bio </Typography>
                        </Grid>
                        <Grid item xs={12} sm={10}
                        sx={{
                            padding:"0.5em",
                            '@media (min-width: 640px)': {textAlign:'left'},
                        }}
                        >
                            <Typography color="secondary" fontSize="14px"> Diplômée d'un Bachelier et d'un Master dans le Département d'Histoire, Arts et Archéologie de l'ULB, je me suis ensuite lancée dans une série de voyages à différentes parties du monde, à la recherche de nouveaux cercles de partage de mythes et légendes, afin de mieux comprendre comment ils se propagent au sein de leurs milieux culturels respectifs et au-delà, et évoluent dans notre ère contemporain.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Box display="flex" justifyContent="end" width="100%">
                    <Link href="/profil_visiteur">
                        <Button 
                        sx={{ 
                            float:"left", fontSize:"20px", margin:"2em 0em 0em", backgroundColor:"tertiary.light", padding: "0.5em"
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
                margin: '1em auto',
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
                    backgroundColor="#30C9B080"
                    padding="2em"
                    align="left"
                >
                    <Typography color="secondary" fontWeight="bold" fontStyle='italic'>Tralala ASBL</Typography>
                    <br />
                    <Typography color="secondary">
                    -	Atelier de percussion africaine <br />
                    - Atelier d’éveil musical et corporel <br />
                    -	Cours de danse, workshops et musique d’Afrique de l’Ouest (GC Ten Noey, C-Ramic, Ulb, De Markten, Cardijnschool, hôtel de ville de Saint Gilles, hôtel de ville de 1000 Bruxelles).<br />
                    -	Animations musicale (fanfare) dans les brocantes de quartier.<br />
                    -	Concerts et jam session (Kumba, Platform 241, Toukoul, Centre Communautaire Maritime, Maison des Cultures de Molenbeek, VK, Café Flow, De Central, Place de la Liberté , Théâtre National , Bonnefoi , Matongué en Couleurs , Horloge du Sud , Tour et Taxis ,  Square des Libérateurs, de Bruxelles et d’Ailleurs , Azeb Café , Sazz n Jazz ,  Fête de la Lumière à Saint Josse , festival Anti Tapas, Bonfire Inna de Yard…)<br />
                    -	Organisation de la tournée rencontre des fanfakids en Afrique de l’Ouest.
                    </Typography> 
                    {/* <ActivityVisiteur/> */}
                </Grid>
                <Box display="flex" justifyContent="end" width="100%">
                    <Link href="/searchresults">
                        <Button 
                        sx={{ 
                            float:"left", fontSize:"20px", margin:"2em 0em 0em", backgroundColor:"secondary.light", padding: "0.5em"
                        }}> 
                            <Typography color="secondary" fontFamily="Caveat" fontWeight="bold">
                                Cherchez de nouvelles activités
                            </Typography> 
                        </Button>
                    </Link>
                </Box>
            </Grid>
            {/* <br /> <br /> */}
            {/* <ActivityVisiteur/> */}
        </Container>
        <Container
        style = {{
            padding:'0',
            maxWidth: '100%',
            margin: '1em auto',
            width: '90%',
        }}
        >
            <Typography fontSize="44px" fontWeight="600" color="primary" fontFamily="Caveat" textAlign="left" mb={3}>
            {" "}
                Photos
            </Typography>
        </Container>
        {/* <Reservation/> */}
        </div>
        
     );
}
 
export default Visiteur;