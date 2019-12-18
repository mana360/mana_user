/* screen -MANAPPCUS002
    design by -mayur
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, Modal,TouchableOpacity } from 'react-native';
import {  Card,CardItem} from "native-base";
import  LinearGradient from "react-native-linear-gradient";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleDashboard } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import StarRating from "react-native-star-rating";
export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            starCount: null,
            inputLabelTrip: '',
            reviewTrip: '',
            modal_Visible:false,
        }
    }
    onStarRatingPress(rating) {
        this.setState({ starCount: rating })
     
    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>
           <HeaderBar title="DASHBOARD"  isLogout={true} navigation={navigation} />
                <View style={{ flex: 1 }}>
                    <ScrollView  bounces={false}>
                            <View style={StyleDashboard.topCircle}>
                            </View>
                            <Card style={{width:'90%',alignSelf:'center',maxHeight:100,marginTop:'-27%',borderRadius:5}}>
                                    <CardItem style={StyleDashboard.cardView} >
                                        <TouchableOpacity style={StyleDashboard.ImageView}
                                           onPress={()=>{
                                               this.props.navigation.navigate('TruckBooking')
                                           }}
                                        > 
                                            <Image source={require('../images/Truck_Bookings.png')}
                                                style={StyleDashboard.imageD}
                                                />
                                            <Text style={StyleDashboard.textD}>{Constants.TruckBooking}</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={StyleDashboard.ImageView}
                                             onPress={()=>{
                                                this.props.navigation.navigate('WarehouseServices')
                                            }}
                                        > 
                                            <Image source={require('../images/Warehouse_Services.png')}
                                                style={StyleDashboard.imageD}
                                            />
                                            <Text style={StyleDashboard.textD}>{Constants.WarehouseService}</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={StyleDashboard.ImageView}
                                             onPress={()=>{
                                                this.props.navigation.navigate('TruckingWarehouseServices')
                                            }}
                                        > 
                                            <Image source={require('../images/Trucking+Warehouse.png')}
                                                style={StyleDashboard.imageD}
                                            />
                                            <Text style={StyleDashboard.textD}>{Constants.truckingwarehouse}</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={[StyleDashboard.ImageView,{borderRightWidth:0}]}
                                              onPress={()=>{
                                                this.props.navigation.navigate('CollectMyLoad')
                                            }}
                                        > 
                                            <Image source={require('../images/Collect_My_Load.png')}
                                                style={StyleDashboard.imageD}
                                            />
                                            <Text style={StyleDashboard.textD}>{Constants.CollectMyLoad}</Text>
                                        </TouchableOpacity>
                                 </CardItem>
                            </Card>
                            <Text style={StyleDashboard.labelText}>{Constants.TotalBookings}</Text>
                            <View style={StyleDashboard.bottomLine}>
                            </View>

                            <View style={StyleDashboard.row}>
                                 <View style={StyleDashboard.col1}>
                                 <Image source={require('../images/Warehouse_Services.png')}
                                 style={StyleDashboard.image}/>
                                </View>
                                <View style={StyleDashboard.col2}>
                                     <Text style={[StyleDashboard.labelText2,{color:'rgba(157, 58, 188,1)'}]}>{Constants.TruckBooking}</Text>
                                     <Text style={StyleDashboard.descText}>fnsldfn fnsldfn fnsldfn fnsldfn fnsldfn lorempipsom</Text>
                                </View>
                            </View>

                            <View style={StyleDashboard.row}>
                                 <View style={StyleDashboard.col1}>
                                 <Image source={require('../images/Warehouse_Services.png')}
                                 style={StyleDashboard.image}/>
                                </View>
                                <View style={StyleDashboard.col2}>
                                <Text style={[StyleDashboard.labelText2,{color:'rgba(146, 188, 18,1)'}]}>{Constants.WarehouseService}</Text>
                                     <Text style={StyleDashboard.descText}>fnsldfn fnsldfn fnsldfn fnsldfn fnsldfn lorempipsom</Text>
                                </View>
                            </View>
                            <View style={StyleDashboard.row}>
                                 <View style={StyleDashboard.col1}>
                                 <Image source={require('../images/Warehouse_Services.png')}
                                 style={StyleDashboard.image}/>
                                </View>
                                <View style={StyleDashboard.col2}>
                                <Text style={[StyleDashboard.labelText2,{color:'rgba(234, 68, 27,1)'}]}>{Constants.truckingwarehouse}</Text>
                                     <Text style={StyleDashboard.descText}>fnsldfn fnsldfn fnsldfn fnsldfn fnsldfn lorempipsom</Text>
                                </View>
                            </View>
                            <View style={[StyleDashboard.row]}>
                                 <View style={StyleDashboard.col1}>
                                 <Image source={require('../images/Warehouse_Services.png')}
                                 style={StyleDashboard.image}/>
                                </View>
                                <View style={StyleDashboard.col2}>
                                <Text style={[StyleDashboard.labelText2,{color:'rgba(82, 173, 209,1)'}]}>{Constants.CollectMyLoad}</Text>
                                     <Text style={StyleDashboard.descText}>fnsldfn fnsldfn fnsldfn fnsldfn fnsldfn lorempipsom</Text>
                                </View>
                            </View>

                    </ScrollView>
                </View>

                <FooterBar navigation={navigation} />
            </View>
        )
    }
}