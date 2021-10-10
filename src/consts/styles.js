import {StyleSheet} from 'react-native';
import COLORS from './colors';

const STYLES = StyleSheet.create({
  inputContainer: {flexDirection: 'row', marginTop: 20,marginHorizontal: 30,},
  input: {
    color: COLORS.grey,
    paddingLeft: 40,
    borderBottomWidth: 2,
    borderColor: COLORS.dark,
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
    fontFamily:'NotoSansLao-Regular'
  },
  inputsignUp: {
    color: COLORS.grey,
    paddingLeft: 20,
    borderBottomWidth: 2,
    borderColor: COLORS.dark,
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
    fontFamily:'NotoSansLao-Regular'
  },
  inputIcon: {marginTop: 15, position: 'absolute'},
  btnPrimary: {
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    flexDirection: 'row', 
    marginTop: 30,
    marginHorizontal: 30
  },

  btnSecondary: {
    height: 50,
    width:130,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 30,
    fontFamily:'NotoSansLao-Regular'
    
  },
  btnImage: {width: 20, height: 20, marginLeft: 5},

  line: {height: 1, width: 30, backgroundColor: '#a5a5a5'},
});

export default STYLES;