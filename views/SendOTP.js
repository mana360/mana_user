/* screen -MANAPPCUS091,92,93
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Modal } from 'react-native';
import { StyleSendOtp, StyleSignIn, StyleSetUpProfile } from '../config/CommonStyles'
import Constants from '../config/Constants';
import { StackActions, NavigationActions } from 'react-navigation';
export default class SendOTP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile_number: '',
            password: '',
            OTP: '',
            verifyOTP_modal: false,
            VerifySuccess_modal: false,
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
        };
    };
verifyOTP() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={[StyleSendOtp.ModalView, { width: '80%' }]}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10 }}
                        onPress={() => {
                            this.setState({ verifyOTP_modal: false })
                        }}
                    >
                        <Image source={require('../images/close.png')}
                            style={{ width: 15, height: 15 }}
                        />
                    </TouchableOpacity>
                    <Text style={StyleSendOtp.modalTextMSg}>{Constants.VerificationCode}</Text>
                    <Text style={{ color: Constants.COLOR_GREY_SHADED, alignSelf: 'center' }}>Enter the OTP sent to your mobile number</Text>
                    <TextInput style={StyleSendOtp.ModaltextInput}
                        value={this.state.OTP}
                        keyboardType="number-pad"
                        maxLength={4}
                        placeholder='0000'
                        onChangeText={(Text) => {
                            if (!isNaN(Text))
                                this.setState({ OTP: Text })
                            else
                                this.setState({ OTP: '' })
                        }}
                    />
                    <TouchableOpacity style={{ alignSelf: 'center', marginTop: 15 }}>
                        <Text style={StyleSendOtp.resendText}>{Constants.ResendCode}</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={StyleSendOtp.modalButtonView}
                        onPress={() => {
                            this.setState({verifyOTP_modal: false,VerifySuccess_modal:true });
                        }}
                    >
                        <Text style={StyleSendOtp.modalButtonLabel}>{Constants.SUBMIT}</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
}
VerifySuccess() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={StyleSetUpProfile.modalView}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10 }}
                        onPress={() => {
                            this.setState({ VerifySuccess_modal: false ,})
                        }}
                    >
                        <Image source={require('../images/close.png')}
                            style={{ width: 15, height: 15 }}
                        />
                    </TouchableOpacity>
                    <Image style={StyleSetUpProfile.modalImage}
                        source={require('../images/sent_icon.png')}
                    />
                    <Text style={StyleSetUpProfile.modalMsg}>{Constants.OTPVerifiedSuccessfully}</Text>
                    <TouchableOpacity style={StyleSetUpProfile.modalButton}
                        onPress={() => {
                            this.setState({ verifyOTP_modal: false,VerifySuccess_modal:false })
                            this.props.navigation.navigate('ProfileSetUp');
                        }}
                    >
                        <Text style={StyleSetUpProfile.modalButtonText}>{Constants.OK}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )



}
    render() {
        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Image style={StyleSignIn.bgImage} source={require('../images/Splash_screen.jpg')} />

                <View style={[StyleSignIn.loginBox, { padding: 15 }]}>
                    <View style={StyleSignIn.LogoImageView}>
                        <Image style={{ width: '100%', height: '46%', marginLeft: 0.5, bottom: 0, position: 'absolute', zIndex: -1, resizeMode: "stretch" }}
                            source={require('../images/circle.png')}
                        />
                        <Image style={StyleSignIn.logoImage}
                            source={require('../images/logo_in_circle.png')}
                        />
                    </View>

                    <View style={[StyleSignIn.textInput_container, { marginTop: 95 }]}>
                        <View style={StyleSignIn.labelBox}>
                            <Image style={StyleSignIn.LabelBoxIcon}
                                source={require('../images/mobile_number.png')} />
                            <Text style={StyleSignIn.labelBoxText}>{Constants.MobileNumber}</Text>
                        </View>
                        <TextInput placeholder='Enter Mobile Number'
                            style={StyleSignIn.textInput_style}
                            keyboardType="number-pads"
                            maxLength={10}
                            value={this.state.mobile_number}
                            onChangeText={(newText) => {
                                if (!isNaN(newText))
                                    this.setState({ mobile_number: newText })
                                else
                                    this.setState({ mobile_number: '' })

                            }}
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            this.setState({ verifyOTP_modal: true })
                        }}
                        style={StyleSignIn.loginButton}>
                        <Text style={StyleSignIn.Login_buttonText}>{Constants.SendOTP}</Text>
                    </TouchableOpacity>

                </View>

                <Modal
                    transparent={true}
                    visible={this.state.verifyOTP_modal}
                >
                    {this.verifyOTP()}
                </Modal>

                <Modal
                    transparent={true}
                    visible={this.state.VerifySuccess_modal}
                >
                    {this.VerifySuccess()}
                </Modal>

            </View>
        )
    }
}