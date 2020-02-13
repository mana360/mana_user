/* screen -MANAPPCUS071
    design by -Sameer 
    redesign by Udayraj
 */
import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, Picker, TextInput, Modal, FlatList, ImageBackground, } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleDiscountVouchers} from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';

export default class DiscountVouchers extends React.Component{

constructor (props) {
    super(props)
    
    this.state = {
        DISCOUNTVOUCHERS:[
            {
                vouchername: 'refernew',
                voucherdate: '30/09/2019',
                discountpercentage: 10,
            },
            {
                vouchername: 'refer15',
                voucherdate: '01/09/2019',
                discountpercentage: 15,
            },
            {
                vouchername: 'refer20',
                voucherdate: '31/11/2019',
                discountpercentage: 20,
            },
        ]
    }
}
getVouchers(item, isOrder) {
    return (
         
        <View style={StyleDiscountVouchers.voucherbgimg}>
            <Image style={StyleDiscountVouchers.vourimg} source={require('../images/voucher.png')} />
            <View style={StyleDiscountVouchers.vouchertxtbox}>
                <Image style={StyleDiscountVouchers.voucerinnerimg} source={require('../images/DiscountVouchers.jpg')} />   
                <View style={StyleDiscountVouchers.voucerinnertxt}>
                    <Text style={StyleDiscountVouchers.voucerinntxthead}>{item.vouchername}</Text>
                    <View style={StyleDiscountVouchers.voucervaiddiscountbtn}>
                        <View style={StyleDiscountVouchers.voucervaiddiscount}>
                            <Text style={ isOrder? StyleDiscountVouchers.voucerdate :[StyleDiscountVouchers.voucerdate,{ display:'none'}]}>Valid Upto {item.voucherdate}</Text>
                            <Text style={StyleDiscountVouchers.voucerdiscount}>({item.discountpercentage} Discount)% </Text>
                        </View>
                        <Text style={ isOrder? {display:'none'} :[StyleDiscountVouchers.voucerdate,{marginTop:5}]}>Valid Upto {item.voucherdate}</Text>
                        <TouchableOpacity 
                            style={ isOrder ? {display:'flex'} : {display:'none'}}
                            onPress={()=>{
                            this.props.navigation.pop();
                            this.props.navigation.state.params.getAmount(item.discountpercentage)
                        }}>
                            <View style={StyleDiscountVouchers.voucerbtn}>
                                <Text style={StyleDiscountVouchers.voucerapplybtn}>{Constants.APPLY}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
    render(){
        let {navigation} = this.props;
        let isOrder = this.props.navigation.getParam('isOrder',false)
        return(
            <View style={{flex:1,}}>
                {/* Header Start */ }
                <HeaderBar  title="Discount Vouchers" isBack={true} isLogout={true} navigation={navigation}/>
                {/* Header Close */ }
                {/* Main Body Start */}
                <View style={StyleDiscountVouchers.pagebody}>
                    <FlatList
                        data={this.state.DISCOUNTVOUCHERS}                 
                        extraData={this.state}
                        keyExtractor={(index)=>index.toString()}
                        numColumns={1}
                        renderItem={
                            ({item})=>
                            this.getVouchers(item,isOrder)
                        }
                    />
                </View>
                {/* Main Body Close */}

            {/* Footer Start */}
            <FooterBar navigation={navigation}/>
            {/* Footer Close */}
        </View>
        )
    }
}