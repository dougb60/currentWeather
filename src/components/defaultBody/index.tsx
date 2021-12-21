import React from 'react';
import { colorsTheme } from '../../themes/colors';
import { BodyContainer } from './styles';

interface IDefaultBodyProps {
  colors: 'sunnyDay';
  children: React.ReactNode;
}

const DefaultBody: React.FC<IDefaultBodyProps> = ({ children, colors }) => {
  const color = colorsTheme.gradient[colors];

  return (
    <BodyContainer
      colors={color}
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 0.0, y: 0.6 }}
    >
      {children}
    </BodyContainer>
  );
};

export default DefaultBody;
