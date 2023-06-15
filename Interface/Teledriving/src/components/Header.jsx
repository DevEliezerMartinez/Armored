import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import GlobalStyles from '@mui/material/GlobalStyles';
import ArmoredLogo from '../assets/Logo-armored.png'



const defaultTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
       
      >
        <Toolbar className='center'>
          
          <img src={ArmoredLogo } alt="ArmoredLogo" className='logo' />
          
          <Button href="#" color="error" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Terminar
          </Button>
        </Toolbar>
      </AppBar>
     
      
     
    </ThemeProvider>
  );
} 