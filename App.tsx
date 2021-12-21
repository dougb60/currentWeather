/* eslint-disable react/style-prop-object */
import AppLoading from 'expo-app-loading';
import * as font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import reduxStore from './src/redux/store';
import Navigation from './src/routes';
import { colorsTheme } from './src/themes/colors';

const customFonts = {
  'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
  'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsTheme.whiteBackGround,
  },
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  const loadFontsAsync = useCallback(async () => {
    await font.loadAsync(customFonts);
    setFontsLoaded(true);
  }, []);

  useEffect(() => {
    loadFontsAsync();
  }, [loadFontsAsync]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ReduxProvider store={reduxStore}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </ReduxProvider>
  );
}
