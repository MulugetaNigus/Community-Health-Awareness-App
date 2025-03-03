import React, { useState } from 'react';  
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';  
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddModal = ({ visible, onClose }) => {  
    const [title, setTitle] = useState('');  
    const [description, setDescription] = useState('');  
    const [date, setDate] = useState(new Date());  
    const [showPicker, setShowPicker] = useState(false);  

    const handleSubmit = async () => {  
        const newSchedule = { title, description };   
    
        // Fetch existing schedules from AsyncStorage  
        const existingSchedules = JSON.parse(await AsyncStorage.getItem('schedules')) || [];   
    
        // Add new schedule to existing schedules  
        const updatedSchedules = [...existingSchedules, newSchedule];  
        
        // Save updated schedules to AsyncStorage  
        await AsyncStorage.setItem('schedules', JSON.stringify(updatedSchedules));  
    
        // Clear fields and close modal after submission  
        setTitle('');  
        setDescription('');  
        setDate(new Date());  
        onClose();  
    }; 

    const onChange = (event, selectedDate) => {  
        const currentDate = selectedDate || date;  
        setShowPicker(false);  
        setDate(currentDate);  
    };  

    return (  
        <Modal  
            transparent={true}  
            animationType="slide"  
            visible={visible}  
            onRequestClose={onClose}  
        >  
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  
                <View style={styles.overlay}>  
                    <View style={styles.modalContent}>  
                        <Text style={styles.modalTitle}>Schedule Appointment</Text>  
                        <TextInput  
                            style={styles.input}  
                            placeholder="Enter Title"  
                            value={title}  
                            onChangeText={setTitle}  
                        />  
                        <TextInput  
                            style={[styles.input, styles.descriptionInput]}  // Increased height for description  
                            placeholder="Enter Description"  
                            value={description}  
                            onChangeText={setDescription}  
                            multiline={true} 
                            numberOfLines={5}  
                        />  
                        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>  
                            <Text style={styles.submitButtonText}>Submit</Text>  
                        </TouchableOpacity>  
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>  
                            <Text style={styles.closeButtonText}>Close</Text>  
                        </TouchableOpacity>  
                    </View>  
                </View>  
            </TouchableWithoutFeedback>  
        </Modal>  
    );  
};  

const styles = StyleSheet.create({  
    overlay: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: 'rgba(0, 0, 0, 0.7)',  
    },  
    modalContent: {  
        width: '80%',  
        padding: 20,  
        backgroundColor: 'white',  
        borderRadius: 10,  
        alignItems: 'start',  
        elevation: 5,  
    },  
    modalTitle: {  
        fontSize: 20,  
        marginBottom: 15,  
        fontWeight: 'bold',  
    },  
    input: {  
        width: '100%',  
        padding: 10,  
        marginVertical: 5,  
        borderWidth: 1,  
        borderColor: '#ccc',  
        borderRadius: 5,  
        backgroundColor: '#f9f9f9',  
    },  
    descriptionInput: {  
        height: 100,  
    },  
    submitButton: {  
        marginTop: 15,  
        padding: 10,  
        backgroundColor: '#4CAF50',  
        borderRadius: 5,  
        width: '100%',  
    },  
    submitButtonText: {  
        color: 'white',  
        textAlign: 'center',  
        fontWeight: 'bold',  
    },  
    closeButton: {  
        marginTop: 10,  
        padding: 10,  
        backgroundColor: '#ccc',  
        borderRadius: 5,  
        width: '100%',  
    },  
    closeButtonText: {  
        color: 'black',  
        textAlign: 'center',  
    },  
});  

export default AddModal;