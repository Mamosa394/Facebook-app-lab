import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';


const profile1 = require('../assets/images/sasa.jpg');
const profile2 = require('../assets/images/motechstory.jpg');

export default function SearchScreen() {

  const recentSearches = [
    { id: '1', name: 'SaSa Letsie', type: 'person', image: profile1 },
    { id: '2', name: 'React Native Javascript', type: 'topic', image: null },
    { id: '3', name: 'Mobile Tech', type: 'person', image: profile2 },
    { id: '4', name: 'make up', type: 'topic', image: null },
  ];


  const trendingData = [
    { id: '1', topic: '#ReactNative', posts: '12.5K posts', trend: 'rising' },
    { id: '2', topic: '#FuelPricesUP', posts: '108.2K posts', trend: 'rising' },
    { id: '3', topic: 'Mobile Dev', posts: '5.8K posts', trend: 'stable' },
    { id: '4', topic: 'Up coming elections', posts: '15.3K posts', trend: 'rising' },
    { id: '5', topic: 'The War in Iran', posts: '22.1K posts', trend: 'rising' },
  ];


  const renderRecentItem = ({ item }) => (
    <TouchableOpacity style={styles.recentItem}>
      {item.type === 'person' ? (
        <Image source={item.image} style={styles.recentImage} />
      ) : (
        <View style={styles.recentIconContainer}>
          <Icon name="trending-up" size={20} color="#1877F2" />
        </View>
      )}
      <View style={styles.recentInfo}>
        <Text style={styles.recentName}>{item.name}</Text>
        <Text style={styles.recentType}>{item.type === 'person' ? 'Person' : 'Topic'}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton}>
        <Icon name="close" size={18} color="#65676b" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  
  const renderTrendingItem = ({ item }) => (
    <TouchableOpacity style={styles.trendingItem}>
      <View style={styles.trendingIcon}>
        <Icon name="trending-up" size={20} color="#1877F2" />
      </View>
      <View style={styles.trendingInfo}>
        <Text style={styles.trendingTopic}>{item.topic}</Text>
        <Text style={styles.trendingPosts}>{item.posts}</Text>
      </View>
      <Icon name="chevron-forward" size={20} color="#65676b" />
    </TouchableOpacity>
  );

  // Category section component
  const CategorySection = ({ title, icon }) => (
    <TouchableOpacity style={styles.categorySection}>
      <View style={styles.categoryIcon}>
        <Icon name={icon} size={24} color="#1877F2" />
      </View>
      <Text style={styles.categoryTitle}>{title}</Text>
      <Icon name="chevron-forward" size={20} color="#65676b" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories  */}
        <View style={styles.categoriesContainer}>
          <CategorySection title="People" icon="people" />
          <CategorySection title="Pages" icon="business" />
          <CategorySection title="Groups" icon="people-circle" />
          <CategorySection title="Events" icon="calendar" />
        </View>

        {/* Recent Searches */}
        <View style={styles.recentHeader}>
          <Text style={styles.sectionTitle}>Recent Searches</Text>
          <TouchableOpacity>
            <Text style={styles.clearText}>Clear All</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={recentSearches}
          keyExtractor={(item) => item.id}
          renderItem={renderRecentItem}
          scrollEnabled={false}
        />

        {/* Trending Now - Static Display */}
        <Text style={styles.sectionTitle}>Trending Now</Text>
        <FlatList
          data={trendingData}
          keyExtractor={(item) => item.id}
          renderItem={renderTrendingItem}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e4e6eb',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#050505',
  },
  categoriesContainer: {
    backgroundColor: '#ffffff',
    marginTop: 8,
    marginBottom: 8,
  },
  categorySection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e6eb',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e7f3ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  categoryTitle: {
    flex: 1,
    fontSize: 16,
    color: '#050505',
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#050505',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    marginTop: 8,
  },
  clearText: {
    fontSize: 14,
    color: '#1877F2',
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e6eb',
  },
  recentImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  recentIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e7f3ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  recentInfo: {
    flex: 1,
  },
  recentName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#050505',
  },
  recentType: {
    fontSize: 12,
    color: '#65676b',
    marginTop: 2,
  },
  removeButton: {
    padding: 8,
  },
  trendingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e6eb',
  },
  trendingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e7f3ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  trendingInfo: {
    flex: 1,
  },
  trendingTopic: {
    fontSize: 15,
    fontWeight: '500',
    color: '#050505',
  },
  trendingPosts: {
    fontSize: 12,
    color: '#65676b',
    marginTop: 2,
  },
});