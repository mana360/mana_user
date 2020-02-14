/* screen -MANAPPCUS066
    design by -Sameer 
 */
import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, Picker, TextInput, Modal, FlatList, ImageBackground, StyleSheet, Button, } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleViewMap} from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { } from 'react-native-gesture-handler';
import RBSheet from "react-native-raw-bottom-sheet";

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
            <MapView
              onPress={() => {
                this.RBSheet.open();
              }}
              style={StyleViewMap.mapStyle}
              showsUserLocation={false}
              zoomEnabled={true}
              zoomControlEnabled={true}
              initialRegion={{
                  latitude: 18.5581568,
                  longitude: 73.7828864,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
              }}>
              <Marker
                  coordinate={{ latitude: 18.5581568, longitude: 73.7828864 }}
                  title={"JavaTpoint"}
                  description={"Java Training Institute"}
                  />
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


