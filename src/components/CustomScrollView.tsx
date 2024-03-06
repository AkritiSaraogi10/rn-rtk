import React, {useRef} from 'react';
import {
  DimensionValue,
  Keyboard,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

interface ICustomScrollViewProps {
  children: JSX.Element;
  height: DimensionValue;
}

const CustomScrollView = ({children, height}: ICustomScrollViewProps) => {
  const lastScrollPosition = useRef(0);
  const styles = StyleSheet.create({
    container: {height: height ?? '100%', backgroundColor: 'white'},
  });
  return (
    <>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps="handled"
          onScrollBeginDrag={event => {
            const currentScrollPosition = event.nativeEvent.contentOffset.y;
            if (currentScrollPosition > lastScrollPosition.current) {
              if (Keyboard.isVisible()) {
                Keyboard.dismiss();
              }
            }
            lastScrollPosition.current = currentScrollPosition;
          }}>
          {children}
        </ScrollView>
      </View>
    </>
  );
};

export default CustomScrollView;
