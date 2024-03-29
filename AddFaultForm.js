import React, { useState } from 'react';
import { View, StyleSheet, Modal, TextInput, Button, Text, KeyboardAvoidingView, Alert } from 'react-native';

const AddFaultForm = ({ visible, onSubmit, onClose }) => {
  const [faultTitle, setFaultTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    if (!faultTitle.trim() || !description.trim() || !location.trim()) {
      Alert.alert('Empty Fields', 'All fields are required.');
      return;
    }

    // Fault title minimum length validation
    if (faultTitle.length < 6) {
      Alert.alert('Invalid Fault Title', 'Fault title must contain at least 6 characters.');
      return;
    }

    // Description minimum length validation
    if (description.length < 20) {
      Alert.alert('Invalid Description', 'Description must contain at least 20 characters.');
      return;
    }

    onSubmit({ faultTitle, description, location });
    setFaultTitle('');
    setDescription('');
    setLocation('');
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.formContainer}>
          <Text style={styles.placeholder}>Fault Title</Text>
          <TextInput
            placeholder="Enter fault title..."
            value={faultTitle}
            onChangeText={setFaultTitle}
            style={styles.input}
            placeholderTextColor="white"
          />
          <Text style={styles.placeholder}>Description</Text>
          <TextInput
            placeholder="Enter description..."
            value={description}
            onChangeText={setDescription}
            style={[styles.input, styles.descriptionInput]} // Apply the descriptionInput style
            multiline
            placeholderTextColor="white"
          />
          <Text style={styles.placeholder}>Location</Text>
          <TextInput
            placeholder="Enter location..."
            value={location}
            onChangeText={setLocation}
            style={styles.input}
            placeholderTextColor="white"
          />
          <View style={styles.buttonContainer}>
            <Button title="Submit" onPress={handleSubmit} color="#4CAF50" style={styles.button} />
            <Button title="Cancel" onPress={onClose} color="#FF5722" style={styles.button} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(23, 32, 32, 0.7)',
  },
  formContainer: {
    width: '80%', // Adjust the width as needed
    backgroundColor: 'transparent', // Make the background transparent
    padding: 20,
    borderRadius: 10,
  },
  placeholder: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent background
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    color: 'white', // White text color
  },
  descriptionInput: {
    height: 120, // Increased height for the description input
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'transparent', // Transparent background color for buttons
    padding: 10,
    borderRadius: 5,
  },
});

export default AddFaultForm;
