import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PrayerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prayer & Devotionals</Text>
      <Text style={styles.text}>Daily prayers and spiritual guidance</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
});

export default PrayerScreen;
