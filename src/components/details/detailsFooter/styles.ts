import styled from 'styled-components/native';

interface WindDirectionProps {
  deg: number;
}

export const DetailsFooterContainer = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const DetailsWindRainContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const DetailsPressureHumidityContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 24px;
`;

export const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const InfoTextContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
`;

export const WindDirectionContainer = styled.View<WindDirectionProps>`
  ${(props) => `transform:rotate(${props.deg}deg)`}
`;
