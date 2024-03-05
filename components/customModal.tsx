import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setErrorToast} from '../reducers/globalSlice';
import {Portal, Modal, PaperProvider} from 'react-native-paper';

// interface CustomModalProps {
//   message: string;
//   description: string;
//   onClose: () => void;
// }

const CustomModal: React.FC = ({}) => {
  const [isVisible, setIsVisible] = useState(true);
  const error = useSelector((state: any) => state.global.error);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setErrorToast({status: false, message: ''}));
    // setIsVisible(false);
    // onClose();
  };
  console.log('custom---> ', error);

  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#7C9B32',
      padding: 10,
      borderRadius: 20,
      width: 70,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#fff',
    },
    buttonContainer: {
      marginTop: 40,
      alignItems: 'center',
    },
  });

  return (
    // <PaperProvider>
    <Portal>
      <Modal visible={error.status}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#DEE6C5',
              padding: 20,
              borderRadius: 10,
              height: 250,
              width: 250,
            }}>
            <Text style={{color: 'black'}}>{error.messageText}</Text>
            <Text>{error.code}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={closeModal}>
                <Text style={styles.buttonText}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </Portal>
    // </PaperProvider>
  );
};

export default CustomModal;
