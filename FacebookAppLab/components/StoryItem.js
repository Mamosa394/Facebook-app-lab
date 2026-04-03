import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Avatar from '../components/Avatar';

export default function StoryItem({ story }) {
  
  if (story.isAddStory) {
    return (
      <TouchableOpacity style={styles.storyContainer} activeOpacity={0.8}>
        <Avatar 
          size={74}
          showAddIcon={true}
          showStoryRing={false}
        />
        <Text style={styles.storyName}>{story.name}</Text>
      </TouchableOpacity>
    );
  }

  // Normal story with story ring and online indicator
  return (
    <TouchableOpacity style={styles.storyContainer} activeOpacity={0.8}>
      <Avatar 
        source={story.image}
        size={74}
        showStoryRing={true}
        showOnline={story.isOnline || false}
        borderColor="#1877F2"
      />
      <Text style={styles.storyName} numberOfLines={1}>
        {story.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  storyContainer: {
    alignItems: 'center',
    marginHorizontal: 6,
    width: 74,
  },
  storyName: {
    fontSize: 16,
    marginTop: 6,
    color: '#050505',
    textAlign: 'center',
    fontWeight: '500',
  },
});