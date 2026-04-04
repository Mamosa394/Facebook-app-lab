import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';


const profileImage = require('../assets/images/mamosaprofile.jpg');
const coverImage = require('../assets/images/matchacover.jpg');


const postImage1 = require('../assets/images/mufasapost.jpg');
const postImage2 = require('../assets/images/mufasapost1.jpg');

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState('posts'); 

 
  const user = {
    name: 'Mamosa Motsie',
    username: '_motsie',
    bio: 'Software Engineering Student |',
    location: 'Maseru, Lesotho',
    work: 'Student',
    education: 'BSc in Software Engineering',
    followers: '10.3',
    following: '567',
    posts: '3',
    profileImage: profileImage,
    coverImage: coverImage,
  };

 
  const userPosts = [
    {
      id: '1',
      content: 'obsessed with ui design🔥!',
      image: postImage1,
      likes: 128,
      comments: 24,
      time: '2 hours ago',
    },
    {
      id: '2',
      content: 'decided to take a warm walk today',
      image: postImage2,
      likes: 89,
      comments: 12,
      time: '1 day ago',
    },
    {
      id: '3',
      content: 'how academics are looking currently',
      image: null,
      likes: 56,
      comments: 8,
      time: '3 days ago',
    },
  ];

 
  const renderPost = ({ item }) => (
    <View style={styles.postCard}>
      <Text style={styles.postContent}>{item.content}</Text>
      {item.image && (
        <Image source={item.image} style={styles.postImage} />
      )}
      <View style={styles.postStats}>
        <View style={styles.postStat}>
          <Icon name="heart" size={16} color="#FF3B30" />
          <Text style={styles.postStatText}>{item.likes}</Text>
        </View>
        <View style={styles.postStat}>
          <Icon name="chatbubble" size={16} color="#65676b" />
          <Text style={styles.postStatText}>{item.comments}</Text>
        </View>
        <Text style={styles.postTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Cover Photo */}
        <View style={styles.coverContainer}>
          <Image source={user.coverImage} style={styles.coverImage} />
          
          {/* Edit Cover Button */}
          <TouchableOpacity style={styles.editCoverButton}>
            <Icon name="camera" size={16} color="#ffffff" />
            <Text style={styles.editCoverText}>Edit Cover</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.profileInfoContainer}>
          <Image source={user.profileImage} style={styles.profileImage} />
          
          <View style={styles.profileActions}>
            <TouchableOpacity style={styles.addStoryButton}>
              <Icon name="add" size={20} color="#1877F2" />
              <Text style={styles.addStoryText}>Add Story</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editProfileButton}>
              <Icon name="create-outline" size={18} color="#050505" />
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moreButton}>
              <Icon name="ellipsis-horizontal" size={20} color="#050505" />
            </TouchableOpacity>
          </View>
        </View>

        {/* User Details */}
        <View style={styles.userDetails}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userUsername}>{user.username}</Text>
          <Text style={styles.userBio}>{user.bio}</Text>
          
          <View style={styles.userInfoRow}>
            <Icon name="location-outline" size={14} color="#65676b" />
            <Text style={styles.userInfoText}>{user.location}</Text>
          </View>
          
          <View style={styles.userInfoRow}>
            <Icon name="briefcase-outline" size={14} color="#65676b" />
            <Text style={styles.userInfoText}>{user.work}</Text>
          </View>
          
          <View style={styles.userInfoRow}>
            <Icon name="school-outline" size={14} color="#65676b" />
            <Text style={styles.userInfoText}>{user.education}</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <TouchableOpacity style={styles.statItem}>
            <Text style={styles.statNumber}>{user.posts}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statItem}>
            <Text style={styles.statNumber}>{user.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statItem}>
            <Text style={styles.statNumber}>{user.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </TouchableOpacity>
        </View>

        {/* Tabs - Keep all 3 but only Posts shows content */}
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'posts' && styles.activeTab]}
            onPress={() => setActiveTab('posts')}
          >
            <Icon name="document-text" size={20} color={activeTab === 'posts' ? '#1877F2' : '#65676b'} />
            <Text style={[styles.tabText, activeTab === 'posts' && styles.activeTabText]}>Posts</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'photos' && styles.activeTab]}
            onPress={() => setActiveTab('photos')}
          >
            <Icon name="images" size={20} color={activeTab === 'photos' ? '#1877F2' : '#65676b'} />
            <Text style={[styles.tabText, activeTab === 'photos' && styles.activeTabText]}>Photos</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'friends' && styles.activeTab]}
            onPress={() => setActiveTab('friends')}
          >
            <Icon name="people" size={20} color={activeTab === 'friends' ? '#1877F2' : '#65676b'} />
            <Text style={[styles.tabText, activeTab === 'friends' && styles.activeTabText]}>Friends</Text>
          </TouchableOpacity>
        </View>

        {/* Tab Content - Only Posts shows content, others show placeholder */}
        <View style={styles.tabContent}>
          {activeTab === 'posts' && (
            <FlatList
              data={userPosts}
              keyExtractor={(item) => item.id}
              renderItem={renderPost}
              scrollEnabled={false}
            />
          )}
          
          {activeTab === 'photos' && (
            <View style={styles.emptyTabContainer}>
              <Icon name="images-outline" size={48} color="#ccc" />
              <Text style={styles.emptyTabText}>No photos to display</Text>
            </View>
          )}
          
          {activeTab === 'friends' && (
            <View style={styles.emptyTabContainer}>
              <Icon name="people-outline" size={48} color="#ccc" />
              <Text style={styles.emptyTabText}>No friends to display</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  coverContainer: {
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: 200,
  },
  editCoverButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 6,
  },
  editCoverText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500',
  },
  profileInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    marginTop: -40,
    marginBottom: 12,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  profileActions: {
    flexDirection: 'row',
    gap: 8,
  },
  addStoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e4e6eb',
    gap: 6,
  },
  addStoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1877F2',
  },
  editProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e4e6eb',
    gap: 6,
  },
  editProfileText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#050505',
  },
  moreButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e4e6eb',
  },
  userDetails: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#050505',
    marginBottom: 4,
  },
  userUsername: {
    fontSize: 15,
    color: '#65676b',
    marginBottom: 8,
  },
  userBio: {
    fontSize: 16,
    color: '#050505',
    marginBottom: 12,
    lineHeight: 18,
  },
  userInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  userInfoText: {
    fontSize: 15,
    color: '#65676b',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    marginHorizontal: 16,
    marginVertical: 12,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#050505',
  },
  statLabel: {
    fontSize: 15,
    color: '#65676b',
    marginTop: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e4e6eb',
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1877F2',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#65676b',
  },
  activeTabText: {
    color: '#1877F2',
  },
  tabContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  postCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  postContent: {
    fontSize: 16,
    color: '#050505',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  postStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  postStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  postStatText: {
    fontSize: 14,
    color: '#65676b',
  },
  postTime: {
    fontSize: 14,
    color: '#65676b',
    marginLeft: 'auto',
  },
  emptyTabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyTabText: {
    fontSize: 16,
    color: '#65676b',
    marginTop: 12,
  },
});