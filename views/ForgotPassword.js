/* screen -MANAPPCUS041,42
    design by -mayur s
 */
import React from 'react';
import { View, Text, TouchableOpacity, Image,Modal,TextInput } from 'react-native'
import { StyleForgotPassword } from '../config/CommonStyles';
import Constants from '../config/Constants';
import FooterBar from '../config/FooterBar';
import HeaderBar from '../config/HeaderBar';
import { StackActions, NavigationActions } from 'react-navigation';
import ApiConstants from '../config/ApiConstants';
import { setUserData, setAuthToken } from '../config/AppSharedPreference';
import { MainPresenter } from '../config/MainPresenter';
export default class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile_number: '',
            modal_visible:false,
            user_id:"",
            OTP:'',
            access_token:"",
        }
    }

    onClickSubmit(){
        let params = {
          "mobile_no":this.state.mobile_number,
        }
       this.presenter.callPostApi(ApiConstants.forgotPassword, params, true);
    }

    async resend_OTP(){
        await setAuthToken(this.state.access_token);
        let params = {
            "user_id":this.state.user_id,
            "mobile_otp":this.state.OTP,
          }
         this.presenter.callPostApi(ApiConstants.resendOTP, params, true); 
    }
   async verifyOTP(){
        await setAuthToken(this.state.access_token);
        let params = {
            "mobile_otp":this.state.OTP,
          }
         this.presenter.callPostApi(ApiConstants.verifyOTP, params, true);   
    }

async onResponse(apiConstant,data){
switch (apiConstant) {
    case ApiConstants.forgotPassword:{
        if(data.status){    
       console.log(data.status);
       this.setState({modal_visible:true,user_id:data.user_id,access_token:data.access_token});
       console.log(data.access_token)
        }else{
            alert(data.message);
        }
    }  
case ApiConstants.resendOTP:{
    if(data.status){
        console.log(data.status);
    }else{
alert(data.message);
    }
}
    case ApiConstants.verifyOTP:{
        if(data.status){
            alert(data.status);
this.setState({modal_visible:false});
this.props.navigation.navigate("SetPassword");

        }else{
            alert(data.message);
        }
    }
        break;
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
                        maxLength={6}
                        placeholder='000000'
                        onChangeText={(Text) => {
                            if(!isNaN(Text))
                                this.setState({ OTP: Text })
                            else
                             this.setState({ OTP:'' })
                        }}
                    />
                    <TouchableOpacity style={{ alignSelf: 'center', marginTop: 15 }}
                    onPress={()=>{
                        this.resend_OTP();
                    }}
                    >
                        <Text style={StyleForgotPassword.resendText}>{Constants.ResendCode}</Text>
                    </TouchableOpacity>
                   
                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
                                
                        <TouchableOpacity style={StyleForgotPassword.modalButtonView}
                            onPress={()=>{
                                this.verifyOTP();
                            }}
                        >
                            <Text style={StyleForgotPassword.modalButtonLabel}>{Constants.VERIFY}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={StyleForgotPassword.modalButtonView}
                            onPress={()=>{
                                this.setState({modal_visible:false})
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
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} navigation={this.props.navigation} />
                
                <View style={{ flex: 1 }}>

                    <View>
                        <Text style={StyleForgotPassword.textMsg}>{Constants.KindlyEnteryourRegisteredMobNo}</Text>
                    </View>

                    <View style={StyleForgotPassword.TextInputView}>
                        <View style={StyleForgotPassword.LabelView}>
                            <Image source={require('../images/mobile_number.png')}
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
                            onChangeText={(text) => {
                                if(!isNaN(text))
                                    this.setState({ mobile_number: text }) 
                                else
                                this.setState({ mobile_number: '' }) 
                            }}
                        />
                    </View>
                  
                    <View style={{ bottom: 0, position: 'absolute', flexDirection: 'row', justifyContent: 'center', marginBottom: 20,}}>
                        <TouchableOpacity style={[StyleForgotPassword.forgotButtonView,{marginLeft:20}]}
                        onPress={()=>{
                            this.props.navigation.pop();
                        }}
                        >
                            <Text style={StyleForgotPassword.buttonLabel}>{Constants.CANCEL}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[StyleForgotPassword.forgotButtonView,{}]}
                                   onPress={()=>{
                                       this.onClickSubmit();
                                    
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
