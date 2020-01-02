/* screen -MANAPPCUS060
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, Modal, FlatList } from 'react-native'
import { styleDiscountVoucher } from '../config/CommonStyles';
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
            <View style={{ flex: 1 }}>
                <HeaderBar isBack={true} title='Discount vouchers' isNotification={true} navigation={navigation} />
                <FlatList
                    data={this.state.dataSource}
                    extraData={this.state}
                    keyExtractor={(index) => { index.toString() }}
                    style={{ marginVertical:20 }}
                    bounces={false}
                    renderItem={({ item }) => {
                        return (
                            <View style={{marginVertical:13,paddingBottom:5,justifyContent:"center", }}>
                             <Image source={require('../images/voucher.png')}
                                 style={styleDiscountVoucher.bgImage} />
                             
                                <View style={{ flexDirection: "row", flex: 10,marginVertical:5,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                                 
                                    <View style={{ flex: 2,justifyContent:'center',alignSelf:'center',paddingLeft:20}}>
                                        <Image source={require('../images/Discount_Vouchers(1).jpg')}
                                            style={{ width: 55, height: 55 ,alignSelf:"center",}}
                                        />
                                    </View>

                                    <View style={{ flex: 8, justifyContent: 'center',}}>
                                        <View style={styleDiscountVoucher.titleView}>
                                            <Text style={styleDiscountVoucher.title}>{item.title}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row',alignSelf:'center' }}>
                                            <Text style={styleDiscountVoucher.discountText}>({item.discount}% Discount)</Text>
                                            <Text style={styleDiscountVoucher.validityDate}>Valid upto {item.Validity}</Text>
                                        </View>
                                    </View>

                                    </View>
                                </View>
                        )
                    }}

                >
                </FlatList>

                <FooterBar navigation={navigation} />

            </View>

        )
    }
}