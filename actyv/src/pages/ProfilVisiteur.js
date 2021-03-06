import React from 'react';
import {
    Container,
    Box,
    Grid,
    Card, 
    CardMedia,
    Typography,
    TextField,
  } from "@mui/material";
// import Reservation from '../components/reservationForm';
// import ActivityVisiteur from '../components/ActivityVisiteur';
import photo from '../img/actyv_logo_3.png';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const ProfilVisiteur = () => {
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
                <Grid item xs={12} sm={6} md={4}>
                    <Card boxShadow="0px 0px 0px 0px">
                        <CardMedia
                            component="img"
                            height="100%"
                            src={photo}
                            alt="visiteur-photo"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={8}
                sx={{
                    padding:"1em",
                    '@media (maxWidth: 640px)': { padding: "0em 0.2em"},
                  }}
                >
                    {/* Name container */}
                    <Grid container padding="0.5em 0em">
                        <Grid item padding="0.5em" xs={12} sm={2} >
                            <Typography color="secondary" fontWeight="bold" fontSize="14px"> Nom </Typography>
                        </Grid>
                        <Grid item xs={12} sm={10}
                        sx={{
                            padding:"0.5em",
                            '@media (min-width: 640px)': {textAlign:'left'},
                            backgroundColor:"primary.lightest",
                            borderRadius:'3px'
                        }}
                        >
                            <TextField variant="standard" fullWidth size="small"
                            id="Nom" value="TC" multiline
                            // sx={{ backgroundColor:"#FC991820"}}
                            >
                            </TextField> 
                        </Grid>
                    </Grid>
                    {/* Description container */}
                    <Grid container padding="0.5em 0em">
                        <Grid item padding="0.5em" xs={12} sm={2}>
                            <Typography color="secondary" fontWeight="bold" fontSize="14px"> Petit descriptif </Typography>
                        </Grid>
                        <Grid item xs={12} sm={10}
                        sx={{
                            padding:"0.5em",
                            '@media (min-width: 640px)': {textAlign:'left'},
                            backgroundColor:"primary.lightest",
                            borderRadius:'3px'
                        }}
                        >
                            <TextField variant="standard" fullWidth multiline size="small" id="Nom" value="Une jeune passionn??e par les mythologies de toutes les cultures du monde, int??ress??e ?? les d??couvrir ?? travers les diff??rentes mani??res respectives de les raconter. " 
                            // sx={{ backgroundColor:"#FC991820"}}
                            >
                            </TextField> 
                        </Grid>
                    </Grid>
                    {/* Interests container */}
                    <Grid container padding="0.5em 0em">
                        <Grid item padding="0.5em" xs={12} sm={2}>
                            <Typography color="secondary" fontWeight="bold" fontSize="14px"> Int??r??ts </Typography>
                        </Grid>
                        <Grid item xs={12} sm={10}
                        sx={{
                            padding:"0.5em",
                            '@media (min-width: 640px)': {textAlign:'left'},
                            backgroundColor:"primary.lightest",
                            borderRadius:'3px'
                        }}
                        >
                            <TextField variant="standard" fullWidth multiline size="small" id="Nom" value="Danse, musique, mythologies" 
                            // sx={{ backgroundColor:"#FC991820"}}
                            >
                            </TextField>
                        </Grid>
                    </Grid>
                    {/* Languages container */}
                    <Grid container padding="0.5em 0em">
                        <Grid item padding="0.5em" xs={12} sm={2}>
                            <Typography color="secondary" fontWeight="bold" fontSize="14px"> Langues </Typography>
                        </Grid>
                        <Grid item xs={12} sm={10}
                        sx={{
                            padding:"0.5em",
                            '@media (min-width: 640px)': {textAlign:'left'},
                            backgroundColor:"primary.lightest",
                            borderRadius:'3px'
                        }}
                        >
                            <TextField variant="standard" fullWidth multiline size="small" id="Nom" value="Fran??ais, anglais. " 
                            // sx={{ backgroundColor:"#FC991820"}}
                            >
                            </TextField>
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
                            backgroundColor:"primary.lightest",
                            borderRadius:'3px'
                        }}
                        >
                            <TextField variant="standard" fullWidth multiline size="small" id="Nom" value="Dipl??m??e d'un Bachelier et d'un Master dans le D??partement d'Histoire, Arts et Arch??ologie de l'ULB, je me suis ensuite lanc??e dans une s??rie de voyages ?? diff??rentes parties du monde, ?? la recherche de nouveaux cercles de partage de mythes et l??gendes, afin de mieux comprendre comment ils se propagent au sein de leurs milieux culturels respectifs et au-del??, et ??voluent dans notre ??re contemporain." 
                            sx={{ borderBottom:"solid 1px #FC991820"}}
                            >
                            </TextField>
                        </Grid>
                    </Grid>
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
        </Box>
    </div>
    );
}
 
export default ProfilVisiteur;