import { TestBed } from '@angular/core/testing';

import { cleanCurrentWeatherData, cleanHourlyWeatherData } from './helper';

import { mockRequestWeather } from '../mocks/mockRequestWeather';
import { mockWeather } from '../mocks/mockWeather';
import { mockUncompletedWeather } from '../mocks/mockUncompletedWeather';

import { mockRequestWeatherHourly } from '../mocks/mockRequestWeatherHourly';
import { mockWeatherHourly } from '../mocks/mockWeatherHourly';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should return cleaned request weather on cleanedCurrentWeather', () => {
    const cleanedCurrentWeather = cleanCurrentWeatherData(mockRequestWeather);
    expect(cleanedCurrentWeather).toEqual(mockWeather);
  });

  it('should return cleaned request weather with undefined values on cleanedCurrentWeather', () => {
    const cleanedCurrentWeather = cleanCurrentWeatherData({} as any);
    expect(cleanedCurrentWeather).toEqual(mockUncompletedWeather);
  });

  it('should return cleaned request weather on cleanHourlyWeatherData', () => {
    const cleanedHourlyWeather = cleanHourlyWeatherData(mockRequestWeatherHourly);
    expect(cleanedHourlyWeather).toEqual(mockWeatherHourly);
  });

  it('should return cleaned request weather with undefined values on cleanHourlyWeatherData', () => {
    const cleanedHourlyWeather = cleanHourlyWeatherData({} as any);
    expect(cleanedHourlyWeather).toEqual([]);
  });
});
