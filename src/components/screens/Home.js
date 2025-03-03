import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AdvertisementsScreen from './AdvertisementsScreen';

const Home = () => {
  return (
    <AdvertisementsScreen />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center', // Center text horizontally
  },
});

export default Home;