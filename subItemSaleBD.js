import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ICKH from './assets/iconKH.svg'
import IcGH from "./assets/GioHang.svg"
import icDatHang from './assets/IcDatHang.svg'
export default function subItemSaleBD({svgUrl,textValue}) {
  return (
    <View style={styles.container}>
        <View style={styles.icon}>{svgUrl}</View> 
      <Text style={ styles.TextStyle}>{textValue}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: 208,
        height: 64,
        
        borderRadius: 12,
        borderWidth:1,
        borderColor:"#DDDDDD",
        opacity: 1,
        flexDirection:"row",
        
        alignItems:"center",
        marginHorizontal:20,
        
    },
    icon:{
        marginHorizontal:20,
        marginVertical:20,
        
    },
    TextStyle:{
        
        left:5,
        fontSize:16,
    }
})