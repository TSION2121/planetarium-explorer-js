import {
  SettingsWrapper,
  SettingsTitle,
  SettingsDescription,
} from '../styles/settings.styles';

export default function Settings() {
  return (
    <SettingsWrapper>
      <SettingsTitle>Settings</SettingsTitle>
      <SettingsDescription>
        Configure your simulation preferences, UI themes, and system behavior.
      </SettingsDescription>
    </SettingsWrapper>
  );
}
