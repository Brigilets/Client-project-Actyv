import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const Reservation = () => {

  

  const [date, setDate] = useState([]);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
  <div>
      <Container>
          <Box component="form" ref={form} noValidate onSubmit={sendEmail} mt={3} mb={3}>
      <Grid
          container
          justifyContent="flex-start"
          mt={3}
          alignItems="center"
      >
          <Grid item xs={2} mr={1}>
              <Typography color="secondary"> Nom: </Typography>
          </Grid>
          <Grid item xs={9}>
              <TextField
                  variant="filled"
                  id="nom"
                  name="user_name"
                  required
                  label="Votre nom"
                  type="text"
                  fullWidth
                  sx={{ borderRadius: "20%" }}
              ></TextField>
          </Grid>
      </Grid>

      <Grid
          container
          justifyContent="flex-start"
          
          mt={3}
          alignItems="center"
      >
              <Grid item xs={2} mr={1}>
                  <Typography color="secondary"> Email: </Typography>
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
<Grid container mt={2} justifyContent="center">
          <Grid item
           xs={4}
            style={{
              display: 'flex',
              flexDirection: 'row'
              
            }}>
                <Grid container >
              <Typography color="secondary"> Selectionez la date: </Typography>
         </Grid>
         <Grid item  xs={12} ml={2}>
         <LocalizationProvider dateAdapter={AdapterDateFns}>
  <DatePicker
    label=""
    name='date'
    value={date}
    xs={6}
    onChange={(date) => {
      setDate(date);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>
</Grid>
</Grid>

<Grid item xs={3}    >
                <Grid container mr={3}>
                  <Grid item xs={3} mr={2.5}>
                    <Typography  color="secondary"> Nombre de visiteurs: </Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <TextField
                      type="number"
                      id="number"
                      label={30}
                      name="number"
                      required
                      fullWidth
                    ></TextField>
                  </Grid>
                </Grid>
                </Grid>
          

<Grid item xs={12} sm={2} mb={1.5} >
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
              </Grid>
<Grid container justifyContent="center" mt={5} ml={4}>
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
         
</Box>
</Container>
          </div>
  );
};

export default Reservation;
