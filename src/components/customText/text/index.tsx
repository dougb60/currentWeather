import React from 'react';
import { ITextProps } from '../../interface';
import { TextComponent } from '../styles';

const CustomText: React.FC<ITextProps> = ({ type, children }) => {
  return <TextComponent type={type}>{children}</TextComponent>;
};

export default CustomText;
