import styled from 'styled-components/native';
import { colorsTheme } from '../../themes/colors';

export const CardContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colorsTheme.whiteBackGround};
  border-radius: 16px;
`;

export const InfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding-top: 19px;
  padding-left: 16px;
  padding-bottom: 24px;
`;

export const CityNameContainer = styled.View`
  padding-bottom: 4px;
`;

export const IconContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
`;
