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
  clouds: {
    all: 1
  };
  id: number;
  name: string;
}             