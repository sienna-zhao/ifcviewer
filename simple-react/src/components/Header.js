import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Menu, Logout } from '@mui/icons-material';
import Logo from '../logo.svg';

export default function DrawerAppBar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          {/* <IconButton
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
          >
            <Menu />
          </IconButton> */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ ml: 2 }}
            href="/"
          >
            <img src={Logo} height={26} width={55} />
          </IconButton>
          <Typography
            variant="body1"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            IFC Carbon Footprint
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
