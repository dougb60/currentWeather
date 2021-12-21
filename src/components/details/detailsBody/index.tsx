import React from 'react';
import {
  DetailsContainer,
  DetailsDateInfoContainer,
  DetailsTemperatureContainer,
  DetailsWeatherDescriptionContainer,
  DetailsSeparator,
} from './styles';
import { Text } from '../../customText';
import { IWeather } from '../../../hooks/loadWeather/interface';
import { formatActualTemp, formatedDate } from '../../../utils/weather';
import LottieContainer from '../../lottieComponent/index';

interface IDetailsBody {
  weather: IWeather;
}

const DetailsBody: React.FC<IDetailsBody> = ({ weather }) => {
  const date = formatedDate(weather.sys.sunset);
  const actualTemp = formatActualTemp(weather.main.temp);
  const { description, main } = weather.weather[0];

  return (
    <DetailsContainer>
      <LottieContainer weatherMain={main} />
      <DetailsDateInfoContainer>
        <Text type="whiteRegular">{date}</Text>
      </DetailsDateInfoContainer>
      <DetailsTemperatureContainer>
        <Text type="largeWhiteTitle">{actualTemp}</Text>
      </DetailsTemperatureContainer>
      <DetailsWeatherDescriptionContainer>
        <Text type="whiteRegular">{description}</Text>
      </DetailsWeatherDescriptionContainer>
      <DetailsSeparator />
    </DetailsContainer>
  );
};

export default DetailsBody;
