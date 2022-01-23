import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
const splashscreen = ({navigation}) => {
    const isauth = useSelector(state => state.auth.isAuth)
    useEffect(() => {
        isauth ? 
        navigation.replace('ALLapp') 
        : 
        navigation.replace('Login') 
    }, []);
    
  return (
    <View style={{flex:1, backgroundColor:"black"}}>
      <Text></Text>
    </View>
  );
};

export default splashscreen;

const styles = StyleSheet.create({});
