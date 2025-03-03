import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker for date filter
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for icons

const AdvertisementsScreen = () => {
  const { theme } = useTheme();
  const [filterTitle, setFilterTitle] = useState('');
  const [filterDate, setFilterDate] = useState(null); // Date filter state
  const [showDatePicker, setShowDatePicker] = useState(false); // State to control DatePicker visibility
  const [filterAmount, setFilterAmount] = useState('');

  // Mock advertisement data
  const advertisementsData = [
    { id: '1', title: 'Summer Sale', date: '2024-07-15', amount: 500, imageUrl: 'https://via.placeholder.com/150', description: 'Huge discounts on summer items!' },
    { id: '2', title: 'New Arrivals', date: '2024-08-01', amount: 250, imageUrl: 'https://via.placeholder.com/150', description: 'Check out our latest products.' },
    { id: '3', title: 'Clearance Event', date: '2024-06-20', amount: 1000, imageUrl: 'https://via.placeholder.com/150', description: 'Last chance items at reduced prices.' },
    { id: '4', title: 'Back to School', date: '2024-08-15', amount: 750, imageUrl: 'https://via.placeholder.com/150', description: 'Get ready for school with our deals.' },
    // ... more ads
  ];

  const filteredAdvertisements = advertisementsData.filter(ad => {
    const titleMatch = ad.title.toLowerCase().includes(filterTitle.toLowerCase());
    const dateMatch = filterDate ? new Date(ad.date) <= filterDate : true; // Filter by date less than or equal to selected date
    const amountMatch = filterAmount ? ad.amount <= parseFloat(filterAmount) : true; // Filter by amount less than or equal to selected amount

    return titleMatch && dateMatch && amountMatch;
  });

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowDatePicker(Platform.OS === 'ios'); // For iOS, keep showing until 'Done' is pressed
    setFilterDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };


  const renderAdvertisementCard = (ad) => (
    <View key={ad.id} style={[styles.card, { backgroundColor: theme.colors.surface }]}>
      <Image source={{ uri: ad.imageUrl }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={[styles.cardTitle, { color: theme.colors.text }]}>{ad.title}</Text>
        <Text style={[styles.cardDetail, { color: theme.colors.text }]}>Date: {ad.date}</Text>
        <Text style={[styles.cardDetail, { color: theme.colors.text }]}>Amount: ${ad.amount}</Text>
        <Text style={[styles.cardDescription, { color: theme.colors.text }]}>{ad.description}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Header with Logo */}
      <View style={styles.header}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Organization Advertisements</Text>
      </View>

      {/* Filter Section */}
      <View style={styles.filterSection}>
        <TextInput
          style={[styles.filterInput, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, color: theme.colors.text }]}
          placeholder="Filter by Title"
          placeholderTextColor={theme.isDarkMode ? '#888' : '#666'}
          value={filterTitle}
          onChangeText={setFilterTitle}
        />

        <TouchableOpacity onPress={showDatepicker} style={[styles.datePickerButton, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border }]}>
          <Text style={[styles.datePickerText, { color: theme.colors.text }]}>
            {filterDate ? filterDate.toLocaleDateString() : 'Filter by Date'}
          </Text>
          <Ionicons name="calendar-outline" size={20} color={theme.colors.text} style={styles.datePickerIcon} />
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={filterDate || new Date()}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChangeDate}
          />
        )}

        <TextInput
          style={[styles.filterInput, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, color: theme.colors.text }]}
          placeholder="Filter by Amount (Max)"
          placeholderTextColor={theme.isDarkMode ? '#888' : '#666'}
          value={filterAmount}
          onChangeText={setFilterAmount}
          keyboardType="number-pad"
        />
        {/* Add more advanced filters here if needed */}
      </View>

      {/* Advertisements Listing */}
      <View style={styles.advertisementsList}>
        {filteredAdvertisements.map(renderAdvertisementCard)}
        {filteredAdvertisements.length === 0 && (
          <Text style={[styles.noItemsText, { color: theme.colors.text }]}>No advertisements match your filters.</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 100,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  filterSection: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  filterInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  datePickerButton: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  datePickerText: {
    flex: 1,
  },
  datePickerIcon: {
    marginLeft: 10,
  },
  advertisementsList: {
    paddingHorizontal: 10,
  },
  card: {
    marginBottom: 15,
    borderRadius: 8,
    overflow: 'hidden', // Ensure image corners are rounded
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardImage: {
    width: '100%',
    height: 150, // Fixed height for card images
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDetail: {
    fontSize: 14,
    color: '#777',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 16,
    marginTop: 8,
  },
  noItemsText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default AdvertisementsScreen; 