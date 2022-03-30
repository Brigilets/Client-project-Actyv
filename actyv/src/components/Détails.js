import { Grid, Box, Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Détails = ({activite}) => {
    return ( 
        <Container 
            style={{ 
            maxWidth: '100%',
            '@media (minWidth: 992px)': { margin:"8em auto" },
            '@media (maxWidth: 992px)': { margin:"3em auto" },
            width: '90%',
        }}> 
        <Card>
            <CardMedia
            component="img"
            height="400"
            image={activite?.photo.file.url}
            alt={activite?.nom}
            />
        </Card>
            <Typography 
            color="primary"
            fontFamily="Caveat"
            fontWeight={600}
            fontSize="44px"
            textAlign="start"
            display="block"
            padding="0.5em 0em"
            >
                {activite?.nom}
            </Typography>

            <Typography 
            color="secondary"
            fontWeight={600}
            textAlign="start"
            display="block"
            padding="0.5em 0em"
            >
                {activite?.emailOrganisateur}
            </Typography>
            <Typography 
            color="secondary"
            fontWeight={600}
            textAlign="start"
            display="block"
            padding="0.5em 0em"
            >
                {activite?.prix} euros
            </Typography>

            <Typography 
            color="primary"
            fontFamily="Caveat"
            fontWeight={600}
            fontSize="44px"
            textAlign="start"
            display="block"
            padding="0.5em 0em"
            >
                Description
            </Typography>
            <Typography 
            color="secondary"
            fontWeight={400}
            textAlign="start"
            display="block"
            padding="0.5em 0em"
            >
                {activite?.description}
            </Typography>


            <Typography 
            color="primary"
            fontFamily="Caveat"
            fontWeight={600}
            fontSize="44px"
            textAlign="start"
            display="block"
            padding="0.5em 0em"
            >
                Photos
            </Typography>
        </Container>
     );
}
 
export default Détails;