import { StyleSheet, Text, View , ScrollView} from 'react-native'
import ItemBd from "./subItemSaleBD"
import IconKH from "./assets/iconKH.svg"
import IcGH from "./assets/GioHang.svg"
import IcDatHang from './assets/IcDatHang.svg'
import IcVanChuyen from './assets/icVanCh.svg'
export default function saleBody() {
  return (
    <View style={styles.SaleContainer}>
        
            <Text style={{fontWeight:400,left:20, fontSize:15}}>Bán hàng</Text>
        <View style={{flexDirection:"row"}}>
            <ItemBd svgUrl={<IconKH width={16} height={16}/>}s
            textValue={'Khách hàng'}
            />
            <ItemBd svgUrl={<IcGH width={16} height={16}/>}
                textValue={'Đơn hàng'}
            />

        </View>
        <View style={{top:20,fontSize:15}}>
            <ItemBd
            svgUrl={<IcDatHang width={16} height={16}/>}
            textValue={'Đăt hàng'}
            />
        </View>
        <View style={{flexDirection:"column", paddingTop:20,justifyContent:"space-between"}}> 
            <Text style={{fontWeight:400, top:10,left:20}}>
                Vận chuyển 
            </Text>
            <View style={{top:20}}>
                <ItemBd 
                svgUrl={<IcVanChuyen width={16} height={16}/>}
                textValue={'Vận chuyển'}
                />
            </View>
        </View>

     
      
       

    </View>
  )
}

const styles = StyleSheet.create({
    SaleContainer :{
        top:55,
        width:"100%",
        height:334,
       
        flexDirection:"column"
       

    }
})