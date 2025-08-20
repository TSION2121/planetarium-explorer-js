import React, { useEffect, useState } from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  CircularProgress,
} from '@mui/material';
import {
  ObservatoryWrapper,
  ObservatoryTitle,
  ObservatoryCard,
} from '../styles/observatory.styles';

export default function Observatory() {
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
    <ObservatoryWrapper>
      <ObservatoryTitle variant="h4">Observatory</ObservatoryTitle>
      <Typography variant="body1" gutterBottom>
        Monitor celestial events, telescope data, and orbital simulations. This is your gateway to the stars.
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        apod && (
          <ObservatoryCard>
            <CardMedia
              component="img"
              height="300"
              image={apod.url}
              alt={apod.title}
            />
            <CardContent>
              <Typography variant="h6">{apod.title}</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {apod.explanation}
              </Typography>
              <Button
                href={apod.hdurl || apod.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
              >
                View Full Image
              </Button>
            </CardContent>
          </ObservatoryCard>
        )
      )}
    </ObservatoryWrapper>
  );
}
