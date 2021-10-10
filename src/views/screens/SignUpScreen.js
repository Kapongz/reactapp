import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator,ToastAndroid } from 'react-native';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import STYLES from '../../consts/styles';
import firebase from '../components/firebase';

const toast=()=>{
  ToastAndroid.show("ຍັງບໍ່ເປີດໃຊ້ງານ",ToastAndroid.LONG)
}

export default class SignUpScreen extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      last: '',
      email: '',
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);

  }

  registerUser = () => {
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('ໃສ່ລາຍລະອຽດເພື່ອລົງທະບຽນ!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)

        .then((res) => {
          res.user.updateProfile({
            displayName: this.state.displayName,
            last: this.state.last

          })

          console.log('User registered successfully!')
          this.setState({
            isLoading: false,
            displayName: '',
            last: '',
            email: '',
            password: ''
          })
          this.props.navigation.navigate('SigninScreen')
        })
        .catch(error => this.setState({ errorMessage: error.message }))
    }
  }


  render() {
    if (this.state.isLoading) {
      return (
        <View style={style.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      )
    }
    return (
      <SafeAreaView
        style={{ backgroundColor: COLORS.white, flex: 1 }}>
        <View style={style.SigninScreen}>
          <Icon name="arrow-back-ios" size={28} onPress={() => this.props.navigation.goBack(null)} />
          <View style={{ marginHorizontal: 105 }}>
            <Text style={{ fontFamily: 'NotoSansLao-Bold', fontSize: 22 }}>ລົງ​ທະ​ບຽນ</Text>
          </View>
        </View>

        <ScrollView
          showsHorizontalScrollIndicator={false}
        >

          <View style={style.textsignup}>
            <Text style={{ fontSize: 35, fontWeight: 'bold', color: COLORS.primary }}>Delicious Food</Text>
            <Text style={{ fontSize: 31, fontWeight: 'bold', color: COLORS.light, marginTop: -8 }}>Delicious Food</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <View style={STYLES.inputContainer}>
              <TextInput placeholder="ຊື່" style={STYLES.inputsignUp} onChangeText={(val) => this.updateInputVal(val, 'displayName')} value={this.state.displayName} />
              {/* <TextInput placeholder="ນາມສະກຸນ" style={STYLES.inputsignUp} onChangeText={(val) => this.updateInputVal(val, 'displayName')} value={this.state.displayName} /> */}
              <View style={{ width: 10 }} />
              <TextInput placeholder="ນາມສະກຸນ" style={STYLES.inputsignUp} onChangeText={(val) => this.updateInputVal(val, 'displayLast')} value={this.state.displayLast} />
            </View>
            <View style={STYLES.inputContainer}>
              <TextInput placeholder="ອີເມວ" style={STYLES.inputsignUp} value={this.state.email}
                onChangeText={(val) => this.updateInputVal(val, 'email')} />
            </View>
            <View style={STYLES.inputContainer}>

              <TextInput placeholder="ລະຫັດ" style={STYLES.inputsignUp} secureTextEntry value={this.state.password}
                onChangeText={(val) => this.updateInputVal(val, 'password')}
                maxLength={15} />
            </View>
            <View style={STYLES.inputContainer}>

              <TextInput placeholder="ຢືນຢັນລະຫັດ" style={STYLES.inputsignUp} secureTextEntry />
            </View>
          </View>
          <TouchableOpacity onPress={() => this.registerUser()}>
            <View style={STYLES.btnPrimary}>
              <Text style={{ fontFamily: 'NotoSansLao-Regular', fontSize: 18, color: COLORS.white }}>ລົງ​ທະ​ບຽນ</Text>
            </View>
          </TouchableOpacity>
          <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={STYLES.line} ></View>
            <Text style={{ fontWeight: 'bold', marginHorizontal: 5 }}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={()=>toast()}>
            <View style={STYLES.btnSecondary}>
              <Text style={{ fontFamily: 'NotoSansLao-Regular', fontSize: 15 }}>ລົງ​ທະ​ບຽນ</Text>
              <Image style={STYLES.btnImage} source={require('../image/facebook.png')} />
            </View>
            </TouchableOpacity>
            <View style={{ width: 0 }} />
            <TouchableOpacity onPress={()=>toast()}>
            <View style={STYLES.btnSecondary}>
              <Text style={{ fontFamily: 'NotoSansLao-Regular', fontSize: 15 }}>ລົງ​ທະ​ບຽນ</Text>
              <Image style={STYLES.btnImage} source={require('../image/google.png')} />
            </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'center',
              marginTop: 40,
              marginBottom: 20,
            }}>
            <Text style={{ color: COLORS.grey, fontFamily: 'NotoSansLao-Bold' }}>
              ມີບັນຊີຢູ່ແລ້ວບໍ ?
            </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
              <Text style={{ color: COLORS.dark, fontFamily: 'NotoSansLao-Bold' }}>
                ເຂົ້າສູ່ລະບົບ
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
};
const style = StyleSheet.create({
  SigninScreen: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,

  },

  textsignup: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 10,
    paddingVertical: 20,
    marginHorizontal: 30,

  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});
