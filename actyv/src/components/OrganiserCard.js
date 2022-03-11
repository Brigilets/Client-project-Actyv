import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const OrganiserCard = ({organiser}) =>{
    return(
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={organiser.avatar.file.url}
          alt={organiser.prnom}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           { organiser.prnom }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {organiser.description}
          </Typography>
        </CardContent>
        </Card>
    )
}
export default OrganiserCard;