import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import SubBodyItem from './SubBodyItem';
import Dolar from "./assets/Dolar.svg";
import Person from "./assets/Person.svg";
import IconGH from "./assets/iconGH.svg";

export default function Body() {
  return (

      
      <View style={styles.Body1}>
      <Text style={styles.Body1Header }>Tháng 9, 2022</Text>
      <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}  style={styles.ScrollStyle} >
      <SubBodyItem 
      imageSource={<Dolar width={16} height={16}/>}
      textTitle="Doanh số"
      textValue1="932"
      textValue2="triệu"
      />
       <SubBodyItem 
      imageSource={<Person width={16} height={16}/>}
      textTitle="Khách hàng mới"
      textValue1="12"
      textValue2=""
      />
       <SubBodyItem 
      imageSource={<IconGH width={16} height={16}/>}
      textTitle="Đơn đã đặt"
      textValue1="112"
      textValue2=""
      />
      </ScrollView>
      
    </View>
  
   
  );
}

const styles = StyleSheet.create({
  Body1: {
    top: 45,
    left: 0,
    width: '100%',
    height: 184,
    //flexDirection:"row",
    justifyContent:"space-between",
   
  
  },
  Body1Header: {
    width: 112,
    height: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  ScrollStyle:{
   
    
  }
});