import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import data from '../../data/HomeButtons';
import Cards3 from '../cardTable'
import { useSelector } from 'react-redux';
const C1Tables = ({navigation}) => {
  const c1Tables = useSelector(state => state.Tables.c1Tables)
  const navigate =(x,item)=>{
    navigation.navigate(x,{item})
   // navigation.navigate(x)
  }
  return (
    <View style={{backgroundColor:"dimgrey",flex:1,justifyContent:"center"}}>
    <FlatList
       style={{backgroundColor:'black'}}
       data={c1Tables}
       renderItem={
           ({item}) => {
           return (
             <Cards3 Title ={item.TABLE_NAME} type={item.iconType} name={item.iconName}  navtitle={item.navigation} navigateTo={navigate} cNb={item.NB_OF_TYPE_C}
             aNb={item.NB_OF_TYPE_A} item={item}/>
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

export default C1Tables;

const styles = StyleSheet.create({});
