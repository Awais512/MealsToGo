import React, { useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import { StatusBar, FlatList, SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components/native';

import { RestaurantInfoCard } from '../components/RestaurantsInfoCard';
import { Spacer } from '../../../components/Spacer';
import { RestaurantsContext } from '../../../services/restaurents/restaurents.context';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position='bottom' size='large'>
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
