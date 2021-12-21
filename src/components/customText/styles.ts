import styled from 'styled-components/native';
import { fontsTheme } from '../../themes/fonts';
import { ITextProps } from '../interface';

export const TextComponent = styled.Text<ITextProps>`
  ${(props) => {
    return fontsTheme[props.type];
  }}
`;
