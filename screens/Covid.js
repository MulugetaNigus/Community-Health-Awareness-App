import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Covid() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Covid 19</Text>
                <Text style={styles.description}>
                    COVID-19, also known as the Coronavirus Disease 2019, is a highly contagious viral infection caused by the Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-CoV-2). It emerged in Wuhan, China in late 2019 and rapidly spread across the globe, leading to a pandemic declared by the World Health Organization (WHO) in March 2020.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'start',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        textAlign: 'start',
        color: '#555',
    },
});