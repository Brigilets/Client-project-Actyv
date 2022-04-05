import {Box, Typography, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const Détails = ({activity}) => {

    return ( 
        <Box 
        sx={{ 
            marginBottom: '5rem',
            '@media (min-width: 992px)': { padding: '8rem 5rem 5rem' },
            '@media (min-width: 768px) and (max-width: 992px)': { padding: '1rem 5rem' },
            '@media (min-width: 680px) and (max-width: 768px)': { padding: '1rem 3rem' },
            '@media (min-width: 380px) and (max-width: 680px)': { padding: '1rem 2rem' },
            '@media (max-width: 380px)': { padding: '1rem 1rem' },
        }}> 
            <Typography 
                color="primary"
                fontFamily="Caveat"
                fontWeight={600}
                fontSize="44px"
                textAlign="start"
                display="block"
                padding="0.5em 0em"
                >
                {activity?.nom}
            </Typography>

            <Card>
                <CardMedia
                component="img"
                height="500"
                image={activity?.photo.file.url}
                alt={activity?.nom}
                />
            </Card>
            <br />
            <Typography 
            color="secondary"
            fontWeight={600}
            textAlign="start"
            display="block"
            padding="0.5em 0em"
            >
                Pour plus d'infos : {activity?.emailOrganisateur}
            </Typography>
            <Typography 
            color="secondary"
            fontWeight={600}
            textAlign="start"
            display="block"
            padding="0.5em 0em"
            >
                Communauté : {activity?.communaute}
            </Typography>
            
            <Typography 
            color="secondary"
            fontWeight={600}
            textAlign="start"
            display="block"
            padding="0.5em 0em"
            >
                Langue : {activity?.langue}
            </Typography>

            <Typography 
            color="secondary"
            fontWeight={600}
            textAlign="start"
            display="block"
            padding="0.5em 0em"
            >
                Prix : {activity?.prix} euros
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
                {activity?.description}
            </Typography>

            <a href={`/reservation/${activity?.id}`} style={{textDecoration: 'none'}}>
            <Button
              variant="contained"
              color="secondary"
              size='medium'
              sx={{ textTransform: "none", fontWeight: 800, margin:"2em 0em" }}
            >
              S'inscrire aux prochaines séances
            </Button>
          </a>

        </Box>
     );
}
 
export default Détails;