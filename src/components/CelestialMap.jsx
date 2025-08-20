import React, { useEffect, useState } from 'react';
import {
  Typography,
  Select,
  MenuItem,
  Button,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
} from '@mui/material';
import {
  CelestialWrapper,
  CelestialTitle,
  ControlPanel,
  CelestialCard,
} from '../styles/celestialMap.styles';

export default function CelestialMap() {
  const [view, setView] = useState('solar');
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => res.json())
      .then(data => {
        setApod(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch APOD:', err);
        setLoading(false);
      });
  }, []);

  return (
    <CelestialWrapper>
      <CelestialTitle variant="h4">Celestial Map</CelestialTitle>
      <Typography variant="body1" gutterBottom>
        Interactive display of stars, planets, and constellations.
      </Typography>

      <ControlPanel>
        <Select
          value={view}
          onChange={e => setView(e.target.value)}
          sx={{ minWidth: 160 }}
        >
          <MenuItem value="solar">Solar System</MenuItem>
          <MenuItem value="jupiter">Jupiter Moons</MenuItem>
          <MenuItem value="saturn">Saturn Rings</MenuItem>
        </Select>
        <Button variant="outlined">Zoom In</Button>
        <Button variant="outlined">Zoom Out</Button>
      </ControlPanel>

      {loading ? (
        <CircularProgress />
      ) : (
        apod && (
          <CelestialCard>
            <CardMedia
              component="img"
              height="300"
              image={apod.url}
              alt={apod.title}
            />
            <CardContent>
              <Typography variant="h6">{apod.title}</Typography>
              <Typography variant="body2">{apod.explanation}</Typography>
            </CardContent>
          </CelestialCard>
        )
      )}
    </CelestialWrapper>
  );
}
