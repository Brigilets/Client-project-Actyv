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
  TextareaAutosize,
} from "@mui/material";

const ContactForm = () => {
  
  const form = useRef();
  console.log(form)

  const sendEmail = (e) => {
    e.preventDefault();

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
  };

  return (
    <Container>
      <Box component="form" ref={form} noValidate onSubmit={sendEmail} mt={3} mb={3}>
        <Typography fontSize="44px" fontWeight="600" color="primary" textAlign="left" mb={3}>
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
                <Typography color="secondary" fontFamily="Raleway"> Nom: </Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  variant="filled"
                  id="name"
                  name="name"
                  required
                  label="Nom complet"
                  type="text"
                  fullWidth
                  sx={{ borderRadius: "20%", fontFamily:"Raleway" }}
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
                <Typography color="secondary" fontFamily="Raleway"> Email: </Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  variant="filled"
                  id="email"
                  name="email"
                  required
                  label="example@example.com"
                  type="email"
                  fullWidth
                  sx={{ borderRadius: "20%" }}
                ></TextField>
              </Grid>
            </Grid>

            <Grid container justifyContent="center" mt={3}>
              {/* STATUS */}
              <Grid item xs={4}>
                <Grid container>
                  <Grid item>
                    <Typography color="secondary" fontFamily="Raleway"> Status: </Typography>
                  </Grid>
                  <Grid item ml={3}>
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
                          label="Organisateur"
                          color="secondary"
                        />
                        <FormControlLabel
                          value="Partenaire"
                          control={<Radio />}
                          label="Partenaire"
                          color="secondary"
                        />
                        <FormControlLabel
                          value="Investisseur"
                          control={<Radio />}
                          label="Investisseur"
                          color="secondary"
                        />
                        <FormControlLabel
                          value="Autre"
                          control={<Radio />}
                          label="Autre"
                          color="secondary"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

              {/* LANGUAGES */}
              <Grid item xs={4}>
                <Grid container>
                  <Grid item>
                    <Typography color="secondary" fontFamily="Raleway"> Langue: </Typography>
                  </Grid>
                  <Grid item ml={3}>
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
                          label="Français"
                          color="secondary"
                        />
                        <FormControlLabel
                          value="Néerlandais"
                          control={<Radio />}
                          label="Néerlandais"
                          color="secondary"
                        />
                        <FormControlLabel
                          value="Anglais"
                          control={<Radio />}
                          label="Anglais"
                          color="secondary"
                        />
                        <FormControlLabel
                          value="Autre"
                          control={<Radio />}
                          label="Autre"
                          color="secondary"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

              {/* AGE */}
              <Grid item xs={3}>
                <Grid container>
                  <Grid item xs={3} mr={2.5}>
                    <Typography color="secondary" fontFamily="Raleway"> Age: </Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <TextField
                      type="number"
                      id="age"
                      label={30}
                      name="age"
                      required
                      fullWidth
                    ></TextField>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container justifyContent="flex-start" mt={5} ml={4}>
              <Grid item>
                <Button
                  variant="contained"
                  type={"submit"}
                  sx={{ color: "white" }}
                >
                  Envoyez
                </Button>
              </Grid>
            </Grid>
          </Grid>


          <Grid item xs={12} md={6}>
            <Grid container mt={3}>
              <Grid item xs={2} mr={1}>
                <Typography color="secondary" fontFamily="Raleway"> Message: </Typography>
              </Grid>

              <Grid item xs={9}>
                <TextareaAutosize
                  name="message"
                  aria-label="minimum height"
                  minRows={22}
                  placeholder="Votre message"
                  style={{ width: "100%", paddingLeft: "2%" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactForm;