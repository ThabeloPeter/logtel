import React from 'react';
import { View, StyleSheet, SafeAreaView, Platform, StatusBar, ScrollView, Animated, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const AdminHomeScreen = () => {
  const navigation = useNavigation();
  const [updateAvailable, setUpdateAvailable] = React.useState(true); // Example state for update availability

  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    // Start the animation when updateAvailable changes
    if (updateAvailable) {
      startAnimation();
    }
  }, [updateAvailable]);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };

  const handleFaultPress = () => {
    navigation.navigate('AdminViewCardDetails'); // Navigate to AdminViewCardDetailsScreen
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Banner */}
      <View style={styles.banner}>
        <LinearGradient
          colors={['#1277BA', 'transparent']}
          start={[0, 0]}
          end={[1, 0]}
          style={styles.gradient}
        />
      </View>

      {/* Faults List */}
      <View style={styles.cardsContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {[...Array(10).keys()].map((index) => (
            <TouchableOpacity key={index} onPress={handleFaultPress}>
              <Animated.View style={[styles.cardContainer, index === 0 && updateAvailable ? { borderColor: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: ['#FFA500', 'transparent'] }) } : null]}>
                <LinearGradient
                  colors={['#1277BA', 'transparent']}
                  start={[0, 0]}
                  end={[1, 0]}
                  style={styles.cardGradient}
                >
                  <Card style={styles.card}>
                    <Card.Content>
                      <View style={styles.header}>
                        <Title style={styles.title}>Fault Title {index + 1}</Title>
                      </View>
                      <Paragraph style={styles.description}>Description of the fault goes here...</Paragraph>
                      <View style={styles.detailsContainer}>
                        <View style={styles.dateTimeContainer}>
                          <Text style={styles.dateTime}>Date & Time</Text>
                        </View>
                        <Text style={styles.companyName}>Company Name</Text>
                      </View>
                    </Card.Content>
                  </Card>
                </LinearGradient>
              </Animated.View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  banner: {
    height: 180,
    backgroundColor: '#1277BA',
    overflow: 'hidden',
    marginBottom: 16,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  cardsContainer: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: 100, // Adjust as needed
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1, // Ensure the container is on top of the banner
    borderTopLeftRadius: 20, // Curve top-left corner
    borderTopRightRadius: 20, // Curve top-right corner
  },
  scrollViewContainer: {
    flexGrow: 1,
    marginHorizontal: 16,
    marginTop: 40,
    paddingBottom: 10,
  },
  cardContainer: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardGradient: {
    borderRadius: 10,
    overflow: 'hidden',
    opacity: 0.9, // Make it slightly transparent
  },
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(18, 119, 186, 0.1)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateTimeContainer: {
    alignItems: 'flex-start',
  },
  dateTime: {
    fontSize: 12,
  },
  companyName: {
    fontSize: 12,
  },
});

export default AdminHomeScreen;
