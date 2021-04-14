import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

import { IWeather } from '../models/weather';
import { IWeatherHourly } from '../models/weather-hourly';

import { mockWeather } from '../mocks/mockWeather';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  const API_KEY = environment.API_KEY;
  let service: WeatherService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(WeatherService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCurrentWeather() should provide data', () => {
    service.getCurrentWeather('London').subscribe((city: IWeather) => {
      expect(city).not.toBe(null);
    });

    const req = httpTestingController.expectOne(`http://api.openweathermap.org/data/2.5/weather?q=London&unit=imperial&appid=${API_KEY}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockWeather);
  });

  it('getHourlyWeather() should provide data', () => {
    service.getHourlyWeather(12, 14).subscribe((hourly: IWeatherHourly[]) => {
      expect(hourly).not.toBe(null);
    });

    const req = httpTestingController.expectOne(`http://api.openweathermap.org/data/2.5/onecall?lat=12&lon=14&exclude=current,minutely,daily,alerts&unit=imperial&appid=${API_KEY}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockWeather);
  });
});
