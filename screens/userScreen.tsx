import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import UserService from '../network/services/user/userService';
import UserInterface from '../interface/userInterface';
import {useDispatch, useSelector} from 'react-redux';
import CustomScrollView from '../src/components/CustomScrollView';
import FilterByComponent from '../src/components/FilterByComponent';

const initialFilters = {
  active: {
    key: 'active',
    label: 'Active',
    isSelected: true,
    hasBottomSheet: false,
    isVisible: false,
    filterByOptions: [],
  },
  type: {
    key: 'type',
    label: 'Type',
    hasBottomSheet: true,
    isSelected: false,
    isVisible: false,
    filterByOptions: [
      {text: 'Milk Cow 1', subText: 855, isSelected: false},
      {text: 'Milk Cow 2', subText: 855, isSelected: false},
      {text: 'Milk Cow 3', subText: 855, isSelected: false},
      {text: 'Milk Cow 4', subText: 855, isSelected: false},
    ],
  },
  inActive: {
    key: 'inActive',
    label: 'InActive',
    isSelected: true,
    hasBottomSheet: false,
    isVisible: false,
    filterByOptions: [],
  },
  feedings: {
    key: 'feedings',
    label: 'Feedings',
    isSelected: false,
    hasBottomSheet: false,
    isVisible: false,
    filterByOptions: [],
  },
};

const UserScreen: React.FC = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const errors = useSelector((state: any) => state.global.error);
  const dispatch = useDispatch();
  const [filters, setFilters] = useState(initialFilters);

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

  const handleClick = (
    key: string,
    type?: 'cancel' | 'clearAll' | 'showAll' | 'checkbox',
    index?: number,
  ) => {
    const prevFilter = filters[key as keyof typeof filters];
    if (type === 'cancel') {
      prevFilter.isVisible = false;
      prevFilter.isSelected = false;
    } else if (type === 'clearAll') {
      const prevCheckboxes = prevFilter.filterByOptions.map((option) => ({ ...option, isSelected: false  }));
      prevFilter.filterByOptions = prevCheckboxes;
    } else if (type === 'showAll') {
      prevFilter.isVisible = false;
      prevFilter.isSelected = true;
    } else if (type === 'checkbox') {
      const prevCheckBoxes = prevFilter.filterByOptions;
      if (index !== undefined){
        const prevCheckBox = prevFilter.filterByOptions[index];
        prevCheckBox.isSelected = !prevCheckBox.isSelected;
        prevCheckBoxes[index] = prevCheckBox;
      }
    } else {
      if (prevFilter.hasBottomSheet) {
        prevFilter.isVisible = true;
      } else {
        prevFilter.isSelected = !prevFilter.isSelected;
      }
    }
    setFilters(prev => ({...prev, [key]: prevFilter}));
  };

  return (
    <View>
      <Text>User List</Text>
      <FlatList
        data={users}
        keyExtractor={user => user.id.toString()}
        renderItem={({item}) => <Text key={item.id}>{item.name}</Text>}
      />
      <CustomScrollView
        height={40}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        <View style={{flexDirection: 'row', gap: 10, paddingHorizontal: 10}}>
          {Object.values(filters).map((filter, index) => (
            <FilterByComponent
              key={index}
              handleClick={handleClick}
              label={filter.label}
              hasBottomSheet={filter.hasBottomSheet}
              isSelected={filter.isSelected}
              isVisible={filter.isVisible}
              id={filter.key}
              filterOptions={filter.filterByOptions}
            />
          ))}
        </View>
      </CustomScrollView>
    </View>
  );
};

export default UserScreen;
