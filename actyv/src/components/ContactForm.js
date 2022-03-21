import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Container,
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
  
  const form = useRef();
  console.log(form)

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
        process.env.REACT_APP_EMAILJS_RESERVATION_TEMPLATE_ID,
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
  };

  return (
    <Container id="contact"
      style = {{
        padding:'0',
        maxWidth: '100%',
        margin: '3em auto',
        width: '90%',
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
              <Grid item xs={2} mr={1}>
                <Typography color="secondary" fontWeight="bold"> Nom: </Typography>
              </Grid>
              <Grid item xs={9}>
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
              <Grid item xs={2} mr={1}>
                <Typography color="secondary" fontWeight="bold"> Email: </Typography>
              </Grid>
              <Grid item xs={9}>
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

            {/* <Grid container justifyContent="space-between" mt={3} padding="0em 1.5em"> */}
            <Grid container justifyContent="center" mt={3} padding="0em 0em 0em 2.5em"
            sx={{
              '@media (max-width:1580px)': { paddingLeft: "2em"},
              '@media (max-width:1400px)': { paddingLeft: "1.8em"},
              '@media (max-width:1200px)': { paddingLeft: "1.4em"},
              '@media (max-width:750px)': { paddingLeft: "1.1em"},
              '@media (max-width:600px)': { padding: "0em 0.4em"}
            }}
            >
              {/* STATUS */}
              <Grid item xs={12} sm={4} mb={1.5}>
                <Grid container>
                  <Grid item>
                    <Typography color="secondary" fontWeight="bold"> Status: </Typography>
                  </Grid>
                  <Grid item ml={3}
                    sx={{
                      '@media (max-width:600px)': { marginLeft: 4},
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
              <Grid item xs={12} sm={4} mb={1.5}>
                <Grid container>
                  <Grid item>
                    <Typography color="secondary" fontWeight="bold"> Langue: </Typography>
                  </Grid>
                  <Grid item ml={3}
                    sx={{
                      '@media (max-width:600px)': { marginLeft: 2.7},
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
              <Grid item xs={12} sm={4} md={4}>
                <Grid container alignText="left" alignItems="left" >
                  <Grid item xs={1} mr={4.5} mb={1}>
                    <Typography color="secondary" fontWeight="bold"> Age: </Typography>
                  </Grid>
                  <Grid item xs={6}
                    sx={{
                      '@media (max-width:600px)': { marginLeft: 0.8},
                    }}
                  >
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

            {/* BUTTON */}
            {/* <Grid container justifyContent="flex-start" mt={5} ml={4}>
              <Grid item>
                <Button
                  variant="contained"
                  type={"submit"}
                  sx={{ color: "#370665", backgroundColor:"#FC991899", fontFamily: "Caveat", fontSize:"22px", fontWeight:"bold", textTransform:"none", borderRadius:"25px", padding:"7px 25px" }}
                >
                  Envoyez
                </Button>
              </Grid>
            </Grid> */}
          </Grid>

          {/* MESSAGE BOX */}
          <Grid item xs={12} md={6}>
            <Grid container mt={3} ml={0}>
              <Grid item xs={2} mr={1}>
                <Typography color="secondary" fontWeight="bold"> Message: </Typography>
              </Grid>

              <Grid item xs={9} backgroundColor="#FC991833">
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
        <Grid container justifyContent="flex-start" mt={5} ml={2}>
              <Grid item>
                <Button
                  variant="contained"
                  type={"submit"}
                  sx={{ color: "#370665", backgroundColor:"#FC991899", fontFamily: "Caveat", fontSize:"20px", fontWeight:"bold", textTransform:"none", borderRadius:"25px", padding:"7px 25px" }}
                >
                  Envoyez
                </Button>
              </Grid>
            </Grid>
      </Box>
    </Container>
  );
};

export default ContactForm;