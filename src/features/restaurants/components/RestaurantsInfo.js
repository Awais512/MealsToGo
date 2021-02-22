import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

const Title = styled.Text`
  padding: 16px;
`;

const ResturantCard = styled(Card)`
  background-color: white;
`;

const CardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const RestaurantsInfo = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <ResturantCard elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </ResturantCard>
  );
};

export default RestaurantsInfo;
