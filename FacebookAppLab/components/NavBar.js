import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Navbar({ state, descriptors, navigation }) {
  
  const tabs = [
    { name: 'Home', icon: 'home', label: 'Home' },
    { name: 'Search', icon: 'search', label: 'Search' },
    { name: 'Add', icon: 'add-circle', label: 'Add' },
    { name: 'Notifications', icon: 'notifications', label: 'Alerts' },
    { name: 'Profile', icon: 'person', label: 'Profile' },
  ];

  return (
    <View style={styles.navbar}>
      {tabs.map((tab, index) => {
        const isFocused = state.index === index;
        
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.navItem}
            onPress={() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: state.routes[index].key,
                canPreventDefault: true,
              });
              
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(tab.name);
              }
            }}
          >
            <View style={styles.navIconContainer}>
              <Icon 
                name={isFocused ? tab.icon : `${tab.icon}-outline`} 
                size={24} 
                color={isFocused ? '#1877F2' : '#65676b'} 
              />
             
            </View>
            <Text style={[
              styles.navLabel, 
              isFocused && styles.navLabelActive
            ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#e4e6eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 5,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  navIconContainer: {
    position: 'relative',
  },
  navLabel: {
    fontSize: 15,
    color: '#65676b',
    marginTop: 2,

  },
  navLabelActive: {
    color: '#1877F2',
    fontWeight: '600',
  },

});