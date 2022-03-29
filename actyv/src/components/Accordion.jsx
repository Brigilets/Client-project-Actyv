import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, Button } from "@mui/material";

export default function ControlledAccordions({fullDay, halfDay, tailorMade}) {
  
  
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const style = {
    accordion: {
      borderBottom: '3px solid #370665'
    },
    accordionSummaryText: {
      width: '100%', 
      textAlign: 'left', 
      fontWeight: 600, 
      fontStyle: 'italic', 
      color: 'secondary.main'
    },
  }

  return (
    <div>

      {/* ACCORDEON 1 */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{backgroundColor: 'rgb(49, 200, 177)'}}
        >
          <Typography pl={1} color='secondary' sx={style.accordionSummaryText }>
            Formule 1 - Une journée complète
          </Typography>
        </AccordionSummary>
        <AccordionDetails
        sx={{backgroundColor: 'rgb(49, 200, 177)'}}>
          <Typography mb={2} sx={{textAlign: 'justify'}}>
           {fullDay.map(activity => activity?.description)}
          </Typography>
          {/* {fullDay.map(activity =>
          <img src={activity.photoDesActivites.fields.file.url}/>)} */}
          <Button
              variant="contained"
              color="secondary"
              size='medium'
              sx={{ textTransform: "none", fontWeight: 800 }}
            >
              S'inscrire aux prochaines séances
            </Button>
        </AccordionDetails>
      </Accordion>

      {/* ACCORDEON 2 */}
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{backgroundColor: 'rgb(49, 200, 177)'}}
        >
          <Typography pl={1} sx={style.accordionSummaryText }>Formule 2 - Une demi-journée</Typography>
        </AccordionSummary>
        <AccordionDetails
        sx={{backgroundColor: 'rgb(49, 200, 177)'}}
        >
          <Typography sx={{textAlign: 'justify'}}>
          {halfDay.map(activity => activity?.description)}
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      {/* ACCORDEON 3 */}
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={{backgroundColor: 'rgb(49, 200, 177)'}}
        >
          <Typography pl={1} sx={style.accordionSummaryText }>
            Formule 3 - Sur mesure
          </Typography>
        </AccordionSummary>
        <AccordionDetails
        sx={{backgroundColor: 'rgb(49, 200, 177)'}}>
          <Typography>
          {tailorMade.map(activity => activity.description)}
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}