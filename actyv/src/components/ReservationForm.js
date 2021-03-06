import React, { useRef, useState, useEffect } from "react";
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
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
// import DatePicker from "@mui/lab/DatePicker";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useContentful from "../useContentful";


const Reservation = () => {
  const navigate = useNavigate();
const [send, setSend] = useState(false)
  // const [date, setDate] = useState([]);
  const form = useRef();

  const [activity, setActivity] = React.useState("");

  const handleChange = (event) => {
    setActivity(event.target.value);
  };

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
      setSend(true);
  };

  // find the organizer

  const { id } = useParams();

  const [organisers, setOrganisers] = useState([]);
  const { getOrganisers } = useContentful();

  useEffect(() => {
    const getapi = () => {
      getOrganisers().then((response) => setOrganisers(response));
    };
    getapi();
  }, []);

  const name = organisers[id]?.nom;

  return (
  
    <div>
      <Container>
      
   {(send===false)?
        <Box
          component="form"
          ref={form}
          noValidate
          onSubmit={sendEmail}
          mt={3}
          mb={3}
        >
          {/* ORGANIZER NAME */}

          <Grid
            container
            justifyContent="flex-start"
            mt={3}
            alignItems="center"
          >
            <Grid item mr={3} mb={1} xs={1} sm={1}>
              <Typography color="secondary" fontWeight="bold" fontSize="14px">
                {" "}
                Nom de l'organisateur:
              </Typography>
            </Grid>

            <Grid item xs={12} sm={10}>
              <TextField
                variant="outlined"
                id="organizer"
                name="organizer"
                required
                value={name}
                type="text"
                fullWidth
                sx={{ borderRadius: "20%" }}
                inputProps={{
                  sx: {
                    fontSize: "16px",
                    color: "#f87f49",
                    backgroundColor: "secondary.light",
                    border: "none",
                  },
                }}
              ></TextField>
            </Grid>
          </Grid>

          {/* ACTIVITES */}

          <Grid
            container
            justifyContent="flex-start"
            mt={3}
            alignItems="center"
          >
            <Grid item mr={3} mb={1} xs={1} sm={1}>
              <Typography color="secondary" fontWeight="bold" fontSize="14px">
                {" "}
                Quelle activit??:
              </Typography>
            </Grid>

            <Grid item xs={12} sm={10}>
              <FormControl fullWidth>
                <InputLabel id="activity">Acitivit??</InputLabel>
                <Select
                  labelId="activity"
                  id="activity"
                  name='activity'
                  value={activity}
                  label="Activit??"
                  onChange={handleChange}
                  inputProps={{
                    sx: {
                      fontSize: "16px",
                      color: "#f87f49",
                      backgroundColor: "secondary.light",
                      border: "none",
                    },
                  }}
                >
                  <MenuItem value={'journ??e compl??te'}>Journ??e compl??te</MenuItem>
                  <MenuItem value={'demi-journ??e'}>Demi-journ??e</MenuItem>
                  <MenuItem value={'sur-mesure'}>Journ??e sur-mesure</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent="flex-start"
            mt={3}
            alignItems="center"
          >
            <Grid item mr={3} mb={1} xs={1} sm={1}>
              <Typography color="secondary" fontWeight="bold" fontSize="14px">
                {" "}
                Nom:
              </Typography>
            </Grid>

            <Grid item xs={12} sm={10}>
              <TextField
                variant="outlined"
                id="nom"
                name="user_name"
                required
                label="Votre nom"
                type="text"
                fullWidth
                sx={{ borderRadius: "20%" }}
                inputProps={{
                  sx: {
                    fontSize: "16px",
                    color: "#f87f49",
                    backgroundColor: "secondary.light",
                    border: "none",
                  },
                }}
              ></TextField>
            </Grid>
          </Grid>

          {/* <Grid container mt={2} justifyContent="space-between">
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
              </Grid> */}

          <Grid
            container
            justifyContent="flex-start"
            mt={3}
            alignItems="center"
          >
            <Grid item mr={3} mb={1} xs={1} sm={1}>
              <Typography color="secondary" fontWeight="bold" fontSize="14px">
                {" "}
                Email:{" "}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={10}>
              <TextField
                variant="outlined"
                id="email"
                name="email"
                required
                label="example@example.com"
                type="email"
                fullWidth
                sx={{ borderRadius: "20%" }}
                inputProps={{
                  sx: {
                    fontSize: "16px",
                    color: "#f87f49",
                    backgroundColor: "secondary.light",
                    border: "none",
                  },
                }}
              ></TextField>
            </Grid>
          </Grid>

          <Grid
            container
            mt={3}
            sx={{
              "@media(min-width: 1120px)": { paddingLeft: "1.7em" },
              "@media(min-width: 1080px) and (max-width: 1120px)": {
                paddingLeft: "1.1em",
              },
              "@media(min-width: 880px) and (max-width: 1080px)": {
                paddingLeft: "0.8em",
              },
              "@media(min-width: 760px) and (max-width: 880px)": {
                paddingLeft: "0.5em",
              },
            }}
          >
            {/* Calendar section */}
            <Grid item mb={3} xs={12} sm={4} md={4}>
              <Grid container align="left">
                <Grid item mb={1} xs={12}>
                  <Typography
                    color="secondary"
                    fontWeight="bold"
                    fontSize="14px"
                  >
                    {" "}
                    Selectionez la date:{" "}
                  </Typography>
                </Grid>
                <Grid item mb={1} xs={6} sm={11}>
                <TextField
                variant="outlined"
                id="date"
                name="date"
                required
                label=""
                type="date"
                fullWidth
                sx={{ borderRadius: "20%" }}
                inputProps={{
                  sx: {
                    fontSize: "16px",
                    color: "#f87f49",
                    backgroundColor: "secondary.light",
                    border: "none",
                  },
                }}
              ></TextField>
                  {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      fullWidth
                      sx={{ width: "100%" }}
                      label="mm/dd/yyy"
                      id="date"
                      name="date"
                      value={date}
                      // xs={6}
                      onChange={(date) => {
                        setDate(date);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider> */}
                </Grid>
              </Grid>
            </Grid>

            {/* Visitor number section */}
            <Grid item mb={3} xs={12} sm={4} md={4}>
              <Grid container align="left" mr={3}>
                <Grid item mb={1} xs={12} mr={2.5}>
                  <Typography
                    color="secondary"
                    fontWeight="bold"
                    fontSize="14px"
                  >
                    {" "}
                    Nombre de visiteurs:{" "}
                  </Typography>
                </Grid>
                <Grid item mb={1} xs={6} sm={11} md={10}>
                  <TextField
                    type="number"
                    id="number"
                    label={30}
                    name="number"
                    required
                    fullWidth
                    sx={{ backgroundColor: "secondary.light" }}
                  ></TextField>
                </Grid>
              </Grid>
            </Grid>

            {/* Language selection */}
            <Grid item mb={3} xs={12} sm={4} md={4}>
              <Grid container>
                <Grid item>
                  <Typography
                    color="secondary"
                    fontWeight="bold"
                    fontSize="14px"
                  >
                    {" "}
                    Langue:{" "}
                  </Typography>
                </Grid>

                <Grid
                  item
                  ml={3}
                  sx={{
                    "@media (max-width:600px)": { marginLeft: 2.7 },
                  }}
                >
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="Fran??ais"
                      name="language"
                      color="secondary"
                      required
                    >
                      <FormControlLabel
                        value="Fran??ais"
                        control={<Radio />}
                        label={
                          <Typography color="secondary" fontSize="0.8rem">
                            Fran??ais
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        value="N??erlandais"
                        control={<Radio />}
                        label={
                          <Typography color="secondary" fontSize="0.8rem">
                            N??erlandais
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        value="Anglais"
                        control={<Radio />}
                        label={
                          <Typography color="secondary" fontSize="0.8rem">
                            Anglais
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        value="Autre"
                        control={<Radio />}
                        label={
                          <Typography color="secondary" fontSize="0.8rem">
                            Autre
                          </Typography>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container margin="1em 0em">
            <Button
              variant="contained"
              type={"submit"}
              sx={{
                color: "secondary",
                fontWeight: "bold",
                textTransform: "none",
                fontFamily: "Caveat",
                fontSize: "22px",
                marginRight: "1.5em",
              }}
            >
              Envoyez
            </Button>
            <Button
              onClick={() => navigate(-1)}
              type={"submit"}
              sx={{
                color: "secondary",
                fontWeight: "bold",
                textTransform: "none",
                fontFamily: "Caveat",
                fontSize: "22px",
              }}
            >
              Annuler
            </Button>
          </Grid>
        </Box> : <Typography mt={7} color='secondary' sx={{fontSize: '1.5rem', fontFamily: 'Raleway', fontWeight: 600, height: '35vh' }}>Merci pour votre int??r??t. Nous revenons vers vous le plus vite possible ! </Typography>}
       
      </Container>
    </div>
  );
};

export default Reservation;
