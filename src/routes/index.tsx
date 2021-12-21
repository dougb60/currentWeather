import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';

import Home from '../screens/Home';
import Details from '../screens/Details';

import { colorsTheme } from '../themes/colors';

const AppStack = createNativeStackNavigator();

const Navigation: React.FC = () => {
  const navigatorOptions = (): NativeStackNavigationOptions => {
    return {
      headerShown: false,
      contentStyle: { backgroundColor: colorsTheme.whiteBackGround },
      title: '',
      headerShadowVisible: false,
    };
  };

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={navigatorOptions}>
        <AppStack.Screen name="home" component={Home} />
        <AppStack.Screen name="details" component={Details} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
