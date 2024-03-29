import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts, JetBrainsMono_400Regular } from '@expo-google-fonts/jetbrains-mono';

const MyComponent = () => {
  const [fontsLoaded] = useFonts({
    JetBrainsMono_400Regular,
  });

  if (!fontsLoaded) {
    return null; // Return a loading indicator or placeholder until fonts are loaded
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, world!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'JetBrainsMono_400Regular',
  },
});

export default MyComponent;
