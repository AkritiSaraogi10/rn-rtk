import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PostService from '../network/services/posts/postService';
import {Button, TextInput} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation';
import PostRequestModel from '../requestModels/postRequestModel';

type PostsScreenProps = NativeStackScreenProps<RootStackParamList, 'Posts'>;

const PostScreen: React.FC<PostsScreenProps> = ({route, navigation}) => {
  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.posts.data);
  const loading = useSelector((state: any) => state.posts.loading);
  const error = useSelector((state: any) => state.posts.error);
  const [newPostTitle, setNewPostTitle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await PostService.getAllPosts(dispatch);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  const addPost = async () => {
    try {
      const postRequestModel = new PostRequestModel(newPostTitle, '', 7);
      await PostService.addPost(dispatch, postRequestModel);
      setNewPostTitle('');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };
  // if (loading) {
  //   return (
  //     <View>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }
  return (
    <View style={{padding: 10}}>
      <TextInput
        label="New Post Title"
        value={newPostTitle}
        onChangeText={text => setNewPostTitle(text)}
      />

      <Button mode="contained" onPress={() => navigation.goBack()}>
        Goback
      </Button>

      <Button mode="contained" onPress={addPost}>
        {loading ? ' Loading..' : 'Add post'}
      </Button>

      <Text>Posts List</Text>
      {loading ? (
        <Text>loading......</Text>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={post => post.id.toString()}
          renderItem={({item}) => <Text key={item.id}>{item.title}</Text>}
        />
      )}
    </View>
  );
};

export default PostScreen;
