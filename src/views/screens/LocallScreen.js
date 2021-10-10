import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from "@react-native-community/geolocation";
import Carousel from 'react-native-snap-carousel';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import StarRating from '../components/Star';
import { LocallButton } from '../components/Button';
//import Geolocation from 'react-native-geolocation-service';

export default class LocallScreen extends Component {
  state = {
    markers: [],
    coordinates: [
      {
        name: 'ຮ້ານ ເບີເກິ້',
        latitude: 18.04840782118614,
        longitude: 102.63920864286209,
        rating: 5,
        reviews: 89,
        description: 'ອາຫານດີແຊບໝົດທຸກຢ່າງເລີຍ',
        image: require('../image/burger.png')
      },
      {
        name: 'ຮ້ານ ຟິສຊ່າ',
        latitude: 18.049529919301154,
        longitude: 102.63802847087828,
        rating: 3,
        reviews: 109,
        description: 'ອາຫານດີແຊບໝົດທຸກຢ່າງເລີຍ',
        image: require('../image/pizza.png')
      },
      {
        name: 'ຮ້ານ ຊູຊິ',
        latitude: 18.051651685255607,
        longitude: 102.63796409786296,
        rating: 4,
        reviews: 99,
        description: 'ອາຫານດີແຊບໝົດທຸກຢ່າງເລີຍ',
        image: require('../image/sushi.png')
      }
    ]
  }

  componentDidMount() {
    this.requestLocationPermission();
  }
  requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log('Android:' + response);
      if (response === 'granted') {
        this.locateCurrentPosition();
      }
    } else {
      var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      console.log('iPhone:' + response);
      if (response === 'granted') {
        this.locateCurrentPosition();
      }
    }
  }
  locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log("Position " + position.coords.latitude + " " + position.coords.longitude);

        let initialPosition = {

          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,

        }
        this.setState({ initialPosition });
      },
      (error) => {
        // See error code charts below.
        console.log("Error " + error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, }
    )
  }
  onCarouselItemChange = (index) => {
    let location = this.state.coordinates[index];
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,

    });
    this.state.markers[index].showCallout()
  }

  onMarkerPressed = (location, index) => {
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    });
    this._carousel.snapToItem(index);
  }

  renderCarouselItem = ({ item }) =>
    <View style={styles.cardcontainer}>
      <Image style={styles.cardImage} source={item.image} resizeMode='stretch' />
      <Text style={styles.cardtitle}>{item.name}</Text>
      <StarRating ratings={item.rating} reviews={item.reviews} />
      <Text style={styles.carddescription}>{item.description}</Text>
      <View style={styles.cardButton}>
        <LocallButton title='ສັ່ງເລີຍ' />
      </View>
    </View>

  render() {

    return (
      <SafeAreaView
        style={{ backgroundColor: COLORS.white, flex: 1 }}>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            ref={map => this._map = map}
            showsUserLocation={true}
            style={styles.map}
            initialRegion={this.state.initialPosition}

          >

            {
              this.state.coordinates.map((marker, index) => (
                <Marker
                  key={marker.name}
                  ref={ref => this.state.markers[index] = ref}
                  onPress={() => this.onMarkerPressed(marker, index)}
                  coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                >
                  <Callout>
                    <Text>{marker.name}</Text>
                  </Callout>
                </Marker>
              ))

            }

          </MapView>
        </View>
        <View style={styles.locall}>
          <Icon name="arrow-back-ios" size={28} onPress={() => this.props.navigation.goBack(null)} />
          <FontAwesomeIcon name="search" size={28} style={{ marginLeft: 280 }} onPress={() => this.props.navigation.navigate('SearchScreen')} />
        </View>
        <View style={styles.locallaos}>
          <FontAwesomeIcon name="map-pin" size={20} color='red' />
          <Text style={{ margin: 10, fontSize: 15 }}>Laos</Text>
        </View>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.coordinates}
          containerCustomStyle={styles.carousel}
          renderItem={this.renderCarouselItem}
          sliderWidth={Dimensions.get('window').width}
          removeClippedSubviews={false}
          itemWidth={300}
          onSnapToItem={(index) => this.onCarouselItemChange(index)}
        />
      </SafeAreaView>
    );

  };
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  locall: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    position: 'absolute',
    width:'100%'

  },
  locallaos: {
    width: 150,
    height: 40,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 120,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    elevation: 10
  },

  carousel: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 8,
  },
  cardcontainer: {
    backgroundColor: 'white',
    height: 260,
    width: 300,
    padding: 24,
    borderRadius: 24
  },
  cardImage: {
    height: '100%',
    width: "100%",
    alignSelf: 'center',
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  cardtitle: {
    color: 'black',
    fontSize: 20,
    bottom: -160,
    marginRight: 160,

    fontFamily: 'NotoSansLao-Bold'
  },
  carddescription: {
    color: 'black',
    fontSize: 13,
    bottom: -160,
    marginRight: 100,

    fontFamily: 'NotoSansLao-Regular'
  },
  cardButton: {
    width: 80,
    bottom: -110,
    marginLeft: 180,



  }

});
