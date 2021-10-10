import React , {useState} from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image,TouchableOpacity,ToastAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { SecondaryButton } from '../components/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import foods from '../../consts/foods';

import { useNavigation, useRoute } from '@react-navigation/native';


const DetailsScreen = ({ navigation, route }) => {
  const item = route.params;

  const [color, setColor]= useState(true)
  const onClike = ()=>{
    setColor(!color)
    color?
    ToastAndroid.showWithGravity('ຖືກໃຈ', ToastAndroid.LONG,ToastAndroid.TOP
    )
    :
    ToastAndroid.showWithGravity('ຍົກເລີກຖືກໃຈ', ToastAndroid.LONG,ToastAndroid.TOP)
   }
   

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 22, fontFamily: 'NotoSansLao-Bold' }}>ລາຍລະອຽດ</Text>
      </View>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={item.image} style={{ height: 220, width: 220 }} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{ fontSize: 30, fontFamily: 'NotoSansLao-Bold', color: COLORS.white }}>
              {item.name}
            </Text>
            <View style={style.iconContainer}>
              <TouchableOpacity onPress={()=>onClike()}>
              <FontAwesomeIcon name={color ? 'heart-o' : 'heart'} color={color ? '#F9813A' : '#FF0000'}  size={25} />
              
              </TouchableOpacity>
            </View>
          </View>
          <Text style={style.detailsText}>
            ຂໍ້ຄວາມນີ້ເປັນພຽງຂໍ້ຄວາມຕົວຢ່າງທີ່ນຳສະເໜີລາຍລະອາດຂອງອາຫານ ,
            ອາຫານຂອງພວກເຮົາເເມ່ນຖືກຕ້ອງຕາມຫຼັກອະນາໄມ ມີຄຸນນະພາບດີ ສະອາດ
            ພວກເຮົາຈັດນຳສົ່ງອາຫານໃຫ້ທ່ານໄດ້ຢ່າງວ່ອງໄວ ບໍ່ມີຕົກເຫ່ຍເສຍຫາຍ ພຽງແຕ່ໃຊ້ເວລາ 15-20 ນາທີ
            ທ່ານກໍສາມາດຮັບປະທານອາຫານທີ່ທ່ານສັ່ງຈາກພວກເຮົາໄດ້ ,ຖ້າທ່ານຕ້ອງສັ່ງການທ່ານສາມາດຄລິກໃສ່ປຸ່ມດ້ານລຸ່ມນີ້ໄດ້ເລີຍ.
          </Text>
          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <SecondaryButton title="ຕ້ອງການສິນຄ້ານີ້" onPress={() => navigation.navigate('CartScreen')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
    fontFamily: 'NotoSansLao-Regular'
  },
});

export default DetailsScreen;
