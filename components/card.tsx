import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface User {
    id: number;
    name: string;
    email: string;
    company: { name: string };
}

interface CardProps {
    user: User;
}

const Card: React.FC<CardProps> = ({ user }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <Text style={styles.company}>{user.company.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 16,
        color: '#666',
    },
    company: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
});

export default Card;
