/* screen -MANAPPCUS066
    design by -Sameer 
 */
import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, Picker, TextInput, Modal, FlatList, ImageBackground, StyleSheet, } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleViewMap} from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import MapView from 'react-native-maps';
export default class ViewMap extends React.Component{
    
    render(){
        
        let {navigation} = this.props
        return(
            <View style={{flex:1,}}>
                {/* Header Start */ }
                <HeaderBar  title="VIEW MAP" isBack={true} isLogout={true} navigation={navigation}/>
                {/* Header Close */ }
                {/* Main Body Start */}
                <View style={{flex:1,}}>
                    <MapView // remove if not using Google Maps
                    style={
                        [
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
                          ]

                    }
                    region={{
                        latitude: 18.568034,
                        longitude: 73.7729529,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    >
                    </MapView>
                </View>
                {/* Main Body Close */}
                {/* Footer Start */}
                <FooterBar navigation={navigation}/>
                {/* Footer Close */}
            </View>
        )
    }
}
