
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { IRequestWeather } from '../models/weather-api';
import { IRequestWeatherHourly } from '../models/weather-hourly-api';

import { IWeather } from '../models/weather';
import { IWeatherHourly } from '../models/weather-hourly';

import {cleanCurrentWeatherData, cleanHourlyWeatherData} from '../utils/helper';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private URL = 'http://api.openweathermap.org/data/2.5';
  private API_KEY = environment.apiKey;

  constructor(private httpClient: HttpClient) { }

  public getCurrentWeather(city: string): Observable<IWeather> {
    return this.httpClient.get<IRequestWeather>(`${this.URL}/weather?q=${city}&unit=imperial&appid=${this.API_KEY}`)
      .pipe(
        map(weather => cleanCurrentWeatherData(weather)),
        retry(2),
        catchError(this.handleError));
  }
  public getHourlyWeather(lat: number, lon: number): Observable<IWeatherHourly[]> {
    return this.httpClient.get<IRequestWeatherHourly>(`${this.URL}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&unit=imperial&appid=${this.API_KEY}`)
      .pipe(
        map(weather => cleanHourlyWeatherData(weather)),
        retry(2),
        catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status}, ` + `message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
