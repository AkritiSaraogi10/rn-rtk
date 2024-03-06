import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import UserService from '../network/services/user/userService';

const UserScreen: React.FC = () => {
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
  console.log('error in tsx', error);

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
    <View>
      <Text>User List</Text>
      <FlatList
        data={users}
        keyExtractor={user => user.id.toString()}
        renderItem={({item}) => <Text key={item.id}>{item.name}</Text>}
      />
    </View>
  );
};

export default UserScreen; 
