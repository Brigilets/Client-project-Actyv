import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const Reservation = () => {
  
  const form = useRef();
  console.log(form)

  const [date, setDate] = useState([]);


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
                  name="nom"
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
          justifyItems="space between"
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
<Grid container
       justifyContent="space-between" 
       mt={3}>
          <Grid item 
          justifyContent="flex-start"
           xs={3}
            mr={3}>
                <Grid container>
              <Typography color="secondary"> Selectionez la date: </Typography>
         </Grid>
         <Grid mr={2}>
         <LocalizationProvider dateAdapter={AdapterDateFns}>
  <DatePicker
    label="Selectionez la date: "
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
<Grid container>
<Grid item xs={3}  justify-content="flex-end" >
                <Grid container xs={5}>
                  <Grid item xs={3} mr={2.5}>
                    <Typography color="secondary"> Age: </Typography>
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
</Grid>

</Box>
</Container>
          </div>
  );
};

export default Reservation;
