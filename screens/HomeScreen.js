import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AddModal from './AddModal';

const diseases = ["Malaria", "TB", "HIV", "Covid 19"];

export default function HomeScreen({ navigation, openModal, closeModal, modalVisible }) {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Community Health Awareness</Text>

                <AddModal visible={modalVisible} onClose={closeModal} />

                <View style={styles.gridContainer}>
                    {diseases.map((disease, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.gridBox}
                            onPress={() => navigation.navigate(disease)}
                        >
                            <Text style={styles.gridText}>{disease}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <TouchableOpacity
                style={styles.aiIcon}
                onPress={() => navigation.navigate('AIAssistance')}
            >
                <MaterialIcons name="support-agent" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
    },
    title: {
        fontWeight: "800",
        fontSize: 25,
        marginTop: 8,
        marginBottom: 12,
        color: "#4CAF50"
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    gridBox: {
        width: '47%',
        height: 100,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    gridText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    aiIcon: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 50,
        elevation: 10,
    },
});