import { NavLink, Route, Routes } from 'react-router-dom';
import Grid from '@mui/material/Grid'; // Grid version 1
import './App.css';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import AnimalsHeader from './components/AnimalsHeader';
import Animals from './components/Animals';
import Animal from './components/Animal';


function App() {
  return (
    <Box sx={{ flexGrow: 1 }} className="main-container">


      <Grid xs="12">
        <AppBar position="static" color="default" >
          <Grid item sm={12} xs={12} >
            <Toolbar>
              <Grid >
                Adopt a Pet!
              </Grid>
              {/* <Button color="inherit" onClick={this.handleMenu} className={classes.buttonFontSize}>Discover</Button> */}
              <Button color="inherit">
                <NavLink to="/">Home</NavLink>
              </Button>
              <Button color="inherit">
                <NavLink to="/animals">Animals</NavLink>
              </Button>
            </Toolbar>
          </Grid>
        </AppBar>

      </Grid>
      <Grid sx={8}>
        <Routes>
          <Route path="/" element={<h1>Adopt a Pet</h1>} />
          <Route path='/animals' element={<AnimalsHeader />} >
            <Route path=':type' element={<Animals />} >
              <Route path=':id' element={<Animal />} />
            </Route>
          </Route>
        </Routes>
      </Grid>

    </Box>
  );
}

export default App;
