import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/Navbar';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Box
        sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#0D0D0D',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '1000px',
          height: '500px',
          backgroundColor: 'none',
        }}>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Outlet />
      </Box>
    </Box>

  );
}

export default App;
