import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

const HelpScreen = () => {
  const { theme } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Help & Support</Text>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Frequently Asked Questions (FAQ)</Text>
        <Text style={[styles.sectionText, { color: theme.colors.text }]}>
          Q: How do I submit a purchase request?
        </Text>
        <Text style={[styles.sectionAnswer, { color: theme.colors.text }]}>
          A: Navigate to the Department Head screen from the drawer menu and fill out the Purchase Request Form.
        </Text>

        <Text style={[styles.sectionText, { color: theme.colors.text }]}>
          Q: How do I check the status of my request?
        </Text>
        <Text style={[styles.sectionAnswer, { color: theme.colors.text }]}>
          A: Currently, request status tracking is under development. Please check with the relevant department head for updates.
        </Text>

        {/* Add more FAQs as needed */}
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Contact Support</Text>
        <Text style={[styles.sectionText, { color: theme.colors.text }]}>
          For further assistance, please contact our support team at:
        </Text>
        <Text style={[styles.contactInfo, { color: theme.colors.primary }]}>
          support@procurementsystem.com
        </Text>
        <Text style={[styles.contactInfo, { color: theme.colors.primary }]}>
          0900000000
        </Text>
      </View>

      {/* Add more help sections as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 5,
  },
  sectionAnswer: {
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 10,
    fontStyle: 'italic',
  },
  contactInfo: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default HelpScreen; 