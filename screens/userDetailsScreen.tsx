import React, {useEffect} from 'react';
import {Button, View, Text} from 'react-native';
import {RootStackParamList} from '../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import UserService from '../network/services/user/userService';
import {useDispatch, useSelector} from 'react-redux';

type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'UsersDetails'
>;

const DetailsScreen: React.FC<DetailsScreenProps> = ({route, navigation}) => {
  const {userId} = route.params;
  const dispatch = useDispatch();
  const usersData = useSelector((state: any) => state.users.getuser);
  const loading = useSelector((state: any) => state.users.loading);
  const error = useSelector((state: any) => state.users.error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await UserService.getUserByID(dispatch, userId);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchData();
  }, [dispatch, userId]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={{padding: 10}}>
      <Text>Details Screen</Text>
      <Text>Item ID: {userId}</Text>
      <Text>Name: {usersData.name}</Text>
      <Text>Street: {usersData.address?.street}</Text>
      <Text>Suite: {usersData.address?.suite}</Text>
      <Text>City: {usersData.address?.city}</Text>

      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to post screen"
        onPress={() =>
          navigation.navigate('Posts', {
            userId: userId,
          })
        }
      />
    </View>
  );
};

export default DetailsScreen;
