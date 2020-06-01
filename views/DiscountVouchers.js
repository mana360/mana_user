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
import ApiConstants from '../config/ApiConstants';
import { MainPresenter } from '../config/MainPresenter';

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
        ],
        dataSource:[],
    }
}

componentDidMount() {
this.getCoupon();
}

async getCoupon(){
     await this.presenter.callGetApi(ApiConstants.getVouchers, "", true);
}

onResponse(apiConstant, data) {
    switch (apiConstant) {
        case ApiConstants.getVouchers: {
            if (data.status) {
                if (data.coupon_list && data.coupon_list.length == 0) {
                    console.log("coupon_list====>"+data.coupon_list);
                    this.setState({ dataSource: data.coupon_list});
                } else {
                    // alert(data.message);
                    console.log("coupon_list====>"+JSON.stringify(data.coupon_list));
                    this.setState({ dataSource: data.coupon_list});
                    let rt=[];
                    
                }

            }
            break;
        }
        default:break;
    }
}


getVouchers(item, isOrder) {
    return (
         
        <View style={StyleDiscountVouchers.voucherbgimg}>
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} navigation={this.props.navigation} />
           
            <Image style={StyleDiscountVouchers.vourimg} source={require('../images/voucher.png')} />
            <View style={StyleDiscountVouchers.vouchertxtbox}>
                <Image style={StyleDiscountVouchers.voucerinnerimg} source={require('../images/DiscountVouchers.jpg')} />   
                <View style={StyleDiscountVouchers.voucerinnertxt}>
                    <Text style={StyleDiscountVouchers.voucerinntxthead}>{item.coupon_title}</Text>
                    <View style={StyleDiscountVouchers.voucervaiddiscountbtn}>
                        <View style={StyleDiscountVouchers.voucervaiddiscount}>
                            <Text style={[StyleDiscountVouchers.voucerdate]}>Valid Upto {item.valid_upto}</Text>
                            <Text style={StyleDiscountVouchers.voucerdiscount}>({item.coupon_desc} Discount)% </Text>
                        </View>
                        <Text style={ isOrder? {display:'none'} :[StyleDiscountVouchers.voucerdate,{marginTop:5}]}>Valid Upto {item.valid_upto}</Text>
                        <TouchableOpacity 
                            style={ isOrder ? {display:'flex'} : {display:'none'}}
                            onPress={()=>{
                            this.props.navigation.pop();
                            this.props.navigation.state.params.getAmount(item.discountpercentage);

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
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} navigation={this.props.navigation} />
                <HeaderBar  title="Discount Vouchers" isBack={true} isLogout={true} navigation={navigation}/>
                {/* Header Close */ }
                {/* Main Body Start */}
                <View style={StyleDiscountVouchers.pagebody}>
                    <FlatList
                        data={this.state.dataSource}                 
                        extraData={this.state}
                        keyExtractor={(index)=>index.toString()}
                        numColumns={1}
                        renderItem={
                            ({item,index})=>
                            (
                                       
                     <View style={StyleDiscountVouchers.voucherbgimg}>

                        <Image style={StyleDiscountVouchers.vourimg} source={require('../images/voucher.png')} />
                        <View style={StyleDiscountVouchers.vouchertxtbox}>
                            <Image style={StyleDiscountVouchers.voucerinnerimg} source={require('../images/DiscountVouchers.jpg')} />   
                            <View style={StyleDiscountVouchers.voucerinnertxt}>
                                <Text style={StyleDiscountVouchers.voucerinntxthead}>{item.coupon_title}</Text>
                                <View style={StyleDiscountVouchers.voucervaiddiscountbtn}>
                                    <View style={StyleDiscountVouchers.voucervaiddiscount}>
                                        <Text style={[StyleDiscountVouchers.voucerdate]}>Valid Upto {item.valid_upto}</Text>
                                        <Text style={StyleDiscountVouchers.voucerdiscount}>({item.coupon_desc} Discount)% </Text>
                                    </View>
                                    <Text style={ isOrder? {display:'none'} :[StyleDiscountVouchers.voucerdate,{marginTop:5}]}>Valid Upto {item.valid_upto}</Text>
                                    <TouchableOpacity 
                                        style={ isOrder ? {display:'flex'} : {display:'none'}}
                                        onPress={()=>{
                                            this.props.navigation.pop();
                                            this.props.navigation.state.params.getAmount(item);

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
                    />
                </View>
                {/* Main Body Close */}
                            {/* <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
                                <Text>
                                    NO Coupon
                                </Text>
                            </View> */}
            {/* Footer Start */}
            <FooterBar navigation={navigation}/>
            {/* Footer Close */}
        </View>
        )
    }
}