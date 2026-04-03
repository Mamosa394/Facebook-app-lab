import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navbar from '../components/NavBar';  


import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import AddPostScreen from '../screens/AddPostScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <Navbar {...props} />}  
        screenOptions={{ 
          headerShown: false, 
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Add" component={AddPostScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}