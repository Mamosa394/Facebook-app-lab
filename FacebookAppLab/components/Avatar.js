import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Avatar({ 
  source, 
  size = 50, 
  onPress, 
  showStoryRing = false,
  showOnline = false,
  showAddIcon = false,
  borderColor = '#1877F2'
}) {
  const avatarSize = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  const ringSize = {
    width: size + 6,
    height: size + 6,
    borderRadius: (size + 6) / 2,
  };

  const AvatarContent = () => (
    <View style={styles.container}>
      {showStoryRing && (
        <View style={[styles.storyRing, ringSize, { borderColor }]} />
      )}
      <View style={[styles.avatarContainer, avatarSize]}>
        {source ? (
          <Image source={source} style={[styles.avatar, avatarSize]} />
        ) : (
          <View style={[styles.placeholderAvatar, avatarSize]}>
            <Icon name="person" size={size * 0.5} color="#fff" />
          </View>
        )}
      </View>
      {showOnline && (
        <View style={styles.onlineIndicator} />
      )}
      {showAddIcon && (
        <View style={styles.addIconContainer}>
          <Icon name="add" size={16} color="#fff" />
        </View>
      )}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <AvatarContent />
      </TouchableOpacity>
    );
  }

  return <AvatarContent />;
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyRing: {
    position: 'absolute',
    borderWidth: 3,
    backgroundColor: 'transparent',
  },
  avatarContainer: {
    overflow: 'hidden',
    backgroundColor: '#e4e6eb',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  placeholderAvatar: {
    backgroundColor: '#1877F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#31A24C',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  addIconContainer: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: '#1877F2',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
});