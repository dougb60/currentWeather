import { useCallback, useState } from 'react';
import { api_constants } from '../../constants';
import api from '../../services/api';
import { IWeather } from './interface';

export const useWeatherList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [citiesWeather, setCitiesWeather] = useState<IWeather[]>([]);

  const request = useCallback(async () => {
    const result = api_constants.weather_cities.map(async (citie) => {
      const weatherRequest = await api
        .get<IWeather>(
          `${api_constants.weather_request.get_by_name
            .replace('%{cityName}', citie)
            .toString()}${api_constants.weather_key}`,
        )
        .then((props): IWeather => {
          const { weather, main, sys, wind, id, name, dt } = props.data;
          return { id, weather, wind, sys, main, name, dt };
        });
      return weatherRequest;
    });

    return Promise.all(result);
  }, []);

  const getWeatherList = useCallback(async () => {
    setIsLoading(true);
    const response = await request();
    setCitiesWeather(response);
    setIsLoading(false);
  }, [request]);

  return { getWeatherList, isLoading, citiesWeather };
};
