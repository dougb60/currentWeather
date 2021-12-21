import { format, fromUnixTime } from 'date-fns';
import { IMain, ISys } from '../../hooks/loadWeather/interface';

export const formatActualTemp = (temp: number) => {
  const formatTemp = temp.toFixed(0);
  return `${formatTemp}˚`;
};

export const formatTempForCard = (temp: IMain) => {
  const minTemp = temp.temp_min.toFixed(0).toString();
  const maxTemp = temp.temp_max.toFixed(0).toString();

  const minMaxTemp = `${minTemp}˚/${maxTemp}˚`;
  return minMaxTemp;
};

export const formatedDate = (date: number) => {
  const dateFromUnix = fromUnixTime(date);

  const day = format(new Date(dateFromUnix), 'd');
  const dayName = format(new Date(dateFromUnix), 'EEEE');
  const monthName = format(new Date(dateFromUnix), 'MMM');

  return `${dayName} | ${monthName} ${day}`;
};

export const formatWindSpeed = (speed: number) => {
  const formatSpeed = speed.toFixed(1).toString();
  return `${formatSpeed} km/h`;
};

export const formatPressure = (pressure: number) => {
  return `${pressure} mbar`;
};

export const formatHumidity = (humidity: number) => {
  const formatedHumidity = humidity.toFixed(0).toString();
  return `${formatedHumidity}%`;
};

export const formatSun = (sys: ISys) => {
  const { sunrise, sunset } = sys;

  const formatSunrise = format(fromUnixTime(sunrise), 'p');
  const formatSunset = format(fromUnixTime(sunset), 'p');

  return { formatSunrise, formatSunset };
};
