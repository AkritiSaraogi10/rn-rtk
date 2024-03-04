// // UserView.tsx
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from './userSlice';
// import { RootState } from '../../app/store';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import Card from '../../components/card';

// const UserView: React.FC = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state: RootState) => state.user.users);
//   const status = useSelector((state: RootState) => state.user.status);
//   const error = useSelector((state: RootState) => state.user.error);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchUsers() as any);
//     }
//   }, [status, dispatch]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>User List</Text>
//       {status === 'loading' && <Text>Loading...</Text>}
//       {status === 'failed' && <Text>Error: {error}</Text>}
//       {status === 'succeeded' && (
//         <FlatList
//           data={users}
//           keyExtractor={(user) => user.id.toString()}
//           renderItem={({ item }) => <Card user={item} />}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   item: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
// });

// export default UserView;
// UserView.tsx
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import UserService from '../../network/services/userService';
import UserInterface from '../../interface/userInterface';
import {useDispatch, useSelector} from 'react-redux';

const UserView: React.FC = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [error, setError] = useState<UserInterface[]>([]);
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
