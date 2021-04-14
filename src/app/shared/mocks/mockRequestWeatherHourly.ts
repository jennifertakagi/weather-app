import { IRequestWeatherHourly } from '../models/weather-hourly-api';

export const mockRequestWeatherHourly: IRequestWeatherHourly = {
  hourly: [
    {
      dt: 1,
      temp: 10,
      weather: [
        {
          main: '__MAIN__',
          description: '__DESCRIPTION__',
          icon: '__ICON__',
        }
      ],
      wind_speed: 20,
    },
    {
      dt: 2,
      temp: 13,
      weather: [
        {
          main: '__MAIN__',
          description: '__DESCRIPTION__',
          icon: '__ICON__',
        }
      ],
      wind_speed: 18,
    },
    {
      dt: 3,
      temp: 14,
      weather: [
        {
          main: '__MAIN__',
          description: '__DESCRIPTION__',
          icon: '__ICON__',
        }
      ],
      wind_speed: 15,
    }
  ]
};
