import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Dolar from "./assets/Dolar.svg";
import Person from "./assets/Person.svg";
import iconGH from "./assets/iconGH.svg";

export default function SubBodyItem({ imageSource, textTitle, textValue1,textValue2 }) {
  
  return (
    <View style={styles.subBodyItem}>
      <View style={styles.iconDoLar}>
      {imageSource}
      </View>
      <Text style={styles.TextItem1}  >{textTitle}</Text>
        <View style={styles.TextItem2}>
          <Text >{textValue1}</Text>
          <Text > {textValue2}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subBodyItem: {
    width: 130,
    height: 124,
    marginVertical: 20,
    marginHorizontal: 21,
    paddingEnd: 24,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000029',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 12,
    elevation: 4,
    opacity: 1,
    flexDirection:"column",

  },
  iconDoLar: {
    width: 32,
    height: 32,
    borderRadius: 32,
    marginHorizontal: 14,
    marginVertical: 20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextItem1:{
   
    marginHorizontal:12,
    fontSize:11,
    fontStyle:"normal",
   
    textAlign:"left"
  },
  TextItem2:{textAlign:"left",
    flexDirection:"row",
    marginHorizontal:16,
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderColor: 'green',
  },
});
