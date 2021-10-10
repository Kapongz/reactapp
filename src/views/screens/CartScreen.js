import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Alert, Modal, TouchableOpacity, ToastAndroid } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';
import foodsCart from '../../consts/foodscart';

const CartScreen = ({ navigation }) => {
  const [showMessage, SetshowMessage] = useState(false);


  const showAlert = () => {
    SetshowMessage(true);
  }
  const toast = () => {
    ToastAndroid.show('ຟັງຊັນຍັງບໍ່ເປີດໃຊ້ງານ', ToastAndroid.LONG)
  }

  const CartCard = ({ item }) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{ height: 80, width: 80 }} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{ fontFamily: 'NotoSansLao-Bold', fontSize: 17 }}>{item.name}</Text>
          <Text style={{ fontSize: 14, fontFamily: 'NotoSansLao-Regular', color: COLORS.grey }}>
            {item.ingredients}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.price}₭</Text>
        </View>
        <View style={{ marginRight: 20, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>2</Text>
          <TouchableOpacity
            onPress={toast}
          >
            <View style={style.actionBtn}>
              <Icon name="remove" size={25} color={COLORS.white} style={{ marginEnd: 10, marginTop: 5 }} />
              <Icon name="add" size={25} color={COLORS.white} style={{ marginTop: 5 }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 22, fontFamily: 'NotoSansLao-Bold' }}>ສິນຄ້າເຮົາ</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={foodsCart}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{ fontSize: 20, fontFamily: 'NotoSansLao-Bold' }}>
                ລາຄາທັງໝົດ
              </Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>124.000₭</Text>
            </View>
            <Modal
              visible={showMessage}
              onRequestClose={() => SetshowMessage(false)}
              transparent
              animationType='fade'
              hardwareAccelerated
            >
              <View style={style.centerView}>
                <View style={style.MessageModal}>
                  <View style={style.massegetitle}>
                    <Text style={style.text}>ຂໍຂອບໃຈ!</Text>
                  </View>
                  <View style={style.messagebody}>
                    <Text style={style.text2}>ທ່ານໄດ້ສັ່ງຊື້ອາຫານສຳເລັດແລ້ວ.</Text>
                  </View>
                  <View style={style.messageimage}>
                    <Image
                      source={require('../../assets/welcom.png')}
                      style={{
                        height: 150,
                        width: 210,
                      }}
                    />
                  </View>
                  <Pressable
                    onPress={() => SetshowMessage(false)}
                    style={style.massagebutton}
                    android_ripple={{ color: '#F9813A' }}
                  >
                    <Text style={style.text3}>ຕົກລົງ</Text>
                  </Pressable>

                </View>
              </View>
            </Modal>
            <View style={style.container}>
              <PrimaryButton title="ຈ່າຍເລີຍ" onPress={showAlert} />
            </View>
          </View>
        )}
      />
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
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 35,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  container: {
    marginHorizontal: 80

  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'

  },
  MessageModal: {
    width: 300,
    height: 310,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#F9813A',
    borderRadius: 20,
  },
  massegetitle: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9813A',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

  },
  text: {
    fontFamily: 'NotoSansLao-Bold',
    fontSize: 35,
    justifyContent: 'center'
  },
  text2: {
    fontFamily: 'NotoSansLao-Regular',
    fontSize: 18,
    position: 'absolute'

  },
  text3: {
    fontFamily: 'NotoSansLao-Regular',
    fontSize: 18,


  },
  messageimage: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center'
  },
  messagebody: {
    height: 20,
    justifyContent: 'flex-start',
    marginTop: 8,
    alignItems: 'center'
  },
  massagebutton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 1,
    borderColor: '#F9813A'

  }

});

export default CartScreen;
