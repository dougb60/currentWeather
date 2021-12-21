import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Text } from '../customText';
import { Arrow } from '../icons';
import { BackContainer, HeaderContainer, TextContainer } from './styles';

interface IHeaderProps {
  headerText: string;
  goBack?: () => void;
}

const Header: React.FC<IHeaderProps> = ({ headerText, goBack }) => {
  const RenderGoBack = () => {
    if (goBack) {
      return (
        <TouchableWithoutFeedback onPress={goBack}>
          <BackContainer>
            <Arrow width="32" heigth="32" />
          </BackContainer>
        </TouchableWithoutFeedback>
      );
    }
    return null;
  };

  return (
    <HeaderContainer>
      <RenderGoBack />
      <TextContainer>
        <Text type="whiteTitle">{headerText}</Text>
      </TextContainer>
    </HeaderContainer>
  );
};
export default Header;
