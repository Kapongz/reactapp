import React, { Component,useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import STYLES from '../../consts/styles';
import Feather from 'react-native-vector-icons/Feather';
import firebase from '../components/firebase';
import { TouchableHighlight } from 'react-native-gesture-handler';

const toast=()=>{
    ToastAndroid.show("ຍັງບໍ່ເປີດໃຊ້ງານ",ToastAndroid.LONG)
}
export default class SigninScreen extends Component {
    

    constructor() {
        super();
        this.state = { 
          email: '', 
          password: '',
          isLoading: false,
         
        }
      }
    
      updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }
      
    
      userLogin = () => {
        if(this.state.email === '' && this.state.password === '') {
          Alert.alert('ກະລຸນາໃສ່ຂໍ້ມູນ ຫຼື ລົງທະບຽນ')
        } else {
          this.setState({
            isLoading: true,
          })
          firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then((res) => {
            console.log(res)
            console.log('User logged-in successfully!')
            this.setState({
              isLoading: false,
              email: '', 
              password: ''
            })
            this.props.navigation.navigate('Home')
          })
          .catch(error => this.setState({ errorMessage: error.message }))
        }
      }
    
    render() {
        if(this.state.isLoading){
          return(
            <View style={style.preloader}>
              <ActivityIndicator size="large" color="#9E9E9E"/>
            </View>
          )
        }    
    return (
        <SafeAreaView
            style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <View style={style.SigninScreen}>
                <Icon name="arrow-back-ios" size={28} onPress={() => this.props.navigation.goBack(null)} />
                <View style={{ marginHorizontal: 105 }}>
                    <Text style={{ fontFamily: 'NotoSansLao-Bold', fontSize: 22 }}>ເຂົ້າສູ່ລະບົບ</Text>
                </View>
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
            >
                <View style={style.LogoImage}>
                    <Image source={require('../image/logo.png')} resizeMode="cover" style={{ width: 200, height: 200 }} />
                </View>
                <View style={style.textsignin}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Delicious Food</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={STYLES.inputContainer}>
                        <Icon name="mail-outline" size={20} color={COLORS.grey} style={STYLES.inputIcon} />
                        <TextInput placeholder="ອີເມວ" style={STYLES.input} value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')} />
                    </View>

                    <View style={STYLES.inputContainer}>
                        <Icon name="lock-outline" size={20} color={COLORS.grey} style={STYLES.inputIcon} />
                        <TextInput placeholder="ລະຫັດ" style={STYLES.input} secureTextEntry
                        value={this.state.password}
                        onChangeText={(val) => this.updateInputVal(val, 'password')}
                        maxLength={15}
                            // secureTextEntry={data.secureTextEntry ? true : false}
                            // autoCapitalize="none"
                            // onChangeText={(val) => handlePasswordChange(val)}
                             />
                        {/* <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                    
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity> */}
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.userLogin()}>
                <View style={STYLES.btnPrimary}>
                    <Text style={{ fontFamily: 'NotoSansLao-Regular', fontSize: 18, color: COLORS.white }}>ເຂົ້າສູ່ລະບົບ</Text>
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
                    
                        <Text style={{ fontFamily: 'NotoSansLao-Regular', fontSize: 15 }}>ເຂົ້າສູ່ລະບົບ</Text>
                        <Image style={STYLES.btnImage} source={require('../image/facebook.png')} />
                    
                    </View>
                    </TouchableOpacity>
                    <View style={{ width: 0 }} />
                    <TouchableOpacity onPress={()=>toast()}>
                    <View style={STYLES.btnSecondary}>
                        <Text style={{ fontFamily: 'NotoSansLao-Regular', fontSize: 15 }}>ເຂົ້າສູ່ລະບົບ</Text>
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
                        ທ່ານຍັງບໍ່ມີບັນຊີແມ່ນບໍ ?
                    </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUpScreen')}>
                        <Text style={{ color: COLORS.dark, fontFamily: 'NotoSansLao-Bold' }}>
                            ລົງ​ທະ​ບຽນ
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
    LogoImage: {
        alignItems: 'center',
        justifyContent: 'center'

    },
    textsignin: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
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

