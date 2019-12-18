/* screen -MANAPPCUS002
    design by -mayur
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, Modal,TouchableOpacity } from 'react-native';
import {  Card,CardItem} from "native-base";
import  LinearGradient from "react-native-linear-gradient";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleTruckBooking } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import StarRating from "react-native-star-rating";
export default class TruckBooking extends React.Component {
    constructor() {
        super();
        this.state = {
            starCount: null,
            inputLabelTrip: '',
            reviewTrip: '',
            modal_Visible:false,
            booking_status:1
        }
    }
    onStarRatingPress(rating) {
        this.setState({ starCount: rating })
     
    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1,backgroundColor:Constants.COLOR_GREY }}>
                <View style={{ flex: 1 }}>
                            <View style={StyleTruckBooking.row}>
                                 <View style={StyleTruckBooking.col1}>
                                 <Image source={require('../images/Warehouse_Services.png')}
                                 style={StyleTruckBooking.image}/>
                                </View>
                                <View style={StyleTruckBooking.col2}>
                                     <Text style={[StyleTruckBooking.labelText2]}>{Constants.CurrentTrip}</Text>
                                     <Text style={StyleTruckBooking.descText}>fnsldfn fnsldfn fnsldfn fnsldfn fnsldfn lorempipsom</Text>
                                     <TouchableOpacity style={StyleTruckBooking.button}
                                              onPress={()=>{
                                                  this.props.navigation.navigate('CurrentTrip',{flag_truck_booking:1});
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
                                                    this.props.navigation.navigate('CurrentTrip',{flag_truck_booking:2});
                                            }} 
                                    >
                                           <Text style={StyleTruckBooking.buttonLabel}>{Constants.ViewAll}</Text>
                                     </TouchableOpacity>
                                </View>
                            </View>
                      </View>
            </View>
        )
    }
}