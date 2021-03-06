import React from 'react';
import { SettingsScreen } from '../../features/settings/screens/SettingsScreen';
import { CameraScreen } from '../../features/settings/screens/CameraScreen';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { FavouritesScreen } from '../../features/settings/screens/FavouritesScreen';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode='screen'
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name='Settings'
        component={SettingsScreen}
      />
      <SettingsStack.Screen name='Favourites' component={FavouritesScreen} />
      <SettingsStack.Screen name='CameraScreen' component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};
