import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import {
  ObservatoryWrapper,
  ObservatoryTitle,
  ObservatoryCard,
} from '../styles/observatory.styles';

const Observatory = () => {
  return (
    <ObservatoryWrapper>
      <ObservatoryTitle variant="h4" gutterBottom>
        Virtual Observatory
      </ObservatoryTitle>

      <Typography variant="body1" gutterBottom>
        Explore simulated planetary motion, upcoming celestial events, and telescope data. This is your gateway to the cosmos.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ObservatoryCard>
            <CardMedia
              component="img"
              height="180"
              image="https://apod.nasa.gov/apod/image/2308/M31_Hubble_960.jpg"
              alt="Andromeda Galaxy"
            />
            <CardContent>
              <Typography variant="h6">Andromeda Galaxy</Typography>
              <Typography variant="body2">
                The closest spiral galaxy to the Milky Way. Estimated collision in 4.5 billion years.
              </Typography>
              <Button size="small" sx={{ mt: 1 }}>View Simulation</Button>
            </CardContent>
          </ObservatoryCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <ObservatoryCard>
            <CardMedia
              component="img"
              height="180"
              image="https://apod.nasa.gov/apod/image/2308/MarsOpposition2023.jpg"
              alt="Mars Opposition"
            />
            <CardContent>
              <Typography variant="h6">Mars Opposition</Typography>
              <Typography variant="body2">
                Mars reaches its closest point to Earth. Ideal for telescope viewing and orbital tracking.
              </Typography>
              <Button size="small" sx={{ mt: 1 }}>Track Orbit</Button>
            </CardContent>
          </ObservatoryCard>
        </Grid>
      </Grid>
    </ObservatoryWrapper>
  );
};

export default Observatory;
