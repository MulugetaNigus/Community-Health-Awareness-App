// SchedulingInfo.js  
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert, TouchableOpacity, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SchedulingInfo = () => {
    const navigation = useNavigation();
    const [schedules, setSchedules] = useState([]);
    const [refreshing, setRefreshing] = useState(false);  

    useEffect(() => {
        fetchSchedules();
    }, []);

    const fetchSchedules = async () => {
        try {
            setRefreshing(true);  
            const jsonValue = await AsyncStorage.getItem('schedules');
            const storedSchedules = jsonValue != null ? JSON.parse(jsonValue) : [];
            console.log(storedSchedules);
            setSchedules(storedSchedules);
        } catch (e) {
            console.error(e);
        } finally {
            setRefreshing(false);
        }
    };

    const deleteSchedule = async (index) => {
        const updatedSchedules = schedules.filter((_, i) => i !== index);
        await AsyncStorage.setItem('schedules', JSON.stringify(updatedSchedules));
        setSchedules(updatedSchedules);
    };

    const confirmDelete = (index) => {
        Alert.alert(
            "Delete Schedule",
            "Are you sure you want to delete this schedule?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "OK", onPress: () => deleteSchedule(index) },
            ]
        );
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('SchedulingDetail', { schedule: item })}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.delBtn} onPress={() => confirmDelete(index)}>
                <Text style={styles.BtnDel}>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Scheduled Appointments</Text>
            <FlatList
                data={schedules}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}   
                        onRefresh={fetchSchedules}  
                    />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    itemContainer: {
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 14,
        marginVertical: 5,
    },
    itemDate: {
        fontSize: 12,
        color: 'gray',
    },
    delBtn: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
        marginTop: 12
    },
    BtnDel: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    }
});

export default SchedulingInfo;