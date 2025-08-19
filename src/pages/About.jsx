import { AboutWrapper, AboutTitle, AboutText } from '../styles/about.styles';

export default function About() {
  return (
    <AboutWrapper>
      <AboutTitle>About This Project</AboutTitle>
      <AboutText>
        Planetarium Explorer is a senior-level frontend demo built by Tsion Bizuayehu. It visualizes celestial motion and integrates real-world data from NASA APIs.
      </AboutText>
    </AboutWrapper>
  );
}
