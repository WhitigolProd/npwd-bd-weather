import App from './src/App';
import { AppIcon } from './icon';

const defaultLanguage = 'en';
const localizedAppName = {
  en: 'W_WEATHER_BD',
};

interface Settings {
  language: 'en';
}

export const path = '/npwd_app_template';
export default (settings: Settings) => ({
  id: 'W_WEATHER_BD',
  path,
  nameLocale: localizedAppName[settings?.language ?? defaultLanguage],
  color: '#fff',
  backgroundColor: '#028be6',
  icon: AppIcon,
  app: App,
});
