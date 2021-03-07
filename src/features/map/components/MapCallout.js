import React from 'react';
import { CompactRestaurantInfo } from '../../../components/restaurant/RestaurantCompactInfo';

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
