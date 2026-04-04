import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Avatar from '../components/Avatar';
import Icon from 'react-native-vector-icons/Ionicons';

//  IMPORT IMAGE
const userAvatar = require('../assets/images/mamosaprofile.jpg');

export default function AddPostScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Post</Text>
        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* User Info */}
        <View style={styles.userInfo}>
          <Avatar
            source={userAvatar}  
            size={50}
          />
          <View style={styles.userTextInfo}>
            <Text style={styles.userName}>Mamosa Motsie</Text>
            <TouchableOpacity style={styles.privacyButton}>
              <Icon name="people" size={14} color="#65676b" />
              <Text style={styles.privacyText}> Friends</Text>
              <Icon name="chevron-down" size={14} color="#65676b" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Post Input */}
        <TextInput
          style={styles.postInput}
          placeholder="What's on your mind?"
          placeholderTextColor="#65676b"
          multiline
        />

        {/* Simple Media Options */}
        <View style={styles.mediaOptions}>
          <Text style={styles.mediaTitle}>Add to your post</Text>
          <View style={styles.mediaButtons}>
            <View style={styles.mediaOption}>
              <Icon name="images" size={32} color="#4CAF50" />
              <Text style={styles.mediaOptionText}>Photo</Text>
            </View>
            
            <View style={styles.mediaOption}>
              <Icon name="videocam" size={32} color="#FF5722" />
              <Text style={styles.mediaOptionText}>Video</Text>
            </View>
            
            <View style={styles.mediaOption}>
              <Icon name="happy" size={32} color="#FFC107" />
              <Text style={styles.mediaOptionText}>Feeling</Text>
            </View>
            
            <View style={styles.mediaOption}>
              <Icon name="location" size={32} color="#1877F2" />
              <Text style={styles.mediaOptionText}>Check in</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e6eb',
  },
  cancelButton: {
    padding: 8,
  },
  cancelText: {
    fontSize: 16,
    color: '#1877F2',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#050505',
  },
  postButton: {
    backgroundColor: '#1877F2',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  postButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  userTextInfo: {
    flex: 1,
    marginLeft: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#050505',
    marginBottom: 4,
  },
  privacyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  privacyText: {
    fontSize: 12,
    color: '#65676b',
    marginLeft: 4,
  },
  postInput: {
    backgroundColor: '#f0f2f5',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 100,
    textAlignVertical: 'top',
    color: '#050505',
    borderRadius: 12,
    marginHorizontal: 16,
  },
  mediaOptions: {
    marginTop: 20,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e4e6eb',
    marginHorizontal: 16,
  },
  mediaTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#65676b',
    marginBottom: 12,
  },
  mediaButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  mediaOption: {
    alignItems: 'center',
    padding: 8,
  },
  mediaOptionText: {
    fontSize: 12,
    color: '#65676b',
    marginTop: 4,
  },
});