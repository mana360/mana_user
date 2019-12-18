/* screen -MANAPPCUS002
    design by -mayur
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { Card, CardItem } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleCollectMyLoad } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import StarRating from "react-native-star-rating";
export default class CollectMyLoad extends React.Component {
    constructor() {
        super();
        this.state = {
            starCount: null,
            inputLabelTrip: '',
            reviewTrip: '',
            modal_Visible: false,
            booking_status: 1
        }
    }
    onStarRatingPress(rating) {
        this.setState({ starCount: rating })

    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1, backgroundColor: Constants.COLOR_GREY }}>
                <HeaderBar title="PICK MY LOAD" isLogout={true} navigation={navigation} />
                <View style={{ flex: 1 }}>
                    <ScrollView bounces={false}>
                        <View style={StyleCollectMyLoad.topCircle}>
                        </View>
                        <Card style={{ width: '90%', alignSelf: 'center', maxHeight: 100, marginTop: '-27%', borderRadius: 5 }}>
                            <CardItem style={StyleCollectMyLoad.cardView} >
                                <TouchableOpacity style={StyleCollectMyLoad.ImageView}
                                    onPress={() => {
                                        this.props.navigation.navigate('TruckBooking');
                                    }}
                                >
                                    <Image source={require('../images/Truck_Bookings.png')}
                                        style={StyleCollectMyLoad.imageD}
                                    />
                                    <Text style={StyleCollectMyLoad.textD}>{Constants.TruckBooking}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={StyleCollectMyLoad.ImageView}
                                    onPress={() => {
                                        this.props.navigation.navigate('WarehouseServices');
                                    }}
                                >
                                    <Image source={require('../images/Warehouse_Services.png')}
                                        style={StyleCollectMyLoad.imageD}
                                    />
                                    <Text style={StyleCollectMyLoad.textD}>{Constants.WarehouseService}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={StyleCollectMyLoad.ImageView}
                                    onPress={() => {
                                        this.props.navigation.navigate('TruckingWarehouseServices');
                                    }}
                                >
                                    <Image source={require('../images/Trucking+Warehouse.png')}
                                        style={StyleCollectMyLoad.imageD}
                                    />
                                    <Text style={StyleCollectMyLoad.textD}>{Constants.truckingwarehouse}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={[StyleCollectMyLoad.ImageView, { borderRightWidth: 0 }]}
                                    onPress={() => {
                                        this.props.navigation.navigate('CollectMyLoad');
                                    }}
                                >
                                    <Image source={require('../images/Collect_My_Load_active.png')}
                                        style={StyleCollectMyLoad.imageD}
                                    />
                                    <Text style={[StyleCollectMyLoad.textD, { color: Constants.COLOR_GREEN }]}>{Constants.CollectMyLoad}</Text>
                                </TouchableOpacity>
                            </CardItem>
                        </Card>
                        <Text style={StyleCollectMyLoad.labelText}>{Constants.TotalBookings}</Text>
                        <View style={StyleCollectMyLoad.bottomLine}>
                        </View>

                        <View style={StyleCollectMyLoad.row}>
                            <View style={StyleCollectMyLoad.col1}>
                                <Image source={require('../images/Warehouse_Services.png')}
                                    style={StyleCollectMyLoad.image} />
                            </View>
                            <View style={StyleCollectMyLoad.col2}>
                                <Text style={[StyleCollectMyLoad.labelText2]}>{Constants.NewBooking}</Text>
                                <Text style={StyleCollectMyLoad.descText}>fnsldfn fnsldfn fnsldfn fnsldfn fnsldfn lorempipsom</Text>
                                <TouchableOpacity style={StyleCollectMyLoad.button}
                                    onPress={() => {
                                        this.props.navigation.navigate('');
                                    }}
                                >
                                    <Text style={StyleCollectMyLoad.buttonLabel}>{Constants.ViewAll}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={StyleCollectMyLoad.row}>
                            <View style={StyleCollectMyLoad.col1}>
                                <Image source={require('../images/Warehouse_Services.png')}
                                    style={StyleCollectMyLoad.image} />
                            </View>
                            <View style={StyleCollectMyLoad.col2}>
                                <Text style={[StyleCollectMyLoad.labelText2]}>{Constants.MyBooking}</Text>
                                <Text style={StyleCollectMyLoad.descText}>fnsldfn fnsldfn fnsldfnfnsldfnfnsldfnfnsldfn fnsldfn fnsldfn lorempipsom</Text>
                                <TouchableOpacity style={StyleCollectMyLoad.button}
                                    onPress={() => {
                                        this.props.navigation.navigate('');
                                    }}
                                >
                                    <Text style={StyleCollectMyLoad.buttonLabel}>{Constants.ViewAll}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                        <View style={StyleCollectMyLoad.ServicesView}>
                            <Text style={[StyleCollectMyLoad.labelText,{textTransform:"uppercase",fontSize:Constants.FONT_SIZE_LARGE}]}>{Constants.CollectMyloadOtherServices}</Text>
                            <View style={{flexDirection:'row',marginVertical:15,justifyContent:'center',}}>
                                <TouchableOpacity style={StyleCollectMyLoad.ServImageView}>
                                    <Image source={require('../images/Refer_A_Friend.png')} 
                                        style={StyleCollectMyLoad.ServImage}
                                    />
                                    <Text style={StyleCollectMyLoad.ServText}>{Constants.ReferAFriend}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={StyleCollectMyLoad.ServImageView}>
                                    <Image source={require('../images/Rate_Card.png')} 
                                        style={StyleCollectMyLoad.ServImage}
                                    />
                                    <Text style={StyleCollectMyLoad.ServText}>{Constants.RateCard}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={StyleCollectMyLoad.ServImageView}>
                                    <Image source={require('../images/My_Discount_.png')} 
                                        style={[StyleCollectMyLoad.ServImage,]}
                                    />
                                    <Text style={StyleCollectMyLoad.ServText}>{Constants.MyDiscountVoucher}</Text>
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