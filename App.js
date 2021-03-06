import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import * as firebase from 'firebase';
import { ThemeProvider } from 'styled-components/native';

import { theme } from './src/infrastructure/theme';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { Navigation } from './src/infrastructure/navigation';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const firebaseConfig = {
  apiKey: 'AIzaSyDJo4s1NjdhWDdAsb5S_vE2NB5jLuesoLU',
  authDomain: 'thesocial-c43f1.firebaseapp.com',
  projectId: 'thesocial-c43f1',
  storageBucket: 'thesocial-c43f1.appspot.com',
  messagingSenderId: '819059385020',
  appId: '1:819059385020:web:b283b23277542ca93066b9',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style='auto' />
    </>
  );
}
