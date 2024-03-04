import React, {useState} from 'react';
import {Modal, Text, View, Button} from 'react-native';

interface CustomModalProps {
  message: string;
  description: string;
  onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({
  message,
  description,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const closeModal = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={closeModal}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{backgroundColor: 'white', padding: 20, borderRadius: 10}}>
          <Text>{message}</Text>
          <Text>{description}</Text>
          <Button title="Close" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
