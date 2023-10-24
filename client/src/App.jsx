import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { useEffect } from "react";
import ResponsiveAppBar from "./components/Navbar";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
      <Outlet />
    </Box>
  );
}

export default App;
