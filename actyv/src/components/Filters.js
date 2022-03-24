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
        marginTop="3em"
        padding="3rem 6rem"  
        sx={{
            '@media (max-width:768px)': { padding:"4rem" },
            '@media (max-width:600px)': { padding:"4rem 3rem" },
            '@media (max-width:440px)': { padding:"4rem 2rem"  },
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
                // alignItems: "center", 
                // display: "flex", 
                // justifyContent: "center", 
                width:"100%", 
                padding:"0" 
            }}>
                <Grid item xs={15} sm={15} md={5} lg={3}>

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
                <Grid item xs={15} sm={15} md={5} lg={3}>
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

                <Grid item xs={15} sm={15} md={5} lg={3}>

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
                            <MenuItem value={30}>7</MenuItem>
                            <MenuItem value={30}>8</MenuItem>
                            <MenuItem value={30}>9</MenuItem>
                            <MenuItem value={30}>10</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={15} sm={15} md={5} lg={3}>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Prix</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>40-80$</MenuItem>
                            <MenuItem value={20}>80-120$</MenuItem>
                            <MenuItem value={30}>120-160$</MenuItem>
                            <MenuItem value={30}>160-200$</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={15} sm={15} md={5} lg={3}>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Communauté</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Afrique du Nord</MenuItem>
                            <MenuItem value={20}>Marocain</MenuItem>
                            <MenuItem value={30}>Latino-Américain</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>

            </Grid>

        </Box>

    );
}

export default Filters