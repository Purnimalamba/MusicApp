import {View, Image} from 'react-native';
import {styles} from './SplashScreenStyle';
import React, {useEffect} from 'react';
import IMAGE_DATA from '../../Utils/ImageUtils';
import {CommonActions} from '@react-navigation/native';

export default function SplashScreenComponent(props) {
  // reset navigation and remove splash from stack
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{name: 'HomeScreen'}],
  });

  useEffect(() => {
    setTimeout(() => props.navigation.dispatch(resetAction), 2000);
  });

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={IMAGE_DATA.musicImage} />
    </View>
  );
}
