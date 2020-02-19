/* screen -MANAPPCUS0045
    design by -mayur s
 */
import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Constants from '../config/Constants';
import { StyleMapView, StyleViewMap } from '../config/CommonStyles';
import HeaderBar from '../config/HeaderBar';
import RBSheet from "react-native-raw-bottom-sheet";
import FooterBar from '../config/FooterBar';

export default class MapViews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      set_destination: false,
      cords: '',
      co_ordinate: [
        { source: 0, latitude: 18.5204, longitude: 73.85672, title: 'pune', desc: '' },
        { destination: 1, latitude: 19.0760, longitude: 72.8777, title: 'mumbai', desc: '' },
      ],

    }
  }
  // componentDidMount() {
  //   this.RBSheet.open()
  // }

  marker_setLocation(){
    return(
      <View>
        
      </View>
    )
  }
  getmarker_direction(origin,destination,GOOGLE_MAPS_APIKEY) {
    return (
      <View>
        <Marker
          draggable
          onDragEnd={(e) => {
            // this.setDestination(e.nativeEvent.coordinatelet =e.nativeEvent.coordinate.longitude)

          }}
          position={origin}
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
  setDestination(lat, long) {
    let temp = [...this.state.co_ordinate]
    temp[1].latitude = lat;
    temp[1].longitude = long;
    this.setState({ co_ordinate: temp })
  }
  setSource(lat, long) {
    let temp = [...this.state.co_ordinate]
    temp[0].latitude = lat;
    temp[0].longitude = long;
    this.setState({ co_ordinate: temp });

  }
  render() {
    const location_detail=this.props.navigation.getParam('flag_location')
    const origin = { latitude: this.state.co_ordinate[0].latitude, longitude: this.state.co_ordinate[0].longitude, };
    const destination = { latitude: this.state.co_ordinate[1].latitude, longitude: this.state.co_ordinate[1].longitude, };
    const GOOGLE_MAPS_APIKEY = 'AIzaSyDaIta3GbvS-cK3Y8vagU7h6RhuHmGBlPI';
    let { navigation } = this.props
    let flag_map = this.props.navigation.getParam('flag_map');
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
              latitude: 18.5581568,
              longitude: 73.7828864,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {flag_map == 'truck'
              ?
              this.getmarker_direction(origin,destination,GOOGLE_MAPS_APIKEY)
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

