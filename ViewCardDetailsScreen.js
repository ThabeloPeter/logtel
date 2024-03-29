import React from 'react';
import { View, StyleSheet, SafeAreaView, Platform, StatusBar, ScrollView, TextInput, Image } from 'react-native';
import { Title, Paragraph, Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const ViewCardDetailsScreen = () => {
  const navigation = useNavigation();

  // Simulated description content
  const descriptionContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed sit amet tortor justo. Aliquam lacinia nec justo a dictum. Phasellus malesuada justo eget ante facilisis mattis. 
  Vestibulum convallis tristique mi ut lacinia. Integer sollicitudin dolor vel tellus convallis, sed pharetra nisi ultricies. 
  Sed malesuada vestibulum mi. Vivamus a fringilla nisl, vel malesuada purus. Duis consequat arcu id dolor lacinia iaculis,Lorem ipsum dolor sit amet,`;

  // Simulated updates data
  const updates = [
    {
      id: 1,
      message: 'Update 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      message: 'Update 2: Sed sit amet tortor justo. Aliquam lacinia nec justo a dictum.',
    },
    {
      id: 3,
      message: 'Update 3: Phasellus malesuada justo eget ante facilisis mattis.',
    },
    // Add more updates as needed
  ];

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

      {/* Fault Title and Description */}
      <View style={styles.faultContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.titleHeader}>
            <Title style={styles.title}>Fault Title</Title>
            <Text style={styles.dateTime}>Date & Time</Text>
          </View>
          <Text style={styles.status}>In Progress</Text>
        </View>
        <TextInput
          multiline
          numberOfLines={10}
          placeholder="Enter description here..."
          style={styles.description}
          editable={false} // Make the text area uneditable
          value={descriptionContent} // Set the Lorem Ipsum content
        />
      </View>

      {/* Updates */}
      <ScrollView style={styles.updatesContainer}>
        <Title style={styles.updatesTitle}>Updates</Title>
        {updates.map(update => (
          <Card key={update.id} style={styles.updateCard}>
            <Card.Content>
              <Paragraph>{update.message}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  banner: {
    height: 500,
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
  faultContainer: {
  position: 'absolute',
  top: 50, // Adjust as needed
  left: 0,
  right: 0,
  zIndex: 1, // Ensure the container is on top of the banner
  padding: 16,
},

  titleContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  titleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateTime: {
    fontSize: 16,
    color: '#555', // Adjust color as needed
  },
  description: {
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 0,
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
    backgroundColor: 'white',
  },
  updatesContainer: {
    position: 'absolute',
    top: 400, // Adjust as needed
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1, // Ensure the container is on top of the banner
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
  },
  updatesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  updateCard: {
    marginBottom: 8,
    backgroundColor: 'rgba(18, 119, 186, 0.1)',
  },
  status: {
  fontSize: 10,
  marginTop: 1,
  

},

});

export default ViewCardDetailsScreen;
