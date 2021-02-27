import React, { useState, useMemo, useEffect, createContext } from 'react';

import {
  restaurantsRequest,
  restaurantsTransform,
} from './restaurents.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider
      value={{ restaurants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
