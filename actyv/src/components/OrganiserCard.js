import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material"

const OrganiserCard = ({ organiser }) => {
  return (

    <Grid container>
      <Grid item xs={4}>
        <img src="{organiser.avatar.file.url}" alt="{organiser.prnom}" />
      </Grid>
      <Grid item xs={8}>
        <Typography gutterBottom variant="h5" component="div">
          {organiser.prnom}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {organiser.description}
        </Typography></Grid>
      {/* <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={organiser.avatar.file.url}
        alt={organiser.prnom}
      />
      <CardContent>
        
      </CardContent>
    </Card> */}
    </Grid>
    
  );
};
export default OrganiserCard;
