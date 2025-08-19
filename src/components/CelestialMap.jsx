import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  MapWrapper,
  MapTitle,
  MapDescription,
} from '../styles/celestialMap.styles';

export default function CelestialMap() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MapWrapper>
      <MapTitle>Celestial Map</MapTitle>
      <MapDescription>
        {isMobile
          ? 'Explore planetary motion on mobile.'
          : 'Visualize planetary motion, star fields, and orbital paths in real time.'}
      </MapDescription>
    </MapWrapper>
  );
}
