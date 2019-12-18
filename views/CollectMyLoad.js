
import React, { Component } from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';
import { StyleCollectMyLoad } from '../config/CommonStyles';
import Constants from '../config/Constants';
export default class CollectMyLoad extends React.Component {
    constructor() {
        super();
        this.state = {
         
        }
    }

    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1, backgroundColor: Constants.COLOR_GREY }}>
                
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
                                        alert('navigate to pml')
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
                                        alert('navigate to pml')
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
            </View>
        )
    }
}