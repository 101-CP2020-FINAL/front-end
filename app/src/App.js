import './App.css';
import { ThemeProvider, Grid, Container, Paper, Typography, CircularProgress, Select, FormControl, InputLabel, Input} from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import { theme } from './theme';
import Prototype from './components/Prototype/Prototype';
import {useState, useEffect} from 'react'
import TicketForm from './components/TicketForm/TicketForm'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  const [screen, setScreen] = useState('home');

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Prototype type="header"/>
          <div className="main-body">
              <Prototype type="menu" width="107px"/>
              <Container>
                  {screen == 'home' ? <Dashboard goTicket={() => setScreen('ticket')}/> : <TicketForm/>}
              </Container>
          </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
