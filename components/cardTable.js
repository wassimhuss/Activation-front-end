import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
FontAwesome.loadFont();
SimpleLineIcons.loadFont();
const cardTable = ({navigateTo}) => {
    return (
        <TouchableOpacity onPress={()=>navigateTo('TableDetail')}  style={{ flex:1}}>
        <View style={styles.Container}>
            <View style={{flex:1 , flexDirection:"row"}}>
                <View style={{flex:1 , justifyContent:"space-evenly",flexDirection:'column'}}>
                <Text style={styles.Title} >
               Table Name
            </Text>
            <Text style={styles.Title} >
                {' '}nb c : 50
            </Text>
            <Text style={styles.Title} >
                {' '}nb a : 100
            </Text>
                </View>
                <View style={{justifyContent:"flex-end",marginBottom:"10%",marginRight:"5%"}}>
                <FontAwesome name={"battery-quarter"} size={35} color={'red'} />
                <Text style={{...styles.Title,color:"red"}} >{" "}20%</Text>
                </View>
            </View>
           
            <View>
        </View>
        </View>
        </TouchableOpacity>
    )
}

export default cardTable

const styles = StyleSheet.create({
    Container: {
        backgroundColor:"dimgray",
        width:"85%",
        height: 160,
        borderRadius:9,
        margin:18,
         justifyContent:"space-evenly",
         //alignItems:"center",
        borderBottomColor:"mediumspringgreen",
        borderBottomWidth:4,
        borderBottomLeftRadius:9


      },
      Title:{
          color: "white",
          fontSize:20
      }
})
