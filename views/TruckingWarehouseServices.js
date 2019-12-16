/* screen -MANAPPCUS002
    design by -mayur
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, Modal,TouchableOpacity } from 'react-native';
import {  Card,CardItem} from "native-base";
import { StyleTruckBooking } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
export default class TruckingWarehouseServices extends React.Component {
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
           <HeaderBar title="TRUCKING + WAREHOUSE SERVICES"  isLogout={true} navigation={navigation} />
                <View style={{ flex: 1 }}>
                    <ScrollView  bounces={false}>
                            <View style={StyleTruckBooking.topCircle}>
                            </View>
                            <Card style={{width:'90%',alignSelf:'center',maxHeight:100,marginTop:'-27%',borderRadius:5}}>
                                    <CardItem style={StyleTruckBooking.cardView} >
                                        <TouchableOpacity style={StyleTruckBooking.ImageView}> 
                                            <Image source={require('../images/Truck_Bookings.png')}
                                                style={StyleTruckBooking.imageD}
                                                />
                                            <Text style={StyleTruckBooking.textD}>{Constants.TruckBooking}</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={StyleTruckBooking.ImageView}> 
                                        <Image source={require('../images/Warehouse_Services.png')}
                                                style={StyleTruckBooking.imageD}
                                                />
                                            <Text style={StyleTruckBooking.textD}>{Constants.WarehouseService}</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={StyleTruckBooking.ImageView}> 
                                        <Image source={require('../images/Trucking_+Warehouse.png')}
                                                style={StyleTruckBooking.imageD}
                                                />
                                            <Text style={StyleTruckBooking.textD}>{Constants.truckingwarehouse}</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={[StyleTruckBooking.ImageView,{borderRightWidth:0}]}> 
                                        <Image source={require('../images/Collect_My_Load.png')}
                                                style={StyleTruckBooking.imageD}
                                                />
                                            <Text style={StyleTruckBooking.textD}>{Constants.CollectMyLoad}</Text>
                                        </TouchableOpacity>
                                 </CardItem>
                            </Card>
                            <Text style={StyleTruckBooking.labelText}>{Constants.TotalBookings}</Text>
                            <View style={StyleTruckBooking.bottomLine}>
                            </View>

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
                                                  this.props.navigation.navigate('WarehouseServicesCurrentTrip');
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
                                                    this.props.navigation.navigate('WarehouseServiceUpcomingTrip');
                                            }} 
                                    >
                                           <Text style={StyleTruckBooking.buttonLabel}>{Constants.ViewAll}</Text>
                                     </TouchableOpacity>
                                </View>
                            </View>

                    </ScrollView>
                </View>
                <FooterBar navigation={navigation} />
            </View>
        )
    }
}