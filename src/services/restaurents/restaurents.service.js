import camelize from 'camelize';
import { host } from '../../utils/env';

export const restaurantsRequest = (location) => {
  return fetch(`https://${host}/placesNearby?location=${location}`).then(
    (res) => {
      return res.json();
    }
  );
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {});
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });

  return camelize(mappedResults);
};
