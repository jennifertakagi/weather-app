import { IWeather } from '../models/weather';

export const mockWeather: IWeather = {
  id: 1,
  icon: 'https://openweathermap.org/img/w/__ICON__.png',
  cityName: '__NAME__',
  latitude: 2,
  longitude: 1,
  temperature: '10 F',
  time: '9 PM',
  weatherSubtitle: '__DESCRIPTION__',
  weatherTitle: '__MAIN__',
  windSpeed: '1.5 mph'
};
