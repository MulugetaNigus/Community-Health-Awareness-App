<<<<<<< HEAD
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './src/components/navigation/RootNavigator';
import { ThemeProvider } from './src/context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
=======
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
>>>>>>> a121d5bf02bb724f4f35a68dff06acd0f5163203
