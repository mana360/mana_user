import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput,Modal} from 'react-native'
import {  StyleMyProfile } from '../config/CommonStyles';
import Constants from '../config/Constants';
import ForgotPassword from './ForgotPassword';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_password: '',
            new_password: '',
            confirm_password: '',
            OTP:'',
        }
    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
         
         <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={[StyleMyProfile.ModalWrapper, { width: '80%' }]}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10 }}
                        onPress={()=>{
                            this.setState({modalVisible_SavedMsg:false,modalVisible_Changepassword:false})
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
                            this.setState({modalVisible_SavedMsg:false,modalVisible_Changepassword:false})
                        }}
                    >
                        <Text style={StyleMyProfile.ButtonLabel}>{Constants.OK}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        )
    }
}