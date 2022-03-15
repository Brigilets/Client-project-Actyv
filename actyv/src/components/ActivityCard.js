import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ActivityCard = ({activite}) =>{
  console.log(activite)
    return(
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          alt={activite.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           { activite.name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {activite.description}
          </Typography>
          <Typography variant="h5" component="p">
            {activite.prix}
          </Typography>
        </CardContent>
        </Card>
    )
}
export default ActivityCard;