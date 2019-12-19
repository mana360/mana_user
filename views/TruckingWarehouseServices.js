/* screen -MANAPPCUS002
    design by -mayur
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, Modal,TouchableOpacity } from 'react-native';
import {  Card,CardItem} from "native-base";
import { StyleTruckBooking } from '../config/CommonStyles';
import  LinearGradient from "react-native-linear-gradient";
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
export default class TruckingWarehouseServices extends React.Component {
    constructor() {
        super();
        this.state = {
     
        }
    }
    
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1,backgroundColor:Constants.COLOR_GREY }}>
                            <View style={StyleTruckBooking.row}>
                                 <View style={StyleTruckBooking.col1}>
                                 <Image source={require('../images/Trucking+Warehouse.png')}
                                 style={StyleTruckBooking.image}/>
                                </View>
                                <View style={StyleTruckBooking.col2}>
                                     <Text style={[StyleTruckBooking.labelText2]}>{Constants.CurrentTrip}</Text>
                                     <Text style={StyleTruckBooking.descText}>fnsldfn fnsldfn fnsldfn fnsldfn fnsldfn lorempipsom</Text>
                                     <TouchableOpacity style={StyleTruckBooking.button}
                                              onPress={()=>{
                                                  this.props.navigation.navigate('TruckingWarehouseCurrentService');
                                              }} 
                                    >
                                           <Text style={StyleTruckBooking.buttonLabel}>{Constants.ViewAll}</Text>
                                     </TouchableOpacity>
                                </View>
                            </View>

                            <View style={StyleTruckBooking.row}>
                                 <View style={StyleTruckBooking.col1}>
                                 <Image source={require('../images/Warehouse_Services.png')}
                                 style={StyleTruckBooking.image}/>
                                </View>
                                <View style={StyleTruckBooking.col2}>
                                     <Text style={[StyleTruckBooking.labelText2]}>{Constants.UpcomingTrip}</Text>
                                     <Text style={StyleTruckBooking.descText}>fnsldfn fnsldfn fnsldfnfnsldfnfnsldfnfnsldfn fnsldfn fnsldfn lorempipsom</Text>
                                     <TouchableOpacity style={StyleTruckBooking.button}
                                            onPress={()=>{
                                                this.props.navigation.navigate('TruckingWarehouseUpcomingTrip');
                                            }} 
                                    >
                                           <Text style={StyleTruckBooking.buttonLabel}>{Constants.ViewAll}</Text>
                                     </TouchableOpacity>
                                </View>
                            </View>
                        </View>
  
        )
    }
}