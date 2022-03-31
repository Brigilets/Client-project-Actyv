import { Grid, Container, Typography, ImageList, ImageListItem } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const Détails = ({activite}) => {

    return ( 
        <Container 
        sx={{ 
            maxWidth: '100%',
            margin: { sm:'0em auto', md:'5.5em auto' },
            width: '90%',
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
                {activite?.nom}
            </Typography>

            <Card>
                <CardMedia
                component="img"
                height="50%"
                image={activite?.photo.file.url}
                alt={activite?.nom}
                />
            </Card>

            <Typography 
            color="secondary"
            fontWeight={600}
            textAlign="start"
            display="block"
            padding="0.5em 0em"
            >
                Pour plus d'infos : {activite?.emailOrganisateur}
            </Typography>
            <Typography 
            color="secondary"
            fontWeight={600}
            textAlign="start"
            display="block"
            padding="0.5em 0em"
            >
                Communauté : {activite?.communaute}
            </Typography>
            
            <Typography 
            color="secondary"
            fontWeight={600}
            textAlign="start"
            display="block"
            padding="0.5em 0em"
            >
                Langue : {activite?.langue}
            </Typography>

            <Typography 
            color="secondary"
            fontWeight={600}
            textAlign="start"
            display="block"
            padding="0.5em 0em"
            >
                Prix : {activite?.prix} euros
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


            {/* <Typography 
            color="primary"
            fontFamily="Caveat"
            fontWeight={600}
            fontSize="44px"
            textAlign="start"
            display="block"
            padding="0.5em 0em"
            >
                Photos
            </Typography> */}

            {/* {activite?.map((photo, index) => {
                return 
                <Card>
                    <CardMedia
                    component="img"
                    height="50%"
                    image={photo?.photoDesActivites}
                    alt={activite?.nom}
                    />
                </Card>
            })} */}
            

            {/* {activite?.photoDesActivites} */}


            {/* <Grid container justifyContent='center'><ImageList sx={{ width: '80%', height: '60%' }} cols={3} rowHeight={270}>
                <Typography mb={2} sx={{textAlign: 'justify'}}>
                    {fullDay.map(activity => activity?.description)}
                </Typography>
                {pictures?.map((picture, index) => { 
                    return <ImageListItem key={picture?.fields.file.url}> 
                        <img src={picture?.fields.file.url} alt='imageActivity' loading="lazy" style={{width: 'auto', height: '50%'}}/>
                    </ImageListItem>
                })}
            </ImageList >
            </Grid> */}
            {/* <Grid container justifyContent='center'><ImageList sx={{ width: '80%', height: '60%' }} cols={3} rowHeight={270}>
                {picturesHalfday?.map((picture, index) => { 
                    return <ImageListItem key={picture?.fields.file.url}> 
                        <img src={picture?.fields.file.url} alt='imageActivity' loading="lazy" style={{width: 'auto', height: '50%'}}/>
                    </ImageListItem>
                    }
            )}
                </ImageList >
            </Grid> */}
        </Container>
     );
}
 
export default Détails;