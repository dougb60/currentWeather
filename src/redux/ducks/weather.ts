import { createAction, handleActions } from 'redux-actions';
import { IWeather } from '../../hooks/loadWeather/interface';

interface Payload {
  weatherList: IWeather[];
  citieId: number;
}

interface WeatherState {
  weatherList?: IWeather[];
  citieId?: number;
}

const initialState: WeatherState = {
  weatherList: [],
  citieId: undefined,
};

export const WEATHER_CITIES_LIST_ACTION = 'WEATHER/LIST';
export const WEATHER_SET_SELECTED_CITIE = 'WEATHER/SET_SELECTED_CITIE';

const listWeatherCities = createAction<Pick<Payload, 'weatherList'>>(
  WEATHER_CITIES_LIST_ACTION,
);
const setSelectedCitie = createAction<Pick<Payload, 'citieId'>>(
  WEATHER_SET_SELECTED_CITIE,
);

export const actions = { listWeatherCities, setSelectedCitie };

const weatherHandler = handleActions<WeatherState, Partial<Payload>>(
  {
    [WEATHER_CITIES_LIST_ACTION]: (state, { payload }) => {
      if (!payload.weatherList) return state;
      return { ...state, weatherList: payload.weatherList };
    },
    [WEATHER_SET_SELECTED_CITIE]: (state, { payload }) => {
      if (!payload.citieId) return state;
      return { ...state, citieId: payload.citieId };
    },
  },
  initialState,
);

export const reducers = { weather: weatherHandler };
