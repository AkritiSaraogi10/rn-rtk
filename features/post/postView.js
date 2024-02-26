import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, addPost } from './postSlice';

export const PostView = () => {
    const dispatch = useDispatch();
    const post = useSelector((state) => state.post);
    const [newPostTitle, setNewPostTitle] = useState('');
    const [addingPost, setAddingPost] = useState(false);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const handleAddPost = () => {
        if (newPostTitle) {
            setAddingPost(true);
            dispatch(addPost({ title: newPostTitle }))
                .then(() => {
                    setNewPostTitle('');
                })
                .finally(() => {
                    setAddingPost(false);
                });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>List of Post</Text>

            {post.loading && (
                <ActivityIndicator animating={true} size="large" color="#0000ff" />
            )}

            {!post.loading && post.error ? (
                <Text>Error: {post.error}</Text>
            ) : null}

            {!post.loading && post.posts.length > 0 ? (
                <View>
                    {post.posts.map((post, index) => (
                        <Text style={styles.postItem} key={index}>{post.title}</Text>
                    ))}

                </View>
            ) : null}


            <TextInput
                style={styles.input}
                placeholder="Enter new post title"
                value={newPostTitle}
                onChangeText={(text) => setNewPostTitle(text)}
            />


            <Button
                title={addingPost ? "Adding Post..." : "Add Post"}
                onPress={handleAddPost}
                disabled={addingPost}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    postItem: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 8,
        paddingLeft: 8,
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
});
