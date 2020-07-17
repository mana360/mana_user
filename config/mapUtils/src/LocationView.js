import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Animated, Platform, UIManager, TouchableOpacity, Text, ViewPropTypes, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import Events from 'react-native-simple-events';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation'
import AutoCompleteInput from './AutoCompleteInput';
import HeaderBar from '../../HeaderBar';
import Constants from '../../Constants';
import RBSheet from "react-native-raw-bottom-sheet";
import {StyleMapView, StyleViewMap} from '../../CommonStyles';

const PLACE_DETAIL_URL = 'https://maps.googleapis.com/maps/api/place/details/json';
const DEFAULT_DELTA = { latitudeDelta: 0.015, longitudeDelta: 0.0121 };

export default class LocationView extends React.Component {

  static propTypes = {
    apiKey: PropTypes.string.isRequired,
    initialLocation: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }).isRequired,
    markerColor: PropTypes.string,
    actionButtonStyle: ViewPropTypes.style,
    actionTextStyle: Text.propTypes.style,
    actionText: PropTypes.string,
    onLocationSelect: PropTypes.func,
    debounceDuration: PropTypes.number,
    components: PropTypes.arrayOf(PropTypes.string),
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Select Location",
      headerTintColor: 'rgba(255,255,255,1)',
      headerTitleStyle: { alignSelf: 'center',},
      headerStyle: {
        backgroundColor:'rgba(74,74,74,1)',
        textAlign:'center',
      }
    };
  };

  static defaultProps = {
    markerColor: 'black',
    actionText: 'DONE',
    onLocationSelect: () => ({}),
    debounceDuration: 300,
    components: [],
    initialLocation: {
       latitude: 18.5670,
       longitude:73.8072,
    },
    apiKey: "AIzaSyBEDVKNDyVUzE2ajUXcrpX89ZORifA0cN4"
  };

  constructor(props) {
    super(props);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentDidMount() {
    Events.listen('InputBlur', this.constructor.displayName, this._onTextBlur);
    Events.listen('InputFocus', this.constructor.displayName, this._onTextFocus);
    Events.listen('PlaceSelected', this.constructor.displayName, this._onPlaceSelected);
    this._getCurrentLocation()
  }

  componentWillUnmount() {
    Events.rm('InputBlur', this.constructor.displayName);
    Events.rm('InputFocus', this.constructor.displayName);
    Events.rm('PlaceSelected', this.constructor.displayName);
  }

  state = {
    inputScale: new Animated.Value(1),
    inFocus: false,
    region: {
      ...DEFAULT_DELTA,
      ...this.props.initialLocation,
    },
    outputResult: {},
    outputAddress: "",
    currentlatitude:"",
    currentlongitude:"",
    selected_address_data:"",
    
  };

  _animateInput = () => {
    Animated.timing(this.state.inputScale, {
      toValue: this.state.inFocus ? 1.2 : 1,
      duration: 300,
    }).start();
  };

  IsLocked=false

  _onMapRegionChange = region => {

    if(!this.IsLocked){
    setTimeout(() => {
     this.setLocked()
      this._setRegion(region, false);
      if (this.state.inFocus) {
        this._input.blur();
      }
    }, 1000);
    }
  };

  setLocked(){
    this.IsLocked=true
    setTimeout(()=>{
      this.IsLocked=false;
    },2000)
  }

  _onMapRegionChangeComplete = region => {
    this._input.fetchAddressForLocation(region);
  };

  _onTextFocus = () => {
    this.state.inFocus = true;
    this._animateInput();
  };

  _onTextBlur = () => {
    this.state.inFocus = false;
    this._animateInput();
  };

  _setRegion = (region, animate = true) => {
    //this.setState({region:region})
  
    this.state.region = { ...this.state.region, ...region };
    this.setState({ outputResult: region })
    if (animate) this._map.animateToRegion(this.state.region);
  };

  _onPlaceSelected = placeId => {
    this._input.blur();
    axios.get(`${PLACE_DETAIL_URL}?key=${this.props.apiKey}&placeid=${placeId}`).then(({ data }) => {
      try {
        //  console.log("_onPlaceSelected ---> "+JSON.stringify(data.result))
        if (data.result != undefined && data.result.formatted_address != undefined) {
          this.setState({ outputAddress: data.result.formatted_address })
        } else {
          this.setState({ outputAddress: "" })
        }
        // let region = (({ lat, lng }) => ({ latitude: lat, longitude: lng }))(data.result.geometry.location);
        // this._setRegion(region);
        if (data.result != undefined && data.result.geometry != undefined && data.result.geometry.location != undefined) {
          let region = (({ lat, lng }) => ({ latitude: lat, longitude: lng }))(data.result.geometry.location);
          this._setRegion(region);
        } else {
          this.setState({ outputResult: { longitudeDelta: 0, longitude: 0, latitudeDelta: 0, latitude: 0 } })
        }
      } catch (e) {
        console.log(e)
      }
    });
  };

  _getCurrentLocation = () => {

    // navigator.geolocation.getCurrentPosition(position => {
    //   let location = (({ latitude, longitude }) => ({ latitude, longitude }))(position.coords);
    //   this._setRegion(location);
    // });

    Geolocation.getCurrentPosition((info)=>{
     
       let location = (({ latitude, longitude }) => ({ latitude, longitude }))(info.coords);
       this._setRegion(location);

      console.log("lat ==== "+ info.coords.latitude)
      console.log("long ==== "+ info.coords.longitude)

      // this.setState({currentlatitude:info.coords.latitude, currentlongitude:info.coords.longitude});
      });
  };

  render() {
    let { inputScale } = this.state;
    let { navigation } = this.props
    var mapStyle=[
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#523735"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#c9b2a6"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#dcd2be"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ae9e90"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#93817c"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#a5b076"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#447530"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#fdfcf8"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f8c967"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#e9bc62"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e98d58"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#db8555"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#806b63"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8f7d77"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#b9d3c2"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#92998d"
          }
        ]
      }
    ];

    return (
      <View style={styles.container}>
        <HeaderBar isBack={true} title="View Map" isLogout={true} navigation={navigation} />

        <MapView
          ref={mapView => (this._map = mapView)}
          style={styles.mapView}
          region={this.state.region}
          customMapStyle={mapStyle}
      
          showsMyLocationButton={true}
          showsUserLocation={false}

          onPress={({ nativeEvent }) => { console.log(nativeEvent); this._setRegion(nativeEvent.coordinate) }}
         
          onRegionChange={this._onMapRegionChange}
          onRegionChangeComplete={this._onMapRegionChangeComplete}
        />
        <Entypo
          name={'location-pin'}
          size={30}
          color={this.props.markerColor}
          style={{ backgroundColor: 'transparent' }}
        />
        <View style={styles.fullWidthContainer}>
          <AutoCompleteInput
            ref={input => (this._input = input)}
            apiKey={this.props.apiKey}
            style={[styles.input, { transform: [{ scale: inputScale }] }]}
            debounceDuration={this.props.debounceDuration}
            components={this.props.components}
          />
        </View>
        
        <TouchableOpacity
          style={[styles.actionButton, this.props.actionButtonStyle]}
          onPress={() => {
            let formattedData = Object.assign({}, this.state.outputResult)
            formattedData.address = this.state.outputAddress
            if (formattedData.latitude == undefined || formattedData.latitude == 0 || formattedData.longitude == undefined || formattedData.longitude == 0) { 
              alert("Please select location")
            } else {
              const { navigation } = this.props;
              this.setState({selected_address_data:formattedData})
              console.log("LOCATION SELECTED ===> "+JSON.stringify(formattedData))
              this.RBSheet.open()
            }
          }}
        >
          <View>
            <Text style={[styles.actionText, this.props.actionTextStyle]}>{this.props.actionText}</Text>
          </View>
        </TouchableOpacity>
        {this.props.children}
        
        <RBSheet
          ref={ref => { this.RBSheet = ref; }}
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
                <Image style={StyleViewMap.mapimg} source={require('../../../images/address.png')} />
              </View>
              <View style={StyleViewMap.maptxtwid}>
               <Text style={StyleViewMap.maptxt}>{this.state.selected_address_data.address}</Text>
              </View>
            </View>
            <View style={StyleViewMap.maplocationbtn}>
              <TouchableOpacity onPress={()=>{
                this.RBSheet.close();
                  this.props.navigation.goBack();
                  this.props.navigation.state.params.address(this.state.selected_address_data);
                }
               
                }>
                <View style={StyleViewMap.mapbottbtn}>
                  <Text style={StyleViewMap.mapbottbtntxt}>select</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapView: {
    ...StyleSheet.absoluteFillObject,
  },
  fullWidthContainer: {
    position: 'absolute',
    width: '100%',
    top: 10,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 5,
  },
  currentLocBtn: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
    position: 'absolute',
    bottom: 70,
    right: 10,
  },
  actionButton: {
    backgroundColor: Constants.COLOR_GREEN,
    height: 50,
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  actionText: {
    color: 'white',
    fontSize: 23,
  },
});
