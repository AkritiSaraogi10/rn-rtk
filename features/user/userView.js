import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './userSlice';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export const UserView = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>List of Users</Text>
            {user.loading && <ActivityIndicator size="large" color="#0000ff" />}
            {!user.loading && user.error ? <Text>Error: {user.error}</Text> : null}
            {!user.loading && user.users.length > 0 ? (
                <View>
                    {user.users.map((user) => (
                        <Text key={user.id}>{user.name}</Text>
                    ))}
                </View>
            ) : null}
        </View>
    );
};
const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    }, container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
});