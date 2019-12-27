import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, Modal } from 'react-native'
import { StyleCollectMyLoad } from '../config/CommonStyles';
import Constants from '../config/Constants';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_password: '',
            new_password: '',
            confirm_password: '',
            OTP: '',
            email_id: '',
            mobile_number: '',
        }
    }
    render() {
        let { navigation } = this.props
        return (

            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', }}>
                <View style={[StyleCollectMyLoad.modalCotainer, { width: '90%' }]}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10, paddingBottom: 20 }}
                        onPress={() => {
                            this.setState({ modalVisible_SavedMsg: false, modalVisible_Changepassword: false })
                        }}
                    >
                        <Image source={require('../images/close.png')}
                            style={{ width: 15, height: 15 }}
                        />
                    </TouchableOpacity>

                    <View style={StyleCollectMyLoad.textInput_container}>
                        <View style={{ width: '75%', alignSelf: 'center', paddingLeft: 15 }}>
                            <View style={StyleCollectMyLoad.labelBox}>
                                <Image style={StyleCollectMyLoad.LabelBoxIcon}
                                    source={require('../images/email_id.png')} />
                                <Text style={StyleCollectMyLoad.labelBoxText}>{Constants.Email}</Text>
                            </View>
                            <TextInput placeholder='Enter Email Id'
                                style={StyleCollectMyLoad.textInput_style}
                                value={this.state.email_id}
                                onChangeText={(newText) => {
                                    this.setState({ email_id: newText })
                                }}
                            />
                        </View>
                        <View style={{ width: '25%' }}>
                            <Image source={require('../images/send.png')}
                                style={{ width: 70, height: 50, resizeMode: 'cover', }}
                            />
                        </View>
                    </View>

                    <View style={StyleCollectMyLoad.textInput_container}>
                        <View style={{ width: '75%', alignSelf: 'center', paddingLeft: 15 }}>
                            <View style={StyleCollectMyLoad.labelBox}>
                                <Image style={StyleCollectMyLoad.LabelBoxIcon}
                                    source={require('../images/email_id.png')} />
                                <Text style={StyleCollectMyLoad.labelBoxText}>{Constants.MobileNumber}</Text>
                            </View>
                            <TextInput placeholder='Enter Mobile Number'
                                keyboardType="number-pad"
                                style={StyleCollectMyLoad.textInput_style}
                                value={this.state.mobile_number}
                                onChangeText={(newText) => {
                                    this.setState({ mobile_number: newText })
                                }}
                            />
                        </View>
                        <View style={{ width: '25%' }}>
                            <Image source={require('../images/send.png')}
                                style={{ width: 70, height: 50, resizeMode: 'cover', }}
                            />
                        </View>
                    </View>

                </View>
            </View>
        )
    }
}