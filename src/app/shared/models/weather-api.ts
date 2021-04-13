export interface IRequestWeather {
  coord: {
    lon: number,
    lat: number,
  };
  dt: number;
  weather: {
      main: string,
      description: string,
      icon: string,
  }[];
  main: {
    temp: number
  };
  wind: {
    speed: number,
  };
  id: number;
  name: string;
}
