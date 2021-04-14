import { IRequestWeather } from '../models/weather-api';

export const mockRequestWeather: IRequestWeather = {
  coord: {
    lon: 1,
    lat: 2,
  },
  dt: 1,
  weather: [
    {
      main: '__MAIN__',
      description: '__DESCRIPTION__',
      icon: '__ICON__',
    }
  ],
  main: {
    temp: 10
  },
  wind: {
    speed: 1.5,
  },
  id: 1,
  name: '__NAME__',
};
