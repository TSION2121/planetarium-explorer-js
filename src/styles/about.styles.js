import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const AboutWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const MissionSection = styled('div')(({ theme }) => ({
  maxWidth: 700,
  textAlign: 'center',
  marginBottom: theme.spacing(4),
}));

export const AboutTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.75rem',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
}));

export const AboutText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.secondary,
}));

export const EarthImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: 600,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));
