/* screen -MANAPPCUS043,44
    design by -mayur s
    api by Udayraj
 */
import React from 'react';
import { View, Text, TouchableOpacity, Image,Modal,TextInput } from 'react-native'
import { StyleForgotPassword,StyleMyProfile } from '../config/CommonStyles';
import Constants from '../config/Constants';
import FooterBar from '../config/FooterBar';
import HeaderBar from '../config/HeaderBar';
import { MainPresenter } from '../config/MainPresenter'
import ApiConstants from '../config/ApiConstants';
import { clearAllData } from '../config/AppSharedPreference';

export default class SetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile_number: '',
            new_password:"",
            confirm_password:"",
            modal_visible:false,
            OTP:'',
            api_message:"",
        }
    }

    modal_setSuccessfully(){
    return(
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
         
         <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={[StyleMyProfile.ModalWrapper, { width: '80%' }]}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10 }}
                        onPress={()=>{
                            this.setState({modal_visible:false})
                            this.props.navigation.navigate('SignIn')
                        }}
                        
                    >
                        <Image source={require('../images/close.png')}
                            style={{ width: 15, height: 15 }}
                        />
                    </TouchableOpacity>
                    <Image source={require('../images/sent_icon.png')}
                        style={{ width: 90, height: 90, marginVertical: 10, alignSelf: 'center' }}

                    />
                    <Text style={[StyleMyProfile.col1Text, {  alignSelf: 'center', fontSize: Constants.FONT_SIZE_EXTRA_LARGE }]}>
                        { this.state.api_message ==""? Constants.PasswordHasResetSuccessfully : this.state.api_message }
                    </Text>
  
                    <TouchableOpacity style={[StyleMyProfile.ButtonView, { paddingHorizontal: 50, marginVertical:15 }]}
                        onPress={()=>{
                            this.setState({modal_visible:false})
                            this.props.navigation.navigate('SignIn')
                        }}
                    >
                        <Text style={StyleMyProfile.ButtonLabel}>{Constants.OK}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
    )
    }

    validate(){
        if(this.state.new_password==""){
            alert("Enter new password")
            return false
        }
        if(this.state.confirm_password==""){
            alert("Enter confirm password")
            return false
        }
        if(this.state.confirm_password!=this.state.new_password){
            alert("Password didn't matched")
            return false
        }
        return true
    }

    changePassword(){
        if(this.validate()){
            let params = {
                "new_password" : this.state.confirm_password
            }
            this.presenter.callPostApi(ApiConstants.setPassword, params, true);
        }
    }

    async onResponse(apiConstant, data) {
        switch(apiConstant){
            case ApiConstants.setPassword : {
                if(data.status){
                    await clearAllData()
                    this.setState({modal_visible:true, api_message:data.message})
                }else{
                    alert(data.message)
                }
                break;
            }
        }
    }

    render() {
        let { navigation } = this.props
        let isLogout = this.props.navigation.getParam('isLogout')
        let isFooter = this.props.navigation.getParam('isFooter')
        return (
            <View style={{ flex: 1, }}>
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} />
                <HeaderBar title="Forgot Password" isBack={true} isLogout={isLogout ? true : false} navigation={navigation} />
               
                <View style={{ flex: 1 }}>

                    <Text style={[StyleForgotPassword.textMsg,{marginTop:30,marginBottom:25}]}>{Constants.EnteredCodeIssuccessFullyVerified}</Text>
                    <Text style={[StyleForgotPassword.modalTextMSg,{textTransform:"uppercase"}]}>{Constants.SetNewPassword}</Text>

                    <View style={[StyleForgotPassword.TextInputView,{marginTop:5}]}>
                        <View style={StyleForgotPassword.LabelView}>
                            <Image source={require('../images/password.png')}
                                style={StyleForgotPassword.labelIcon}
                            />
                            <Text style={StyleForgotPassword.modalLabelText}>{Constants.NewPassword}</Text>
                        </View>
                        <TextInput
                            placeholder="Enter Password"
                            style={StyleForgotPassword.TextInput}
                            autoCapitalize="none"
                            secureTextEntry={true}
                            value={this.state.new_password}
                            onChangeText={(text) => { this.setState({ new_password: text }) }}
                        />
                    </View>

                    <View style={[StyleForgotPassword.TextInputView,{marginTop:25}]}>
                        <View style={StyleForgotPassword.LabelView}>
                            <Image source={require('../images/password.png')}
                                style={StyleForgotPassword.labelIcon}
                            />
                            <Text style={StyleForgotPassword.modalLabelText}>{Constants.ConfirmPassword}</Text>
                        </View>
                        <TextInput
                            placeholder="Enter Confirm Password"
                            style={StyleForgotPassword.TextInput}
                            autoCapitalize="none"
                            secureTextEntry={true}
                            value={this.state.confirm_password}
                            onChangeText={(text) => { this.setState({ confirm_password: text }) }}
                        />
                    </View>
                    
                    <TouchableOpacity
                        disabled={
                            this.state.new_password==""
                            ? true
                            :
                            this.state.confirm_password==""
                            ? true
                            :false
                        }
                        style={
                            [StyleForgotPassword.ButtonView,
                                {
                                    backgroundColor : this.state.new_password==""
                                    ? Constants.COLOR_GREY_LIGHT
                                    :
                                    this.state.confirm_password==""
                                    ? Constants.COLOR_GREY_LIGHT
                                    : Constants.COLOR_GREEN
                                }
                            ]}
                        onPress={()=>{ this.changePassword() }}
                    >
                        <Text style={StyleForgotPassword.buttonLabel}>{Constants.Set}</Text>
                    </TouchableOpacity>

             </View>

                <Modal
                    transparent={true}
                    visible={this.state.modal_visible}
                >
                   {this.modal_setSuccessfully()}
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