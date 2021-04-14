import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WeatherService } from '../../shared/services/weather.service';
import { WeatherCardComponent } from './weatherCard.component';

import { mockWeather } from '../../shared/mocks/mockWeather';
import { mockWeatherHourly } from '../../shared/mocks/mockWeatherHourly';

describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;
  let weatherService: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCardComponent ],
      imports: [HttpClientTestingModule, BrowserAnimationsModule],
      providers: [
        {provide:
          WeatherService,
          useValue: {
            getHourlyWeather: () => mockWeatherHourly
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    weatherService = TestBed.inject(WeatherService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
