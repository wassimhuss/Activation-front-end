import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
Entypo.loadFont();
SimpleLineIcons.loadFont();
const CardExtension = ({Title,type,name,navigation,navtitle}) => {
    return (
        <TouchableOpacity onPress={()=>navigation(navtitle)} style={{justifyContent:"center",alignItems:"center"}}>
        <View style={styles.Container}>
            {/* <View style={{}}>
            {type=='Entypo'? 
            <Entypo name={name} size={35} color={'mediumspringgreen'} />
        : 
          <SimpleLineIcons name={name} size={30} color={'mediumspringgreen'}/>
        }
        </View> */}
            
        </View>
        </TouchableOpacity>
    )
}

export default CardExtension

const styles = StyleSheet.create({
    Container: {
          backgroundColor:"dimgray",
          width:350,
          height: 180   ,
          borderRadius:9,
          margin:18,
           justifyContent:"space-evenly",
           //alignItems:"center",
          borderBottomColor:"mediumspringgreen",
          borderBottomWidth:4,
          borderBottomLeftRadius:9

      },
})
