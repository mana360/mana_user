/* screen -MANAPPCUS010
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { StyleSignIn } from '../config/CommonStyles'
import Constants from '../config/Constants';
import { StackActions, NavigationActions } from 'react-navigation';
export default class SignIn extends Component {
  constructor(props) {
    super(props);
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
        <View style={StyleSignIn.LogoImageView}>
        <Image style={{width:'100%',height:'46%', marginLeft:0.5,bottom:0,position:'absolute',zIndex:-1,resizeMode:"stretch"}}
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

          <TouchableOpacity 
            onPress={() => {
              this.props.navigation.navigate('SendOTP');
                }}
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