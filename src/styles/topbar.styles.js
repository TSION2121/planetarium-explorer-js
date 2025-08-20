import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

export const TopBarWrapper = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));
