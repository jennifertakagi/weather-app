import { IRequestWeather } from '../models/weather-api';

export interface IRequestWeatherHourly {
  hourly: [
    {
      dt: number,
      temp: string,
      weather: IRequestWeather,
      wind_speed: string,
    }
  ];
}
