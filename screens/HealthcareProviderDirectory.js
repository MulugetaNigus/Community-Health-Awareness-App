import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const providers = [
    { id: '1', name: 'Woldia City Hospital', address: 'Woldia, adago' },
    { id: '2', name: 'Woldia University Clinic', address: 'Woldia University Clinic' },
    { id: '3', name: 'Woldia Adago Clinic', address: 'Woldia Adago Clinic' },
];

const HealthcareProviderDirectory = () => {
    const openMap = (address) => {
        const url = `https://www.google.com/maps/dir/?api=${process.env.your_google_api_key}&origin=My+Location&destination=${encodeURIComponent(address)}`;
        Linking.openURL(url).catch((err) => console.error('Error opening map:', err));
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => openMap(item.address)}>
            <Text style={styles.providerName}>{item.name}</Text>
            <Text style={styles.providerAddress}>{item.address}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Healthcare Provider Directory</Text>
            <FlatList
                data={providers}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    itemContainer: {
        marginBottom: 15,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
    },
    providerName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    providerAddress: {
        fontSize: 14,
        color: 'gray',
    },
});

export default HealthcareProviderDirectory;
