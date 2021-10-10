
import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import searchfood from '../../consts/search';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const SearchScreen = ({ navigation }) => {
  const Searchbody = ({ item }) => {
    return (
      
      
      <View style={style.search_body}>
        
        <FontAwesomeIcon name='history' size={30} color='rgb(220,220,220)' />
        <Text style={{ fontFamily: 'NotoSansLao-Regular', fontSize: 18, marginRight: 120 }}>{item.name}
        </Text>
        <FontAwesomeIcon name='times' size={30} color='rgb(220,220,220)' />
      </View>
    );
  };
  return (

    <SafeAreaView
      style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <View style={style.textInput}>
          <TextInput
            style={{ flex: 1, fontSize: 18, fontFamily: 'NotoSansLao-Regular', marginLeft: 15 }}
            placeholder="ຄົ້ນຫາອາຫານ ແລະ ຮ້ານອາຫານ"
          />
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={searchfood}
        renderItem={({ item }) => <Searchbody item={item} />}

      >
      </FlatList>
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
  textInput: {
    height: 50,
    width: 320,
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 5,
    backgroundColor: 'rgb(220,220,220)'
  },
  search_body: {
    height: 100,
    marginLeft: 10,
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 2,
    paddingHorizontal: 10,

  }
});


export default SearchScreen;