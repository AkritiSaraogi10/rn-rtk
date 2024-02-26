import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './iceCreamSlice';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export const IcecreamView = () => {
    const [value, setValue] = React.useState(1);
    const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Number of ice creams - {numOfIcecreams}</Text>
            <Button onPress={() => dispatch(ordered())} title='Order Ice cream' style={styles.button} />
            <TextInput
                value={value.toString()}
                onChangeText={e => setValue(parseInt(e) || 0)}
                style={styles.input}
            />
            <Button onPress={() => dispatch(restocked(value))} title='Restock Ice creams' style={styles.button} />
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
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        marginTop: 10,
    },
});
