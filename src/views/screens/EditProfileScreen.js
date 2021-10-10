import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';

import {useTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import COLORS from '../../consts/colors';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';



const EditProfileScreen = ({navigation}) => {

  const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
  

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>ອັບໂຫຼດຮູບ</Text>
        <Text style={styles.panelSubtitle}>ເລືອກຮູບໂປຼຟາຍຂອງເຈົ້າ</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} >
        <Text style={styles.panelButtonTitle}>ຖ່າຍຮູບ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} >
        <Text style={styles.panelButtonTitle}>ເລືອກຈາກຄັງຮູບ</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>ຍົກເລີກ</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  return (
    <SafeAreaView
            style={{  flex: 1 }}>
    <View style={styles.SigninScreen}>
    <MaterialIcons name="arrow-back-ios" size={28} onPress={navigation.goBack} />
    <View style={{ marginHorizontal: 120 }}>
        <Text style={{ fontFamily: 'NotoSansLao-Bold', fontSize: 22 }}>ແກ້ໄຂ</Text>
    </View>
</View>
<ScrollView>
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
    }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={45}
                    color="#666666"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontFamily: 'NotoSansLao-Regular'}}>
           Your Name
          </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o"  size={20} />
          <TextInput
            placeholder="ຊື່"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'black'
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o"  size={20} />
          <TextInput
            placeholder="ນາມສະກຸນ"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'black'
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone"  size={20} />
          <TextInput
            placeholder="ເບີໂທ"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'black'
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o"  size={20} />
          <TextInput
            placeholder="ອີເມວ"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'black'
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="globe"  size={20} />
          <TextInput
            placeholder="ປະເທດ"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'black',
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Icon name="map-marker-outline"  size={20} />
          <TextInput
            placeholder="ເມືອງ"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              
              styles.textInput,
              {
                color: 'black',
              },
            ]}
          />
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={() =>navigation.navigate('ProfileScreen')}>
          <Text style={styles.panelButtonTitle}>ບັນທຶກ</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  SigninScreen: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,

},
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
    fontFamily:'NotoSansLao-Bold'
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
    fontFamily:'NotoSansLao-Regular'
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
    
    
  },
  panelButtonTitle: {
    fontSize: 17,
    
    color: 'white',
    fontFamily:'NotoSansLao-Bold',
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    borderWidth:1,
    borderColor:'#E5E5E5',
    borderRadius:25,
    alignItems:'center',
    
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    // marginTop: Platform.OS === 'android' ? -10 : -12,
    paddingLeft: 25,
    color: '#05375a',
    fontFamily:'NotoSansLao-Regular',
    fontSize:18,
    alignItems:'center',
    
    
    
    
  },
});