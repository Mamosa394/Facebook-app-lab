import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Avatar from '../components/Avatar';
import PostCard from '../components/PostCard';
import StoryItem from '../components/StoryItem';

// IMPORT LOCAL IMAGES
const profile1 = require('../assets/images/sasa.jpg');
const profile2 = require('../assets/images/motechstory.jpg');
const profile3 = require('../assets/images/matty.jpg');
const profile4 = require('../assets/images/mufasaprofile.jpg');
const profile5 = require('../assets/images/reactnative.png');
const profile6 = require('../assets/images/Limkokwing.png');
const userAvatar = require('../assets/images/mamosaprofile.jpg');
const sasaPost = require('../assets/images/sasaPost.jpg');

// STORIES DATA
const storiesData = [
  { id: '1', name: 'Add Story', isAddStory: true },
  { id: '2', name: 'SaSa', image: profile1, isOnline: true },
  { id: '3', name: 'MoTech', image: profile2, isOnline: true },
  { id: '4', name: 'Matty Boo', image: profile3, isOnline: false },
  { id: '5', name: 'Mufasa Motsie', image: profile4, isOnline: true },
  { id: '6', name: 'ReactStudents', image: profile5, isOnline: false },
  { id: '7', name: 'LUCT', image: profile6, isOnline: false },
];

// POSTS DATA
const postsData = [
  {
    id: '1',
    username: 'SaSa Letsie',
    profileImage: profile1,
    content: 'A beautiful day to be out❤️🫦',
    image: sasaPost,
    likes: 42,
    comments: 5,
    isOnline: true,
  },
  {
    id: '2',
    username: 'Mobile Techs',
    profileImage: profile2,
    content: 'Currently the best store for laptops of all brands and a guaranteed iphone distributor.',
    image: null,
    likes: 28,
    comments: 3,
    isOnline: true,
  },
  {
    id: '3',
    username: 'Matty Boo',
    profileImage: profile3,
    content: 'Nka etsa Tsohle ka Kreste ea mphang Matla. Ba-Filipi 4:7',
    likes: 67,
    comments: 12,
    isOnline: false,
  },
  {
    id: '4',
    username: 'Mufasa Motsie',
    profileImage: profile4,
    content: 'And suddenly life got really personal. as if it hasnt been all along. Life starts to get quiter and pulls you in all direction and you feel alone, desperate and lonely. But phases move. Just like any other.',
    image: null,
    likes: 89,
    comments: 15,
    isOnline: true,
  },
];

export default function HomeScreen() {
  const Header = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>facebook</Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.headerIcon}>
          <Icon name="search" size={22} color="#1877F2" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const CreatePostSection = () => (
    <View style={styles.createPostContainer}>
      <Avatar source={userAvatar} size={48} />
      <TouchableOpacity style={styles.postInput} activeOpacity={0.7}>
        <Text style={styles.postInputText}>What's on your mind?</Text>
      </TouchableOpacity>
      <View style={styles.mediaButtons}>
        <TouchableOpacity style={styles.mediaButton}>
          <Icon name="images" size={28} color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.mediaButton}>
          <Icon name="videocam" size={28} color="#FF5722" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const StoriesHeader = () => (
    <View style={styles.storiesHeader}>
      <Text style={styles.storiesTitle}>Stories</Text>
      <TouchableOpacity>
        <Text style={styles.seeAllText}>See All</Text>
      </TouchableOpacity>
    </View>
  );

  const StoriesSection = () => (
    <View style={styles.storiesWrapper}>
      <StoriesHeader />
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesScrollContent}
        scrollEnabled={true}
      >
        {storiesData.map((story) => (
          <StoryItem key={story.id} story={story} />
        ))}
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <FlatList
        data={postsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        ListHeaderComponent={
          <>
            <Header />
            <CreatePostSection />
            <StoriesSection />
          </>
        }
        showsVerticalScrollIndicator={true}
        removeClippedSubviews={false}
        initialNumToRender={5}
        windowSize={10}
        contentContainerStyle={styles.feedContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  feedContent: {
    paddingBottom: 20,
    flexGrow: 1,
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
    fontSize: 32,
    fontWeight: '900',
    color: '#1877F2',
    letterSpacing: -0.5,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 20,
  },
  headerIcon: {
    padding: 4,
  },
  createPostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 12,
    marginTop: 12,
    marginBottom: 8,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  postInput: {
    flex: 1,
    marginLeft: 6,
    backgroundColor: '#f0f2f5',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 40,
  },
  postInputText: {
    fontSize: 18,
    color: '#65676b',
  },
  mediaButtons: {
    flexDirection: 'row',
    marginLeft: 12,
    gap: 12,
  },
  mediaButton: {
    padding: 4,
  },
  storiesWrapper: {
    marginTop: 5,
    marginBottom: 4,
  },
  storiesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  storiesTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#050505',
  },
  seeAllText: {
    fontSize: 18,
    color: '#1877F2',
    fontWeight: '500',
  },
  storiesScrollContent: {
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
});