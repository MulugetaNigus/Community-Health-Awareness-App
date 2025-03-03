import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DepHead = () => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [errors, setErrors] = useState({});

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleSubmit = () => {
    let newErrors = {};
    if (!itemName) {
      newErrors.itemName = 'Item Name is required';
    }
    if (!quantity) {
      newErrors.quantity = 'Quantity is required';
    } else if (isNaN(quantity)) {
      newErrors.quantity = 'Quantity must be a number';
    }
    if (!description) {
      newErrors.description = 'Description is required';
    }
    if (!date) {
      newErrors.date = 'Date is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formattedDate = date.toLocaleDateString();
    console.log('Purchase Request submitted:', { itemName, quantity, description, date: formattedDate });
    Alert.alert(
      'Purchase Request Submitted',
      `Item Name: ${itemName}\nQuantity: ${quantity}\nDescription: ${description}\nDate: ${formattedDate}`
    );
    setItemName('');
    setQuantity('');
    setDescription('');
    setDate(new Date());
    setErrors({});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Purchase Request Form</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Item Name"
          value={itemName}
          onChangeText={setItemName}
        />
        {errors.itemName && <Text style={styles.errorText}>{errors.itemName}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Quantity"
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="number-pad"
        />
        {errors.quantity && <Text style={styles.errorText}>{errors.quantity}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={3}
        />
        {errors.description && <Text style={styles.errorText}>{errors.description}</Text>}

        <TouchableOpacity onPress={showDatepicker} style={styles.datePickerButton}>
          <Text style={styles.datePickerText}>
            {date ? date.toLocaleDateString() : 'Select Date'}
          </Text>
        </TouchableOpacity>
        {errors.date && <Text style={styles.errorText}>{errors.date}</Text>}

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChangeDate}
          />
        )}

        <Button title="Submit Request" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  datePickerButton: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
  },
  datePickerText: {
    marginLeft: 5,
  },
});

export default DepHead;