export interface IRequestWeatherHourly {
  hourly: {
    dt: number,
    temp: number,
    weather: {
      main: string,
      description: string,
      icon: string,
    }[];
    wind_speed: number,
  }[];
}
