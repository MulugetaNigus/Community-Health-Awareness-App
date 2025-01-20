import React, { useState } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AppProvider } from './context/AppContext';
import DrawerNavigation from './navigation/DrawerNavigation';
import { useColorScheme } from 'react-native';

export default function App() {
  const scheme = useColorScheme();
  
  return (
    <AppProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <DrawerNavigation />
      </NavigationContainer>
    </AppProvider>
  );
}