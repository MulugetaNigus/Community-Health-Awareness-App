import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Home = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const { colors } = useTheme();
  const { t } = useLanguage();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Add your refresh logic here
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const cards = [
    {
      id: 1,
      title: t('prayerTitle'),
      description: t('prayerDescription'),
      icon: 'book-outline',
      screen: 'Prayer'
    },
    {
      id: 2,
      title: t('eventsTitle'),
      description: t('eventsDescription'),
      icon: 'calendar-outline',
      screen: 'Events'
    },
    {
      id: 3,
      title: t('communityTitle'),
      description: t('communityDescription'),
      icon: 'people-outline',
      screen: 'Community'
    },
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
      <View style={styles.cardsContainer}>
        {cards.map((card) => (
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
        ))}
      </View>
      <View style={{ marginBottom: 16 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cardsContainer: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  cardContent: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    opacity: 0.8,
  },
});

export default Home;