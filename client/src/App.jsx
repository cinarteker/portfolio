import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/Navbar';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'purple',
        }}>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Outlet />
      </Box>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Hi I'm Davis!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
