import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import RestaurantsInfo from '../components/RestaurantsInfo';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantsInfo />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;
