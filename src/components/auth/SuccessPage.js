import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const SuccessPage = () => {
  const { theme } = useTheme();
  const { user, logout } = useAuth();
  const navigation = useNavigation();

  // Handle logout
  const handleLogout = async () => {
    await logout();
    navigation.navigate('Auth');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        {/* Success Icon */}
        <View style={[styles.iconContainer, { backgroundColor: theme.colors.primary + '20' }]}>
          <Ionicons name="checkmark-circle" size={80} color={theme.colors.primary} />
        </View>

        {/* Welcome Message */}
        <Text style={[styles.welcomeText, { color: theme.colors.text }]}>
          Welcome, {user?.name || 'User'}!
        </Text>

        {/* User Info */}
        <View style={styles.userInfoContainer}>
          {user?.picture ? (
            <Image source={{ uri: user.picture }} style={styles.profilePicture} />
          ) : (
            <View style={[styles.profileInitial, { backgroundColor: theme.colors.primary }]}>
              <Text style={styles.initialText}>
                {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </Text>
            </View>
          )}

          <View style={styles.userDetails}>
            <Text style={[styles.userEmail, { color: theme.colors.text }]}>
              {user?.email || 'No email provided'}
            </Text>
            <Text style={[styles.userProvider, { color: theme.colors.text + '80' }]}>
              Signed in with {user?.provider || 'email'}
            </Text>
          </View>
        </View>

        {/* Divider */}
        <View style={[styles.divider, { backgroundColor: theme.colors.border }]} />

        {/* Success Message */}
        <Text style={[styles.successMessage, { color: theme.colors.text }]}>
          You have successfully authenticated!
        </Text>

        {/* Logout Button */}
        <TouchableOpacity
          style={[styles.logoutButton, { backgroundColor: theme.colors.primary }]}
          onPress={handleLogout}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
    paddingHorizontal: 20,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileInitial: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  initialText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  userDetails: {
    flex: 1,
  },
  userEmail: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  userProvider: {
    fontSize: 14,
  },
  divider: {
    height: 1,
    width: '80%',
    marginBottom: 30,
  },
  successMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  logoutButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SuccessPage; 