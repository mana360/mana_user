/* screen -MANAPPCUS071
    design by -Sameer 
 */
import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, Picker, TextInput, Modal, FlatList, ImageBackground, } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleDiscountVouchers} from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
export default class DiscountVouchers extends React.Component{
    constructor() {
        super();
        
      }
    render(){
        
        let {navigation} = this.props
        return(
            <View style={{flex:1,}}>
                {/* Header Start */ }
                <HeaderBar  title="Discount Vouchers" isBack={true} isLogout={true} navigation={navigation}/>
                {/* Header Close */ }
                {/* Main Body Start */}
                <ScrollView bounces={false} style={{width:wp('100%')}}>
                    <View style={StyleDiscountVouchers.pagebody}> 
                        <View style={StyleDiscountVouchers.voucherbgimg}>
                            <Image style={StyleDiscountVouchers.vourimg} source={require('../images/voucher.png')} />
                            <View style={StyleDiscountVouchers.vouchertxtbox}>
                                <Image style={StyleDiscountVouchers.voucerinnerimg} source={require('../images/DiscountVouchers.jpg')} />   
                                <View style={StyleDiscountVouchers.voucerinnertxt}>
                                    <Text style={StyleDiscountVouchers.voucerinntxthead}>REDERNEW</Text>
                                    <View style={StyleDiscountVouchers.voucervaiddiscountbtn}>
                                        <View style={StyleDiscountVouchers.voucervaiddiscount}>
                                            <Text style={StyleDiscountVouchers.voucerdate}>Valid upto 30/09/2019 </Text>
                                            <Text style={StyleDiscountVouchers.voucerdiscount}>(10% Discount)</Text>
                                        </View>
                                        <TouchableOpacity onPress={this._onPressButton}>
                                            <View style={StyleDiscountVouchers.voucerbtn}>
                                                <Text style={StyleDiscountVouchers.voucerapplybtn}>{Constants.APPLY}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={StyleDiscountVouchers.voucherbgimg}>
                            <Image style={StyleDiscountVouchers.vourimg} source={require('../images/voucher.png')} />
                            <View style={StyleDiscountVouchers.vouchertxtbox}>
                                <Image style={StyleDiscountVouchers.voucerinnerimg} source={require('../images/DiscountVouchers.jpg')} />   
                                <View style={StyleDiscountVouchers.voucerinnertxt}>
                                    <Text style={StyleDiscountVouchers.voucerinntxthead}>REDERNEW</Text>
                                    <View style={StyleDiscountVouchers.voucervaiddiscountbtn}>
                                        <View style={StyleDiscountVouchers.voucervaiddiscount}>
                                            <Text style={StyleDiscountVouchers.voucerdate}>Valid upto 30/09/2019 </Text>
                                            <Text style={StyleDiscountVouchers.voucerdiscount}>(10% Discount)</Text>
                                        </View>
                                        <TouchableOpacity onPress={this._onPressButton}>
                                            <View style={StyleDiscountVouchers.voucerbtn}>
                                                <Text style={StyleDiscountVouchers.voucerapplybtn}>{Constants.APPLY}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                {/* Main Body Close */}

            {/* Footer Start */}
            <FooterBar navigation={navigation}/>
            {/* Footer Close */}
        </View>
        )
    }
}