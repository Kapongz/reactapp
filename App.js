import 'react-native-gesture-handler';
import React  from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import COLORS from './src/consts/colors';
import firebase from "firebase";
import DetailsScreen from './src/views/screens/DetailsScreen';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import SearchScreen from './src/views/screens/SearchScreen';
import CartScreen from './src/views/screens/CartScreen';
import SigninScreen from './src/views/screens/SigninScreen';
import LocallScreen from './src/views/screens/LocallScreen';
import SignUpScreen from './src/views/screens/SignUpScreen';
import HomeScreen from './src/views/screens/HomeScreen';
import EditProfileScreen from './src/views/screens/EditProfileScreen';

import DrawerScreen from './src/views/screens/DrawerScreen';
import ProfileScreen from './src/views/screens/ProfileScreen';
import FavoriteScreen from './src/views/screens/FavoriteScreen';


const Stack = createStackNavigator();



const App = () => {
  
  
  return (
    

      <NavigationContainer>

        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
          <Stack.Screen name="SigninScreen" component={SigninScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="Home" component={DrawerScreen} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="CartScreen" component={CartScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
          <Stack.Screen name="FavoriteScreen" component ={FavoriteScreen}/>

        </Stack.Navigator>


        {/* <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
       <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
         <Stack.Screen name="Home" component={BottomNavigator} />
         <Stack.Screen name="homescreen" component={HomeScreen}/>
        <Stack.Screen name="LocallScreen" component={LocallScreen}/>
         <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
         <Stack.Screen name="SearchScreen" component={SearchScreen}/>
         <Stack.Screen name="CartScreen" component={CartScreen}/>
         <Stack.Screen name="SigninScreen" component={SigninScreen}/>
         <Stack.Screen name="SignUpScreen" component={SignUpScreen}/> 
       </Stack.Navigator>  */}
      </NavigationContainer>

    
      
  );
};

export default App;
