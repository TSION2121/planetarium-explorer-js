import {
  AboutWrapper,
  AboutTitle,
  AboutText,
  EarthImage,
  MissionSection,
} from '../styles/about.styles';

export default function About() {
  return (
    <AboutWrapper>
      <MissionSection>
        <AboutTitle>About This Project</AboutTitle>
        <AboutText>
          Planetarium Explorer is a senior-level frontend demo built by Tsion Bizuayehu. It visualizes celestial motion and integrates real-world data from NASA APIs.
        </AboutText>
      </MissionSection>

      <EarthImage
        src="https://apod.nasa.gov/apod/image/2401/EarthFromSpace.jpg"
        alt="Earth from space"
      />
    </AboutWrapper>
  );
}
