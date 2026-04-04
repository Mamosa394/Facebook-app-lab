import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Avatar from '../components/Avatar';

export default function PostCard({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLikes = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
      setIsLiked(false);
    } else {
      setLikesCount(likesCount + 1);
      setIsLiked(true);
    }
  };

  return (
    <View style={styles.postCard}>
      {/* Post Header - Using Avatar component */}
      <View style={styles.postHeader}>
        <Avatar 
          source={post.profileImage} 
          size={44}
          showOnline={post.isOnline || false}
        />
        <View style={styles.headerInfo}>
          <Text style={styles.username}>{post.username}</Text>
          {post.isOnline && <View style={styles.onlineDot} />}
          <Text style={styles.postTime}>2 hours ago</Text>
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="ellipsis-horizontal" size={26} color="#65676b" />
        </TouchableOpacity>
      </View>

      {/* Post Content */}
      <Text style={styles.postContent}>{post.content}</Text>
      
     
      {post.image && (
        <TouchableOpacity activeOpacity={0.9}>
          <Image source={post.image} style={styles.postImage} />
        </TouchableOpacity>
      )}

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton} onPress={handleLikes}>
          <Icon 
            name={isLiked ? "heart" : "heart-outline"} 
            size={24} 
            color={isLiked ? "#FF3B30" : "#65676b"} 
          />
          <Text style={[styles.actionText, isLiked && styles.actionTextActive]}>
            {likesCount}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="chatbubble-outline" size={28} color="#65676b" />
          <Text style={styles.actionText}>{post.comments}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="share-outline" size={28} color="#65676b" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    paddingBottom: 8,
  },
  headerInfo: {
    flex: 1,
    marginLeft: 12,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#050505',
    marginBottom: 2,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#31A24C',
    marginLeft: 6,
  },
  postTime: {
    fontSize: 15,
    color: '#65676b',
  },
  menuButton: {
    padding: 8,
  },
  postContent: {
    fontSize: 18,
    color: '#050505',
    lineHeight: 20,
    paddingHorizontal: 14,
    paddingBottom: 12,
  },
  postImage: {
    width: '100%',
    height: 280,
    borderRadius: 24,
    backgroundColor: '#f0f2f5',
    marginBottom: 12,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingBottom: 12,
    borderTopWidth: 0.5,
    borderTopColor: '#e4e6eb',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  actionText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#65676b',
  },
  actionTextActive: {
    color: '#FF3B30',
  },
});