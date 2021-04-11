export interface IRequestWeather {
  coord: {
    lon: number,
    lat: number,
  };
  weather: [
    {
      main: string,
      description: string,
      icon: string,
    }
  ];
  main: {
    temp: number
  };
  wind: {
    speed: 1.5,
  };
  id: number;
  name: string;
}             