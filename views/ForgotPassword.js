import React from 'react';
import { View, Text, TouchableOpacity, Image,Modal,TextInput } from 'react-native'
import { StyleForgotPassword } from '../config/CommonStyles';
import Constants from '../config/Constants';
import FooterBar from '../config/FooterBar';
import HeaderBar from '../config/HeaderBar';
export default class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile_number: '',
            modal_visible:false,
            OTP:''
        }
    }

 modal_verifyOTP() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={[StyleForgotPassword.ModalView, { width: '80%' }]}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10 }}
                            onPress={()=>{
                                this.setState({modal_visible:false})
                        }}
                    >
                        <Image source={require('../images/close.png')}
                            style={{ width: 15, height: 15 }}
                        />
                    </TouchableOpacity>
                    <Text style={StyleForgotPassword.modalTextMSg}>{Constants.VerificationCode}</Text>
                    <Text style={{ color: Constants.COLOR_GREY_SHADED, alignSelf: 'center' }}>{Constants.EnterOTP}</Text>
                    <TextInput style={StyleForgotPassword.ModaltextInput}
                        value={this.state.OTP}
                        keyboardType="number-pad"
                        maxLength={4}
                        placeholder='0000'
                        onChangeText={(Text) => {
                            this.setState({ OTP: Text })
                        }}
                    />
                    <TouchableOpacity style={{ alignSelf: 'center', marginTop: 15 }}>
                        <Text style={StyleForgotPassword.resendText}>{Constants.ResendCode}</Text>
                    </TouchableOpacity>
                   
                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
                                
                        <TouchableOpacity style={StyleForgotPassword.modalButtonView}
                            onPress={()=>{
                                this.setState({modal_visible:false})
                                this.props.navigation.navigate('SetPassword');
                            }}
                        >
                            <Text style={StyleForgotPassword.modalButtonLabel}>{Constants.VERIFY}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={StyleForgotPassword.modalButtonView}
                            onPress={()=>{
                                this.setState({modal_visible:false})
                                this.props.navigation.navigate('CurrentTrip');
                            }}
                        >
                            <Text style={StyleForgotPassword.modalButtonLabel}>{Constants.BACK}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1, }}>
                <HeaderBar title="Forgot Password" isBack={true} isLogout={true} navigation={navigation} />
                <View style={{ flex: 1 }}>

                    <View>
                        <Text style={StyleForgotPassword.textMsg}>{Constants.KindlyEnteryourRegisteredMobNo}</Text>
                    </View>

                    <View style={StyleForgotPassword.TextInputView}>
                        <View style={StyleForgotPassword.LabelView}>
                            <Image source={require('../images/user_name.png')}
                                style={StyleForgotPassword.labelIcon}
                            />
                            <Text style={StyleForgotPassword.modalLabelText}>{Constants.MobileNumber}</Text>
                        </View>
                        <TextInput
                            placeholder="Enter Mobile Number"
                            style={StyleForgotPassword.TextInput}
                            value={this.state.mobile_number}
                            keyboardType="number-pad"
                            maxLength={10}
                            onChangeText={(text) => { this.setState({ mobile_number: text }) }}
                        />
                    </View>
                    <View style={{ bottom: 0, position: 'absolute', flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
                        <TouchableOpacity style={StyleForgotPassword.ButtonView}>
                            <Text style={StyleForgotPassword.buttonLabel}>{Constants.CANCEL}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={StyleForgotPassword.ButtonView}
                                   onPress={()=>{
                                    this.setState({modal_visible:true})
                            }}
                        >
                            <Text style={StyleForgotPassword.buttonLabel}>{Constants.SUBMIT}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <Modal
                    transparent={true}
                    visible={this.state.modal_visible}
                >
                   {this.modal_verifyOTP()}
                </Modal>
                <FooterBar navigation={navigation} />
            </View>
        )
    }
}