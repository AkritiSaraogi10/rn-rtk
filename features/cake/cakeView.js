import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';

export const CakeView = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Number of cakes - {numOfCakes}</Text>
            <Button onPress={() => dispatch(ordered())} title='Order Cake' style={styles.button} />
            <Button onPress={() => dispatch(restocked(5))} title='Restock Cakes' style={styles.button} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
    button: {
        marginTop: 10,
    },
});
