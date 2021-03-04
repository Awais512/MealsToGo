import React from 'react';

import { RestaurantInfoCard } from '../components/RestaurantsInfoCard';

import { SafeArea } from '../../../components/utility/SafeAreaComponent';

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
