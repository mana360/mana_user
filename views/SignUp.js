/* screen -MANAPPCUS049,50,51,52
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Modal, ScrollView } from 'react-native';
import { StyleSignUp } from '../config/CommonStyles'
import Constants from '../config/Constants';
import { StackActions, NavigationActions } from 'react-navigation';
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Image style={StyleSignUp.bgImage} source={require('../images/Splash_screen.jpg')} />
       
           <View style={this.state.referalRadio_button ? [StyleSignUp.loginBox, { marginTop:10 }] : StyleSignUp.loginBox}>

           <View style={StyleSignUp.LogoImageView}>
              <Image style={{width:162,height:63, marginLeft:0.5,bottom:0,position:'absolute',zIndex:-1,resizeMode:"stretch"}}
                  source={require('../images/circle.png')}/>
              <Image style={StyleSignUp.logoImage}
                  source={require('../images/logo_in_circle.png')}/>
           </View>

          <Text style={StyleSignUp.loginLabel}>{Constants.SignUp}</Text>

          <View style={StyleSignUp.textInput_container}>
            <View style={StyleSignUp.labelBox}>
              <Image style={StyleSignUp.LabelBoxIcon}
                source={require('../images/mobile_number.png')} />
              <Text style={StyleSignUp.labelBoxText}>{Constants.MobileNumber}</Text>
            </View>
            <TextInput placeholder='Enter Mobile Number'
              style={StyleSignUp.textInput_style}
              keyboardType='number-pad'
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

          <View style={StyleSignUp.textInput_container}>
            <View style={StyleSignUp.labelBox}>
              <Image style={StyleSignUp.LabelBoxIcon}
                source={require('../images/mobile_number.png')} />
              <Text style={StyleSignUp.labelBoxText}>{Constants.Name}</Text>
            </View>
            <TextInput placeholder='Enter Mobile Number'
              style={StyleSignUp.textInput_style}
              keyboardType='number-pad'
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
         
          <View style={StyleSignUp.textInput_container}>
            <View style={StyleSignUp.labelBox}>
              <Image style={StyleSignUp.LabelBoxIcon} source={require('../images/password.png')} />
              <Text style={StyleSignUp.labelBoxText}>{Constants.Password}</Text>
            </View>
            <TextInput placeholder='Enter Password'
              secureTextEntry={true}
              style={StyleSignUp.textInput_style}
              value={this.state.password}
              onChangeText={(newtext) => { this.setState({ password: newtext }) }} />
          </View>

          <View style={StyleSignUp.textInput_container}>
            <View style={StyleSignUp.labelBox}>
              <Image style={StyleSignUp.LabelBoxIcon}
                source={require('../images/password.png')} />
              <Text style={StyleSignUp.labelBoxText}>{Constants.ConfirmPassword}</Text>
            </View>
            <TextInput placeholder='Enter Confirm Password'
              secureTextEntry={true}
              style={StyleSignUp.textInput_style}
              value={this.state.confirm_password}
              onChangeText={(newText) => { this.setState({ confirm_password: newText }) }} />
          </View>

          <View style={StyleSignUp.policyView}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ referalRadio_button: !this.state.referalRadio_button })
              }}>
              <Image source={this.state.referalRadio_button ? require('../images/radio_buttons_selected.png') : require('../images/radio_buttons.png')}
                style={StyleSignUp.policyImage} />
            </TouchableOpacity>
            <Text style={{ color: Constants.COLOR_GREY_DARK, fontWeight: 'bold' }}>{Constants.IhaveAReferalCode}</Text>
          </View>

          <View style={this.state.referalRadio_button ? [StyleSignUp.referaltxtinputView, { marginVertical: 10, }] : { display: "none" }}>
            <View style={[StyleSignUp.labelBox, { marginTop: -10 }]}>
              <Image style={StyleSignUp.LabelBoxIcon} source={require('../images/password.png')} />
              <Text style={StyleSignUp.labelBoxText}>{Constants.Referralcode}</Text>
            </View>
            <TextInput placeholder='Enter Referral Code'
              style={{ marginLeft: 25 ,height:45}}
              value={this.state.referral_code}
              onChangeText={(newtext) => { this.setState({ referral_code: newtext }) }} />
          </View>

          <View style={[StyleSignUp.policyView,]}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ policyRadio_button: !this.state.policyRadio_button })
              }}
            >
              <Image source={this.state.policyRadio_button ? require('../images/radio_buttons_selected.png') : require('../images/radio_buttons.png')}
                style={StyleSignUp.policyImage} />
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
            style={this.state.policyRadio_button ? StyleSignUp.loginButton : [StyleSignUp.loginButton, { backgroundColor: Constants.COLOR_GREY_LIGHT }]}
              disabled={this.state.policyRadio_button ? false : true}
              onPress={() => {
                this.setState({ modalVisible_welcome: true })
               
                // this.timer = setInterval(() => {
                //   clearInterval(this.timer)
                //   this.props.navigation.dispatch(
                //       StackActions.reset({
                //         index: 0,
                //         actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
                //       }))
                //   }
                //     , 1000);

              }}
            >
            <Text style={StyleSignUp.Login_buttonText}>{Constants.SignUp}</Text>
          </TouchableOpacity>

        </View>
       
        <TouchableOpacity style={StyleSignUp.memberButton}
          onPress={() => {
            this.props.navigation.navigate('SignIn')
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