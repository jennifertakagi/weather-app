import { IRequestWeather } from '../models/weather-api';
import { IRequestWeatherHourly } from '../models/weather-hourly-api';

import { IWeather } from '../models/weather';
import { IWeatherHourly } from '../models/weather-hourly';

/**
 * Clean current request weather data, return only the necessary properties
 * @param weather {IRequestWeather}
 * @returns {IWeather} the current weather
 */
function cleanCurrentWeatherData (weather: IRequestWeather): IWeather{
  return {
    id: weather.id,
    icon: `http://openweathermap.org/img/w/${weather.weather?.[0]?.icon}.png`,
    cityName: weather.name,
    latitude: weather.coord?.lat,
    longitude: weather.coord?.lon,
    temperature: `${weather.main?.temp} F`,
    weatherSubtitle: weather.weather?.[0]?.description,
    weatherTitle: weather.weather?.[0]?.main,
    windSpeed: `${weather.wind?.speed} mph`,
  };
}

/**
 * Clean hourly request weather data, return only the necessary properties
 * @param weather {IRequestWeatherHourly}
 * @returns {IWeatherHourly[]} a list of hourly weather 
 */
function cleanHourlyWeatherData (weather: IRequestWeatherHourly): IWeatherHourly[]{
  return weather.hourly
    .slice(0, 3)
    .map(w => ({
      icon: `http://openweathermap.org/img/w/${w.weather?.[0]?.icon}.png`,
      temperature: `${w.temp} F`,
      time: convertHour(w.dt),
      weatherTitle: w.weather?.[0]?.main,
      windSpeed: `${w.wind_speed} mph`,
    }));
}

/**
 * Converts the UNIX time on a string hour
 * @param time {number} time on UNIX format
 * @returns {string} hour as a string (AM/PM)
 */
function convertHour(time: number): string {
  const milliseconds = time * 1000;
  const dateObject = new Date(milliseconds);
  const hourAsString = dateObject.toLocaleString("en-US", {hour: "numeric"});

  return hourAsString;
}

export {
  cleanCurrentWeatherData,
  cleanHourlyWeatherData
}