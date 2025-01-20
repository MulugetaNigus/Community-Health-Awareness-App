import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import MalariaScreen from '../screens/MalariaScreen';
import TBScreen from '../screens/TBScreen';
import HIVScreen from '../screens/HIVScreen';
import AIAssistanceScreen from '../screens/AIAssistanceScreen';
import SchedulingInfo from '../screens/SchedulingInfo';
import { MaterialIcons } from '@expo/vector-icons';
import SchedulingDetail from '../screens/SchedulingDetail';
import HealthcareProviderDirectory from '../screens/HealthcareProviderDirectory';
import Covid from '../screens/Covid';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    const [theme, setTheme] = useState('light');
    const [modalVisible, setModalVisible] = useState(false);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

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
                    children={(props) => (  
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
        </View>
    );
}

function CustomDrawerContent(props) {

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