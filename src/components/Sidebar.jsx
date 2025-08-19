import { useState } from 'react';
import { List, ListItemText, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { NavLink } from 'react-router-dom';
import {
  StyledDrawer,
  StyledListItem,
  StyledNavLink,
} from '../styles/sidebar.styles';

const navItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Celestial Map', path: '/map' },
  { label: 'Settings', path: '/settings' },
  { label: 'About', path: '/about' },
];

export default function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  const drawerContent = (
    <List>
      {navItems.map(({ label, path }) => (
        <StyledNavLink to={path} key={label} onClick={() => setOpen(false)}>
          <StyledListItem button>
            <ListItemText primary={label} />
          </StyledListItem>
        </StyledNavLink>
      ))}
    </List>
  );

  return isMobile ? (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        {drawerContent}
      </Drawer>
    </>
  ) : (
    <StyledDrawer variant="permanent" anchor="left">
      {drawerContent}
    </StyledDrawer>
  );
}
