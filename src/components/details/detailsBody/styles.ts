import styled from 'styled-components/native';
import { colorsTheme } from '../../../themes/colors';

export const DetailsContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DetailsDateInfoContainer = styled.View``;

export const DetailsTemperatureContainer = styled.View`
  padding-top: 16px;
`;

export const DetailsWeatherDescriptionContainer = styled.View``;

export const DetailsSeparator = styled.View`
  border-color: ${colorsTheme.fonts.whiteText};
  border-width: 1px;
  border-style: solid;
  margin: 16px 0px;
  width: 100%;
`;
