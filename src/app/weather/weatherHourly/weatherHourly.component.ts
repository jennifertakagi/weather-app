import { Component, OnInit, Input } from '@angular/core';

import { IWeatherHourly } from '../../shared/models/weather-hourly';

@Component({
  selector: 'app-weather-hourly',
  templateUrl: './weatherHourly.component.html',
  styleUrls: ['./weatherHourly.component.css']
})
export class WeatherHourlyComponent implements OnInit {
  @Input() weatherHourly: IWeatherHourly;

  constructor() {}

  ngOnInit(): void {}
}
