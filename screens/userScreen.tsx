import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import UserService from '../network/services/user/userService';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation';

type UserScreenProps = NativeStackScreenProps<RootStackParamList, 'Users'>;

const UserScreen: React.FC<UserScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users.data);
  const loading = useSelector((state: any) => state.users.loading);
  const error = useSelector((state: any) => state.users.error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await UserService.getAllUsers(dispatch);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchData();
  }, []);

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
      <Text>User List</Text>
      <FlatList
        data={users}
        keyExtractor={user => user.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('UsersDetails', {userId: item.id})
            }>
            <View>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default UserScreen;
