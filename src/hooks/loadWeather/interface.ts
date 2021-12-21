export interface ICitiesWeather {
  id: number;
  main: string;
  description: string;
}

export interface IWind {
  speed: number;
  deg: number;
}

export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface ISys {
  sunrise: number;
  sunset: number;
}

export interface IWeather {
  id: number;
  name: string;
  weather: ICitiesWeather[];
  wind: IWind;
  main: IMain;
  sys: ISys;
  dt: number;
}
