import React, { useRef, useState,useEffect } from "react";
import { Box, Grid, TextField, Typography, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import useActivities from "../useActivities";
import ActivityCard from "./ActivityCard";


function Filters() {
   
    const [activites, setActivites] = useState([]);
    const { getActivites } = useActivities();
    useEffect(() => {
        const getapi = () => {
          getActivites().then((response) => setActivites(response));
        };
        getapi();
      }, []);

      const form = useRef();

      const langue = []
      activites?.forEach((activity) => {
          if (form.langue === activites?.langue){
              langue.push(activity)
              return activity
          } else {
              return <Typography>Désolé aucune activité ne correspondent pas à votre recherche</Typography>
          }
      })
     {/* const [langue, setLangue] = React.useState('');

      const [visiteurs, setVisiteurs] = React.useState('');
  
      const [prix, setPrix] = React.useState('');
      const [communaute, setCommunaute] = React.useState('');

    const handleChange = (event) => {
        setLangue(event.target.value);
        setVisiteurs(event.target.value);
        setPrix(event.target.value);
        setCommunaute(event.target.value);
    }; */}



   // const [date, setDate] = useState([]);
   


    return (
        <Box 
        sx={{ 
            '@media (min-width: 992px)': { padding: '8rem 5rem 5rem' },
            '@media (min-width: 768px) and (max-width: 992px)': { padding: '1rem 5rem' },
            '@media (min-width: 680px) and (max-width: 768px)': { padding: '1rem 3rem' },
            '@media (min-width: 380px) and (max-width: 680px)': { padding: '1rem 2rem' },
            '@media (max-width: 380px)': { padding: '1rem 1rem' },
        }}
        >
            <Typography
                color="primary"
                fontFamily="Caveat"
                fontWeight={700}
                fontSize="44px"
                textAlign="start"
                paddingBottom="2rem"
            >
                Filtrer  vos recherches
            </Typography>


            <Grid container spacing={1} columns={15}
            style={{  
                width:"100%", 
                padding:"0" 
            }}>
                <Grid item xs={15} sm={15} md={5} lg={3}>

                    <FormControl fullWidth disabled>
                        <InputLabel id="demo-simple-select-label">Langues</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                           // value={langue}
                            label="Langue"
                           // onChange={handleChange}
                        >
                            <MenuItem value={10}>Français</MenuItem>
                            <MenuItem value={20}>Nerderlands</MenuItem>
                            <MenuItem value={30}>English</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>
             {/*}   <Grid item xs={15} sm={15} md={5} lg={3}>
                
                <FormControl fullWidth >
                    <LocalizationProvider fullWidth  dateAdapter={AdapterDateFns}>
                        <DatePicker
                        
                            value={date}
                            
                            onChange={(date) => {
                                setDate(date);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    </FormControl>

                </Grid>*/}
                       

                <Grid item xs={15} sm={15} md={5} lg={3}>

                    <FormControl fullWidth disabled>
                        <InputLabel id="demo-simple-select-label">Nombre de visiteurs</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                           // value={visiteurs}
                            label="Visiteurs"
                           // onChange={handleChange}
                        >
                            <MenuItem value={10}>1</MenuItem>
                            <MenuItem value={20}>2</MenuItem>
                            <MenuItem value={30}>3</MenuItem>
                            <MenuItem value={30}>4</MenuItem>
                            <MenuItem value={30}>5</MenuItem>
                            <MenuItem value={30}>6</MenuItem>
                            <MenuItem value={30}>7</MenuItem>
                            <MenuItem value={30}>8</MenuItem>
                            <MenuItem value={30}>9</MenuItem>
                            <MenuItem value={30}>10</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={15} sm={15} md={5} lg={3}>

                    <FormControl fullWidth disabled>
                        <InputLabel id="demo-simple-select-label">Prix</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                           // value={prix}
                            label="Prix"
                            //onChange={handleChange}
                        >
                            <MenuItem value={10}>50-80$</MenuItem>
                            <MenuItem value={20}>80-110$</MenuItem>
                            <MenuItem value={30}>110-140$</MenuItem>
                            <MenuItem value={30}>140-170$</MenuItem>
                            <MenuItem value={30}>170-200$</MenuItem>
                            <MenuItem value={30}>200-230$</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={15} sm={15} md={5} lg={3}>

                    <FormControl fullWidth disabled>
                        <InputLabel id="demo-simple-select-label">Communauté</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                          //  value={communaute}
                            label="communaute"
                         //   onChange={handleChange}
                        >
                            <MenuItem value={10}>Afrique du Nord</MenuItem>
                            <MenuItem value={10}>Afrique Subsaharienne</MenuItem>
                            <MenuItem value={10}>Amérique Latine</MenuItem>
                            <MenuItem value={20}>Brésil</MenuItem>
                            <MenuItem value={20}>Turquie</MenuItem>
                            <MenuItem value={20}>Asie</MenuItem>
                            <MenuItem value={20}>Proche Orient</MenuItem>
                            <MenuItem value={30}>Europe de l'Est</MenuItem>
                        </Select>
                    </FormControl>

                    

                </Grid>
              
              <Grid item>
                <Button
                  variant="contained"
                  type={"submit"}
                  sx={{ color: "white" }}
                  disabled
                >
                  Envoyez
                </Button>
         </Grid>

            </Grid>

        </Box>

    );
}

export default Filters