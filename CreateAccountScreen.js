import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const CreateAccountScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const navigation = useNavigation();

  const handleBackToLoginPress = () => {
    navigation.goBack();
  };

  const handleCreateAccountPress = async () => {
    if (!companyName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert('Empty Fields', 'All fields are required.');
      return;
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    // Password match validation
    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Password and confirm password must match.');
      return;
    }

    try {
      // API request code here
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Create Account</Text>
        <TextInput
          placeholder="Company Name"
          value={companyName}
          onChangeText={setCompanyName}
          style={styles.input}
          placeholderTextColor="#ccc"
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor="#ccc"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#ccc"
        />
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#ccc"
        />
        <Button mode="contained" onPress={handleCreateAccountPress} style={[styles.button, { backgroundColor: '#1277BA' }]}>
          Create Account
        </Button>
        <TouchableOpacity onPress={handleBackToLoginPress} style={styles.backToLoginButton}>
          <Text style={styles.backToLoginText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    width: '100%',
    borderRadius: 20,
    marginBottom: 10,
  },
  backToLoginButton: {
    marginTop: 20,
  },
  backToLoginText: {
    fontSize: 16,
    color: '#126191',
    textDecorationLine: 'underline',
  },
});

export default CreateAccountScreen;
