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
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default class MapViews extends React.Component {
  
  constructor(props) {
    super(props)
    this.googleMap=null,
    
    this.state = {
      isSearchVisible:false,
      set_destination: false,
      current_address: "", //get current address  with draggable
      current_latitude:0,  // get current latitude
      current_longitude: 0, // get current longtitude
      current_latlong:[],
      co_ordinate: [
        { origin: 0, latitude: 18.5204, longitude: 73.85672, title: 'pune', desc: '' },
        { destination: 1, latitude: 19.0760, longitude: 72.8777, title: 'mumbai', desc: '' },
      ], //origin and destination marker direction 
      TripDetials:[],
 flag_marker:"",
 markerDirectionLat:"",
 markerDirectionLong:"",
    }
  }

  componentDidMount() {
    this.getCurrentCoords();
    let flag_marker = this.props.navigation.getParam('flag_marker'); //get marker direction with origin and destination coordinates 
    let tempTruckDetails=this.props.navigation.getParam('TripDetials');
    console.log("truckDetails=====>"+JSON.stringify(tempTruckDetails));
    this.setState({flag_marker:flag_marker,TripDetials:tempTruckDetails});
    if(!flag_marker==true){
    this.RBSheet.open();
    }
  }

  async getCurrentCoords() {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition((position) => {
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

  async getCurrentAdddress(lat, long) {
    await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + lat + ',' + long + '&key=' + Constants.GOOGLE_MAP_KEY)
      .then((response) => response.json()
        .then((responseJson) => {
          // console.log("FINALRESP Current Address====> " +JSON.stringify(responseJson.results[0].formatted_address));
          // console.log("Lat_long====> " +JSON.stringify(responseJson.results[0].geometry.location));
          this.setState({ current_address: responseJson.results[0].formatted_address,current_latlong:responseJson.results[0].geometry.location })
          this.props.navigation.state.params.address(responseJson);
        }).catch(error=>
          console.log(error))
      )
  }

latANDlong(latlongString,value){
  let temp= latlongString.split(",");
  if(temp==""){
    return 0
  }else{
  return parseInt(temp[value]);
  }
}

markerDirection(origin,destination){
  return(
    <MapView
    ref={(ref)=>{this.googleMap = ref}}
    style={StyleMapView.mapStyle}
    showsUserLocation={true}
    zoomEnabled={true}
    zoomControlEnabled={true}
    initialRegion={{
      latitude: this.state.current_latitude,
      longitude: this.state.current_longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    // onLayout = {() => this.googleMap.fitToCoordinates(
    //   [{
    //     latitude: this.state.current_latitude,
    //     longitude: this.state.current_longitude,
    //   }],
    //   { edgePadding: { top: 5, right: 5, bottom: 5, left: 5 }, animated: true })}
  >
    
     <Marker
          coordinate={{latitude:this.latANDlong(origin,0),longitude:this.latANDlong(origin,1)}}
        />

        <Marker  
          coordinate={{latitude:this.latANDlong(destination.drop_location.drop_latlng[0],0),longitude:this.latANDlong(destination.drop_location.drop_latlng[0],1)}}
        />
        <MapViewDirections
        origin={this.latANDlong(origin,0),this.latANDlong(origin,1)}
        destination={drop_location.drop_latlng[0]}
        />
  
  </MapView>

  )
}
  render() {

    let { navigation } = this.props
    let flag_location = this.props.navigation.getParam('flag_location'); //get current address
    return (
      <View style={{ flex: 1 }}>
        
        <HeaderBar isBack={true} title="View Map" isLogout={true} navigation={navigation} />
        {
          this.state.flag_marker==true?
        
          
          this.markerDirection(this.state.TripDetials.pickup_latlng,this.state.TripDetials)
          :
        <View  style={ StyleMapView.MainContainer}>

          <TouchableOpacity 
            style={{ display:this.state.isSearchVisible ?'none':'flex', position:'absolute', top:10, right:10, zIndex:+1, justifyContent:'center', alignItems:'center'}}
            onPress={()=>{ this.setState({isSearchVisible:true}) }}
          >
              <Text style={{display:this.state.isSearchVisible ?'none':'flex', fontSize:18, color:Constants.COLOR_GREY_DARK, textAlign:'center'}}>Search</Text>
          </TouchableOpacity>

          <View style={{flex:1, display : this.state.isSearchVisible ? 'flex' : 'none'}}>
            <GooglePlacesAutocomplete
              placeholder='Search'
              fetchDetails={true}
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log("latlng====> "+JSON.stringify(details.geometry.location));
                this.setState({
                  current_latitude : details.geometry.location.lat,
                  current_longitude: details.geometry.location.lng,
                  isSearchVisible:false,
                  })
              }}
              query={{
                key: Constants.GOOGLE_MAP_KEY,
                language: 'en',
              }}
            />
          </View>

        {
          this.state.current_latitude==0?null:
        
          <MapView
            ref={(ref)=>{this.googleMap = ref}}
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
            onLayout = {() => this.googleMap.fitToCoordinates(
              [{
                latitude: this.state.current_latitude,
                longitude: this.state.current_longitude,
              }],
              { edgePadding: { top: 5, right: 5, bottom: 5, left: 5 }, animated: true })}
          >
            
             <Marker
                  draggable
                  onDragEnd={(e) => {
                    this.getCurrentAdddress(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude);
                    console.log('drag location==>', e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude);
                     this.RBSheet.open();
                  }}
                  coordinate={{latitude:this.state.current_latitude,longitude:this.state.current_longitude}}
                />

          </MapView>
  }
        </View>
        }    
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
        <Text style={StyleViewMap.maptxt}>{this.state.current_address}</Text>
              </View>
            </View>
            <View style={StyleViewMap.maplocationbtn}>
              <TouchableOpacity onPress={()=>{
                this.RBSheet.close();
                  this.props.navigation.goBack();
                }
               
                }>
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

