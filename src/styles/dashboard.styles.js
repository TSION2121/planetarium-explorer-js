import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const MobileNotice = styled('p')(({ theme }) => ({
  fontSize: '0.9rem',
  color: '#888',
  marginTop: '1rem',
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

// src/styles/dashboard.styles.js
export const Image = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(2),
}));

export const DashboardWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.75rem',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.secondary,
}));
