import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './theme/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import CelestialMap from './components/CelestialMap';
import About from './pages/About';

export default function App() {
  const [mode, setMode] = useState('light');
  const theme = getTheme(mode);

return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout setMode={setMode} />}>
          <Route index element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="map" element={<CelestialMap />} />
          <Route path="about" element={<About />} />
          <Route path="observatory" element={<Observatory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

}
