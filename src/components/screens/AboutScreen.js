import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

const AboutScreen = () => {
  const { theme } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={[styles.title, { color: theme.colors.text }]}>About Procurement System</Text>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Our Mission</Text>
        <Text style={[styles.sectionText, { color: theme.colors.text }]}>
          To streamline and optimize the procurement process, ensuring efficiency, transparency, and cost-effectiveness for our organization.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Our Vision</Text>
        <Text style={[styles.sectionText, { color: theme.colors.text }]}>
          To be a leading procurement management system, empowering organizations to make informed purchasing decisions and achieve operational excellence.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Developed By</Text>
        <Text style={[styles.sectionText, { color: theme.colors.text }]}>
          [Your Name/Team Name]
        </Text>
        <Text style={[styles.sectionText, { color: theme.colors.text }]}>
          [Your Organization/Institution]
        </Text>
        <Text style={[styles.sectionText, { color: theme.colors.text }]}>
          Version 1.0.0
        </Text>
      </View>

      {/* Add more about sections as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f0f0f0', // Light background for sections
    borderRadius: 8,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
  },
});

export default AboutScreen; 