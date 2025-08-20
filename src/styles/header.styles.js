import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: theme.shadows[2],
}));

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 1.5rem',
});

export const Title = styled(Typography)({
  fontWeight: 600,
  fontSize: '1.25rem',
});

export const Subtitle = styled(Typography)({
  fontSize: '0.875rem',
  opacity: 0.75,
});
