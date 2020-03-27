/* screen -MANAPPCUS010
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { StyleSignIn, StyleSignUp } from '../config/CommonStyles'
import Constants from '../config/Constants';
import { StackActions, NavigationActions } from 'react-navigation';
import { MainPresenter } from '../config/MainPresenter'
import ApiConstants from '../config/ApiConstants';
import { setUserData, getFirebaseToken } from '../config/AppSharedPreference';
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_email_id: '',
      input_password: '',
      policyRadio_button: false,
      isLoading: false,
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
    };
  };

  //just to test api call need to change later 
  componentDidMount() {
    this.setState({ isLoading: true })
    // getAllLangContent({ language: 'en' }).then((responseData) => {
    //   this.setState({ isLoading: false })
    //   if (responseData.status == 1) {
    //     console.log("data from api :- " + JSON.stringify(responseData))
    //   }
    //   // else{
    //   //   this.setState({isErrorVisible:true})
    //   // }
    // });
  }
  async onResponse(apiConstant, data) {
    switch (apiConstant) {
      case ApiConstants.login: {
        if (data.status) {
          await setUserData(data.userData)
          this.props.navigation.dispatch(
            StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
            }))
        } else {
          alert(data.message)
        }
        break;
      }
    }

  }
  render() {
    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} />
        <Image style={StyleSignIn.bgImage} source={require('../images/Splash_screen.jpg')} />
        <View style={StyleSignIn.loginBox}>

          <View style={StyleSignIn.LogoImageView}>
            <Image style={{ width: '100%', height: '46%', marginLeft: 0.5, bottom: 0, position: 'absolute', zIndex: -1, resizeMode: "stretch" }}
              source={require('../images/circle.png')}
            />
            <Image style={StyleSignIn.logoImage}
              source={require('../images/logo_in_circle.png')}
            />
          </View>

          <Text style={StyleSignIn.loginLabel}>{Constants.SignIn}</Text>

          <View style={StyleSignIn.textInput_container}>
            <View style={StyleSignIn.labelBox}>
              <Image style={StyleSignIn.LabelBoxIcon}
                source={require('../images/mobile_number.png')} />
              <Text style={StyleSignIn.labelBoxText}>{Constants.Email}</Text>
            </View>
            <TextInput placeholder='Enter Email id'
              ref={(ref)=>{this.Input_emailId = ref}}
              style={StyleSignIn.textInput_style}
              keyboardType="email-address"
              autoCapitalize="none"
              value={this.state.input_email_id}
              onChangeText={(newText) => {
                  this.setState({ input_email_id: newText })
              }}
              onBlur={()=>{ this.Input_password.focus() }}
            />
          </View>

          <View style={StyleSignIn.textInput_container}>
            <View style={StyleSignIn.labelBox}>
              <Image style={StyleSignIn.LabelBoxIcon} source={require('../images/password.png')} />
              <Text style={StyleSignIn.labelBoxText}>{Constants.Password}</Text>
            </View>

            <TextInput placeholder="Enter Password"
              ref={(ref)=>{this.Input_password = ref}}
              secureTextEntry={true}
              style={StyleSignIn.textInput_style}
              value={this.state.input_password}
              onChangeText={(newtext) => { this.setState({ input_password: newtext }) }}
              onBlur={()=>{this.Input_terms_condition.focus()}}
            />
          </View>

          {/* policies start here */}
          <View>
            <View style={[StyleSignUp.policyView, { marginVertical: 3 }]}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ policyRadio_button: !this.state.policyRadio_button })
                }}
              >
                <Image source={this.state.policyRadio_button ? require('../images/radio_buttons_selected.png') : require('../images/radio_buttons.png')}
                  style={[StyleSignUp.policyImage, {}]}
                  ref={(ref)=>{this.Input_terms_condition = ref}}
                  />
              </TouchableOpacity>
              <Text style={{ color: Constants.COLOR_GREY_DARK, fontWeight: 'bold', paddingHorizontal: 3 }}>{Constants.IagreeTo}</Text>
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
          </View>
          {/* policies end here */}

          <TouchableOpacity
            disabled={!this.state.policyRadio_button}
            onPress={() => { this.onSignInClick() }}
            style={this.state.policyRadio_button ? StyleSignIn.loginButton : [StyleSignIn.loginButton, { backgroundColor: Constants.COLOR_GREY_LIGHT }]}>
            <Text style={StyleSignIn.Login_buttonText}>{Constants.SignIn}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { this.props.navigation.navigate('ForgotPassword') }}
            style={StyleSignIn.forgotButton}>
            <Text style={StyleSignIn.forgotLabel}>{Constants.ForgotPassword}</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SignUp')
          }}
          style={StyleSignIn.memberButton}
        >
          <Text style={StyleSignIn.memberLabel}>{Constants.NotAMemmberYet}</Text>
        </TouchableOpacity>

      </View>
    )
  }
  async onSignInClick() {

    // this.props.navigation.navigate('Dashboard'); 
   /*  let params = {
      "username": "yogita.p@exceptionaire.co",
      "password": "abc@1232",
      "device_type": "2",
      "device_token": "device3",
      "app_version": "1",
    } */
     if (!this.isValid()) {
       return
     }
     let fbToken=await getFirebaseToken()
     let params = {
       "username": this.state.input_email_id,
       "password": this.state.input_password,
       "device_type": "2",
       "device_token": fbToken==null ?'no-token':fbToken ,
       "app_version": "1"
     }
    this.presenter.callPostApi(ApiConstants.login, params, true);

  }
  isValid() {
    if (this.state.input_email_id.length == 0) {
      alert("Please enter email id")
      this.Input_emailId.focus()
      return false
    }
    if (!Constants.EMAIL_REGX.test(this.state.input_email_id)) {
      // console.log(this.state.input_email_id)
      alert("Please enter valid email id")
      this.Input_emailId.focus()
      return false
    }

    if (this.state.input_password.length == 0) {
      alert("Please enter Password")
      this.Input_password.focus()
      return false
    }
    if (this.state.input_password.length < 8 || this.state.input_password.length > 16) {
      alert("password must be greater than 8 character & less than 16 character")
      this.Input_password.focus()
      return false
    }
    return true;
  }
}