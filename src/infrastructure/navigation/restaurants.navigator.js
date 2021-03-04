import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { RestaurantsScreen } from '../../features/restaurants/screen/RestaurantsScreen';
import { RestaurantDetailScreen } from '../../features/restaurants/screen/RestaurantDetailScreen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode='none'
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen
        name='Restaurants'
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name='RestaurantDetailScreen'
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
