import React from 'react';
import {
  Typography,
  Grid,
  FormControlLabel,
  Switch,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  FormGroup,
} from '@mui/material';
import {
  SettingsWrapper,
  SectionTitle,
  SectionPaper,
} from '../styles/settings.styles';

const Settings = ({ mode, setMode }) => {
  const [language, setLanguage] = React.useState('en');
  const [notifications, setNotifications] = React.useState({
    email: true,
    sms: false,
    push: true,
  });

  const handleToggleMode = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleLanguageChange = event => {
    setLanguage(event.target.value);
  };

  const handleNotificationChange = event => {
    setNotifications({
      ...notifications,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <SettingsWrapper>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Grid container spacing={4}>
        {/* Appearance */}
        <Grid item xs={12} md={6}>
          <SectionPaper elevation={3}>
            <SectionTitle variant="h6">Appearance</SectionTitle>
            <FormControlLabel
              control={
                <Switch
                  checked={mode === 'dark'}
                  onChange={handleToggleMode}
                />
              }
              label="Dark Mode"
            />
          </SectionPaper>
        </Grid>

        {/* Language */}
        <Grid item xs={12} md={6}>
          <SectionPaper elevation={3}>
            <SectionTitle variant="h6">Language</SectionTitle>
            <FormControl fullWidth>
              <InputLabel id="language-select-label">Language</InputLabel>
              <Select
                labelId="language-select-label"
                value={language}
                label="Language"
                onChange={handleLanguageChange}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="am">Amharic</MenuItem>
                <MenuItem value="fr">French</MenuItem>
              </Select>
            </FormControl>
          </SectionPaper>
        </Grid>

        {/* Notifications */}
        <Grid item xs={12}>
          <SectionPaper elevation={3}>
            <SectionTitle variant="h6">Notifications</SectionTitle>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={notifications.email}
                    onChange={handleNotificationChange}
                    name="email"
                  />
                }
                label="Email Alerts"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={notifications.sms}
                    onChange={handleNotificationChange}
                    name="sms"
                  />
                }
                label="SMS Alerts"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={notifications.push}
                    onChange={handleNotificationChange}
                    name="push"
                  />
                }
                label="Push Notifications"
              />
            </FormGroup>
          </SectionPaper>
        </Grid>
      </Grid>
    </SettingsWrapper>
  );
};

export default Settings;
