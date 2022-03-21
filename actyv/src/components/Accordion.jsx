import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
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
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
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
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
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
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}