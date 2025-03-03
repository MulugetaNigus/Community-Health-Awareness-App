import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

const StoreKeeper = () => {
  // Mock purchase requests data
  const purchaseRequests = [
    { id: '1', itemName: 'Laptop', quantity: 10, description: 'For new employees', detailDescription: 'Dell XPS 15 or similar, high performance laptops for software developers.' },
    { id: '2', itemName: 'Office Chairs', quantity: 20, description: 'Ergonomic chairs', detailDescription: 'Ergonomic office chairs with lumbar support, adjustable height and armrests.' },
    { id: '3', itemName: 'Printer Paper', quantity: 50, description: 'A4 printer paper', detailDescription: 'Standard white A4 printer paper, 80gsm, 50 reams.' },
    { id: '4', itemName: 'Projector', quantity: 2, description: 'For meeting room', detailDescription: 'High-resolution projector with HDMI and VGA connectivity, minimum 3000 lumens.' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.itemName}>Item: {item.itemName}</Text>
      <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
      <Text style={styles.description}>Description: {item.description}</Text>
      <TouchableOpacity style={styles.checkButton} onPress={() => handleCheck(item)}>
        <Text style={styles.checkButtonText}>Check</Text>
      </TouchableOpacity>
    </View>
  );

  const handleCheck = (item) => {
    // Implement the action to perform when "Check" is pressed for an item
    console.log('Check button pressed for item:', item.itemName);
    Alert.alert(
      'Check Item',
      `Details for ${item.itemName}:\nQuantity: ${item.quantity}\nDescription: ${item.detailDescription}`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Store Keeper Dashboard</Text>
      <Text style={styles.subtitle}>Purchase Requests</Text>
      <FlatList
        data={purchaseRequests}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  listItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  quantity: {
    fontSize: 16,
    marginBottom: 5,
    color: '#777',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  checkButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start', // Align button to the start of the item
  },
  checkButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StoreKeeper; 