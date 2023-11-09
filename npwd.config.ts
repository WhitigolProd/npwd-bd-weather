import App from './src/App';
import { AppIcon } from './icon';

const defaultLanguage = 'en';
const localizedAppName = {
  en: 'Weather',
};

interface Settings {
  language: 'en';
}

export const path = '/npwd_BigDaddy_Weather';
export default (settings: Settings) => ({
  id: 'Weather',
  path,
  nameLocale: localizedAppName[settings?.language ?? defaultLanguage],
  color: '#fff',
  backgroundColor: '#028be6',
  icon: AppIcon,
  app: App,
});

/* Created by Whitigol Web Design */
