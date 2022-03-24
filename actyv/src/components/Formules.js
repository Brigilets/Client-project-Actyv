import * as React from 'react';
import './Formules.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import Link from '@mui/material/Link';


export default function ImgMediaCard() {
    return (
        <Box id="formules" className="box-formules" 
        sx={{ 
            flexGrow: 1,
            boxSizing: "border-box",
            marginBottom:"4em",
            padding:"3rem 5rem",
            '@media (max-width: 768px)': { padding:"3rem 3rem" },
            '@media (max-width: 680px)': { padding:"3rem 2rem" },
            '@media (max-width: 380px)': { padding:"3rem 1rem" },
        }} >
            <Typography className="title-formules"
             color="primary"
             fontFamily="Caveat"
             fontWeight={600}
             fontSize="44px"
             textAlign="start"
             >
                Formules / Activités proposées
            </Typography>
            
            <Grid container spacing={2} boxSizing="border-box">
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1543906965-f9520aa2ed8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="green iguana"
                        />
                        <CardContent sx={{backgroundColor:"#30C9B0", color:"white", textAlign:"left"}}>
                            <Typography gutterBottom variant="h5" component="div" className='raleway-typography' fontFamily="Raleway">
                                Nom du formule
                            </Typography>
                            <Typography  fontFamily="Raleway">
                            Descriptif
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1543906965-f9520aa2ed8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="green iguana"
                        />
                        <CardContent sx={{backgroundColor:"#30C9B0", color:"white", textAlign:"left"}}
                        >
                            <Typography gutterBottom variant="h5" component="div"  fontFamily="Raleway">
                                Nom du formule
                            </Typography>
                            <Typography fontFamily="Raleway" >
                                Descriptif
                            </Typography>
                        </CardContent>
                    
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1543906965-f9520aa2ed8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="green iguana"
                        />
                        <CardContent sx={{backgroundColor:"#30C9B0", color:"white", textAlign:"left"}}>
                            <Typography gutterBottom variant="h5" component="div"  fontFamily="Raleway">
                                Nom du formule
                            </Typography>
                            <Typography  fontFamily="Raleway">
                            Descriptif
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1543906965-f9520aa2ed8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="green iguana"
                        />
                        <CardContent sx={{backgroundColor:"#30C9B0", color:"white", textAlign:"left"}}>
                            <Typography gutterBottom variant="h5" component="div"  fontFamily="Raleway">
                                Nom du formule
                            </Typography>
                            <Typography  fontFamily="Raleway">
                            Descriptif
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Link href="/searchresults">
                    <Button sx={{ margin:"3em 0em 0em", float:"left", fontFamily:"Caveat", fontSize:"20px" }} color="tertiary"> 
                        Découvrir plus 
                    </Button>
                </Link>
            </Grid>
        </Box>

    );
}