import React from 'react';
import { ActivityIndicator } from 'react-native';
import { LoadingContainer } from './styles';

export const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator size="large" color="#FFFFFF" />
    </LoadingContainer>
  );
};
export default Loading;
