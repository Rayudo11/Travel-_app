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
import { Link } from 'react-router-dom';
// import { useNavigate} from 'react-router';


const pages = ['Login', 'Plan Trip', 'Review'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {

  // const navigate = useNavigate()
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
    <AppBar position="static">
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Tropical forest',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#FF8150',
              textDecoration: 'none',
            }}
          >
            TRAVELED BY
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              }}
            >
              <Button
                component={Link}
                to="/login"
                key="login"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#FFC13A', display: 'block' }}
              >Login</Button>
              <Button
                component={Link}
                to="/plan"
                key="plan"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#FFC13A', display: 'block' }}
              > Plan Trip</Button>
              <Button
                component={Link}
                to="/review"
                key="review"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#FFC13A', display: 'block' }}
              >
                Review
              </Button>
               </Menu>
          </Box>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Tropical Forest',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#FF8150',
              textDecoration: 'none',
            }}
          >
            TRAVELED BY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
              <Button
                component={Link}
                to="/login"
                key="login"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#FFC13A', display: 'block' }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/plan"
                key="plan"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#FFC13A', display: 'block' }}
              >
                Plan Trip
              </Button>
              <Button
                component={Link}
                to="/review"
                key="review"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#FFC13A', display: 'block' }}
              >
                Review
              </Button>
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                <Button component={Link} to='/login'>
                  Login
                </Button>
                <Button component={Link} to='/plan'>
                  Plan Trip
                </Button>
                <Button component={Link} to='/review'>
                  Review Trip
                </Button>
                <Button component={Link} to='/logout'>
                  Logout
                </Button>
              </Box>

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
