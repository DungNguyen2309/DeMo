import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={{fontWeight:"bold"}}>Trần Minh Tâm</Text>
      </View>
      <View>
        <Image style={styles.headerImage} source={require('./assets/avt.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    top: 44,
    left: 0,
    width: '100%',
    height: 56,
    backgroundColor: '#FFFFFF',
    opacity: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContent: {
    marginHorizontal: 20,
    marginVertical: 8,
    fontSize: 40,
    width: 144,
    height: 24,
    
  },
  headerImage: {
    width: 40,
    height: 40,
    right:20,
    borderRadius: 100,
    borderColor: 'green',
  },
});