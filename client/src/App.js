import React from 'react'
import { AppBar, Container, Grow, Typography, Grid } from '@mui/material'


import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import  './styles.scss';


const App = () => {


  return (
    <Container maxWidth="lg">
        <AppBar className='appBar' position='static'color='inherit'>
          <Typography className='heading' variant='h2' align='center'>Memories</Typography>
          <img className='image' src={ memories } alt="memories" height="60" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="strech" spacing={ 4 }>
              <Grid item xs={ 12 } sm={ 7 }><Posts /></Grid>
              <Grid item xs={ 12 } sm={ 4 }><Form /></Grid>
            </Grid>
          </Container>
        </Grow>
    </Container>
  )
}

export default App;