import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useTheme } from '../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawer = props => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: colors.surface }}
      >
        <View style={[styles.bannerContainer, { backgroundColor: colors.primary }]}>
          <View style={styles.iconContainer}>
            <Ionicons name="church" size={50} color="white" />
          </View>
          <Text style={styles.bannerText}>Ethiopian Orthodox Church</Text>
        </View>
        <View style={[styles.drawerListWrapper, { backgroundColor: colors.background }]}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={[styles.footer, { backgroundColor: colors.surface, borderTopColor: colors.border }]}>
        <Text style={[styles.footerText, { color: colors.text }]}>
          Developed By Mereja Kfl
        </Text>
        <Text style={[styles.footerYear, { color: colors.text }]}>
          2024
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    padding: 20,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  bannerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  drawerListWrapper: {
    flex: 1,
    paddingTop: 10,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footerYear: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default CustomDrawer;
