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
        flexDirection: 'column',
      }}>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Outlet />
    </Box>

  );
}

export default App;
