import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Grid,
  TextField,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  // TextareaAutosize,
} from "@mui/material";
import { useState } from "react";


const ContactForm = () => {

  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)
  
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  
  const [message, setMessage] = useState('')
  const [messageError, setMessageError] = useState(false)
  
  const [send, setSend] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setNameError(false)
    setEmailError(false)
    setMessageError(false)

    if(name === '') { setNameError(true) }
    if(email === '') { setEmailError(true) }
    if(message === '') { setMessageError(true) }

    if(name & email & message) {
      console.log(name, email, message)
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setSend(true)
  };

  return (
    <>
    {(send === false)?  
    <Box id="contact"
      sx={{
          '@media (min-width: 768px)': { padding: '1rem 5rem' },
          '@media (min-width: 680px) and (max-width: 768px)': { padding: '1rem 3rem' },
          '@media (min-width: 380px) and (max-width: 680px)': { padding: '1rem 2rem' },
          '@media (max-width: 380px)': { padding: '1rem 1rem' },
      }} 
    >
      <Box component="form" ref={form} noValidate onSubmit={sendEmail} mt={3} mb={3}>
        <Typography fontSize="44px" fontWeight="600" color="primary" fontFamily="Caveat" textAlign="left" mb={3}>
          {" "}
          Contact
        </Typography>

        <Grid container justifyContent="center">
          {/* NAME */}
          <Grid item xs={12} md={6}>
            <Grid
              container
              justifyContent="flex-start"
              mt={3}
              alignItems="center"
            >
              <Grid item sm={1} mr={2} mb={1}>
                <Typography color="secondary" fontWeight="bold" fontSize="14px"> Nom: </Typography>
              </Grid>
              <Grid item sm={10} xs={12}>
                <TextField
                  // variant="filled"
                  id="name"
                  name="name"
                  required
                  label="Nom complet"
                  type="text"
                  fullWidth
                  InputLabelProps = {{
                    sx: {fontSize:"14px", color:"#370665"} 
                  }}
                  inputProps = {{
                    sx: {fontSize: '16px', color: "#f87f49",backgroundColor:"#FC991833"}
                  }}
                  onChange={(e) => setName(e.target.value)}
                  error={nameError}
                ></TextField>
              </Grid>
            </Grid>

            {/* EMAIL */}
            <Grid
              container
              justifyContent="flex-start"
              mt={3}
              alignItems="center"
            >
              <Grid item sm={1} mr={2} mb={1}>
                <Typography color="secondary" fontWeight="bold" fontSize="14px"> Email: </Typography>
              </Grid>
              <Grid item sm={10} xs={12}>
                <TextField
                  // variant="filled"
                  border="none"
                  id="email"
                  name="email"
                  required
                  label="example@example.com"
                  type="email"
                  fullWidth
                  InputLabelProps = {{
                    sx: {fontSize:"14px", color:"#370665", border:"none"} 
                  }}
                  inputProps = {{
                    sx: {fontSize: '16px', color: "#f87f49", backgroundColor:"#FC991833", border:"none"}
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError}
                ></TextField>
              </Grid>
            </Grid>

            <Grid container mt={3} 
              sx={{
                '@media(min-width:1600px)' : { paddingLeft: '0.6em' },
                '@media (min-width:740px) and (maxWidth:900px)': { paddingLeft: '0.4em' },
                // '@media (maxWidth: 640px)': { padding: "0em 0.2em"}
              }}
            >

              {/* STATUS */}
              <Grid item mb={1.5} xs={12} sm={4} md={4}>
                <Grid container>
                  <Grid item>
                    <Typography color="secondary" fontWeight="bold" fontSize="14px"> Status: </Typography>
                  </Grid>
                  <Grid item ml={3.5}
                    sx={{
                      '@media (maxWidth:600px)': { marginLeft: 4 },
                    }}
                  >
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Organisateur"
                        name="status"
                        color="secondary"
                        required
                      >
                        <FormControlLabel
                          value="Organisateur"
                          control={<Radio />}
                          label={<Typography color="secondary" fontSize="0.8rem">Organisateur</Typography>}
                        />
                        <FormControlLabel
                          value="Partenaire"
                          control={<Radio />}
                          label={<Typography color="secondary" fontSize="0.8rem">Partenaire</Typography>}
                        />
                        <FormControlLabel
                          value="Investisseur"
                          control={<Radio />}
                          label={<Typography color="secondary" fontSize="0.8rem">Investisseur</Typography>}
                        />
                        <FormControlLabel
                          value="Autre"
                          control={<Radio />}
                          label={<Typography color="secondary" fontSize="0.8rem">Autre</Typography>}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

              {/* LANGUAGES */}
              <Grid item mb={1.5} xs={12} sm={4} md={4}>
                <Grid container>
                  <Grid item>
                    <Typography color="secondary" fontWeight="bold" fontSize="14px"> Langue: </Typography>
                  </Grid>
                  <Grid item ml={3.5}
                    sx={{
                      '@media (maxWidth:600px)': { marginLeft: 2.7},
                    }}
                  >
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Français"
                        name="language"
                        color="secondary"
                        required
                      >
                        <FormControlLabel
                          value="Français"
                          control={<Radio />}
                          label={<Typography color="secondary" fontSize="0.8rem">Français</Typography>}
                        />
                        <FormControlLabel
                          value="Néerlandais"
                          control={<Radio />}
                          label={<Typography color="secondary" fontSize="0.8rem">Néerlandais</Typography>}
                        />
                        <FormControlLabel
                          value="Anglais"
                          control={<Radio />}
                          label={<Typography color="secondary" fontSize="0.8rem">Anglais</Typography>}
                        />
                        <FormControlLabel
                          value="Autre"
                          control={<Radio />}
                          label={<Typography color="secondary" fontSize="0.8rem">Autre</Typography>}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

              {/* AGE */}
              <Grid item xs={12} sm={4} >
                <Grid container columns={14}>
                  <Grid item mr={3.5} mb={1} xs={1} sm={2} md={1}>
                    <Typography color="secondary" fontWeight="bold" fontSize="14px"> Age: </Typography>
                  </Grid>
                  <Grid item xs={14} sm={8} md={9} >
                    <TextField
                      type="number"
                      id="age"
                      label={30}
                      name="age"
                      required
                      fullWidth
                      InputLabelProps = {{
                        sx: {fontSize:"14px", color:"#370665"} 
                      }}
                      inputProps = {{
                        sx: {fontSize: '16px', color: "#f87f49", backgroundColor:"#FC991833"}
                      }}
                    ></TextField>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* MESSAGE BOX */}
          <Grid item xs={12} md={6}>
            <Grid container mt={3} ml={0}>
              <Grid item mr={3} mb={1} xs={1} sm={1} md={1.5} lg={1} >
                <Typography color="secondary" fontWeight="bold" align="left" fontSize="14px" paddingTop="0.9em" > Message: </Typography>
              </Grid>

              <Grid item xs={12} sm={10} md={9.5} lg={10} 
              backgroundColor="#FC991833">
                  <TextField
                      type="text"
                      id="message"
                      label="Message"
                      name="message"
                      placeholder="Votre message"
                      required
                      fullWidth
                      multiline
                      rows={15}
                      InputLabelProps = {{
                        sx: {fontSize:"14px", color:"#370665"} 
                      }}
                      inputProps = {{
                        sx: {fontSize: '16px', color: "#f87f49"}
                      }}
                      onChange={(e) => setMessage(e.target.value)}
                      error={messageError}
                    ></TextField>
                {/* <TextareaAutosize
                  name="message"
                  aria-label="minimum height"
                  minRows={22}
                  placeholder="Votre message"
                  style={{ width: "100%", paddingLeft: "2%" }}
                  sx={{ borderRadius: "20%", fontFamily:"Raleway" }}
                  InputLabelProps = {{
                    sx: {fontFamily:"Raleway", fontSize:"14px", color:"#370665"} 
                  }}
                  inputProps = {{
                    sx: {fontSize: '16px', color: "#f87f49", fontFamily:"Raleway", backgroundColor:"#FC991833"}
                  }}
                /> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* BUTTON */}
        <Button variant="contained" type={"submit"}
          sx={{ color: "#370665", backgroundColor:"#FC991899", fontFamily: "Caveat", fontSize:"20px", fontWeight:"bold", textTransform:"none", borderRadius:"25px", padding:"7px 25px", display:"flex", justifyContent:"start", margin:"1.5em 0em" }}
        >
          Envoyez
        </Button>
      </Box>
    </Box> : 
    <Typography mt={7} color='secondary' sx={{fontSize: '1.5rem', fontFamily: 'Raleway', fontWeight: 600 }}>Merci pour votre message. Nous revenons vers vous le plus vite possible ! </Typography>}
      </>
  );
};

export default ContactForm;