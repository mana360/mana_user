import React from 'react';
import { View, Text, TouchableOpacity, Image,Modal,TextInput } from 'react-native'
import { StyleForgotPassword,StyleMyProfile } from '../config/CommonStyles';
import Constants from '../config/Constants';
import FooterBar from '../config/FooterBar';
import HeaderBar from '../config/HeaderBar';
export default class SetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile_number: '',
            modal_visible:false,
            OTP:''
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
                        }}
                        
                    >
                        <Image source={require('../images/close.png')}
                            style={{ width: 15, height: 15 }}
                        />
                    </TouchableOpacity>
                    <Image source={require('../images/sent_icon.png')}
                        style={{ width: 90, height: 90, marginVertical: 10, alignSelf: 'center' }}

                    />
                    <Text style={[StyleMyProfile.col1Text, { textTransform: 'capitalize', alignSelf: 'center', fontSize: Constants.FONT_SIZE_EXTRA_LARGE }]}>{Constants.PasswordHasResetSuccessfully}</Text>
  
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
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1, }}>
                <HeaderBar title="Forgot Password" isBack={true} isLogout={true} navigation={navigation} />
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
                            value={this.state.mobile_number}
                            maxLength={10}
                            onChangeText={(text) => { this.setState({ mobile_number: text }) }}
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
                            placeholder="Enter Password"
                            style={StyleForgotPassword.TextInput}
                            value={this.state.mobile_number}
                            maxLength={10}
                            onChangeText={(text) => { this.setState({ mobile_number: text }) }}
                        />
                    </View>
                    <View style={{ bottom: 0, position: 'absolute', flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
                        <TouchableOpacity style={[StyleForgotPassword.ButtonView,{width:'90%'}]}
                            onPress={()=>{
                                        this.setState({modal_visible:true})
                             }}  
                        >
                            <Text style={StyleForgotPassword.buttonLabel}>{Constants.Set}</Text>
                        </TouchableOpacity>

                    </View>

                </View>
                <Modal
                    transparent={true}
                    visible={this.state.modal_visible}
                >
                   {this.modal_setSuccessfully()}
                </Modal>
                <FooterBar navigation={navigation} />
            </View>
        )
    }
}