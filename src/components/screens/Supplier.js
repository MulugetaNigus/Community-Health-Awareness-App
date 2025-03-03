import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

const Supplier = () => {

  const { theme } = useTheme();
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility


  const handleLogin = () => {
    // Check for hardcoded credentials "1234" for both username and password
    if (username === '1234' && password === '1234') {
      // Successful login - navigate to Main (DrawerNavigator for now)
      console.log('Login Successful');
      navigation.navigate('Department Head'); // Navigate to 'Main' which is your DrawerNavigator
    } else {
      // Incorrect credentials - show an alert
      Alert.alert(
        'Login Failed',
        'Incorrect username or password. Please use "1234" for both.',
        [{ text: 'OK' }]
      );
      console.log('Login Failed');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  return (
    <>
      <View style={{ height: "80%" }}>

        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={[styles.title, { color: theme.colors.text }]}>Login</Text>
          <TextInput
            style={[styles.input, {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
              color: theme.colors.text
            }]}
            placeholder="Username"
            placeholderTextColor={theme.isDarkMode ? '#888' : '#666'}
            value={username}
            onChangeText={setUsername}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.passwordInput, {
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
                color: theme.colors.text
              }]}
              placeholder="Password"
              placeholderTextColor={theme.isDarkMode ? '#888' : '#666'}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!passwordVisible} // Toggle secureTextEntry based on state
            />
            <TouchableOpacity style={styles.eyeIconContainer} onPress={togglePasswordVisibility}>
              <Ionicons
                name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
                size={24}
                color={theme.colors.icon}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.colors.primary }]}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <TouchableOpacity
          style={[styles.applyButton, { backgroundColor: theme.colors.primary }]}
          onPress={() => navigation.navigate('SupplierApplicationForm')}
        >
          <Text style={styles.applyButtonText}>Apply to Become a Supplier</Text>
        </TouchableOpacity>
      </View>
    </>
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
  applyButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // for login page styles
  logo: {
    width: 300,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  passwordContainer: {
    flexDirection: 'row', // To align TextInput and Icon horizontally
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1, // Take up most of the space
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  eyeIconContainer: {
    padding: 10, // Add some padding for touch area
    marginLeft: -45, // Adjust position to overlay on TextInput
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#007AFF',
    marginTop: 15,
  },

});

export default Supplier; 