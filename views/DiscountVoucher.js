import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, Modal, FlatList } from 'react-native'
import {styleDiscountVoucher } from '../config/CommonStyles';
import { Card, CardItem, FooterTab } from 'native-base';
import HeaderBar from '../config/HeaderBar';
import FooterBar from '../config/FooterBar';
export default class DiscountVoucher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                { 'title': 'REFERNEW', 'discount': '10', 'Validity': '30/09/2019' },
                { 'title': 'REFERNEW', 'discount': '10', 'Validity': '30/09/2019' },
                { 'title': 'REFERNEW', 'discount': '10', 'Validity': '30/09/2019' },
            ]
        }
    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{flex:1}}>
                <HeaderBar isBack={true} title='Discount vouchers' isNotification={true}/>
                <FlatList
                    data={this.state.dataSource}
                    extraData={this.state}
                    keyExtractor={(index)=>{index.toString()}}
                    style={{paddingTop:20}}
                    bounces={false}
                    renderItem={({item}) => {
                        return (
                            <Card style={{marginBottom:25,width:'90%',alignSelf:'center'}}>
                                <CardItem>
                                    <View style={{flexDirection:"row",flex:10,}}>
                                        <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                                            <Image source={require('../images/Discount_Vouchers(1).jpg')}
                                                style={{width:80,height:80}}
                                            />
                                        </View>

                                        <View  style={{flex:10,justifyContent:'center',alignContent:'center',paddingLeft:15}}>
                                            <View style={styleDiscountVoucher.titleView}>
                                                <Text style={styleDiscountVoucher.title}>{item.title}</Text>
                                            </View>
                                            <View style={{flexDirection:'row'}}>
                                                <Text style={styleDiscountVoucher.discountText}>({item.discount}% Discount)</Text>
                                                <Text style={styleDiscountVoucher.validityDate}>Valid upto {item.Validity}</Text>
                                                
                                            </View>
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>
                        )
                    }}
                    
                >
                </FlatList>
                <FooterBar navigation={navigation} />

            </View>

        )
    }
}