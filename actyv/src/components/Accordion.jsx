import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, ImageList, ImageListItem, Grid } from "@mui/material";

export default function ControlledAccordions({
  fullDay,
  halfDay,
  tailorMade,
  id,
}) {
  const pictures = fullDay[0]?.photoDesActivites;
  const picturesHalfday = halfDay[0]?.photoDesActivites;

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log(tailorMade);
  const empty = () => {
    if (tailorMade.length === 0) {
      return "vide";
    } else {
      return "rempli";
    }
  };
  console.log(empty());

  const style = {
    accordion: {
      borderBottom: "3px solid #370665",
    },
    accordionSummaryText: {
      width: "100%",
      textAlign: "left",
      fontWeight: 600,
      fontStyle: "italic",
      color: "secondary.main",
    },
  };

  return (
    <div>
      {/* ACCORDEON 1 */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={style.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ backgroundColor: "rgb(49, 200, 177)" }}
        >
          <Typography pl={1} color="secondary" sx={style.accordionSummaryText}>
            Formule 1 - Une journée complète
          </Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ backgroundColor: "rgb(49, 200, 177)" }}>
          <Typography mb={2} sx={{ textAlign: "justify" }}>
            {fullDay.map((activity) => activity?.description)}
          </Typography>

          <Grid container justifyContent="center" spacing={1}>
            {/* <Grid item sx={{ width: '100%', height: '60%' }} cols={3} rowHeight={270}> */}
            {pictures?.map((picture, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={picture?.fields.file.url}>
                  <img
                    src={picture?.fields.file.url}
                    alt="imageActivity"
                    loading="lazy"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
              );
            })}
            {/* </Grid > */}
          </Grid>
          {/* <Grid container justifyContent='center'>
            <ImageList sx={{ width: '80%', height: '60%' }} cols={3} rowHeight={270}>
              {pictures?.map((picture, index) => { 
                return <ImageListItem key={picture?.fields.file.url}> 
                  <img src={picture?.fields.file.url} alt='imageActivity' loading="lazy" style={{width: 'auto', height: '50%'}}/>
                </ImageListItem>
              })}
            </ImageList >
          </Grid> */}

          <a href={`/reservation/${id}`} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              sx={{ textTransform: "none", fontWeight: 800, margin: "2em 0em" }}
            >
              S'inscrire aux prochaines séances
            </Button>
          </a>
        </AccordionDetails>
      </Accordion>

      {/* ACCORDEON 2 */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={style.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{ backgroundColor: "rgb(49, 200, 177)" }}
        >
          <Typography pl={1} sx={style.accordionSummaryText}>
            Formule 2 - Une demi-journée
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "rgb(49, 200, 177)" }}>
        <Typography sx={{ textAlign: "justify" }}> 
        {halfDay.map((activity) => activity?.description)}
          </Typography>

          <Grid container justifyContent="center">
            <ImageList
              sx={{ width: "80%", height: "60%" }}
              cols={3}
              rowHeight={270}
            >
              {picturesHalfday?.map((picture, index) => {
                return (
                  <ImageListItem key={picture?.fields.file.url}>
                    {" "}
                    <img
                      src={picture?.fields.file.url}
                      alt="imageActivity"
                      loading="lazy"
                      style={{ width: "auto", height: "50%" }}
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
          </Grid>

          <a href={`/reservation/${id}`} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              sx={{ textTransform: "none", fontWeight: 800, margin: "2em 0em" }}
            >
              S'inscrire aux prochaines séances
            </Button>
          </a>
        </AccordionDetails>
      </Accordion>

      {/* ACCORDEON 3 */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={style.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={{ backgroundColor: "rgb(49, 200, 177)" }}
        >
          <Typography pl={1} sx={style.accordionSummaryText}>
            Formule 3 - Sur mesure
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "rgb(49, 200, 177)" }}>
          <Typography>
            {tailorMade.length === 0
              ? "Aucune activité sur-mesure n'est possible pour le moment"
              : tailorMade.map((activity) => activity.descritpion)}
          </Typography>
          <a href={`/reservation/${id}`} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              sx={{ textTransform: "none", fontWeight: 800, margin: "2em 0em" }}
            >
              S'inscrire aux prochaines séances
            </Button>
          </a>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
