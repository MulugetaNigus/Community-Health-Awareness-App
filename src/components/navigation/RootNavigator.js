import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SplashScreen from '../screens/SplashScreen';
import DrawerNavigator from './DrawerNavigator';
import Login from '../auth/Login';
import Register from '../auth/Register';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import AuthScreen from '../auth/AuthScreen';
import SuccessPage from '../auth/SuccessPage';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, loading } = useAuth();

  // If still loading auth state, show splash screen
  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator
      initialRouteName={isAuthenticated ? 'SuccessPage' : 'Auth'}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: theme.colors.surface,
        },
        headerTintColor: theme.colors.text,
        headerTitleAlign: 'left',
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen
        name="Main"
        component={DrawerNavigator}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
          title: 'Login',
          headerStyle: {
            backgroundColor: theme.colors.surface,
          },
          headerTintColor: theme.colors.text,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: true,
          title: 'Register',
          headerStyle: {
            backgroundColor: theme.colors.surface,
          },
          headerTintColor: theme.colors.text,
        }}
      />
      {/* New Auth Screen */}
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* Success Page */}
      <Stack.Screen
        name="SuccessPage"
        component={SuccessPage}
        options={{
          headerShown: true,
          title: 'Authentication Success',
          headerStyle: {
            backgroundColor: theme.colors.surface,
          },
          headerTintColor: theme.colors.text,
          // Prevent going back to auth screen after successful login
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  themeToggle: {
    marginRight: 8,
  },
  headerTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RootNavigator; 