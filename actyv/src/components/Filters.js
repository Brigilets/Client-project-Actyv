import React, { useRef, useState } from "react";
import { Box, Grid, TextField, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


function Filters() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [date, setDate] = useState([]);
  const form = useRef();




    return (


        <Box
            padding="4rem "
            marginTop="5em">
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


            <Grid container spacing={2} style={{ alignItems: "center", display: "flex", justifyContent: "center" }}>
                <Grid item xs={12} sm={12} md={2} lg={2}  >

                    <FormControl fullWidth >
                        <InputLabel id="demo-simple-select-label">Langues</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Français</MenuItem>
                            <MenuItem value={20}>Nerderlands</MenuItem>
                            <MenuItem value={30}>English</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>
                <Grid item xs={12} sm={12} md={2} lg={2}>
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

                </Grid>

                <Grid item xs={12} sm={12} md={2} lg={2}>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Nombre de visiteurs</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>1</MenuItem>
                            <MenuItem value={20}>2</MenuItem>
                            <MenuItem value={30}>3</MenuItem>
                            <MenuItem value={30}>4</MenuItem>
                            <MenuItem value={30}>5</MenuItem>
                            <MenuItem value={30}>6</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={2} lg={2}>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Prix</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>5$</MenuItem>
                            <MenuItem value={20}>10$</MenuItem>
                            <MenuItem value={30}>20$</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={2} lg={2}>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Communauté</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Français</MenuItem>
                            <MenuItem value={20}>Nerderlands</MenuItem>
                            <MenuItem value={30}>English</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>

            </Grid>

        </Box>

    );
}

export default Filters