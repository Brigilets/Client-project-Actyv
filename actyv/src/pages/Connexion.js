import React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import picture from '../img/Picture13.jpg';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Connexion.css';
import { useState } from "react";
import Link from '@mui/material/Link';


const Inscription = () => {
    
    const [Email, setEmail] = useState('')
    const [EmailError, setEmailError] = useState(false)
    
    const [Passe, setPasse] = useState('')
    const [PasseError, setPasseError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setEmailError(false)
        setPasseError(false)

        if(Email === '') { setEmailError(true) }
        if(Passe === '') { setPasseError(true) }

        // if(Passe !== Confirmer) {

        // }

        if(Email & Passe) {
            console.log(Email, Passe)
        }
    }

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
                <Grid container>
                    <Grid item sm={12} md={4}>
                        <img src={picture} alt="départ" width="100%" height="auto"
                            style={{
                                objectFit:"cover",
                            }} 
                        />
                    </Grid>
                    <Grid item sm={12} md={8} padding='0em 1em'>
                        <Typography color='primary' fontSize='40px' margin="0em 0em 0.5em" fontFamily="Caveat">Je suis...</Typography>

                        {/* Forms container */}
                        <Grid container className="forms" style={{ display: "flex", justifyContent: "center", width: "100%" }}>

                            {/* Organisateur */}
                            <Grid item sm={12} md={5} className="form"
                                style = {{
                                    backgroundColor: '#6342AC33',
                                    padding: "1.5em",
                                    borderRadius: "15px",
                                    boxSizing: "border-box",
                                }}
                            >
                                <form 
                                noValidate 
                                autoComplete='off' 
                                // onSubmit={handleSubmit}
                                style = {{ width: '100%', boxSizing: 'border-box' }}
                                >
                                    <FormLabel>
                                        <Typography color='secondary' fontWeight="bold" fontSize="24px" fontFamily="Caveat">
                                            Organisateur/trice
                                        </Typography>
                                    </FormLabel>

                                    <TextField variant="standard" fullWidth label="Email" id="Email" color='secondary' required
                                        sx={{marginTop: "0.5em", "& label": {color: '#6342AC'}}}
                                        InputLabelProps = {{
                                            sx: {fontFamily:"Raleway", fontSize:"14px", color:"#6342AC"} 
                                        }}
                                        inputProps = {{
                                            sx: {fontSize: '16px', color: "#6342AC"}
                                        }}
                                    onChange={(e) => setEmail(e.target.value)}
                                    error={EmailError}
                                    />
                                    <TextField variant="standard" fullWidth label="Mot de Passe" id="Passe" color='secondary' required
                                        sx={{marginTop: "0.5em", "& label": {color: '#6342AC'}}}
                                        InputLabelProps = {{
                                            sx: {fontFamily:"Raleway", fontSize:"14px", color:"#6342AC"} 
                                        }}
                                        inputProps = {{
                                            sx: {fontSize: '16px', color: "#6342AC"}
                                        }}
                                    onChange={(e) => setPasse(e.target.value)}
                                    error={PasseError}
                                    />
                                  
                                    <Button type='submit' 
                                    onClick={() => console.log('Clicked !')} variant='contained' color='secondary' 
                                    sx={{borderRadius:'20px', marginTop:'2em', width:'100%'}} linkbutton={true}>
                                        <Link href='/organisateur' style={{
                                            textDecoration: 'none',
                                            color: 'white',
                                        }}>
                                            <Typography textTransform='none' fontFamily="Caveat" fontSize="22px">
                                                Se connecter
                                            </Typography>
                                        </Link>
                                    </Button>
                                </form>
                            </Grid>

                            {/* Visiteur */}
                            <Grid item sm={12} md={5} className="form"
                                style = {{
                                    backgroundColor: '#FC991833',
                                    padding: "1.5em",
                                    borderRadius: "15px",
                                    boxSizing: "border-box",
                                }}
                            >
                                <form 
                                noValidate 
                                autoComplete='off' 
                                // onSubmit={handleSubmit}
                                style = {{ width: '100%', boxSizing: 'border-box' }}
                                >
                                    <FormLabel>
                                        <Typography color='primary' fontWeight="bold" fontSize="24px" fontFamily="Caveat">
                                            Visiteur/euse
                                        </Typography>
                                    </FormLabel>

                                    <TextField variant="standard" fullWidth label="Email" id="Email" color='primary' required
                                        sx={{marginTop: "0.5em", "& label": {color: '#f87f49'}}}
                                        InputLabelProps = {{
                                            sx: {fontFamily:"Raleway", fontSize:"14px", color:"#f87f49"} 
                                        }}
                                        inputProps = {{
                                            sx: {fontSize: '16px', color: "#f87f49"}
                                        }}
                                    onChange={(e) => setEmail(e.target.value)}
                                    error={EmailError}
                                    />
                                    <TextField variant="standard" fullWidth label="Mot de Passe" id="Passe" color='primary' required
                                        sx={{marginTop: "0.5em", "& label": {color: '#f87f49'}}}
                                        InputLabelProps = {{
                                            sx: {fontFamily:"Raleway", fontSize:"14px", color:"#f87f49"} 
                                        }}
                                        inputProps = {{
                                            sx: {fontSize: '16px', color: "#f87f49"}
                                        }}
                                    onChange={(e) => setPasse(e.target.value)}
                                    error={PasseError}
                                    />
                                   
                                    <Button type='submit' 
                                    onClick={() => console.log('Clicked !')} variant='contained' color='primary' 
                                    sx={{borderRadius:'20px', marginTop:'2em', width:'100%'}} linkbutton={true}>
                                        <Link href='/visiteur' style={{
                                            textDecoration: 'none',
                                            color: '#370665',
                                        }}>
                                            <Typography textTransform='none' color='secondary' fontFamily="Caveat" fontSize="22px">
                                                Se connecter
                                            </Typography>
                                        </Link>
                                    </Button>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Link href="/Inscription">
                        <Button sx={{ paddingTop:"3rem", float:"left", fontFamily:"Caveat", fontSize:"20px", marginBottom:"2em"}} > 
                            <Typography color="#30C9B0" fontFamily="Caveat">Pas encore inscrit ? Inscrivez-vous.</Typography> 
                        </Button>
                    </Link>
                </Grid>
            </Container>
        </div>
     );
}
 


export default Inscription;