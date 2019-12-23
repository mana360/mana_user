/* screen -MANAPPCUS049
    design by -mayur
 */
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { StyleSignUp } from '../config/CommonStyles'
import Constants from '../config/Constants';
import { StackActions, NavigationActions } from 'react-navigation';
export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      mobile_number: '',
      password: '',
      confirm_password:'',
      referral_code:'',
      referalRadio_button:false,
      policyRadio_button:false
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

        <Image style={StyleSignUp.bgImage} source={require('../images/Splash_screen.jpg')} />
        <View style={this.state.referalRadio_button?[StyleSignUp.loginBox,{height:'85%'}]:StyleSignUp.loginBox}>

          <Image style={StyleSignUp.logoImage}
            source={require('../images/AppLauncher.png')}
          />
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
              value={this.state.mobile_number}
              onChangeText={(newText) => { this.setState({ mobile_number: newText }) }} />
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
              onChangeText={(newText) => { this.setState({confirm_password: newText }) }} />
          </View>

          <View style={StyleSignUp.policyView}>
            <TouchableOpacity
            onPress={()=>{
               this.setState({referalRadio_button:!this.state.referalRadio_button})
            }}>
              <Image source={this.state.referalRadio_button?require('../images/radio_buttons_selected.png'):require('../images/radio_buttons.png')}
                     style={StyleSignUp.policyImage}/>
            </TouchableOpacity>
            <Text style={{color:Constants.COLOR_GREY_DARK}}>{Constants.IhaveAReferalCode}</Text>
          </View>
           
          <View style={this.state.referalRadio_button?[StyleSignUp.referaltxtinputView,{marginVertical:10,}]:{display:"none"}}>
            <View style={[StyleSignUp.labelBox,{marginTop:-10}]}>
              <Image style={StyleSignUp.LabelBoxIcon} source={require('../images/password.png')} />
              <Text style={StyleSignUp.labelBoxText}>{Constants.Referralcode}</Text>
            </View>
            <TextInput placeholder='Enter Referral Code'
              style={{marginLeft:25}}
              value={this.state.referral_code}
              onChangeText={(newtext) => { this.setState({ referral_code: newtext }) }} />
          </View>

          <View style={StyleSignUp.policyView}>
          <TouchableOpacity
            onPress={()=>{
               this.setState({policyRadio_button:!this.state.policyRadio_button})
            }}>
              <Image source={this.state.policyRadio_button?require('../images/radio_buttons_selected.png'):require('../images/radio_buttons.png')}
                     style={StyleSignUp.policyImage}/>
            </TouchableOpacity>
            <Text style={{color:Constants.COLOR_GREY_DARK}}>{Constants.IagreeTo}</Text>
            <TouchableOpacity>
                <Text style={StyleSignUp.PolicyLabel}>{Constants.TermsAndConditions}</Text>
            </TouchableOpacity>
            <Text style={{color:Constants.COLOR_GREY_DARK}}>,</Text>
          </View>

          <View style={[{paddingLeft:42,flexDirection:'row'}]}>
            <TouchableOpacity>
                 <Text style={StyleSignUp.PolicyLabel}>{Constants.CancellationPlicy}</Text>
            </TouchableOpacity>
            <Text> & </Text>
            <TouchableOpacity>
                <Text style={StyleSignUp.PolicyLabel}>{Constants.PaymentPolicy}</Text>
            </TouchableOpacity>
          
          </View>


          <TouchableOpacity
            disabled={this.state.policyRadio_button?false:true} 
            onPress={() => { 
              // this.props.navigation.dispatch(
              //   StackActions.reset({
              //   index: 0,
              //   actions: [NavigationActions.navigate({ routeName: ''})],
              //   }))
           }}
            style={this.state.policyRadio_button?StyleSignUp.loginButton:[StyleSignUp.loginButton,{backgroundColor:Constants.COLOR_GREY_LIGHT}]}>
            <Text style={StyleSignUp.Login_buttonText}>{Constants.SignUp}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity  style={StyleSignUp.memberButton}
            onPress={() => {
              this.props.navigation.navigate('SignIn')
            }}
           
        >
             <Text style={StyleSignUp.memberLabel}>{Constants.AlreadyAMember}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}