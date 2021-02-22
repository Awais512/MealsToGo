import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

const Title = styled.Text`
  color: red;
  padding: 16px;
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
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title style={styles.title}>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
  },
  cover: {
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    padding: 16,
  },
});

export default RestaurantsInfo;
