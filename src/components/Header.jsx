import { useEffect, useState } from 'react';
import {
  StyledAppBar,
  StyledToolbar,
  Title,
  Subtitle,
} from '../styles/header.styles';

export default function Header() {
  const [userName, setUserName] = useState('Explorer');

  useEffect(() => {
    // Simulate fetching user name
    setTimeout(() => {
      setUserName('Tsion');
    }, 1000);
  }, []);

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Title>🌌 Planetarium Explorer</Title>
        <Subtitle>Welcome back, {userName}</Subtitle>
      </StyledToolbar>
    </StyledAppBar>
  );
}
