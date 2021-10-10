import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image,ToastAndroid } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import foodslike from '../../consts/foodslike';
import DetailsScreen from './DetailsScreen';
import foods from '../../consts/foods';

 
const FavoriteScreen = ({navigation}) => {
  


    const toastMessage =()=>{
        ToastAndroid.show('ຟັງຊັນຍັງບໍ່ເປີດໃຊ້ງານ', ToastAndroid.LONG)
    }
    
    const Favorite = ({ item }) => {
        return (
            <View style={style.favorite}>
                <Image source={item.image} style={{ height: 80, width: 80 }} />
                <View style={{ 
                    height: 100,
                    marginLeft: 10,
                    paddingVertical: 20,
                    flex: 1, 
                }}>
                    <Text style={{fontFamily:'NotoSansLao-Bold',fontSize: 18}}>{item.name}
                    </Text>
                    <Text style={{fontSize: 16, fontWeight: '400'}}>{item.price}₭</Text>
                    <View style={style.icos}>
                    <Icon name="delete" size={50} color={COLORS.light} onPress={()=> toastMessage()}  />
                    </View>
                </View>
            </View>
        );
    };
    return (
        <SafeAreaView
            style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <View style={style.header}>
                <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack}/>
                <Text style={{ fontSize: 22, fontFamily: 'NotoSansLao-Bold' }}>ຖືກໃຈ</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
                data={foodslike}
                renderItem={({ item }) => <Favorite item={item}  />}
                
            />
        </SafeAreaView>
    );
};
const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,

    },
    favorite: {
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icos:{
        width: 80,
        height: 80,
        borderRadius: 30,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginHorizontal: 180,
        marginTop: -60,
        

    }
   
    
});

export default FavoriteScreen;