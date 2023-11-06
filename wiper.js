import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const MySwiper = ({ slides }) => {
  return (
    <View style={{height:254, width:"100%"}}>
        <Swiper loop={false} showsPagination>
        {slides.map((slide, slideIndex) => (
            <View key={slideIndex} style={styles.slide}>
            <Text style={styles.text1}>{slide.text1}</Text>
            <Text style={styles.text2}>{slide.text2}</Text>
            <Text style={styles.text3}>{slide.text3}</Text>
            </View>
        ))}
         </Swiper>

    </View>
    
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 12,
    fontWeight: 'bold',
    color:"#707070",
    position: 'absolute',
    top: 20, // Vị trí cố định cho text1
    left: 21, // Vị trí cố định cho text1
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    width:330,
    textAlign: 'left',
    letterSpacing: 0,
    position: 'absolute',
    color:"#6066ED",
    top: 60, // Vị trí cố định cho text2
    left: 20, // Vị trí cố định cho text2
  },
  text3: {
    fontSize: 16,
    color:"#707070",
    position: 'absolute',
    top: 150,
    left: 20, 
  },
});

export default MySwiper;
