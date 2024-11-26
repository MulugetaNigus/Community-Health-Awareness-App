import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider, useTheme } from './context/ThemeContext';

import Home from './components/Home';
import PrayerScreen from './screens/PrayerScreen';
import EventsScreen from './screens/EventsScreen';
import CommunityScreen from './screens/CommunityScreen';
import CustomDrawer from './components/CustomDrawer';
import SearchModal from './components/SearchModal';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationContent = () => {
  const { isDarkMode, colors, toggleTheme } = useTheme();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const HeaderRight = () => (
    <View style={{ flexDirection: 'row', marginRight: 10 }}>
      <TouchableOpacity 
        onPress={() => setIsSearchVisible(true)}
        style={{ marginRight: 15 }}
      >
        <Ionicons 
          name="search" 
          size={24} 
          color={colors.text} 
        />
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={toggleTheme}
        style={{ marginRight: 5 }}
      >
        <Ionicons 
          name={isDarkMode ? 'sunny' : 'moon'} 
          size={24} 
          color={colors.text} 
        />
      </TouchableOpacity>
    </View>
  );

  const HomeStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.surface,
        },
        headerTintColor: colors.text,
        headerRight: () => <HeaderRight />,
      }}
    >
      <Stack.Screen 
        name="HomeScreen" 
        component={Home} 
        options={({ navigation }) => ({
          title: 'Church App',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="menu" size={24} color={colors.text} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );

  const PrayerStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.surface,
        },
        headerTintColor: colors.text,
        headerRight: () => <HeaderRight />,
      }}
    >
      <Stack.Screen 
        name="PrayerScreen" 
        component={PrayerScreen}
        options={({ navigation }) => ({
          title: 'Prayer & Devotionals',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="menu" size={24} color={colors.text} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );

  const EventsStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.surface,
        },
        headerTintColor: colors.text,
        headerRight: () => <HeaderRight />,
      }}
    >
      <Stack.Screen 
        name="EventsScreen" 
        component={EventsScreen}
        options={({ navigation }) => ({
          title: 'Church Events',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="menu" size={24} color={colors.text} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );

  const CommunityStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.surface,
        },
        headerTintColor: colors.text,
        headerRight: () => <HeaderRight />,
      }}
    >
      <Stack.Screen 
        name="CommunityScreen" 
        component={CommunityScreen}
        options={({ navigation }) => ({
          title: 'Our Community',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="menu" size={24} color={colors.text} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );

  return (
    <>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: colors.surface,
          },
          drawerLabelStyle: {
            color: colors.text,
          },
          drawerActiveTintColor: colors.primary,
          drawerInactiveTintColor: colors.text,
        }}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeStack}
          options={{
            headerShown: false,
            drawerIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Prayer" 
          component={PrayerStack}
          options={{
            headerShown: false,
            drawerIcon: ({ color }) => (
              <Ionicons name="pray" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Events" 
          component={EventsStack}
          options={{
            headerShown: false,
            drawerIcon: ({ color }) => (
              <Ionicons name="calendar" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Community" 
          component={CommunityStack}
          options={{
            headerShown: false,
            drawerIcon: ({ color }) => (
              <Ionicons name="people" size={24} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
      <SearchModal
        visible={isSearchVisible}
        onClose={() => setIsSearchVisible(false)}
      />
    </>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <NavigationContent />
      </NavigationContainer>
    </ThemeProvider>
  );
}
