import React from 'react';
import { IWeather } from '../../../hooks/loadWeather/interface';
import {
  DetailsFooterContainer,
  DetailsPressureHumidityContainer,
  DetailsWindRainContainer,
  InfoContainer,
  InfoTextContainer,
  WindDirectionContainer,
} from './styles';
import { TemperatureLight, WindArrowLight, Drop } from '../../icons';
import { Text } from '../../customText';
import {
  formatActualTemp,
  formatHumidity,
  formatPressure,
  formatWindSpeed,
} from '../../../utils/weather';

interface IDetailsFooter {
  weather: IWeather;
}

const DetailsFooter: React.FC<IDetailsFooter> = ({ weather }) => {
  const { speed, deg } = weather.wind;
  const { feels_like, pressure, humidity } = weather.main;
  const perseption = formatActualTemp(feels_like);
  const pressureValue = formatPressure(pressure);
  const windSpeed = formatWindSpeed(speed);
  const humidityPercent = formatHumidity(humidity);

  const RenderWindRainContainer = () => {
    return (
      <DetailsWindRainContainer>
        <InfoContainer>
          <WindDirectionContainer deg={deg}>
            <WindArrowLight width="24" height="24" />
          </WindDirectionContainer>
          <InfoTextContainer>
            <Text type="whiteSubText">{windSpeed}</Text>
            <Text type="whiteSubText">Wind</Text>
          </InfoTextContainer>
        </InfoContainer>
        <InfoContainer>
          <TemperatureLight width="24" height="24" />
          <InfoTextContainer>
            <Text type="whiteSubText">{perseption}</Text>
            <Text type="whiteSubText">Feels like</Text>
          </InfoTextContainer>
        </InfoContainer>
      </DetailsWindRainContainer>
    );
  };

  const RenderPressureHumidity = () => {
    return (
      <DetailsPressureHumidityContainer>
        <InfoContainer>
          <TemperatureLight width="24" height="24" />
          <InfoTextContainer>
            <Text type="whiteSubText">{pressureValue}</Text>
            <Text type="whiteSubText">Pressure</Text>
          </InfoTextContainer>
        </InfoContainer>
        <InfoContainer>
          <Drop width="24" height="24" />
          <InfoTextContainer>
            <Text type="whiteSubText">{humidityPercent}</Text>
            <Text type="whiteSubText">Humidity</Text>
          </InfoTextContainer>
        </InfoContainer>
      </DetailsPressureHumidityContainer>
    );
  };

  return (
    <DetailsFooterContainer>
      <RenderWindRainContainer />
      <RenderPressureHumidity />
    </DetailsFooterContainer>
  );
};
export default DetailsFooter;
