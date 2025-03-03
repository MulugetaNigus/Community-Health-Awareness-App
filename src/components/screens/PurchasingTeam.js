import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PurchasingTeam = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Purchasing Team Dashboard</Text>
      <Text style={styles.subtitle}>Purchasing Team functionality will be implemented here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
});

export default PurchasingTeam; 