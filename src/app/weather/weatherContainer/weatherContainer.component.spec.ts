import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WeatherService } from '../../shared/services/weather.service';
import { WeatherContainerComponent } from './weatherContainer.component';

import { mockWeather } from '../../shared/mocks/mockWeather';
import { IWeather } from '../../shared/models/weather';

describe('WeatherContainerComponent', () => {
  let component: WeatherContainerComponent;
  let fixture: ComponentFixture<WeatherContainerComponent>;
  let weatherService: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherContainerComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        {provide:
          WeatherService,
          useValue: {
            getCurrentWeather: () => mockWeather
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainerComponent);
    component = fixture.componentInstance;
    weatherService = TestBed.inject(WeatherService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
