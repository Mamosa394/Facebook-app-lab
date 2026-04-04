import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

//  IMPORT LOCAL IMAGES 
const profile1 = require('../assets/images/sasa.jpg');
const profile2 = require('../assets/images/motechstory.jpg');
const profile3 = require('../assets/images/messi.jpg');
const profile4 = require('../assets/images/mawhoo.jpg');
const profile5 = require('../assets/images/mufasaprofile.jpg');
const profile6 = require('../assets/images/stunna.jpg');
const profile7 = require('../assets/images/sasa.jpg');

//  IMPORT LOCAL POST IMAGES 
const postImage1 = require('../assets/images/mufasapost.jpg');
const postImage2 = require('../assets/images/mufasapost1.jpg');

export default function NotificationsScreen() {
  const [activeTab, setActiveTab] = useState('all'); 

  // Notifications 
  const notificationsData = [
    {
      id: '1',
      type: 'like',
      user: 'SaSa Letsie',
      userImage: profile1,
      action: 'liked your post',
      time: '2 minutes ago',
      isRead: false,
      postImage: postImage1,
    },
    {
      id: '2',
      type: 'comment',
      user: 'Mobile Tech',
      userImage: profile2,
      action: 'commented on your photo',
      comment: 'Check out our laptops',
      time: '1 hour ago',
      isRead: false,
      postImage: postImage2,
    },
    {
      id: '3',
      type: 'friend',
      user: 'Messi',
      userImage: profile3,
      action: 'sent you friend request',
      time: '3 hours ago',
      isRead: true,
    },
    {
      id: '4',
      type: 'mention',
      user: 'MaWhoo',
      userImage: profile4,
      action: 'mentioned you in a comment',
      comment: 'Your content is brilliant😍👌',
      time: '5 hours ago',
      isRead: true,
    },
    {
      id: '5',
      type: 'share',
      user: 'Mufasa Motsie',
      userImage: profile5,
      action: 'shared your post',
      time: '1 day ago',
      isRead: true,
    },
    {
      id: '6',
      type: 'like',
      user: 'Ntate Stunna',
      userImage: profile6,
      action: 'liked your comment',
      time: '3 day ago',
      isRead: true,
    },
    {
      id: '7',
      type: 'move',
      user: 'SaSa Letsie',
      userImage: profile7,
      action: 'moved to Paris',
      time: '5 days ago',
      isRead: false,
    },
  ];

  const getFilteredNotifications = () => {
    if (activeTab === 'mentions') {
      return notificationsData.filter(notif => notif.type === 'mention');
    }
    return notificationsData;
  };

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'like':
        return <Icon name="heart" size={18} color="#FF3B30" />;
      case 'comment':
        return <Icon name="chatbubble" size={18} color="#1877F2" />;
      case 'friend':
        return <Icon name="person-add" size={18} color="#4CAF50" />;
      case 'mention':
        return <Icon name="at" size={18} color="#FF9800" />;
      case 'share':
        return <Icon name="share" size={18} color="#9C27B0" />;
      case 'move':
        return <Icon name="location" size={18} color="#1877F2" />;
      default:
        return <Icon name="notifications" size={18} color="#65676b" />;
    }
  };

  const renderNotification = ({ item }) => (
    <TouchableOpacity style={[styles.notificationItem, !item.isRead && styles.unreadNotification]}>
      {/* Unread indicator dot */}
      {!item.isRead && <View style={styles.unreadDot} />}
      
      {/* User Image - NOW USING LOCAL IMAGE */}
      <Image source={item.userImage} style={styles.userImage} />
      
      {/* Notification Content */}
      <View style={styles.notificationContent}>
        <Text style={styles.notificationText}>
          <Text style={styles.userName}>{item.user}</Text>
          {' '}{item.action}
        </Text>
        
        {item.comment && (
          <Text style={styles.commentText}>"{item.comment}"</Text>
        )}
        
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
      
      {/* Post Image (if exists) - NOW USING LOCAL IMAGE */}
      {item.postImage && (
        <Image source={item.postImage} style={styles.postImage} />
      )}
      
      {/* Action Buttons for friend requests */}
      {item.type === 'friend' && (
        <View style={styles.friendButtons}>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Icon name="settings-outline" size={24} color="#1877F2" />
        </TouchableOpacity>
      </View>
      
      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'all' && styles.activeTab]}
          onPress={() => setActiveTab('all')}
        >
          <Text style={[styles.tabText, activeTab === 'all' && styles.activeTabText]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'mentions' && styles.activeTab]}
          onPress={() => setActiveTab('mentions')}
        >
          <Text style={[styles.tabText, activeTab === 'mentions' && styles.activeTabText]}>
            Mentions
          </Text>
        </TouchableOpacity>
      </View>
      
      {/* Notifications List */}
      <FlatList
        data={getFilteredNotifications()}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Icon name="notifications-off-outline" size={64} color="#ccc" />
            <Text style={styles.emptyText}>No notifications yet</Text>
            <Text style={styles.emptySubText}>
              When you get notifications, they'll appear here
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e4e6eb',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#050505',
  },
  settingsButton: {
    padding: 6,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e6eb',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 4,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#e7f3ff',
  },
  tabText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#65676b',
  },
  activeTabText: {
    color: '#1877F2',
  },
  listContent: {
    paddingBottom: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 1,
    position: 'relative',
  },
  unreadNotification: {
    backgroundColor: '#f0f8ff',
  },
  unreadDot: {
    position: 'absolute',
    left: 8,
    top: '50%',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1877F2',
  },
  userImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#e4e6eb',
  },
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    fontSize: 16,
    color: '#050505',
    lineHeight: 18,
  },
  userName: {
    fontWeight: 'bold',
  },
  commentText: {
    fontSize: 15,
    color: '#65676b',
    fontStyle: 'italic',
    marginTop: 4,
  },
  timeText: {
    fontSize: 14,
    color: '#65676b',
    marginTop: 4,
  },
  postImage: {
    width: 52,
    height: 52,
    borderRadius: 8,
    marginLeft: 8,
  },
  friendButtons: {
    flexDirection: 'row',
    marginLeft: 8,
    gap: 8,
  },
  confirmButton: {
    backgroundColor: '#1877F2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  confirmButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  deleteButton: {
    backgroundColor: '#f0f2f5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  deleteButtonText: {
    color: '#65676b',
    fontSize: 15,
    fontWeight: '600',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#65676b',
    marginTop: 16,
  },
  emptySubText: {
    fontSize: 14,
    color: '#65676b',
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 40,
  },
});