import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Validation Error', 'Email and password cannot be empty.');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }

    // Check login credentials
    if (email === 'app@manchetti.co.za' && password === '12345') {
      // Navigate to appropriate screen based on user type
      navigation.navigate('AdminHome');
    } else {
      navigation.navigate('ClientHome');
    }
  };

  const handleCreateAccountPress = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder="Email"
          style={[styles.input, { width: 300 }]} // Set width to 300px
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={[styles.input, { width: 300 }]} // Set width to 300px
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button mode="contained" onPress={handleLoginPress} style={[styles.button, { width: 300, backgroundColor: '#1277BA' }]}> {/* Set width to 300px, and background color to #1277BA */}
          Login
        </Button>
        <TouchableOpacity onPress={handleCreateAccountPress} style={styles.createAccountButton}>
          <Text style={styles.createAccountButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  createAccountButton: {
    marginTop: 20,
  },
  createAccountButtonText: {
    fontSize: 16,
    color: '#126191',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
