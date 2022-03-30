import * as React from 'react';
import './Formules.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function ResultCardsOrganisateurs({organiser}) {

    return (
        <Card>
            <CardMedia
                component="img"
                height="400em"
                image={organiser?.avatar.file.url}
                alt={organiser?.nom}
            />                   
            <CardContent 
            sx={{
                backgroundColor:"#30C9B0", color:"white", textAlign:"left", boxSizing:"border-box"
            }}>
                <Typography gutterBottom variant="h5" component="div" >
                    {organiser?.nom}
                </Typography>
                <Typography
                    sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                    }}
                >
                    {organiser?.description}
                </Typography>
            </CardContent>
        </Card>
    );
}