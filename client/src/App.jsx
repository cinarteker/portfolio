import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./components/Navbar";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "black",
      }}
    >
      <ResponsiveAppBar />
      <Box sx={{ marginTop: "100px" }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
