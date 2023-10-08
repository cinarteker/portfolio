import './App.css';
import ResponsiveAppBar from './components/Navbar';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    }}>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Outlet />
    </Box>
  );
}

export default App;
