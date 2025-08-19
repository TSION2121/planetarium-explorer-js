import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { TopBarWrapper } from '../styles/topbar.styles';

const TopBar = ({ mode, setMode }) => {
  const theme = useTheme();

  const handleToggle = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <TopBarWrapper position="static" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Planetarium Dashboard
        </Typography>
        <IconButton onClick={handleToggle} color="inherit">
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </TopBarWrapper>
  );
};

export default TopBar;
