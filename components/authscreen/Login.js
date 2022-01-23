import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/bruce';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as functions from '../../api/APIs';
import * as actions from '../../store/actions/Actions';
import {useDispatch, useSelector} from 'react-redux';
const Login = ({navigation}) => {
  const multiSet = async (username, pin) => {
    const firstPair = ['username', username];
    const secondPair = ['pin', pin];
    try {
      await AsyncStorage.multiSet([firstPair, secondPair]);
    } catch (e) {
      //save error
    }
  };
    const Mytables = useSelector(state => state.Tables.Tables)
    const isauth = useSelector(state => state.auth.isAuth)
    
    const dispatch = useDispatch();
    const allTablesHandler = TABLES =>{
        dispatch(actions.getTables(TABLES));
      }
      const ActionAuth = data =>{
        alert( "login successful")
        dispatch(actions.loginUser(data));
        multiSet(username,pin)
        navigation.replace('ALLapp')
      }
      async function getTables(ownerID){
        result = await functions.Get_Table_By_OWNER_ID(ownerID);
        if (result !== null && result !== undefined) {
          allTablesHandler(result);
        }
      }
      async function auth(ownerID,username,password){
        result = await functions.Get_Authenticate(ownerID,username,password);
        if (result.userData !== null && result !== undefined) {
          ActionAuth(result);
        }
      }
    const [username, setUsername] = useState("");
    const [pin, setPin] = useState("");
    async function fetchData(ownerID) {
        let d = await functions.Get_Table_By_OWNER_ID(ownerID);
         console.log("my data  : " +JSON.stringify(d));
      }
    useEffect(() => {
          //fetchData(1);
          getTables(1)
    }, []);
    
    return (
        <View style={{backgroundColor:"dimgrey",flex:1,justifyContent:"center"}}>
            <Text style={{justifyContent:"center",alignSelf:'center',fontSize:30,color:"white",marginBottom:"40%",marginTop:-100}}>Login to continue</Text>
             <TextInput
            textAlign='center'
            placeholderTextColor={'white'}
            placeholder='username'
             style={styles.input}
             onChangeText={text => setUsername(text)}
    />
     <TextInput
     textAlign='center'
     keyboardType='number-pad'
            placeholderTextColor={'white'}
            placeholder='pin'
             style={styles.input}
             onChangeText={text => setPin(text)}
    />
    <View style={{alignItems:"center",justifyContent:"center",marginTop:"10%",width:"100%"}}>
    <AwesomeButtonRick
    width={200} 
     progress
     
     onPress={(next) => { 
         
        setTimeout(() => {
          next(() => {
            //  navigation.replace('ALLapp')
             auth(1,username,pin)
          });
        }, 1000);
       
      }}
    type="primary">Login</AwesomeButtonRick>
    </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    input:{
        marginTop:"5%",
    backgroundColor:"dimgrey",
    marginHorizontal:15,
    height:60
    ,borderRadius:9,
    borderWidth:2,
    borderColor:"white",
    fontSize:20,
    fontWeight: 'bold',
    color:"white",
   // textAlign:"center"
   textAlignVertical:"top"
}
})
