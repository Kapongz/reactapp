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
import { NavigationContainer  } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SigninScreen from './SigninScreen';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EditProfileScreen from './EditProfileScreen';
import Header from './Drawerprops';


const Drawers = createDrawerNavigator();

// const CustomDrawerContentComponent = (props) => {
  

//   return (
//     <View style={{flex: 1}}>
//   <DrawerContentScrollView {...props}>
    
      
        
//         <View style={styles.drawerContent}>
//           <View style={styles.userInfoSection}>
//             <View style={{flexDirection:'row',marginTop: 15}}>
//             <Avatar.Image 
                            
//                             source={require('../image/person.png')}
//                             size={80}

//                         />
//               <View style={{marginLeft:20, flexDirection:'column'}}>
//                                 <Title style={styles.title}>ຄຳແກ້ວ</Title>
//                                 <Caption style={styles.caption}>@j_doe</Caption>
//               </View>  
//               <View style={styles.line}/>       
//             </View>
//           </View>
          
//         </View>
//         <Drawer.Section style={styles.drawerSection}>
//         <DrawerItem 
//                             icon={({color, size}) => (
//                                 <Icon 
//                                 name="home-outline" 
//                                 color={color}
//                                 size={25}
//                                 component={BottomNavigator}
//                                 />
//                             )}
//                             label="ໜ້າຫຼັກ"
//                             labelStyle={{fontFamily:'NotoSansLao-Bold',fontSize:20}}
//                             onPress={() => {props.navigation.navigate('Home')}}
//                         />
//                          <DrawerItem 
//                             icon={({color, size}) => (
//                                 <Icon 
//                                 name="account-outline" 
//                                 color={color}
//                                 size={25}
//                                 />
//                             )}
//                             label="ໂປຼຟາຍ"
//                             labelStyle={{fontFamily:'NotoSansLao-Bold',fontSize:20}}
//                             onPress={() => {props.navigation.navigate('ProfileScreen')}}
//                         />
//                         <DrawerItem 
//                             icon={({color, size}) => (
//                                 <Icon 
//                                 name="bookmark-outline" 
//                                 color={color}
//                                 size={25}
//                                 />
//                             )}
//                             label="ລາຍການບັນທຶກ"
//                             labelStyle={{fontFamily:'NotoSansLao-Bold',fontSize:20}}
//                             // onPress={() => {props.navigation.navigate('BookmarkScreen')}}
//                         />
//                         <DrawerItem 
//                             icon={({color, size}) => (
//                                 <Icon 
//                                 name="cog" 
//                                 color={color}
//                                 size={25}
//                                 />
//                             )}
//                             label="ຕັ້ງຄ່າ"
//                             labelStyle={{fontFamily:'NotoSansLao-Bold',fontSize:20}}
//                             // onPress={() => {props.navigation.navigate('SettingsScreen')}}
//                         />
//                         <DrawerItem 
//                             icon={({color, size}) => (
//                                 <Icon 
//                                 name="account-check-outline" 
//                                 color={color}
//                                 size={25}
//                                 />
//                             )}
//                             label="ສະໜັບສະໜຸນ"
//                             labelStyle={{fontFamily:'NotoSansLao-Bold',fontSize:20}}
//                             // onPress={() => {props.navigation.navigate('SupportScreen')}}
//                         />
//         </Drawer.Section>
      

//   </DrawerContentScrollView>
//   <Drawer.Section style={styles.bottomDrawerSection}>
//                 <DrawerItem 
//                     icon={({color, size}) => (
//                         <Icon 
//                         name="exit-to-app" 
//                         color={color}
//                         size={30}
//                         />
//                     )}
//                     label="ອອກຈາກລະບົບ"
//                     labelStyle={{fontFamily:'NotoSansLao-Bold',fontSize:20}}
                    
//                     // onPress={() => {signOut()}}
//                 />
//             </Drawer.Section>
//   </View>
  
//   )
  
