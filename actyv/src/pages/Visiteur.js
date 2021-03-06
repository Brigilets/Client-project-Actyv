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
        <Box
            sx={{ 
                '@media (min-width: 992px)': { padding: '8rem 5rem 5rem' },
                '@media (min-width: 768px) and (max-width: 992px)': { padding: '1rem 5rem' },
                '@media (min-width: 680px) and (max-width: 768px)': { padding: '1rem 3rem' },
                '@media (min-width: 380px) and (max-width: 680px)': { padding: '1rem 2rem' },
                '@media (max-width: 380px)': { padding: '1rem 1rem' },
            }}
        >
            <Typography fontSize="44px" fontWeight="600" color="primary" fontFamily="Caveat" textAlign="left" mb={3}>
            {" "}
                Visiteur
            </Typography>

            <Grid container>
                {/* Photo container */}
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="100%"
                            src={photo}
                            alt="visiteur-photo"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={8} backgroundColor="secondary.light"
                sx={{
                    padding:"1em 2em",
                    '@media (maxWidth: 640px)': { padding: "0em 0.2em"}
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
                            <Typography color="secondary" fontSize="14px"> Une jeune passionn??e par les mythologies de toutes les cultures du monde, int??ress??e ?? les d??couvrir ?? travers les diff??rentes mani??res respectives de les raconter. </Typography>
                        </Grid>
                    </Grid>
                    {/* Interests container */}
                    <Grid container padding="0.5em 0em" borderBottom="solid 1px #6342AC70">
                        <Grid item padding="0.5em" xs={12} sm={2}>
                            <Typography color="secondary" fontWeight="bold" fontSize="14px"> Int??r??ts </Typography>
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
                            <Typography color="secondary" fontSize="14px"> Fran??ais, anglais. </Typography>
                        </Grid>
                    </Grid>
                    {/* Bio container */}
                    <Grid container padding="0.5em 0em">
                        <Grid item padding="0.5em" xs={12} sm={2}>
                            <Typography color="secondary" fontWeight="bold" fontSize="14px"> Bio </Typography>
                        </Grid>
                        <Grid item xs={12} sm={10}
                        sx={{
                            padding:"0.5em",
                            '@media (min-width: 640px)': {textAlign:'left'},
                        }}
                        >
                            <Typography color="secondary" fontSize="14px"> Dipl??m??e d'un Bachelier et d'un Master dans le D??partement d'Histoire, Arts et Arch??ologie de l'ULB, je me suis ensuite lanc??e dans une s??rie de voyages ?? diff??rentes parties du monde, ?? la recherche de nouveaux cercles de partage de mythes et l??gendes, afin de mieux comprendre comment ils se propagent au sein de leurs milieux culturels respectifs et au-del??, et ??voluent dans notre ??re contemporain.</Typography>
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
        </Box>
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
                <Box display="flex" justifyContent="end" width="100%">
                    <Link href="/searchresults">
                        <Button 
                        sx={{ 
                            float:"left", fontSize:"20px", margin:"2em 0em 0em", backgroundColor:"secondary.light", padding: "0.5em"
                        }}> 
                            <Typography color="secondary" fontFamily="Caveat" fontWeight="bold">
                                Cherchez de nouvelles activit??s
                            </Typography> 
                        </Button>
                    </Link>
                </Box>
            </Grid>
            {/* <br /> <br /> */}
            {/* <ActivityVisiteur/> */}
        </Box>
        {/* <Container
        style = {{
            padding:'0',
            maxWidth: '100%',
            margin: '1em auto',
            width: '90%',
        }}
        >
        </Container> */}
        {/* <Reservation/> */}
        </div>
        
     );
}
 
export default Visiteur;