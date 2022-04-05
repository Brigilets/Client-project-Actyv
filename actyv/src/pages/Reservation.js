import Reservation from '../components/ReservationForm';

import React from 'react';
import { Container, Typography } from "@mui/material";

const ReservationVisiteur = () => {
    return ( 
        <div>
            <Container
                style = {{
                    padding:'0',
                    maxWidth: '100%',
                    margin: '10em auto',
                    width: '90%',
                   
                }}
            >
                <Typography fontSize="44px" fontWeight="600" color="primary" fontFamily="Caveat" textAlign="left" mb={3}>
                    Réservez votre visite
                </Typography>
                <Reservation/>
            </Container>
        </div>
     );
}
 
export default ReservationVisiteur;