// };
export default class DrawerScreen extends Component {

render() {
   
  return(
     
      <Drawers.Navigator 
    
    screenOptions={{ headerShown: false }}
         initialRouteName="BottomNavigator"
         drawerPosition="right"
         drawerType="back"
         edgeWidth={100}
         drawerStyle={{
           backgroundColor:'#F9813A',
           width:300
         
  }} drawerContent={(props)=><Header {...props} />} >
        <Drawers.Screen name="Home" component={BottomNavigator} />
        <Drawers.Screen name="profile" component={ProfileScreen} />
        <Drawers.Screen name="bookmark" component={ProfileScreen} />
        <Drawers.Screen name="support" component={ProfileScreen} />
        <Drawers.Screen name="setting" component={ProfileScreen} />
      </Drawers.Navigator>
    
  );
};
}
// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//   },
//   userInfoSection: {
//     paddingLeft: 20,
//   },
//   title: {
//     fontSize: 20,
//     marginTop: 15,
    
//     fontFamily:'NotoSansLao-Bold'
//   },
//   caption: {
//     fontSize: 14,
//     lineHeight: 14,
//   },
//   line:{
//     height: 1,
//     width: 285,
//      backgroundColor: '#fff',
//      marginTop:100,
//      marginHorizontal:-170,
//      alignItems:'center',
//      alignSelf:'center',
//      justifyContent:'center'

//   },
//   row: {
//     marginTop: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   section: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   paragraph: {
//     fontWeight: 'bold',
//     marginRight: 3,
//   },
//   drawerSection: {
//     marginTop: 15,
//   },
//   bottomDrawerSection: {
//       marginBottom: 15,
//       borderTopColor: '#f4f4f4',
//       borderTopWidth: 1
//   },
//   preference: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
// });





// export default class DrawerScreen extends Component {

//   render() {
//     return (


//       <Drawer.Navigator
//         screenOptions={{ headerShown: false }}
//         initialRouteName="BottomNavigator"
//         drawerPosition="right"
//         drawerType="back"
//         edgeWidth={100}
//         drawerStyle={{
//           backgroundColor:'#fedac5'
//         }}
       
        

//       >
//         <Drawer.Screen
//           name="home"
//           component={BottomNavigator}
//           options={{
//             title: 'ໜ້າຫຼັກ',
//             drawerLabel: () => (
//               <Text style={{ fontFamily: 'NotoSansLao-Bold',fontSize:23 }}>ໜ້າຫຼັກ</Text>
//             ),
//             drawerIcon: () => (
//               <FontAwesomeIcon
//                 name="home"
//                 size={35}
//                 style={{ width: 40,color:'#908e8c' }}
//               />
//             )
//           }}
//         />
//         <Drawer.Screen
//           name="ProfileScreen"
//           component={ProfileScreen}
//           options={{
//             title: 'ໂປຼຟາຍ',
//             drawerLabel: () => (
//               <Text style={{ fontFamily: 'NotoSansLao-Bold',fontSize:23 }}>ໂປຼຟາຍ</Text>
//             ),

//             drawerIcon: () => (
//               <FontAwesomeIcon
//                 name="user"
//                 size={35}
//                 style={{ width: 40,color:'#908e8c' }}
//               />
//             )
//           }}
//         />
//         <Drawer.Screen
//           name="ຊ່ວຍເຫຼືອ"
//           component={Screen2}
//           options={{
//             title: 'ຊ່ວຍເຫຼືອ',
//             drawerLabel: () => (
              
//               <Text style={{ fontFamily: 'NotoSansLao-Bold',fontSize:23 }}>ຊ່ວຍເຫຼືອ</Text>
//             ),
//             drawerIcon: () => (
//               <FontAwesomeIcon
//                 name="info-circle"
//                 size={35}
//                 style={{ width: 40,color:'#908e8c' }}
//               />
//             )
//           }}
          
//         />
//         <Drawer.Screen
//           name="ຕັ້ງຄ່າ"
//           component={Screen2}
//           options={{
//             title: 'ຕັ້ງຄ່າ',
//             drawerLabel: () => (
//               <Text style={{ fontFamily: 'NotoSansLao-Bold',fontSize:23 }}>ຕັ້ງຄ່າ</Text>
//             ),
//             drawerIcon: () => (
//               <FontAwesomeIcon
//                 name="cog"
//                 style={{ width: 40,color:'#908e8c' }}
//                 size={35}
//               />
//             )
//           }}
//         />



//       </Drawer.Navigator>


//     );
//   };


//}

