/* screen -MANAPPCUS041,42
    design by -mayur s
    api by Udayraj (forgotPassword and otp)
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
            emailId:'',
            isTimerVisible:true,
            timerValue:'',
        }
    }

    onClickSubmit(){
        if(this.isValidEmail()){
            let params = {
                "email_id":this.state.emailId,
              }
             this.presenter.callPostApi(ApiConstants.forgotPassword, params, true);
        }
    }
    
    isValidEmail(){
        if(this.state.emailId==""){
            alert("Please enter email Id")
            this.input_emailId.focus()
            return false
        }
        if(!Constants.EMAIL_REGX.test(this.state.emailId)){
            alert("Please enter valid email Id")
            this.input_emailId.focus()
            return false
        }
        return true
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
        clearInterval(this.timer)
        let params = {
            "mobile_otp":this.state.OTP,
          }
         this.presenter.callPostApi(ApiConstants.verifyOTP, params, true);   
    }

    onReceiveOTP(user_id, token, otpTime){
        this.setState({
            modal_visible:true,
            user_id:user_id,
            access_token:token,
            timerValue: otpTime,
        });
        this.timer = setInterval(()=>{
            if(this.state.timerValue==0){
                clearInterval(this.timer)
                this.setState({timerValue:0, isTimerVisible:false})
            }
            else{
                this.setState({timerValue :  this.state.timerValue - 1 })
            }
        }, 1000)
    }

async onResponse(apiConstant,data){
    switch (apiConstant) {
    case ApiConstants.forgotPassword:{
        if(data.status){
            this.onReceiveOTP(data.user_id, data.access_token, data.otp_duration)
        }else{
            alert(data.message);
        }
        break;
    }
    case ApiConstants.resendOTP:{
        if(data.status){
            this.setState({isTimerVisible:true,OTP:''})
            this.onReceiveOTP(data.user_id, data.access_token, data.otp_duration)
        }else{
            alert(data.message);
            this.setState({OTP:''})
            this.closeModal()
        }
        break;
    }
    case ApiConstants.verifyOTP:{
        if(data.status){
            this.setState({modal_visible:false, isTimerVisible:true, timerValue:0,  OTP:''});
            this.props.navigation.navigate("SetPassword",{isLogout:false, isFooter:false});
        }else{
            this.setState({OTP:''})
            this.onReceiveOTP(this.state.user_id, this.state.access_token, this.state.timerValue)
            alert(data.message);
        }
    }
    break;
    }
  }

closeModal(){
    this.setState({
        modal_visible:false,
        timerValue:0,
        isTimerVisible:true,
    })
}

 modal_verifyOTP() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                
                <View style={[StyleForgotPassword.ModalView, { width: '80%' }]}>
                    
                    <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10 }}
                            onPress={()=>{ this.closeModal() }}
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
                        placeholder='000000'
                        onChangeText={(Text) => {
                            if(!isNaN(Text))
                                this.setState({ OTP: Text })
                            else
                             this.setState({ OTP:'' })
                        }}
                    />
                    
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        
                        <TouchableOpacity style={{ alignSelf: 'center', marginTop: 15, display: this.state.isTimerVisible ? 'none' : 'flex'}}
                        onPress={()=>{
                            this.resend_OTP();
                        }}
                        >
                            <Text style={StyleForgotPassword.resendText}>{Constants.ResendCode}</Text>
                        </TouchableOpacity>
                        
                        <Text style={[StyleForgotPassword.resendText,{ display: this.state.isTimerVisible ? 'flex' :'none', fontSize:14, textDecorationLine:'none' }]}>
                            00:{this.state.timerValue}
                        </Text>
                    
                    </View>

                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
                                
                        <TouchableOpacity style={StyleForgotPassword.modalButtonView}
                            onPress={()=>{
                                this.verifyOTP();
                            }}
                        >
                            <Text style={StyleForgotPassword.modalButtonLabel}>{Constants.VERIFY}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={StyleForgotPassword.modalButtonView}
                            onPress={()=>{ this.closeModal() }}
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
        let isLogout = this.props.navigation.getParam('isLogout')
        let isFooter = this.props.navigation.getParam('isFooter')
        return (
            <View style={{ flex: 1, }}>
                <HeaderBar title="Forgot Password" isBack={true} isLogout={ isLogout ? true : false } navigation={navigation} />
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
                            <Text style={StyleForgotPassword.modalLabelText}>{Constants.Email}</Text>
                        </View>
                        <TextInput
                            placeholder="Enter Email Id"
                            ref={(ref)=>{this.input_emailId = ref}}
                            autoCapitalize="none"
                            style={StyleForgotPassword.TextInput}
                            value={this.state.emailId}
                            keyboardType="email-address"
                            onChangeText={(text) => { this.setState({emailId:text}) }}
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
                
                {
                    isFooter ?
                        <FooterBar navigation={navigation}/>
                    : null
                }

            </View>
        )
    }
}
