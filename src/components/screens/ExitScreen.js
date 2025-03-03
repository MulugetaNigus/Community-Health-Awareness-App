import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Button, TouchableOpacity, BackHandler, Platform } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

const ExitScreen = () => {
  const { theme } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const handleExit = () => {
    setModalVisible(false);
    if (Platform.OS === 'android') {
      BackHandler.exitApp(); // For Android to exit the app
    } else {
      // For iOS and web (or other platforms where BackHandler.exitApp() is not available)
      console.log('Exit App (iOS/Web simulation)');
      // In a real iOS app, you can't programmatically exit the app like Android.
      // You might navigate to the home screen or perform other actions as appropriate for iOS.
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <TouchableOpacity style={styles.exitButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.exitButtonText}>Exit Application</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCancel} // Handle back button on Android
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { backgroundColor: theme.colors.surface }]}>
            <Text style={[styles.modalText, { color: theme.colors.text }]}>Are you sure you want to exit?</Text>
            <View style={styles.buttonsContainer}>
              <Button
                title="Yes"
                onPress={handleExit}
                color="#dc3545" // Example: red color for Yes/Exit
              />
              <View style={styles.buttonSpacer} />
              <Button
                title="Cancel"
                onPress={handleCancel}
                color="#007bff" // Example: blue color for Cancel
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  exitButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
  },
  exitButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  buttonSpacer: {
    width: 20, // Space between buttons
  },
});

export default ExitScreen; 