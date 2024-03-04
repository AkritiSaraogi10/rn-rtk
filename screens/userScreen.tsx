import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import UserService from '../network/services/user/userService';
import UserInterface from '../interface/userInterface';
import {useDispatch, useSelector} from 'react-redux';

const UserView: React.FC = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const errors = useSelector((state: any) => state.global.error);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await UserService.getAllUsers(dispatch);
        setUsers(usersData.result);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchData();
  }, []);
  console.log(errors);
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

export default UserView;
