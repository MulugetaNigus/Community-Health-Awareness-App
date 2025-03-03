import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image, Button } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import * as ImagePicker from 'expo-image-picker';

const SupplierApplicationForm = () => {
  const { theme } = useTheme();
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [address, setAddress] = useState('');
  const [businessPhoto, setBusinessPhoto] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission Required', 'Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setBusinessPhoto(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    let newErrors = {};
    if (!companyName) newErrors.companyName = 'Company Name is required';
    if (!contactPerson) newErrors.contactPerson = 'Contact Person is required';
    if (!email) newErrors.email = 'Email is required';
    if (!phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
    if (!businessType) newErrors.businessType = 'Business Type is required';
    if (!address) newErrors.address = 'Address is required';
    if (!businessPhoto) newErrors.businessPhoto = 'Business Photo is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed with submission
    console.log('Supplier Application submitted:', { companyName, contactPerson, email, phoneNumber, businessType, address, businessPhoto });
    Alert.alert(
      'Application Submitted',
      'Your application to become a supplier has been submitted successfully.',
      [{ text: 'OK' }]
    );
    // Reset form after submission
    setCompanyName('');
    setContactPerson('');
    setEmail('');
    setPhoneNumber('');
    setBusinessType('');
    setAddress('');
    setBusinessPhoto(null);
    setErrors({});
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Supplier Application Form</Text>
      <Text style={[styles.subtitle, { color: theme.colors.text, marginBottom: 20 }]}>
        Please fill out the form below to apply for supplier registration.
      </Text>

      <View style={styles.formContainer}>
        <TextInput
          style={[styles.input, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, color: theme.colors.text }]}
          placeholder="Company Name"
          placeholderTextColor={theme.isDarkMode ? '#888' : '#666'}
          value={companyName}
          onChangeText={setCompanyName}
        />
        {errors.companyName && <Text style={styles.errorText}>{errors.companyName}</Text>}

        <TextInput
          style={[styles.input, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, color: theme.colors.text }]}
          placeholder="Contact Person"
          placeholderTextColor={theme.isDarkMode ? '#888' : '#666'}
          value={contactPerson}
          onChangeText={setContactPerson}
        />
        {errors.contactPerson && <Text style={styles.errorText}>{errors.contactPerson}</Text>}

        <TextInput
          style={[styles.input, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, color: theme.colors.text }]}
          placeholder="Email"
          placeholderTextColor={theme.isDarkMode ? '#888' : '#666'}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <TextInput
          style={[styles.input, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, color: theme.colors.text }]}
          placeholder="Phone Number"
          placeholderTextColor={theme.isDarkMode ? '#888' : '#666'}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}

        <TextInput
          style={[styles.input, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, color: theme.colors.text }]}
          placeholder="Business Type"
          placeholderTextColor={theme.isDarkMode ? '#888' : '#666'}
          value={businessType}
          onChangeText={setBusinessType}
        />
        {errors.businessType && <Text style={styles.errorText}>{errors.businessType}</Text>}

        <TextInput
          style={[styles.input, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, color: theme.colors.text }]}
          placeholder="Address"
          placeholderTextColor={theme.isDarkMode ? '#888' : '#666'}
          value={address}
          onChangeText={setAddress}
          multiline
          numberOfLines={3}
        />
        {errors.address && <Text style={styles.errorText}>{errors.address}</Text>}

        <View style={styles.imagePickerContainer}>
          <Button title="Pick Business Photo" onPress={pickImage} />
          {businessPhoto && <Image source={{ uri: businessPhoto }} style={styles.businessPhoto} />}
          {errors.businessPhoto && <Text style={styles.errorText}>{errors.businessPhoto}</Text>}
        </View>

        <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Application</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  imagePickerContainer: {
    marginBottom: 15,
    alignItems: 'center',
  },
  businessPhoto: {
    width: 200,
    height: 150,
    marginTop: 10,
    borderRadius: 8,
  },
});

export default SupplierApplicationForm; 