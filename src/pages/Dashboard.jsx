import { useApod } from '../api/useApod';
import {
  DashboardWrapper,
  Title,
  Description,
  Image,
  MobileNotice,
} from '../styles/dashboard.styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Dashboard() {
  const { data, error } = useApod();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (error) return <p>Error loading image</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <DashboardWrapper>
      <Title>{data.title}</Title>
      {!isMobile && <Image src={data.url} alt={data.title} />}
      <Description>{data.explanation}</Description>
      {isMobile && (
        <MobileNotice>
          📱 Image hidden on mobile for performance. View on desktop for full experience.
        </MobileNotice>
      )}
    </DashboardWrapper>
  );
}
