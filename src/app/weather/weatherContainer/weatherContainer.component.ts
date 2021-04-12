import { Component, OnInit, Input } from '@angular/core';

import { WeatherService } from '../../shared/services/weather.service';
import { IWeather } from '../../shared/models/weather';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weatherContainer.component.html',
  styleUrls: ['./weatherContainer.component.css']
})
export class WeatherContainerComponent implements OnInit {
  @Input() citiesToShow: string[];
  public weathersData: IWeather[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeathersData();
  }

  private async getWeathersData(): Promise<void> {
    for (const city of this.citiesToShow) {
      await this.weatherService.getCurrentWeather(city).subscribe((weather: IWeather) => {
        this.weathersData.push(weather);
      });
    }
  }
}
