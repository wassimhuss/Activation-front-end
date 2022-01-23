import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import data from '../../data/HomeButtons';
import CardExtension from '../CardExtension';

const C2Extension = () => {
  return (
    <View style={{backgroundColor:"dimgrey",flex:1,justifyContent:"center"}}>
           <FlatList
      style={{backgroundColor:'black'}}
              data={data}
              renderItem={
                  ({item}) => {
                  return (
                    <CardExtension Title ={item.title} type={item.iconType} name={item.iconName}  navtitle={item.navigation}/>
                  )
                }
              }
              keyExtractor={(item) => item.id}
              //horizontal
              numColumns={1}
              //showsHorizontalScrollIndicator={false}
            />
        </View>
  );
};

export default C2Extension;

const styles = StyleSheet.create({});
