import { StyleSheet, Text, View, Image,ScrollView,SafeAreaView } from 'react-native'
import React from 'react'
import Header from './header.js'
import Body from './body.js'
import SaleBody from './saleBody.js'
import MySwiper from './wiper.js'
import LastBody from './lastBody.js'
import BottomNavigationBar from './botombar.js'
export default function App() {
  const slides = [
    {
      text1: 'CHƯƠNG TRÌNH KHUYẾN MÃI',
      text2: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
      text3: '112 sản phẩm',
    },
    {
      text1: 'Slide 2 Text 1',
      text2: 'Slide 2 Text 2',
      text3: 'Slide 2 Text 3',
    },
    {
      text1: 'Slide 3 Text 1',
      text2: 'Slide 3 Text 2',
      text3: 'Slide 3 Text 3',
    },
   
  ];
  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Header />
      <Body />
      <SaleBody/>
      <View>
      <MySwiper slides={slides}/>
      </View>
      <LastBody/>
      
      </ScrollView>
      <BottomNavigationBar/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // flexDirection:"column"
  },
 

})