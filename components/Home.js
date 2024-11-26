import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  const cards = [
    { id: 1, title: 'Prayer', icon: 'pray', description: 'Daily prayers and devotionals', screen: 'Prayer' },
    { id: 2, title: 'Events', icon: 'calendar', description: 'Upcoming church events', screen: 'Events' },
    { id: 3, title: 'Community', icon: 'people', description: 'Connect with our community', screen: 'Community' },
  ];

  return (
    <ScrollView style={styles.container}>
      {cards.map(card => (
        <TouchableOpacity
          key={card.id}
          style={styles.card}
          onPress={() => navigation.navigate(card.screen)}
        >
          <Ionicons name={card.icon} size={24} color="#333" />
          <View style={styles.cardContent}>
            <Text style={styles.title}>{card.title}</Text>
            <Text style={styles.description}>{card.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default Home;