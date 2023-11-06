import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

export default function lastBody() {
  return (
    <View style={styles.container}>
        <ScrollView></ScrollView>
      <Text style={styles.header}>Đơn đã đặt</Text>
      <View style={styles.subContainer}>
            <Text style={styles.subHeader}>Lorem ipsum dolor sit amet consetetur</Text>
            <Text style={styles.centerText}>Phường 4, Quận 2, Tp.Hồ Chí Minh</Text>
            <View style={{flexDirection:'row',alignItems:"center"}}>
                <Text style={styles.centerText1}>4.572.012đ </Text>
                <View style={{width: 4, height: 4,backgroundColor:"#707070",borderRadius:100,marginLeft:16,marginRight:4}}></View>
                <Text style={styles.centerText2}>12/12/2022</Text>
            </View>
            
            <View style={{marginTop:18,width: 116,height: 20,backgroundColor:"#AF52DE29",left:16,borderRadius:5,alignItems:'center'}}>

            <Text style={styles.LastText}>Đang vận chuyển</Text>

            </View>
            
      </View>
      <View style={styles.subContainer}>
            <Text style={styles.subHeader}>Quầy thuốc Tâm Đức</Text>
            <Text style={styles.centerText}>Phường 4, Quận 2, Tp.Hồ Chí Minh</Text>
            <View style={{flexDirection:'row',alignItems:"center"}}>
                <Text style={styles.centerText1}>4.572.012đ </Text>
                <View style={{width: 4, height: 4,backgroundColor:"#707070",borderRadius:100,marginLeft:16,marginRight:4}}></View>
                <Text style={styles.centerText2}>12/12/2022</Text>
            </View>
            
            <View style={{marginTop:18,width: 76,height: 20,backgroundColor:"#FF950029",left:16,borderRadius:5,alignItems:'center'}}>

            <Text style={{color:"#FF9500"}}>Chờ duyệt</Text>

            </View>
            
      </View>
      <View style={styles.subContainer}>
            <Text style={styles.subHeader}>Quầy thuốc Tâm Đức</Text>
            <Text style={styles.centerText}>Phường 4, Quận 2, Tp.Hồ Chí Minh</Text>
            <View style={{flexDirection:'row',alignItems:"center"}}>
                <Text style={styles.centerText1}>4.572.012đ </Text>
                <View style={{width: 4, height: 4,backgroundColor:"#707070",borderRadius:100,marginLeft:16,marginRight:4}}></View>
                <Text style={styles.centerText2}>12/12/2022</Text>
            </View>
            
            <View style={{marginTop:18,width: 68,height: 20,backgroundColor:"#007FFF29",left:16,borderRadius:5,alignItems:'center'}}>

            <Text style={{color:"#007FFF"}}>Đóng gói</Text>

            </View>
            
      </View>
      <View style={styles.subContainer}>
            <Text style={styles.subHeader}>Quầy thuốc Tâm Đức</Text>
            <Text style={styles.centerText}>Phường 4, Quận 2, Tp.Hồ Chí Minh</Text>
            <View style={{flexDirection:'row',alignItems:"center"}}>
                <Text style={styles.centerText1}>4.572.012đ </Text>
                <View style={{width: 4, height: 4,backgroundColor:"#707070",borderRadius:100,marginLeft:16,marginRight:4}}></View>
                <Text style={styles.centerText2}>12/12/2022</Text>
            </View>
            
            <View style={{marginTop:18,width: 59,height: 20,backgroundColor:"#34C75929",left:16,borderRadius:5,alignItems:'center'}}>

            <Text style={{color:"#34C759"}}>Đóng gói</Text>

            </View>
            
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        
    left: 0,
    width: "100%",
    height: 533+144,
    backgroundColor: '#FFFFFF',
    opacity: 1,
 

    },
    header:{
        height:21,
        fontSize:18,
        left:21,
        height:20,
        marginTop:40,
        fontWeight:"bold",
        color:"#141414",
    },
    subContainer:{
        width: 333,
        height: 128,
        backgroundColor: '#FFFFFF',
        elevation: 6, // Tạo bóng đổ trong Android
        borderRadius: 12,
        marginHorizontal:21,
        marginVertical:12,
    },
    subHeader:{
        left:16,
        fontWeight:"bold",
        fontSize:16,
        marginTop:16,
        color:"#141414",

    },
    centerText:{
        left:16,
        fontSize:14,
        color:"#707070",
        textAlign:"left",
        height:17,
        opacity: 1
    },
    centerText1:{

        fontSize:14,
        left:16,
        color:"#707070",
        textAlign:"left",
        height:17,
        opacity: 1
    },
    centerText2:{
        fontSize:14,
       
        color:"#707070",
    },
    LastText:{
        fontSize:12,
        color:"#AF52DE",
        textAlign: "left",
        fontWeight:"600" ,
        height: 15
    }
})