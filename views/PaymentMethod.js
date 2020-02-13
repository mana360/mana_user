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
export default class PaymentMethod extends React.Component {

    constructor() {
        super();
        this.state = {
<<<<<<< HEAD

            support_subject: "Lorem ipsum",
            support_message: "",
            support_contact_number: "8866114477",
            modal_Visible: false,
            isUser: '',
            isTruck: '',
            modal_cancel: false,
            modalVisible: false,
            secondmodalVisible: false,

=======
          modalVisible: false,
          secondmodalVisible: false,
          payment_method:"",    // cash or online
>>>>>>> 4a40e1697e984e1aa7f2f2b70dbc7a411c3da1d2
        }
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    secondmodalVisible(visible) {
        this.setState({ modalVisible: false });
        this.setState({ secondmodalVisible: visible });
    }
<<<<<<< HEAD
    render() {

        let { navigation } = this.props
        return (
            <View style={{ flex: 1, }}>
                <HeaderBar title="Payment Method" isBack={true} isPaymentBack={true} isNotification={true} navigation={navigation} />
                <ScrollView bounces={false} style={{ width: wp('100%'), }}>
=======
    render(){
        
        let {navigation} = this.props
        return(
            <View style={{flex:1,}}>
                
                <HeaderBar title="Payment Method" isBack={true} isLogout={true} navigation={navigation}/>
                
                <ScrollView bounces={false} style={{width:wp('100%'),}}>
                
>>>>>>> 4a40e1697e984e1aa7f2f2b70dbc7a411c3da1d2
                    <View style={StylePaymentMethod.paymentamount}>
                
                        <View style={StylePaymentMethod.paymentamounttxt}>
                            <Text style={StylePaymentMethod.paymentamountlefttxt}>Total Price</Text>
                            <Text style={StylePaymentMethod.paymentamountrighttxt}>R 445</Text>
                        </View>
                
                        <View style={StylePaymentMethod.paymentamounttxt}>
                            <Text style={StylePaymentMethod.paymentamountlefttxt}>Other Services</Text>
                            <Text style={StylePaymentMethod.paymentamountrighttxt}>R 55</Text>
                        </View>
                
                        <View style={StylePaymentMethod.paymentamounttxt}>
                            <Text style={StylePaymentMethod.paymentamountlefttxt}>Discount Voucher</Text>
                            <Text style={StylePaymentMethod.paymentamountrighttxt}>-  R 10</Text>
                        </View>
<<<<<<< HEAD
                        <View style={[StylePaymentMethod.paymentamounttxt, { borderBottomWidth: 0, }]}>
=======
                
                        <View style={[StylePaymentMethod.paymentamounttxt,{borderBottomWidth: 0, }]}>
>>>>>>> 4a40e1697e984e1aa7f2f2b70dbc7a411c3da1d2
                            <Text style={StylePaymentMethod.paymenttotal}>Grand Total</Text>
                            <Text style={StylePaymentMethod.paymenttotalamount}>R 490</Text>
                        </View>
                    
                    </View>

                    <View style={StylePaymentMethod.paymentmethod}>
<<<<<<< HEAD
                        <Text style={StylePaymentMethod.choosetext}>CHOOSE YOUR PAYMENT METHOD </Text>
=======

                        <Text style={StylePaymentMethod.choosetext}>CHOOSE YOUR PAYMENT METHOD </Text>   
                
>>>>>>> 4a40e1697e984e1aa7f2f2b70dbc7a411c3da1d2
                        <View style={StylePaymentMethod.choosetype}>

                            <TouchableOpacity style={ this.state.payment_method=="cash" ? StylePaymentMethod.onlinepay : StylePaymentMethod.cashpickup}
                                onPress={()=>{this.setState({payment_method:"cash"})}}>
                                <Text style={ this.state.payment_method=="cash" ? StylePaymentMethod.onlinepaytxt : StylePaymentMethod.cashpickuptxt}>Cash On Pick Up</Text>
                            </TouchableOpacity>
<<<<<<< HEAD
                            <TouchableOpacity style={StylePaymentMethod.onlinepay} onPress={() => { this.setModalVisible(true); }} underlayColor='#fff'>
                                <Text style={StylePaymentMethod.onlinepaytxt}>Online Payment </Text>
=======

                            <TouchableOpacity style={ this.state.payment_method=="online" ? StylePaymentMethod.onlinepay : StylePaymentMethod.cashpickup}
                                onPress={()=>{this.setState({payment_method:"online",})}}>
                                <Text style={ this.state.payment_method=="online" ? StylePaymentMethod.onlinepaytxt : StylePaymentMethod.cashpickuptxt}>Online Payment </Text>
>>>>>>> 4a40e1697e984e1aa7f2f2b70dbc7a411c3da1d2
                            </TouchableOpacity>

                        </View>

                        <View style={StylePaymentMethod.paymentmethodpaybtn}>
                            <TouchableOpacity style={StylePaymentMethod.paybtn}
                                onPress={()=>{this.setState({ modalVisible:true})}}
                            >
                                <Text style={StylePaymentMethod.paybtntxt}>Pay</Text>
                            </TouchableOpacity>
<<<<<<< HEAD
                        </View>
=======
                        </View>       
                
>>>>>>> 4a40e1697e984e1aa7f2f2b70dbc7a411c3da1d2
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
                            <TouchableHighlight style={StylePaymentMethod.popclose} onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
                                <Image style={StylePaymentMethod.popcloseimg} source={require('../images/close.png')}></Image>
                            </TouchableHighlight>

                            <View style={StylePaymentMethod.popbody}>
                                <Image style={StylePaymentMethod.popbodyimg} source={require('../images/onlinepay.jpg')}></Image>
                                <Text style={StylePaymentMethod.popbodytxt}>Redirecting to Payment Gateway.</Text>
                                <TouchableOpacity
                                    onPress={() => { this.secondmodalVisible(true); }}
                                    style={StylePaymentMethod.popbtnwidth}
                                    underlayColor='#fff'>
                                    <Text style={StylePaymentMethod.popgrnbtn}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.secondmodalVisible}
                >
                    <View style={StylePaymentMethod.popmodule}>
                        <View style={StylePaymentMethod.popmain}>
<<<<<<< HEAD
                            <TouchableHighlight
                                style={StylePaymentMethod.popclose}
                                onPress={() => {
                                    this.secondmodalVisible(false);
                                    this.props.navigation.navigate('Dashboard')
=======
                            <TouchableHighlight 
                                style={StylePaymentMethod.popclose} 
                                onPress={() => {this.secondmodalVisible(false);
                                    //this.props.navigation.navigate('Dashboard')
>>>>>>> 4a40e1697e984e1aa7f2f2b70dbc7a411c3da1d2
                                }}
                            >
                                <Image style={StylePaymentMethod.popcloseimg} source={require('../images/close.png')}></Image>
                            </TouchableHighlight>

                            <View style={StylePaymentMethod.popbody}>
                                <Image style={StylePaymentMethod.popbodythanksimg} source={require('../images/thank.jpg')}></Image>
                                <Text style={StylePaymentMethod.popbodythankstxt}>Thank You For Booking with us! </Text>
                                <View style={StylePaymentMethod.popbodynotification}>
                                    <Text style={StylePaymentMethod.popbodynotificationtxt}>
                                        A Driver will be assigned approximately an hour before arriving on "Pick up Date & Time
                                    </Text>
                                </View>
                                <View style={StylePaymentMethod.popbodynotification}>
                                    <Text style={StylePaymentMethod.popbodynotificationtxt}>
                                        You will receive an OTP shortly. Kindly share the OTP with the driver for verification
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* pay */}

<<<<<<< HEAD
                {/* modal_cancel ----- mayur s*/}
           
                <FooterBar navigation={navigation} />
=======
                <FooterBar navigation={navigation}/>
>>>>>>> 4a40e1697e984e1aa7f2f2b70dbc7a411c3da1d2

            </View>
        )
    }
}