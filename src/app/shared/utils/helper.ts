import { IRequestWeather } from '../models/weather-api';
import { IRequestWeatherHourly } from '../models/weather-hourly-api';

import { IWeather } from '../models/weather';
import { IWeatherHourly } from '../models/weather-hourly';

/**
 * Clean current request weather data, return only the necessary properties
 * @param weather - full weather object from A{PI
 * @returns the current weather
 */
function cleanCurrentWeatherData(weather: IRequestWeather): IWeather {
  const icon = weather.weather?.[0]?.icon
    ? `http://openweathermap.org/img/w/${weather.weather?.[0]?.icon}.png`
    : '../../../assets/icons/no-icon.png';
  const temperature = weather.main?.temp ? `${weather.main?.temp} F` : undefined;
  const windSpeed = weather.wind?.speed ? `${weather.wind?.speed} mph` : undefined;

  return {
    id: weather.id,
    icon,
    cityName: weather.name,
    latitude: weather.coord?.lat,
    longitude: weather.coord?.lon,
    temperature,
    time: convertHour(weather.dt),
    weatherSubtitle: weather.weather?.[0]?.description,
    weatherTitle: weather.weather?.[0]?.main,
    windSpeed,
  };
}

/**
 * Clean hourly request weather data, return only the necessary properties
 * @param weather - full weather object from A{PI
 * @returns a list of hourly weather
 */
function cleanHourlyWeatherData(weather: IRequestWeatherHourly): IWeatherHourly[] {
  return (weather.hourly || [])
    .slice(1, 24)
    .map(w => {
      const icon = w.weather?.[0]?.icon
        ? `http://openweathermap.org/img/w/${w.weather?.[0]?.icon}.png`
        : '../../../assets/icons/no-icon.png';
      const temperature = w.temp ? `${w.temp} F` : undefined;
      const windSpeed = w.wind_speed ? `${w.wind_speed} mph` : undefined;

      return {
        icon,
        temperature,
        time: convertHour(w.dt),
        weatherTitle: w.weather?.[0]?.main,
        windSpeed,
      };
    });
}

/**
 * Converts the UNIX time on a string hour
 * @param time time on UNIX format
 * @returns hour as a string (AM/PM)
 */
function convertHour(time: number = 0): string {
  const milliseconds = time * 1000;
  const dateObject = new Date(milliseconds);
  const hourAsString = dateObject.toLocaleString('en-US', {hour: 'numeric'});

  return hourAsString;
}

export {
  cleanCurrentWeatherData,
  cleanHourlyWeatherData
};
