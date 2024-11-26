import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

const Home = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const { colors } = useTheme();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Add your refresh logic here
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const cards = [
    { id: 1, title: 'Prayer', icon: 'pray', description: 'Daily prayers and devotionals', screen: 'Prayer' },
    { id: 2, title: 'Events', icon: 'calendar', description: 'Upcoming church events', screen: 'Events' },
    { id: 3, title: 'Community', icon: 'people', description: 'Connect with our community', screen: 'Community' },
  ];

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={colors.text}
        />
      }
    >
      {cards.map(card => (
        <>

        <TouchableOpacity
          key={card.id}
          style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}
          onPress={() => navigation.navigate(card.screen)}
        >
          <Ionicons name={card.icon} size={24} color={colors.primary} />
          <View style={styles.cardContent}>
            <Text style={[styles.title, { color: colors.text }]}>{card.title}</Text>
            <Text style={[styles.description, { color: colors.text }]}>{card.description}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          key={card.id+1}
          style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}
          onPress={() => navigation.navigate(card.screen)}
        >
          <Ionicons name={card.icon} size={24} color={colors.primary} />
          <View style={styles.cardContent}>
            <Text style={[styles.title, { color: colors.text }]}>{card.title}</Text>
            <Text style={[styles.description, { color: colors.text }]}>{card.description}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          key={card.id+10}
          style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}
          onPress={() => navigation.navigate(card.screen)}
        >
          <Ionicons name={card.icon} size={24} color={colors.primary} />
          <View style={styles.cardContent}>
            <Text style={[styles.title, { color: colors.text }]}>{card.title}</Text>
            <Text style={[styles.description, { color: colors.text }]}>{card.description}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          key={card.id+100}
          style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}
          onPress={() => navigation.navigate(card.screen)}
        >
          <Ionicons name={card.icon} size={24} color={colors.primary} />
          <View style={styles.cardContent}>
            <Text style={[styles.title, { color: colors.text }]}>{card.title}</Text>
            <Text style={[styles.description, { color: colors.text }]}>{card.description}</Text>
          </View>
        </TouchableOpacity>

        {/* i just want to add the bottom space here */}
        <View style={{ marginBottom: 16 }} />

        </>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
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
    opacity: 0.8,
  },
});

export default Home;