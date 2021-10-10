import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
  } from '@react-navigation/drawer';
  import BottomNavigator from '../navigation/BottomNavigator';
  import CartScreen from './CartScreen';
  import {  TouchableOpacity, View ,ScrollView,StyleSheet} from 'react-native';
  import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
  } from 'react-native-paper';
  import React, { Component,useState } from 'react';
  import ProfileScreen from './ProfileScreen';
  
  import HomeScreen from './HomeScreen';
  import firebase from '../components/firebase';
  import { NavigationContainer } from '@react-navigation/native';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  import SigninScreen from './SigninScreen';
  import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
  import EditProfileScreen from './EditProfileScreen';

export default class Header extends Component {
    constructor(props) {
        super(props);

        
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
            last: firebase.auth().currentUser.last,
            email: firebase.auth().currentUser.email
            //   uid: firebase.auth().currentUser.uid
        }
        return(
           
            <View style={{flex: 1}}>
               <DrawerContentScrollView >
                
                  
                    
                     <View style={styles.drawerContent}>
                       <View style={styles.userInfoSection}>
                         <View style={{flexDirection:'row',marginTop: 15}}>
                         <Avatar.Image 
                                        
                                         source={require('../image/person.png')}
                                         size={80}
            
                                     />
                           <View style={{marginLeft:20, flexDirection:'column'}}>
                                             <Title style={styles.title}>{this.state.displayName}</Title>
                                             <Caption style={styles.caption}>{this.state.email}</Caption>
                           </View>  
                           <View style={styles.line}/>       
                         </View>
                       </View>
                      
                     </View>
                     <Drawer.Section style={styles.drawerSection}>
                     <DrawerItem 
                                         icon={({color, size}) => (
                                             <Icon 
                                             name="home-outline" 
                                             color={color}
                                             size={25}
                                             component={BottomNavigator}
                                             />
                                         )}
                                         label="ໜ້າຫຼັກ"
                                         labelStyle={{fontFamily:'NotoSansLao-Bold',fontSize:20}}
                                         onPress={() => {this.props.navigation.navigate('Home')}}
                                     />
                                      <DrawerItem 
                                         icon={({color, size}) => (
                                             <Icon 
                                             name="account-outline" 
                                             color={color}
                                             size={25}
                                             />
                                         )}
                                         label="ໂປຼຟາຍ"
                                         labelStyle={{fontFamily:'NotoSansLao-Bold',fontSize:20}}
                                         onPress={() => {this.props.navigation.navigate('ProfileScreen')}}
                                     />
                                     <DrawerItem 
                                         icon={({color, size}) => (
                                             <Icon 
                                             name="bookmark-outline" 
                                             color={color}
                                             size={25}
                                             />
                                         )}
                                         label="ລາຍການບັນທຶກ"
                                         labelStyle={{fontFamily:'NotoSansLao-Bold',fontSize:20}}
                                         // onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                                     />
                                  
                                     <DrawerItem 
                                         icon={({color, size}) => (
                                             <Icon 
                                             name="account-check-outline" 
                                             color={color}
                                             size={25}
                                             />
                                         )}
                                         label="ສະໜັບສະໜຸນ"
                                         labelStyle={{fontFamily:'NotoSansLao-Bold',fontSize:20}}
                                         // onPress={() => {props.navigation.navigate('SupportScreen')}}
                                     />
                                        <DrawerItem 
                                         icon={({color, size}) => (
                                             <Icon 
                                             name="cog" 
                                             color={color}
                                             size={25}
                                             />
                                         )}
                                         label="ຕັ້ງຄ່າ"
                                         labelStyle={{fontFamily:'NotoSansLao-Bold',fontSize:20}}
                                         // onPress={() => {props.navigation.navigate('SettingsScreen')}}
                                     />
                                     
                     </Drawer.Section>
                     
            
               </DrawerContentScrollView>
               <Drawer.Section style={styles.bottomDrawerSection}>
                             <DrawerItem 
                                 icon={({color, size}) => (
                                     <Icon 
                                     name="exit-to-app" 
                                     color={color}
                                     size={30}
                                     />
                                 )}
                                 label="ອອກຈາກລະບົບ"
                                 labelStyle={{fontFamily:'NotoSansLao-Bold',fontSize:20}}
                                
                                 onPress={() => this.signOut()}
                             />
                         </Drawer.Section>
               </View>
              
            
              
            
        ) ;
    }
}
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 20,
      marginTop: 15,
      
      fontFamily:'NotoSansLao-Bold'
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    line:{
      height: 1,
      width: 285,
       backgroundColor: '#fff',
       marginTop:100,
       marginHorizontal:-265,
       alignItems:'center',
       alignSelf:'center',
       justifyContent:'center'
  
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });