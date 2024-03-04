import React from 'react';
import {StyleSheet, View, Image, ImageBackground} from 'react-native';
import {useForm} from 'react-hook-form';
import {CustomInput} from '../components/FormInput';
import {Text} from 'react-native-paper';
import {CustomBtn} from '../components/btn';

export const VASLoginScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onForgot = () => {
    navigation.navigate('SignUpScreen');
  };

  const onLogin = (data: any) => {
    navigation.navigate('TabNav');
  };
  return (
    <View style={styles.sectionContainer}>
      <ImageBackground
        source={require('../assets/images/Rectangle1.png')}
        style={styles.BgImage}
        imageStyle={styles.img}>
        <View style={styles.loginTitle}>
          <Text style={styles.loginText} variant="headlineMedium">
            Welcome Back!
          </Text>
          <Text style={styles.loginText} variant="titleSmall">
            Log in using your personal info
          </Text>
        </View>

        <View style={styles.logo}>
          <Image source={require('../assets/images/LogoVASGreenLagre.png')} />
        </View>
      </ImageBackground>

      <View style={styles.customInput}>
        <View>
          <CustomInput
            control={control}
            name={'Email'}
            placeholder={'Enter Email ID'}
            label={'Email'}
            rules={{required: 'Email is required'}}
          />
        </View>

        <View>
          <CustomInput
            control={control}
            name={'Password'}
            placeholder={'Enter your Password'}
            label={'Password'}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password should be minimum of 6 char',
              },
            }}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.btnContianer}>
          <CustomBtn
            mode="contained"
            text="Log In"
            onPressMethod={handleSubmit(onLogin)}
            buttonTextColor="#ffffff"
          />

          <CustomBtn
            mode="text"
            text="Forgot your Password?"
            onPressMethod={onForgot}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    justifyContent: 'center',
    flex: 1,

    backgroundColor: '#FFFFFF',
  },
  btn: {
    width: '100%',
  },
  btnContianer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  customInput: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 100,
    marginHorizontal: 30,
  },
  loginText: {
    color: '#FFFFFF',
    textAlign: 'left',
    fontWeight: '700',
    marginVertical: 3,
  },
  loginTitle: {
    margin: 30,
    marginLeft: 30,
    paddingRight: 100,
    marginBottom: 50,
    paddingBottom: 20,
  },
  logo: {
    marginTop: 30,
    marginLeft: 30,
    paddingRight: 100,
  },
  BgImage: {
    flex: 1,
    justifyContent: 'center',
  },
  img: {
    resizeMode: 'stretch',
  },
});
