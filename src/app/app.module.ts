import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './weather/header/header.component';
import { WeatherContainer } from './weather/weatherContainer/weatherContainer.component';
import { WeatherService } from './shared/services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherContainer,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
