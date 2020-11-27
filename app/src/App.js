import './App.css';
import { ThemeProvider, Grid, Container, Paper, Typography, CircularProgress } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import { theme } from './theme';
import Prototype from './components/Prototype/Prototype';
import {useState, useEffect} from 'react'

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Typography variant="h1">CP2020 final</Typography>
      </ThemeProvider>
    </div>
  );
}

export default App;
