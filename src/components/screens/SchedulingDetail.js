// SchedulingDetail.js  
import React from 'react';  
import { View, Text, StyleSheet } from 'react-native';  

const SchedulingDetail = ({ route }) => {  
    const { schedule } = route.params;  

    return (  
        <View style={styles.container}>  
            <Text style={styles.title}>{schedule?.title}</Text>  
            <Text style={styles.description}>{schedule?.description}</Text>  
        </View>  
    );  
};  

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        padding: 20,  
        backgroundColor: '#ffffff',  
    },  
    title: {  
        fontSize: 24,  
        fontWeight: 'bold',  
        marginBottom: 10,  
    },  
    description: {  
        fontSize: 16,  
        marginBottom: 10,  
    },  
    date: {  
        fontSize: 14,  
        color: 'gray',  
    },  
});  

export default SchedulingDetail;