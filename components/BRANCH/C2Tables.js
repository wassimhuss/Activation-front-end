import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import data from '../../data/HomeButtons';
import Cards3 from '../cardTable'
import { useSelector } from 'react-redux';
const C2Tables = ({navigation}) => {
  const c2Tables = useSelector(state => state.Tables.c2Tables)
  const navigate =(x,item)=>{
    navigation.navigate(x,{item})
   // navigation.navigate(x)
  }
  return (
    <View style={{backgroundColor:"dimgrey",flex:1,justifyContent:"center"}}>
    <FlatList
       style={{backgroundColor:'black'}}
       data={c2Tables}
       renderItem={
           ({item}) => {
           return (
             <Cards3 Title ={item.TABLE_NAME} type={item.iconType} name={item.iconName}  navtitle={item.navigation} navigateTo={navigate} cNb={item.NB_OF_TYPE_C}
             aNb={item.NB_OF_TYPE_A}
             />
           )
         }
       }
       keyExtractor={(item) => item.TABLE_ID}
       //horizontal
       numColumns={2}
       //showsHorizontalScrollIndicator={false}
     />
 </View>
  );
};

export default C2Tables;

const styles = StyleSheet.create({});
