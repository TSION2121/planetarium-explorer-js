import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

export const CelestialWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
}));

export const CelestialTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
}));

export const ControlPanel = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
  flexWrap: 'wrap',
}));

export const CelestialCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
}));
