import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,TextInput } from 'react-native';
import { StyleSignIn } from '../config/CommonStyles'
import Constants from '../config/Constants';
export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      mobile_number: '',
      password: ''
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
    };
  };

  render() {
    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Image style={StyleSignIn.bgImage} source={require('../images/Splash_screen.jpg')} />
        <View style={StyleSignIn.loginBox}>

          <Image style={StyleSignIn.logoImage} 
              source={require('../images/AppLauncher.png')} 
          />
          <Text style={StyleSignIn.loginLabel}>{Constants.SignIn}</Text>

          <View style={StyleSignIn.textInput_container}>
            <View style={StyleSignIn.labelBox}>
              <Image style={StyleSignIn.LabelBoxIcon}
                source={require('../images/mobile_number.png')} />
              <Text style={StyleSignIn.labelBoxText}>{Constants.MobileNumber}</Text>
            </View>
            <TextInput placeholder='Enter Mobile Number'
              style={StyleSignIn.textInput_style}
              value={this.state.mobile_number}
              onChangeText={(newText) => { this.setState({ mobile_number: newText }) }} />
          </View>
          <View style={StyleSignIn.textInput_container}>
            <View style={StyleSignIn.labelBox}>
              <Image style={StyleSignIn.LabelBoxIcon} source={require('../images/password.png')} />
              <Text style={StyleSignIn.labelBoxText}>{Constants.Password}</Text>

            </View>

            <TextInput placeholder='Enter Password'
              secureTextEntry={true}
              style={StyleSignIn.textInput_style}
              value={this.state.password}
              onChangeText={(newtext) => { this.setState({ password: newtext }) }} />
          </View>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('MyProfile') }}
            style={StyleSignIn.loginButton}>
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
}