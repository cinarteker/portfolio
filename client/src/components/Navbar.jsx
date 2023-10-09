import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

// const pages = ['Products', 'Pricing', 'Blog'];
const pages = [
    ['ABOUT', ''],
    ['PROJECTS', 'projects'],
    // ['PHOTOGRAPHY', 'photography'],
    ['BLOG', 'blog'],
    // ['CONTACT', 'contact'],
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" 
      sx={{ 
        backgroundColor: 'black',
        // paddingTop: '36px',
        minHeight: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'flex', md: 'none' } 
          }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                justifyContent: 'center',
                '& .MuiPaper-root': { 
                  borderRadius: '3px',
                  },
              }}
            >
              {pages.map((page) => (
                <Link
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  display: 'block',
                  my: 2,
                }}
                to={page[1]}
                key={page[0]}
              >
                <Button
                  sx={{
                    width: '100%',
                    fontFamily: 'Montserrat',
                    fontWeight: 'light',
                    color: 'inherit',
                    '&:hover': {
                      backgroundColor: 'lightGray',
                      color: 'black',
                      transition: 'background-color 0.25s ease-in-out',
                    },
                    '& .text-left': {  // <--- Target the child class for text alignment
                      textAlign: 'left',
                      width: '100%',
                    }
                  }}
                >
                    <div className="text-left">  {/* <-- This div wraps your text */}
                      {page[0]}
                    </div>
                </Button>
              </Link>
              ))}
            </Menu>
          </Box>
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' } ,
            justifyContent: 'center',
            }}>
          {pages.map((page) => (
                <Link
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  display: 'block',
                  marginLeft: 10,
                  marginRight: 10,
                }}
                to={page[1]}
                key={page[0]}
              >
                <Button
                  sx={{
                    fontFamily: 'Montserrat',
                    fontWeight: '300',
                    fontSize: '1rem',
                    color: 'inherit',
                    '&:hover': {
                      color: 'lightGray',
                      transition: 'background-color 2.0s ease-in-out',
                    },
                  }}
                >
                  {page[0]}
                </Button>
              </Link>
              ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
