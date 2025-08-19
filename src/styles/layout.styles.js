import { styled } from '@mui/material/styles';

export const LayoutWrapper = styled('div')({
  display: 'flex',
  height: '100vh',
});

export const ContentWrapper = styled('div')({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
});

export const MainContent = styled('main')(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  flexGrow: 1,
}));
