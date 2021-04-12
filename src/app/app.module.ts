import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './weather/header/header.component';
import { WeatherContainerComponent } from './weather/weatherContainer/weatherContainer.component';
import { WeatherCardComponent } from './weather/weatherCard/weatherCard.component';
import { WeatherHourlyComponent } from './weather/weatherHourly/weatherHourly.component';

import { WeatherService } from './shared/services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherContainerComponent,
    WeatherCardComponent,
    WeatherHourlyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
