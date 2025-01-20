import React, { useState } from 'react';
import { useColorScheme, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import MalariaScreen from '../screens/MalariaScreen';
import TBScreen from '../screens/TBScreen';
import HIVScreen from '../screens/HIVScreen';
import AIAssistanceScreen from '../screens/AIAssistanceScreen';
import DirectoryScreen from '../screens/DirectoryScreen';
import SchedulingInfo from '../screens/SchedulingInfo';
import AddModal from '../screens/AddModal'; // Make sure to adjust the path accordingly  
import { MaterialIcons } from '@expo/vector-icons';
import SchedulingDetail from '../screens/SchedulingDetail';
import { NavigationContainer } from '@react-navigation/native';  
import { createStackNavigator } from '@react-navigation/stack';  
import HealthcareProviderDirectory from '../screens/HealthcareProviderDirectory';
import Covid from '../screens/Covid';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function DrawerNavigation() {
    const [theme, setTheme] = useState('light');
    const [modalVisible, setModalVisible] = useState(false);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Function to handle opening and closing the modal  
    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    return (
        <View style={{ flex: 1 }}>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerContent={(props) => <CustomDrawerContent {...props} toggleTheme={toggleTheme} theme={theme} />}
            >
                <Drawer.Screen
                    name="Home"
                    children={(props) => (  // Pass the functions to HomeScreen  
                        <HomeScreen {...props}
                            openModal={openModal}
                            closeModal={closeModal}
                            modalVisible={modalVisible}
                        />
                    )}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity onPress={openModal} style={styles.themeToggleButton}>
                                <MaterialIcons name={'add'} size={28} color={"black"} />
                            </TouchableOpacity>
                        ),
                    }}
                />
                <Drawer.Screen name="Malaria" component={MalariaScreen} />
                <Drawer.Screen name="Covid 19" component={Covid} />
                <Drawer.Screen name="TB" component={TBScreen} />
                <Drawer.Screen name="HIV" component={HIVScreen} />
                <Drawer.Screen name="My Schedule" component={SchedulingInfo} />
                <Drawer.Screen name="Directory" component={HealthcareProviderDirectory} />
                <Drawer.Screen name="AIAssistance" component={AIAssistanceScreen} />
                <Drawer.Screen name="SchedulingDetail" component={SchedulingDetail} />
            </Drawer.Navigator>
            {/* <AddModal visible={modalVisible} onClose={closeModal} /> */}
        </View>
    );
}

function CustomDrawerContent(props) {
    const { toggleTheme } = props;

    return (
        <View style={{ flex: 1 }}>
            <Image
                source={require('../assets/banner.png')}
                style={styles.banner}
            />
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    banner: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    themeToggleButton: {
        padding: 10,
    },
});