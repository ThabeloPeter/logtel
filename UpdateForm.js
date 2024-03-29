import React, { useState } from 'react';
import { View, StyleSheet, Modal, TextInput, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Snackbar } from 'react-native-paper';

const UpdateForm = ({ visible, onSubmit, onClose }) => {
  const [updateText, setUpdateText] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSubmit = () => {
    if (!updateText.trim()) {
      setSnackbarMessage('Please enter some text.');
      setSnackbarVisible(true);
      return;
    }

    onSubmit(updateText);
    setUpdateText('');
    setSnackbarMessage('Update submitted');
    setSnackbarVisible(true);
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.content}>
          <Text style={[styles.placeholder, { color: 'white' }]}>Add a comment</Text>
          <TextInput
            placeholder="Enter update text..."
            value={updateText}
            onChangeText={setUpdateText}
            style={[styles.input, { color: 'white' }]}
            multiline
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
          duration={2000}
          style={styles.snackbar} // Optional: Style for the Snackbar
        >
          {snackbarMessage}
        </Snackbar>
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
  content: {
    width: '80%',
  },
  placeholder: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingTop: 15,
    textAlignVertical: 'top',
    color: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: 'green',
    width: '45%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'red',
    width: '45%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  snackbar: {
    backgroundColor: '#333', // Optional: Custom background color for the Snackbar
  },
});

export default UpdateForm;
