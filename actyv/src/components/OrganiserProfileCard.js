import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrganiserProfileCard = ({ organiser }) => {
    const navigate = useNavigate();

  return (
    <Grid container>
      <Grid item xs={12} md={4} >
        <CardMedia
          component="img"
          height="500em"
          image={organiser?.avatar.file.url}
          alt={organiser?.nom}
        />
      </Grid>

      <Grid item xs={12} md={8}
      style={{
        backgroundColor:"#6342AC33"
      }}>

        <Grid container p={3}
        >
          <Grid item xs={12}>
              {/* Name section */}
              <Grid container mb={2}>
                <Grid item mb={1} xs={12} sm={2}>
                    <Typography
                    color="secondary"
                    sx={{ fontStyle: "italic", textAlign: "left", fontWeight: 600 }}
                    >
                    Nom:
                    </Typography>
                </Grid>
                <Grid item mb={1} xs={12} sm={10}>
                    <TextField variant="standard" 
                    color="secondary"
                    fullWidth 
                    size="small" 
                    id="Nom" 
                    multiline
                    value={organiser?.nom}
                    />
                </Grid>
              </Grid>
              {/* Role description */}
              <Grid container mb={2}>
                  <Grid item mb={1} xs={12} sm={2}>
                      <Typography
                      color="secondary"
                      sx={{ fontStyle: "italic", textAlign: "left", fontWeight: 600 }}
                      >
                      Rôle:
                      </Typography>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                      <TextField variant="standard" 
                      color="secondary"
                      fullWidth 
                      size="small" 
                      id="Role" 
                      multiline
                      value={organiser?.role}
                      />
                  </Grid>
              </Grid>
              {/* Interests section */}
              <Grid container mb={2}>
                  <Grid item mb={1} xs={12} sm={2}>
                      <Typography
                      color="secondary"
                      sx={{ fontStyle: "italic", textAlign: "left", fontWeight: 600 }}
                      >
                      Intérêts:
                      </Typography>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                      <TextField variant="standard" 
                      color="secondary"
                      fullWidth 
                      size="small" 
                      id="Interests" 
                      multiline
                      value={organiser?.interests}
                      />
                  </Grid>
              </Grid>
              {/* Languages section */}
              <Grid container mb={2}>
                  <Grid item mb={1} xs={12} sm={2}>
                      <Typography
                      color="secondary"
                      sx={{ fontStyle: "italic", textAlign: "left", fontWeight: 600 }}
                      >
                      Langue(s):
                      </Typography>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                      <TextField variant="standard" 
                      color="secondary"
                      fullWidth 
                      size="small" 
                      id="Languages" 
                      multiline
                      value={organiser?.languages}
                      />
                  </Grid>
              </Grid>
              {/* Bio section */}
              <Grid container mb={2}>
                  <Grid item mb={1} xs={12} sm={2}>
                      <Typography
                      color="secondary"
                      sx={{ fontStyle: "italic", textAlign: "left", fontWeight: 600 }}
                      >
                      Bio:
                      </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                      <TextField variant="standard" 
                      color="secondary"
                      fullWidth 
                      size="small" 
                      id="Description" 
                      multiline
                      value={organiser?.description}
                      sx={{ textAlign: "justify" }}
                      />
                  </Grid>
              </Grid>
          </Grid>

          <Grid container justifyContent='flex-end' mt={3}>
            <Button
              variant="contained"
              color="secondary"
              size='medium'
              sx={{ textTransform: "none", fontWeight: 800}}
            >
              Confirmer
            </Button>
            <Button
                onClick={() => navigate(-1)}
                type={"submit"}
                sx={{
                    margin:"0em 2em"
                }}
            >
                <Typography color="secondary" fontSize="22px" fontFamily="Caveat" fontWeight="bold" textTransform="none">
                    Annuler
                </Typography> 
            </Button> 
          </Grid>

        </Grid>

      </Grid>

    </Grid>
  );
};
export default OrganiserProfileCard;