import React, { useState, useRef } from 'react';
import { View, StyleSheet, SafeAreaView, Platform, StatusBar, ScrollView, TextInput, Pressable, Animated, Modal } from 'react-native';
import { Title, Text, FAB, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import UpdateForm from './UpdateForm'; // Import the UpdateForm component

// UpdateCard component to display update cards
const UpdateCard = ({ update }) => {
  return (
    <View style={styles.updateCard}>
      <Text>{update}</Text>
    </View>
  );
};

const AdminViewCardDetailsScreen = () => {
  const navigation = useNavigation();
  const [showCommentButton, setShowCommentButton] = useState(false); // State to manage the visibility of the comment button
  const [showMarkAsCompleteButton, setShowMarkAsCompleteButton] = useState(false); // State to manage the visibility of the mark as complete button
  const slideAnimation = useRef(new Animated.Value(0)).current; // Animation value for slide animation
  const [showModal, setShowModal] = useState(false); // State to manage the visibility of the modal

  const handleAddUpdatePress = () => {
    setShowCommentButton(true); // Show the comment button
    setShowMarkAsCompleteButton(true); // Show the mark as complete button
    // Perform slide animation to show additional buttons
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleCloseAdditionalButtons = () => {
    setShowCommentButton(false); // Hide the comment button
    setShowMarkAsCompleteButton(false); // Hide the mark as complete button
    // Perform slide animation to hide additional buttons
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const toggleModal = () => {
    setShowModal(!showModal); // Toggle modal visibility
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Banner with Back Button */}
      <View style={styles.banner}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <IconButton icon="arrow-left" color="white" size={24} />
        </Pressable>
        {/* Your banner content goes here */}
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Title, Status, and Company Name Container */}
        <View style={styles.titleContainer}>
          <Title style={styles.title}>Fault Title</Title>
          <Text style={styles.status}>In Progress</Text>
        </View>

        {/* Description Container */}
        <View style={styles.descriptionContainer}>
          <TextInput
            multiline
            numberOfLines={10}
            placeholder="Enter description here..."
            style={styles.description}
            editable={false}
            value="Description of the fault goes here..."
          />
        </View>

        {/* Location and Submission Date Container */}
        <View style={styles.detailsContainer}>
          <Text style={styles.location}>Location: 123 Main Street, City, Country</Text>
          <Text style={styles.submissionDateTime}>Submitted: February 21, 2024, 10:30 AM</Text>
        </View>

        {/* Update Cards Container */}
        <ScrollView style={styles.updateCardsContainer}>
          <UpdateCard update="Update 1" />
          <UpdateCard update="Update 2" />
          <UpdateCard update="Update 3" />
        </ScrollView>
      </View>

      {/* Floating Action Button */}
      <FAB
        style={styles.floatingButton}
        icon="plus"
        color="white"
        onPress={handleAddUpdatePress}
      />

      {/* Comment Button */}
      {showCommentButton && (
        <Animated.View style={[styles.additionalButtonContainer, { transform: [{ translateY: slideAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, -70] }) }] }]}>
          <FAB
            style={styles.additionalButton}
            icon="comment"
            color="white"
            onPress={toggleModal} // Toggle modal visibility
          />
        </Animated.View>
      )}

      {/* Mark as Complete Button */}
      {showMarkAsCompleteButton && (
        <Animated.View style={[styles.additionalButtonContainer, { transform: [{ translateY: slideAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, -140] }) }] }]}>
          <FAB
            style={styles.additionalButton}
            icon="check"
            color="white"
            onPress={() => console.log('Mark as complete button pressed')}
          />
        </Animated.View>
      )}

      {/* Modal Overlay */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <UpdateForm />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  banner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 800,
    backgroundColor: '#1277BA',
    overflow: 'hidden',
    marginBottom: 16,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    zIndex: -1, // Ensure the banner is behind the content
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10,
    left: 10,
    zIndex: 1, // Ensure the back button is above the banner content
  },
  mainContent: {
    flex: 1,
    padding: 16,
    marginTop: 60, // Adjust as per your requirement
  },
  titleContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Space between title and status
    alignItems: 'center', // Align items vertically
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  status: {
    fontSize: 16,
    color: '#007bff', // Blue color for status
  },
  descriptionContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    height: 200,
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
location: {
fontSize: 16,
marginBottom: 8,
},
submissionDateTime: {
fontSize: 16,
},
updateCardsContainer: {
marginBottom: 30,
backgroundColor: 'white',
borderRadius: 8,
padding: 12,
},
updateCard: {
backgroundColor: 'rgba(18, 119, 186, 0.1)',
borderRadius: 8,
padding: 12,
marginBottom: 8,
},
floatingButton: {
position: 'absolute',
bottom: 20,
width: 50,
height: 50,
borderRadius: 25,
backgroundColor: '#cd0b82',
alignItems: 'center',
justifyContent: 'center',
elevation: 5,
alignSelf: 'center', // Center the icon horizontally
zIndex: 2, // Ensure the icon is on top of everything
},
additionalButtonContainer: {
position: 'absolute',
bottom: 20,
width: 50,
height: 50,
borderRadius: 25,
alignItems: 'center',
justifyContent: 'center',
elevation: 5,
alignSelf: 'center', // Center the icon horizontally
zIndex: 2, // Ensure the icon is on top of everything
},
additionalButton: {
width: 50,
height: 50,
borderRadius: 25,
alignItems: 'center',
justifyContent: 'center',
zIndex: 2, // Ensure the icon is on top of everything
},
modalOverlay: {
flex: 1,
backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
justifyContent: 'center',
alignItems: 'center',
},
});

export default AdminViewCardDetailsScreen;