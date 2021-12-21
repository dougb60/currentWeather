import React from 'react';
import { ISys } from '../../../hooks/loadWeather/interface';
import { formatSun } from '../../../utils/weather';
import { Text } from '../../customText';
import { TextContainer } from '../../header/styles';
import { SunsetContainer } from './styles';

interface ISunsetProps {
  sys: ISys;
}

export const DetailsSun: React.FC<ISunsetProps> = ({ sys }) => {
  const { formatSunrise, formatSunset } = formatSun(sys);

  return (
    <SunsetContainer>
      <TextContainer>
        <Text type="whiteSubText">sunrise</Text>
        <Text type="whiteRegular">{formatSunrise}</Text>
      </TextContainer>
      <TextContainer>
        <Text type="whiteSubText">sunset</Text>
        <Text type="whiteRegular">{formatSunset}</Text>
      </TextContainer>
    </SunsetContainer>
  );
};
export default DetailsSun;
