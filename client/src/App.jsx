import './App.css';
import ResponsiveAppBar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Outlet />
    </>
  );
}

export default App;
