/* screen -MANAPPCUS0045
    design by -mayur s
 */
import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, PermissionsAndroid, TouchableHighlightBase } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Constants from '../config/Constants';
import { StyleMapView, StyleViewMap } from '../config/CommonStyles';
import HeaderBar from '../config/HeaderBar';
import Geolocation from "react-native-geolocation-service";
import RBSheet from "react-native-raw-bottom-sheet";
import FooterBar from '../config/FooterBar';

export default class MapViews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      set_destination: false,
      current_address: "", //get current address  with draggable
      current_latitude: 18.5581568,  // get current latitude
      current_longitude: 73.7828864, // get current longtitude
      co_ordinate: [
        { origin: 0, latitude: 18.5204, longitude: 73.85672, title: 'pune', desc: '' },
        { destination: 1, latitude: 19.0760, longitude: 72.8777, title: 'mumbai', desc: '' },
      ], //origin and destination marker direction 



    }
  }
  // componentDidMount() {
  //   this.RBSheet.open()
  // }
  componentDidMount() {
    this.getCurrentCoords();
  }
  async getCurrentCoords() {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition((position) => {
        console.log("position ===> " + JSON.stringify(position));
        this.setState({
          current_latitude: position.coords.latitude,
          current_longitude: position.coords.longitude
        })
        this.getCurrentAdddress(position.coords.latitude,position.coords.longitude);
      }, (error) => {
        console.log(error.code, error.message)
      },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      )
    }
    else {
      console.log("ACCESS_FINE_LOCATION permission denied")
    }
  }

  getCurrentAdddress(lat, long) {
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + lat + ',' + long + '&key=' + 'AIzaSyDaIta3GbvS-cK3Y8vagU7h6RhuHmGBlPI')
      .then((response) => response.json()
        .then((responseJson) => {

          console.log("FINALRESP====> " + responseJson.results[1].formatted_address)
          this.setState({ current_address: responseJson.results[1].formatted_address })
          this.props.navigation.state.params.callBack(responseJson);
        })
      )

  }

  setMarker_direction(origin, destination, GOOGLE_MAPS_APIKEY) {
    return (
      <View>
        <Marker
          draggable
          onDragEnd={(e) => {
            this.setDestination(e.nativeEvent.coordinatelet = e.nativeEvent.coordinate.longitude)

          }}
          coordinate={origin}
          description={this.state.co_ordinate[0].desc}
          title={this.state.co_ordinate[0].title}
        />

        <Marker
          draggable
          onDragEnd={(e) => {
            // this.setDestination(e.nativeEvent.coordinatelet =e.nativeEvent.coordinate.longitude)

          }}
          position={destination}
          coordinate={destination}
          description={this.state.co_ordinate[1].desc}
          title={this.state.co_ordinate[1].title}


        />

        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor={Constants.COLOR_GREEN}
        />
      </View>

    )
  }

  setSource(lat, long) {
    let temp = [...this.state.co_ordinate]
    temp[0].latitude = lat;
    temp[0].longitude = long;
    this.setState({ co_ordinate: temp });

  }

  setDestination(lat, long) {
    let temp = [...this.state.co_ordinate]
    temp[1].latitude = lat;
    temp[1].longitude = long;
    this.setState({ co_ordinate: temp })
  }


  render() {
    const crnt_location = { latitude: this.state.current_latitude, longitude: this.state.current_longitude, } //current address
    const origin = { latitude: this.state.co_ordinate[0].latitude, longitude: this.state.co_ordinate[0].longitude, };
    const destination = { latitude: this.state.co_ordinate[1].latitude, longitude: this.state.co_ordinate[1].longitude, };
    const GOOGLE_MAPS_APIKEY = 'AIzaSyDaIta3GbvS-cK3Y8vagU7h6RhuHmGBlPI';
    let { navigation } = this.props
    let flag_map = this.props.navigation.getParam('flag_map'); //get marker direction with origin and destination coordinates 
    let flag_location = this.props.navigation.getParam('flag_location'); //get current address 
    return (
      <View style={{ flex: 1 }}>
        <HeaderBar isBack={true} title="View Map" isLogout={true} navigation={navigation} />
        <View style={StyleMapView.MainContainer}>

          <MapView
            style={StyleMapView.mapStyle}
            showsUserLocation={false}
            zoomEnabled={true}
            zoomControlEnabled={true}
            initialRegion={{
              latitude: this.state.current_latitude,
              longitude: this.state.current_longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {flag_map == 'marker_direction'
              ?
              this.setMarker_direction(origin, destination, GOOGLE_MAPS_APIKEY)
              : flag_location == 'Location_details'
                ? <Marker
                  draggable
                  onDragEnd={(e) => {
                    this.getCurrentAdddress(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude);
                    console.log('drag location==>', e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude)
                  }}
                  coordinate={crnt_location}
                />
                : null
            }

          </MapView>

        </View>

        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={150}
          duration={250}
          customStyles={{
            container: {
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
            }
          }}
        >
          <View style={StyleViewMap.viewmaprbs}>
            <View style={StyleViewMap.maplocationtxt}>
              <View style={StyleViewMap.mapimgwid}>
                <Image style={StyleViewMap.mapimg} source={require('../images/address.png')} />
              </View>
              <View style={StyleViewMap.maptxtwid}>
                <Text style={StyleViewMap.maptxt}>{Constants.Lorem}</Text>
              </View>
            </View>
            <View style={StyleViewMap.maplocationbtn}>
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={StyleViewMap.mapbottbtn}>
                  <Text style={StyleViewMap.mapbottbtntxt}>select</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>

        <FooterBar navigation={navigation} />
      </View>
    );
  }
}

