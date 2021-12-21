import React from 'react';
import { ICitiesWeather, IMain } from '../../hooks/loadWeather/interface';
import { formatTempForCard } from '../../utils/weather';
import { Text } from '../customText';
import {
  ClearLight,
  CloudsLight,
  DrizzleLight,
  RainLight,
  Snow,
  Temperature,
  ThunderstormLight,
} from '../icons';
import {
  CardContainer,
  CityNameContainer,
  IconContainer,
  InfoContainer,
} from './styles';

interface ICityCardProps {
  cityName: string;
  temperature: IMain;
  weather: ICitiesWeather;
}

const CityCard: React.FC<ICityCardProps> = ({
  cityName,
  temperature,
  weather,
}) => {
  const formatTemp = formatTempForCard(temperature);

  const SelectWeatherIcon = () => {
    switch (weather.main) {
      case 'Clear':
        return <ClearLight width="32" height="32" />;
      case 'Thunderstorm':
        return <ThunderstormLight width="32" height="32" />;
      case 'Clouds':
        return <CloudsLight width="32" height="32" />;
      case 'Snow':
        return <Snow width="32" height="32" />;
      case 'Drizzle':
        return <DrizzleLight width="32" height="32" />;
      case 'Rain':
        return <RainLight width="32" height="32" />;
      default:
        return <Temperature width="32" height="32" />;
    }
  };

  return (
    <CardContainer>
      <InfoContainer>
        <CityNameContainer>
          <Text type="regular">{cityName}</Text>
        </CityNameContainer>
        <Text type="subText">{formatTemp}</Text>
      </InfoContainer>

      <IconContainer>
        <SelectWeatherIcon />
        <Text type="subText">{weather.main}</Text>
      </IconContainer>
    </CardContainer>
  );
};
export default CityCard;
