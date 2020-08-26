/* screen -MANAPPCUS072
    design by - Sameer D

    changes by mayur s
 */
import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Picker, TextInput, Modal, TouchableHighlight } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StylePaymentMethod } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import { MainPresenter } from '../config/MainPresenter';
import ApiConstants from '../config/ApiConstants';
export default class PaymentMethod extends React.Component {

    constructor() {
        super();
        this.payment_method="",
        this.user_id="",
        this.state = {
            payment_method:"",
            modalVisible: false,
            secondmodalVisible: false,

        }
    }

    componentDidMount(){
        this.payment_amount = this.props.navigation.getParam('payment_amount')
        console.log("payment amount on PaymentMethod ==> "+this.payment_amount)
        this.presenter.callPostApi(ApiConstants.getMyProfile, "", true)
    }

    onResponse(apiConstant, data){

        switch(apiConstant){
            case ApiConstants.getMyProfile:{
                if(data.status){
                    this.user_id = data.user_data.user_id
                    console.log("user id ===> "+this.user_id)
                }else{

                }
                break;
            }
        }

    }

    onPaymentSucess(){
        this.props.navigation.goBack()
        this.props.navigation.state.params.paymentCallback(this.payment_method,1,0)
    }

    redirectToPaymentGateway(){
        this.props.navigation.navigate("WebBrowser",{ 
            'payment_amount':this.payment_amount,
            'user_id':this.user_id,
            callback: (payment_flag, transaction_id)=>{
                this.props.navigation.goBack()
                this.props.navigation.state.params.paymentCallback(this.payment_method,payment_flag, transaction_id)
            }, 
        })
    }

    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1, }}>

                <HeaderBar title="Payment Method" isBack={true} isPaymentBack={false} isNotification={true} navigation={navigation} />
                
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} />
                
                <ScrollView bounces={false} style={{ width: wp('100%'), }}>

                    <View style={StylePaymentMethod.paymentmethod}>

                        <Text style={StylePaymentMethod.choosetext}>CHOOSE YOUR PAYMENT METHOD </Text>
                        
                        <View style={StylePaymentMethod.choosetype}>

                            <TouchableOpacity 
                                style={ this.state.payment_method=="cash" ? StylePaymentMethod.onlinepay : StylePaymentMethod.cashpickup}
                                onPress={()=>{
                                    this.payment_method="cash"
                                    this.setState({payment_method:"cash"})
                                }}
                            >
                                <Text style={ this.state.payment_method=="cash" ? StylePaymentMethod.onlinepaytxt : StylePaymentMethod.cashpickuptxt}>Cash On Pick Up</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity 
                                style={ this.state.payment_method=="online" ? StylePaymentMethod.onlinepay : StylePaymentMethod.cashpickup}
                                onPress={() => { 
                                    this.payment_method="online"
                                    this.setState({payment_method:"online",}) 
                                }}
                                underlayColor='#fff'
                            >
                                <Text style={this.state.payment_method=="online" ? StylePaymentMethod.onlinepaytxt : StylePaymentMethod.cashpickuptxt}>Online Payment </Text>
                            </TouchableOpacity>

                        </View>

                        <View style={StylePaymentMethod.paymentmethodpaybtn}>
                            <TouchableOpacity 
                                style={[StylePaymentMethod.paybtn,{backgroundColor : this.state.payment_method=="" ? Constants.COLOR_GREY_LIGHT  : Constants.COLOR_GREEN,}]}
                                disabled={this.state.payment_method=="" ? true : false}
                                onPress={()=>{
                                    this.payment_method=="cash" ? this.onPaymentSucess() : this.setState({modalVisible:true})
                                }}
                            >
                                <Text style={StylePaymentMethod.paybtntxt}>Pay</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>

                {/* PaymentGetway */}
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <View style={StylePaymentMethod.popmodule}>

                        <View style={StylePaymentMethod.popmain}>

                            <TouchableHighlight style={StylePaymentMethod.popclose} onPress={() => { this.setState({modalVisible:false}) }}>
                                <Image style={StylePaymentMethod.popcloseimg} source={require('../images/close.png')}></Image>
                            </TouchableHighlight>

                            <View style={StylePaymentMethod.popbody}>
                                <Image style={StylePaymentMethod.popbodyimg} source={require('../images/onlinepay.jpg')}></Image>
                                <Text style={StylePaymentMethod.popbodytxt}>Redirecting to Payment Gateway.</Text>
                                
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({modalVisible:false})
                                        this.redirectToPaymentGateway()
                                    }}
                                    style={StylePaymentMethod.popbtnwidth}
                                    underlayColor='#fff'>
                                    <Text style={StylePaymentMethod.popgrnbtn}>OK</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </Modal>

                <FooterBar navigation={navigation} />

            </View>
        )
    }
}