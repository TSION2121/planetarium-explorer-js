// src/theme/index.js
import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';

const theme = createTheme({
  palette,
  typography,
  shape: {
    borderRadius: 8,
  },
});

export default theme;
