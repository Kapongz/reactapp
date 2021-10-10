import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import STYLES from '../../consts/styles';
import Feather from 'react-native-vector-icons/Feather';
import firebase from '../components/firebase';
import { Avatar, Title } from 'react-native-paper';
import SigninScreen from './SigninScreen';
import { PrimaryButton } from '../components/Button';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EditProfileScreen from './EditProfileScreen';


export default class ProfileScreen extends Component {

    constructor() {
        super();
        this.state = {
            uid: '',

        }
    }

    signOut = () => {
        firebase.auth().signOut().then(() => {
            this.props.navigation.navigate('SigninScreen')
        })
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {
        this.state = {
            displayName: firebase.auth().currentUser.displayName,
            last: firebase.auth().currentUser.last
            //   uid: firebase.auth().currentUser.uid
        }
        return (
            <SafeAreaView
                style={{ backgroundColor: COLORS.white, flex: 1 }}>
                <View style={style.ProfileScreen}>
                    <Icon name="arrow-back-ios" size={28} onPress={() => this.props.navigation.goBack(null)} />
                    <View style={{ marginHorizontal: 115 }}>
                        <Text style={{ fontFamily: 'NotoSansLao-Bold', fontSize: 22 }}>ໂປຼຟາຍ</Text>
                    </View>
                    <FontAwesomeIcon name="edit" size={28} onPress={() => this.props.navigation.navigate('EditProfileScreen')} />

                </View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{ flex: 1 }}>
                        <View style={style.AvatarImage}>
                            <Avatar.Image
                                source={require('../image/person.png')}
                                size={100}

                            />

                        </View>
                        <View style={style.displayName}>
                            <Title style={{
                                fontFamily: 'NotoSansLao-Regular',
                                fontSize: 23
                            }}>{this.state.displayName}</Title>
                        </View>
                        <View style={{ marginHorizontal: 20, flexDirection: 'row', marginVertical: 20 }}>
                            <FontAwesomeIcon name="map-marker" size={20} color={COLORS.grey} style={{width:40}} />
                            <Text style={{ marginLeft: 10, color: '#908e8c' }}>Vientian</Text>
                        </View>
                        <View style={{ marginHorizontal: 20, flexDirection: 'row', marginVertical: 20 }}>
                            <FontAwesomeIcon name="globe" size={20} color={COLORS.grey} style={{width:40}} />
                            <Text style={{ marginLeft: 10, color: '#908e8c' }}>Laos</Text>
                        </View>
                        <View style={{ marginHorizontal: 20, flexDirection: 'row', marginVertical: 20 }}>
                            <Icon name="phone" size={20} color={COLORS.grey} style={{width:40}}/>
                            <Text style={{ marginLeft: 10, color: '#908e8c' }}>+856 2096316032</Text>
                        </View>
                        <View style={{ marginHorizontal: 20, flexDirection: 'row', marginVertical: 20 }}>
                            <Icon name="email" size={20} color={COLORS.grey} style={{width:40}} />
                            <Text style={{ marginLeft: 10, color: '#908e8c' }}>Pongkst22@gmail.com</Text>
                        </View>

                       

                    </View>


                </ScrollView>
            </SafeAreaView>
        );
    };
};
const style = StyleSheet.create({
    ProfileScreen: {
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,

    },
    AvatarImage: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    displayName: {
        alignItems: 'center',
        margin: 10
    },
    logout: {
        width: 220,

        height: 60,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: COLORS.primary,
        alignSelf: 'center',
        marginTop: 230

    }
});

