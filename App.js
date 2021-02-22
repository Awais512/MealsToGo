import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import RestaurantsScreen from './src/features/restaurants/screen/RestaurantsScreen';
import { theme } from './src/infrastructure/theme';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* {JSON.stringify(theme.colors.ui.primary)} */}
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}
