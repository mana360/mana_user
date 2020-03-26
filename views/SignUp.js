/* screen -MANAPPCUS049,50,51,52
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Modal, ScrollView } from 'react-native';
import { StyleSignUp } from '../config/CommonStyles'
import Constants from '../config/Constants';
import { StackActions, NavigationActions } from 'react-navigation';
import { MainPresenter } from '../config/MainPresenter';
import ApiConstants from '../config/ApiConstants';
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId:'',
      mobile_number: '',
      password: '',
      confirm_password: '',
      referral_code: '',
      referalRadio_button: false,
      policyRadio_button: false,
      modalVisible_welcome: false,
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
    };
  };
  Modal_welcome() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={[StyleSignUp.modalCotainer, { width: '80%' }]}>
            <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10 }}
              onPress={() => {
                this.setState({ modalVisible_welcome: false })
                this.props.navigation.dispatch(
                  StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
                  }))
              }}
            >
              <Image source={require('../images/close.png')}
                style={{ width: 15, height: 15 }}
              />
            </TouchableOpacity>
            <Image source={require('../images/sent_icon.png')}
              style={{ width: 90, height: 90, marginVertical: 15, alignSelf: 'center' }}

            />
            <Text style={StyleSignUp.ModalMsg}>{Constants.WelcomeToMana360}</Text>

          </View>
        </View>
      </View>
    )
  }

   onResponse(apiConstant, data) {
    switch (apiConstant) {
      case ApiConstants.register: {
        if (data.status) {  
  
          setTimeout(()=>{
            this.setState({modalVisible_welcome:true});
          },2000)
          this.setState({modalVisible_welcome:false});
        this.props.navigation.navigate('ProfileSetUp')
        } else {
          alert(data.message)
        }
      }

        break;
      }
    }
  
onClickSignup(){
  if(!this.isValid()){
    return
  }

  let params = {
    "emailId":this.state.emailId,
    "password":this.state.confirm_password
  }
 this.presenter.callPostApi(ApiConstants.register, params, true);
}

isValid() {
  if (this.state.password==!this.state.confirm_password) {
    alert("Password and confirm password does not match")
    return false
  }
  // if (this.state.mobile_number.length == 0) {
  //   alert("Please enter mobile number")
  //   return false
  // }
  // if (this.state.mobile_number.length < 9 || this.state.mobile_number.length > 13) {
  //   console.log(this.state.mobile_number)
  //   alert("Please enter valid mobile number")
  //   return false
  // }
  if (this.state.password.length == 0) {
    alert("Please enter Password")
    this.TextInput_password.focus()
    return false
  }
  if (this.state.password.length < 8 || this.state.password.length > 16) {
    alert("password must be greater than 8 character & less than 16 character")
    this.TextInput_password.focus()
    return false
  }
  if (this.state.confirm_password.length < 8 || this.state.confirm_password.length > 16) {
    alert("password must be greater than 8 character & less than 16 character")
    this.TextInput_confirm_password.focus()
    return false
  }
  if (this.state.password.length ==!this.state.confirm_password) {
    alert("Password and conform password does not match")
    this.TextInput_confirm_password.focus()
    return false
  }
  if(this.state.referral_code.length==0){
    alert("Please enter referral code")
    this.TextInput_referral_code.focus()
    return false
  }
  return true;
}

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} />

        <Image style={StyleSignUp.bgImage} source={require('../images/Splash_screen.jpg')} />
           <View style={this.state.referalRadio_button ? [StyleSignUp.loginBox, { marginTop:50 }] : StyleSignUp.loginBox}>

           <View style={StyleSignUp.LogoImageView}>
              <Image style={{width:148,height:62, marginLeft:0.5,bottom:0,position:'absolute',zIndex:-1,resizeMode:"stretch"}}
                  source={require('../images/circle.png')}/>
              <Image style={StyleSignUp.logoImage}
                  source={require('../images/logo_in_circle.png')}/>
           </View>

          <Text style={StyleSignUp.loginLabel}>{Constants.SignUp}</Text>

          <View style={StyleSignUp.textInput_container}>
            <View style={StyleSignUp.labelBox}>
              <Image style={StyleSignUp.LabelBoxIcon}
                source={require('../images/mobile_number.png')} />
              <Text style={StyleSignUp.labelBoxText}>{Constants.Email}</Text>
            </View>
            <TextInput placeholder='Enter Email Id'
              ref={(ref)=>(this.TextInput_emailId = ref)}
              style={StyleSignUp.textInput_style}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType='email-address'
              value={this.state.emailId}
              onChangeText={(newText) => { this.setState({emailId:newText}) }}
              onBlur={()=>{this.TextInput_password.focus()}}
            />
          </View>
         
          <View style={StyleSignUp.textInput_container}>
            <View style={StyleSignUp.labelBox}>
              <Image style={StyleSignUp.LabelBoxIcon} source={require('../images/password.png')} />
              <Text style={StyleSignUp.labelBoxText}>{Constants.Password}</Text>
            </View>
            <TextInput placeholder='Enter Password'
              ref={(ref)=>(this.TextInput_password = ref)}
              secureTextEntry={true}
              style={StyleSignUp.textInput_style}
              value={this.state.password}
              onChangeText={(newtext) => { this.setState({ password: newtext }) }}
              onBlur={()=>{this.TextInput_confirm_password.focus()}}
              />
          </View>

          <View style={StyleSignUp.textInput_container}>
            <View style={StyleSignUp.labelBox}>
              <Image style={StyleSignUp.LabelBoxIcon}
                source={require('../images/password.png')} />
              <Text style={StyleSignUp.labelBoxText}>{Constants.ConfirmPassword}</Text>
            </View>
            <TextInput placeholder='Enter Confirm Password'
              ref={(ref)=>(this.TextInput_confirm_password = ref)}
              secureTextEntry={true}
              style={StyleSignUp.textInput_style}
              value={this.state.confirm_password}
              onChangeText={(newText) => { this.setState({ confirm_password: newText }) }}
              onBlur={()=>{this.Radio_referral_code.focus()}}
              />
          </View>

          <View style={StyleSignUp.policyView}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ referalRadio_button: !this.state.referalRadio_button })
              }}>
              <Image source={this.state.referalRadio_button ? require('../images/radio_buttons_selected.png') : require('../images/radio_buttons.png')}
                style={StyleSignUp.policyImage}
                ref={(ref)=>{this.Radio_referral_code = ref}}
                />
            </TouchableOpacity>
            <Text style={{ color: Constants.COLOR_GREY_DARK, fontWeight: 'bold' }}>{Constants.IhaveAReferalCode}</Text>
          </View>

          <View style={this.state.referalRadio_button ? [StyleSignUp.referaltxtinputView, { marginVertical: 10, }] : { display: "none" }}>
            <View style={[StyleSignUp.labelBox, { marginTop: -10 }]}>
              <Image style={StyleSignUp.LabelBoxIcon} source={require('../images/password.png')} />
              <Text style={StyleSignUp.labelBoxText}>{Constants.Referralcode}</Text>
            </View>
            <TextInput placeholder='Enter Referral Code'
              ref={(ref)=>(this.TextInput_referral_code = ref)}
              style={{ marginLeft: 25 ,height:45}}
              value={this.state.referral_code}
              onChangeText={(newtext) => { this.setState({ referral_code: newtext }) }}
              onBlur={()=>{ this.Radio_terms_conditions.focus() }}
              />
          </View>

          <View style={[StyleSignUp.policyView,]}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ policyRadio_button: !this.state.policyRadio_button })
              }}
            >
              <Image source={this.state.policyRadio_button ? require('../images/radio_buttons_selected.png') : require('../images/radio_buttons.png')}
                style={StyleSignUp.policyImage}
                ref={(ref)=>{this.Radio_terms_conditions = ref}}
                />
            </TouchableOpacity>
            <Text style={{ color: Constants.COLOR_GREY_DARK, fontWeight: 'bold' }}>{Constants.IagreeTo}</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('TermsAndCondition', { flag: 'TermsAndCondition' })
              }}
            >
              <Text style={StyleSignUp.PolicyLabel}>{Constants.TermsAndConditions}</Text>
            </TouchableOpacity>
            <Text style={{ color: Constants.COLOR_GREY_DARK }}>,</Text>
          </View>
         
         <View style={[{ paddingLeft: 42, flexDirection: 'row', marginBottom: 10 }]}>
          <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('TermsAndCondition', { flag: 'CancellationPolicy' })
              }}
          >
              <Text style={StyleSignUp.PolicyLabel}>{Constants.CancellationPlicy}</Text>
          </TouchableOpacity>
          <Text style={{ color: Constants.COLOR_GREY_DARK, fontWeight: 'bold' }}> & </Text>
          <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('TermsAndCondition', { flag: 'PaymentPolicy' })
              }}

          >
              <Text style={StyleSignUp.PolicyLabel}>{Constants.PaymentPolicy}</Text>
          </TouchableOpacity>
        </View>

          <TouchableOpacity
            style={
                this.state.policyRadio_button && this.state.referalRadio_button && this.state.referral_code.length>0
              ?
                StyleSignUp.loginButton
              :
                [StyleSignUp.loginButton, { backgroundColor: Constants.COLOR_GREY_LIGHT }]
              }
              disabled={ this.state.policyRadio_button && this.state.referalRadio_button ? false : true}
              onPress={() => {
                this.onClickSignup();
              }}
            >
            <Text style={StyleSignUp.Login_buttonText}>{Constants.SignUp}</Text>
          </TouchableOpacity>

        </View>
        <TouchableOpacity style={StyleSignUp.memberButton}
          onPress={() => {
            this.props.navigation.navigate('SignIn');
          }}

        >
          <Text style={StyleSignUp.memberLabel}>{Constants.AlreadyAMember}</Text>
        </TouchableOpacity>

        <Modal
          transparent={true}
          visible={this.state.modalVisible_welcome}
        >
          {this.Modal_welcome()}
        </Modal>

      </View>

    )
  }
}