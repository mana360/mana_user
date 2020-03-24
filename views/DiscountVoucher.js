/* screen -MANAPPCUS060
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, Modal, FlatList } from 'react-native'
import { styleDiscountVoucher } from '../config/CommonStyles';
import { Card, CardItem, FooterTab } from 'native-base';
import HeaderBar from '../config/HeaderBar';
import FooterBar from '../config/FooterBar';
import ApiConstants from '../config/ApiConstants';
import { MainPresenter } from '../config/MainPresenter'
import moment from 'moment';
export default class DiscountVoucher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                // { 'title': 'REFERNEW', 'discount': '10', 'Validity': '30/09/2019' },
                // { 'title': 'REFER10', ' discount': '10', 'Validity': '30/08/2019' },
                //  { 'title': 'NEWREFER', 'discount': '10', 'Validity': '09/08/2019' },
            ]
        }
    }
    componentDidMount() {
        this.presenter.callGetApi(ApiConstants.getVouchers, "", true)
    }
    onResponse(apiConstant, data) {
        switch (apiConstant) {
            case ApiConstants.getVouchers: {
                if (data.status) {
                    if (data.coupon_list && data.coupon_list.length == 0) {
                        this.setState({ dataSource: [] })
                    } else {
                        this.setState({
                            dataSource: data.coupon_list
                        })
                    }
                }
                break;
            }
        }
    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>
                <HeaderBar isBack={true} title='Discount vouchers' isNotification={true} navigation={navigation} />
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} navigation={this.props.navigation} />
                {
                    this.state.dataSource.length==0 ?
                        <Text style={{flex: 1, textAlign:"center",textAlignVertical:'center' }}>
                            No Coupons Available
                </Text>
                        :
                        <FlatList
                            data={this.state.dataSource}
                            extraData={this.state}
                            keyExtractor={(index) => { index.toString() }}
                            numColumns={1}
                            style={{ marginVertical: 20 }}
                            bounces={false}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ marginVertical: 13, paddingBottom: 5, justifyContent: "center", }}>

                                        <Image source={require('../images/voucher.png')}
                                            style={styleDiscountVoucher.bgImage} />

                                        <View style={{ flexDirection: "row", flex: 10, marginVertical: 5, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                                            <View style={{ flex: 2, justifyContent: 'center', alignSelf: 'center', paddingLeft: 20 }}>
                                                <Image source={require('../images/Discount_Vouchers(1).jpg')}
                                                    style={{ width: 55, height: 55, alignSelf: "center", }}
                                                />
                                            </View>

                                            <View style={{ flex: 8, justifyContent: 'center', }}>

                                                <View style={styleDiscountVoucher.titleView}>
                                                    <Text style={styleDiscountVoucher.title}>{item.coupon_title + ""}</Text>
                                                </View>

                                                <View style={{ flexDirection: 'row', marginLeft: 30, }}>
                                                    <Text style={styleDiscountVoucher.discountText}>({item.coupon_desc} {item.discount_type == "Percentage" ? '% Discount' : item.discount_type})</Text>
                                                    <Text style={styleDiscountVoucher.validityDate}>Valid upto {moment(item.valid_upto).format("DD/MM/YYYY")}</Text>
                                                </View>

                                            </View>

                                        </View>

                                    </View>
                                )
                            }}
                        >
                        </FlatList>
                }
                <FooterBar navigation={navigation} />
            </View>

        )
    }
}