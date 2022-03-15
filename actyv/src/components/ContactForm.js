import React from 'react'
import {Box, Grid, TextField} from '@mui/material'

const ContactForm = () => {
  return (
    <div>
        <Box component="form" noValidate onSubmit>
        <Grid container>
            <Grid item xs={6}>
                <Grid container direction>
                    <Grid item xs={12}>
                        <Grid container justifyContent='space-between'>
                            <Grid item>Nom : </Grid>
                            <Grid item><TextField type='text' label='name' placeholder='Nom complet' id='name' required onChange value></TextField></Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
            <Grid item xs={6}></Grid>
        </Grid>
        </Box>
    </div>
  )
}

export default ContactForm