import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Animated,
  Keyboard,
  ActivityIndicator,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

// Simulated data
const DUMMY_DATA = [
  { id: '1', title: 'Sunday Service', type: 'event' },
  { id: '2', title: 'Morning Prayer', type: 'prayer' },
  { id: '3', title: 'Bible Study Group', type: 'community' },
  { id: '4', title: 'Youth Meeting', type: 'event' },
  { id: '5', title: 'Evening Prayer', type: 'prayer' },
  { id: '6', title: 'Worship Team', type: 'community' },
  { id: '7', title: 'Christmas Service', type: 'event' },
  { id: '8', title: 'Meditation Session', type: 'prayer' },
];

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const SearchModal = ({ visible, onClose, navigation }) => {
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const overlayOpacity = new Animated.Value(0);
  const modalTranslateY = new Animated.Value(SCREEN_HEIGHT);

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(overlayOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(modalTranslateY, {
          toValue: 0,
          tension: 65,
          friction: 11,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(overlayOpacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(modalTranslateY, {
          toValue: SCREEN_HEIGHT,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
      setSearchQuery('');
      setSearchResults([]);
    }
  }, [visible]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const filteredResults = DUMMY_DATA.filter(item =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setSearchResults(filteredResults);
      setIsLoading(false);
    }, 1000);
  };

  const handleResultPress = (item) => {
    onClose();
    // Navigate based on item type
    switch (item.type) {
      case 'event':
        navigation.navigate('Events');
        break;
      case 'prayer':
        navigation.navigate('Prayer');
        break;
      case 'community':
        navigation.navigate('Community');
        break;
    }
  };

  const renderItem = ({ item }) => {
    const itemColor = {
      event: colors.primary,
      prayer: '#4CAF50',
      community: '#2196F3',
    };

    return (
      <Animated.View style={[styles.resultItem, { 
        backgroundColor: colors.surface,
        opacity: overlayOpacity,
      }]}>
        <TouchableOpacity 
          style={styles.resultContent}
          onPress={() => handleResultPress(item)}
        >
          <View style={[styles.typeIndicator, { backgroundColor: itemColor[item.type] }]} />
          <View style={styles.resultTextContainer}>
            <Text style={[styles.resultTitle, { color: colors.text }]}>{item.title}</Text>
            <Text style={[styles.resultType, { color: colors.text + '80' }]}>
              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.text} />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  if (!visible) return null;

  return (
    <TouchableWithoutFeedback onPress={onClose}>
      <View style={styles.container}>
        <Animated.View 
          style={[
            styles.overlay,
            { 
              backgroundColor: colors.background,
              opacity: overlayOpacity,
            }
          ]} 
        />
        <TouchableWithoutFeedback>
          <Animated.View 
            style={[
              styles.modalContent,
              {
                backgroundColor: colors.background,
                transform: [{ translateY: modalTranslateY }],
              }
            ]}
          >
            <View style={[styles.searchContainer, { backgroundColor: colors.surface }]}>
              <TextInput
                style={[styles.searchInput, { 
                  backgroundColor: colors.background,
                  color: colors.text,
                }]}
                placeholder="Search..."
                placeholderTextColor={colors.text + '80'}
                value={searchQuery}
                onChangeText={handleSearch}
                autoFocus
              />
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Ionicons name="close" size={24} color={colors.text} />
              </TouchableOpacity>
            </View>

            {isLoading ? (
              <ActivityIndicator 
                style={styles.loader} 
                size="large" 
                color={colors.primary} 
              />
            ) : (
              <FlatList
                data={searchResults}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.resultsList}
                keyboardShouldPersistTaps="handled"
              />
            )}
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.97,
  },
  modalContent: {
    width: '100%',
    height: '100%',
    paddingTop: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  closeButton: {
    padding: 5,
  },
  resultsList: {
    padding: 15,
  },
  resultItem: {
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  resultContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  typeIndicator: {
    width: 4,
    height: '100%',
    borderRadius: 2,
    marginRight: 12,
  },
  resultTextContainer: {
    flex: 1,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  resultType: {
    fontSize: 12,
  },
  loader: {
    marginTop: 50,
  },
});

export default SearchModal;
