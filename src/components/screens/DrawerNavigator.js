import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Home from '../screens/Home';

import Supplier from '../screens/Supplier';

import DepHead from '../screens/DepHead';

import StoreKeeper from '../screens/StoreKeeper';

import PurchasingTeam from '../screens/PurchasingTeam';

import Login from '../auth/Login';

import { useTheme } from '../../context/ThemeContext';

import { Ionicons } from '@expo/vector-icons';



const Drawer = createDrawerNavigator();



const CustomDrawerContent = (props) => {

  const { theme } = useTheme();



  return (

    <View style={[styles.drawerContainer, { backgroundColor: theme.colors.background }]}>

      <View style={[styles.drawerHeader, { backgroundColor: theme.colors.surface }]}>

        <Image

          source={require('../../../assets/logo.png')}

          style={styles.drawerBanner}

          resizeMode="cover"

        />

      </View>



      <DrawerContentScrollView {...props}>

        <DrawerItemList {...props} />

      </DrawerContentScrollView>



      <View style={[styles.drawerFooter, { borderTopColor: theme.colors.border }]}>

        <Text style={[styles.footerText, { color: theme.colors.text }]}>

          © 2024 Procurement System

        </Text>

        <Text style={[styles.footerText, { color: theme.colors.text }]}>

          All rights reserved

        </Text>

      </View>

    </View>

  );

};



const DrawerNavigator = () => {

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const { theme, toggleTheme } = useTheme();



  const handleDrawerItemPress = (navigation) => {

    if (!isAuthenticated) {

      navigation.navigate('Login');

    }

  };



  return (

    <Drawer.Navigator

      drawerContent={(props) => <CustomDrawerContent {...props} />}

      screenOptions={{

        drawerStyle: {

          backgroundColor: theme.colors.background,

        },

        drawerActiveTintColor: theme.colors.primary,

        drawerInactiveTintColor: theme.colors.text,

        headerStyle: {

          backgroundColor: theme.colors.surface,

        },

        headerTintColor: theme.colors.text,

      }}

    >

      <Drawer.Screen

        name="Home"

        component={Home}

        options={{

          headerTitle: () => (

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: theme.colors.text }}>Home</Text>

              <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity onPress={toggleTheme} style={{ marginLeft: 10 }}>

                  <Ionicons

                    name={theme.isDarkMode ? 'sunny' : 'moon-outline'}

                    size={24}

                    color={theme.colors.icon}

                  />

                </TouchableOpacity>

              </View>

            </View>

          ),

        }}

      />

      <Drawer.Screen

        name="Supplier"

        component={isAuthenticated ? Supplier : Login}

        listeners={({ navigation }) => ({

          drawerItemPress: () => handleDrawerItemPress(navigation),

        })}

      />

      <Drawer.Screen

        name="Department Head"

        // component={isAuthenticated ? DepHead : Login}
        component={DepHead}

        listeners={({ navigation }) => ({

          drawerItemPress: () => handleDrawerItemPress(navigation),

        })}

      />

      <Drawer.Screen

        name="Store Keeper"

        component={isAuthenticated ? StoreKeeper : Login}

        listeners={({ navigation }) => ({

          drawerItemPress: () => handleDrawerItemPress(navigation),

        })}

      />

      <Drawer.Screen

        name="Purchasing Team"

        component={isAuthenticated ? PurchasingTeam : Login}

        listeners={({ navigation }) => ({

          drawerItemPress: () => handleDrawerItemPress(navigation),

        })}

      />

    </Drawer.Navigator>

  );

};



const styles = StyleSheet.create({

  drawerContainer: {

    flex: 1,

  },

  drawerHeader: {

    height: 170,

    backgroundColor: '#f5f5f5',

  },

  drawerBanner: {

    width: '100%',

    height: '100%',

  },

  drawerFooter: {

    padding: 20,

    borderTopWidth: 1,

    borderTopColor: '#ccc',

  },

  footerText: {

    fontSize: 12,

    color: '#666',

    textAlign: 'center',

  },

});



export default DrawerNavigator; 
