import { Component, OnInit, Input } from '@angular/core';
import { animate, state, style, transition, trigger, } from '@angular/animations';

import { WeatherService } from '../../shared/services/weather.service';
import { IWeather } from '../../shared/models/weather';
import { IWeatherHourly } from '../../shared/models/weather-hourly';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weatherCard.component.html',
  styleUrls: ['./weatherCard.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
        display: 'none',
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class WeatherCardComponent implements OnInit {
  @Input() weather: IWeather;
  public weatherHourlyData: IWeatherHourly[] = [];
  public showingHourly = false;
  public isLoading = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  public toggleHourlyPanel(): void {
    this.showingHourly = !this.showingHourly;
    this.isLoading = !this.isLoading;
  }

  public async searchWeatherHourly(): Promise<void> {
    this.isLoading = true;

    if (this.showingHourly) {
      this.toggleHourlyPanel();
      this.weatherHourlyData = [];
      return;
    }

    await this.weatherService.getHourlyWeather(this.weather.longitude, this.weather.longitude).subscribe((weatherHourly: any) => {
      this.weatherHourlyData.push(...weatherHourly);
      this.toggleHourlyPanel();
    });
  }
}
