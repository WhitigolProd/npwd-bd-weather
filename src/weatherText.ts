import { WeatherTypes } from './types';

const GetWeatherText = (weather: WeatherTypes) => {
  switch (weather) {
    case 'BLIZZARD':
      return 'Blizzard';
    case 'CLEAR':
      return 'Clear';
    case 'CLEARING':
      return 'Clearing';
    case 'CLOUDS':
      return 'Cloudy';
    case 'EXTRASUNNY':
      return 'Extra Sunny';
    case 'FOGGY':
      return 'Foggy';
    case 'HALLOWEEN':
      return 'Halloween';
    case 'NEUTRAL':
      return 'Neutral';
    case 'OVERCAST':
      return 'Overcast';
    case 'RAIN':
      return 'Rain';
    case 'SMOG':
      return 'Smog';
    case 'SNOW':
      return 'Snow';
    case 'SNOWLIGHT':
      return 'Snowlight';
    case 'THUNDER':
      return 'Thunder';
    case 'XMAS':
      return 'Xmas';
    default:
      return 'Unknown';
  }
};

export default GetWeatherText;

/* Created by Whitigol Web Design */
