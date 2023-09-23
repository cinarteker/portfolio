import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          width: 500,
          height: 500,
          backgroundColor: 'red',
        }}
      >
        <Navbar></Navbar>
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
