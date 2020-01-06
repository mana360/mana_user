/* screen -MANAPPCUS002,3,4,5
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Picker, TextInput, Modal } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleHelpAndSupport, StyleTripHelpAndSupport } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import TruckingWarehouseServices from './TruckingWarehouseServices';
export default class HelpAndSupport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            support_subject: "Lorem ipsum",
            support_message: "",
            support_contact_number: "8866114477",
            modal_Visible: false,
            isUser:true,

        }
    }
    render() {
        let IsTrip = this.props.navigation.getParam('flag', false);
        let { navigation } = this.props
        return (
            <View style={{ flex: 1, }}>
                <HeaderBar title={this.state.isUser ? "Help & Support" : "Trip-Help & support"}

                    isBack={true} isLogout={true} navigation={navigation}
                />

                <ScrollView bounces={false} style={{ width: wp('100%') }}>
                   
                    <View style={{ flex: 1, backgroundColor: Constants.colorGrey }}>

                        <View style={{ flex: 8, flexDirection: 'row', height: 180, maxHeight: 180, backgroundColor: Constants.COLOR_WHITE }}>
                            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-end', marginLeft: 10 }}>
                                <Image
                                    style={StyleHelpAndSupport.userImage}
                                    source={require('../images/Profile_pic.png')}
                                />
                            </View>

                            <View style={{ flex: 5, justifyContent: 'center', alignItems: 'flex-start', paddingBottom: 25 }}>
                                <View style={{ flexDirection: 'row', paddingLeft: 10, marginVertical: 5 }}>
                                    <Image
                                        style={StyleHelpAndSupport.icon}
                                        source={require('../images/person.png')}
                                    />
                                    <Text style={StyleHelpAndSupport.name}>John Henry</Text>
                                </View>
                                <View style={{ flexDirection: 'row', paddingLeft: 10, marginVertical: 5 }}>
                                    <Image
                                        style={StyleHelpAndSupport.icon}
                                        source={require('../images/mobile_number.png')}
                                    />
                                    <Text style={StyleHelpAndSupport.name}>+27 680308023</Text>
                                </View>
                            </View>
                            <View style={{ position: 'absolute', zIndex: -1, width: '100%', bottom: 0, backgroundColor: "rgba(240,240,240,1)", padding: 30 }}>
                            </View>
                        </View>

                        <View style={{ backgroundColor: Constants.COLOR_WHITE }}>

                            <View style={this.state.isUser ? { display: 'none' }:[{ paddingLeft: 45, marginTop: 15, }]}>
                                <Text style={StyleTripHelpAndSupport.pickerTitle}>{Constants.Trip}</Text>
                                <Text style={{ color: Constants.COLOR_GREY_LIGHT, marginVertical: 2 }}>{Constants.Nyc_Syc}</Text>
                            </View>

                            <View style={this.state.isUser ? [StyleHelpAndSupport.pickerView, { marginTop: 35 }] : [StyleHelpAndSupport.pickerView, { marginTop: 25 }]}>
                                <View style={{ position: 'absolute', top: -15, left: 20, padding: 5, paddingLeft: 10, paddingRight: 10, backgroundColor: Constants.COLOR_WHITE, }}>
                                    <Text style={StyleHelpAndSupport.pickerTitle}>{Constants.SupportSubject}</Text>
                                </View>
                                <Picker style={StyleHelpAndSupport.picker}>
                                    <option label="Lorem ipsum" value="Lorem ipsum"></option>
                                    <option label="Lorem ipsum" value="Lorem ipsum"></option>
                                </Picker>
                            </View>

                            <View style={StyleHelpAndSupport.messageView}>
                                <View style={{ position: 'absolute', top: -15, left: 20, padding: 5, paddingLeft: 8, paddingRight: 8, backgroundColor: Constants.COLOR_WHITE, }}>
                                    <Text style={StyleHelpAndSupport.messageTitle}>{Constants.Message}</Text>
                                </View>
                                <TextInput
                                    value={this.state.support_message}
                                    onChangeText={(value) => { this.setState({ support_message: value }) }}
                                    multiline={true}
                                    placeholder="Write you message here"
                                    placeholderTextColor="rgba(64,64,64,0.5)"
                                    style={StyleHelpAndSupport.messageText}
                                />
                            </View>

                            <TouchableOpacity style={this.state.isUser ? StyleHelpAndSupport.buttonView : { display: 'none' }}
                                onPress={() => {
                                    this.setState({ modal_Visible: true })
                                }}
                            >
                                <Text style={StyleHelpAndSupport.buttonText}>{Constants.SEND}</Text>
                            </TouchableOpacity>

                            <View style={this.state.isUser ? { display: 'none' } : StyleTripHelpAndSupport.bottomButtonView}>
                                <TouchableOpacity style={StyleTripHelpAndSupport.bottomButtonlabel}
                                    onPress={() => {
                                                this.props.navigation.pop();
                                    }}
                                >
                                    <Text style={StyleTripHelpAndSupport.bottomButtonText}>{Constants.BACK}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={StyleTripHelpAndSupport.bottomButtonlabel}
                                    onPress={() => {
                                        this.setState({ modal_Visible: true })
                                    }}
                                >
                                    <Text style={StyleTripHelpAndSupport.bottomButtonText}>{Constants.SEND}</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                </ScrollView>

                <FooterBar navigation={navigation} />

                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={this.state.modal_Visible}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View style={StyleHelpAndSupport.modalView}>
                            <TouchableOpacity style={{ alignSelf: 'flex-end',top:10, right:10 }}
                                onPress={() => {
                                    this.setState({ modal_Visible: false })
                                }}
                            >
                                <Image source={require('../images/close.png')}
                                    style={{ width: 15, height: 15 }}
                                />
                            </TouchableOpacity>
                            <Image style={StyleHelpAndSupport.modalImage}
                                source={require('../images/sent_icon.png')}
                            />
                            <Text style={StyleHelpAndSupport.modalMsg}>{Constants.RequestSentSuccessfully}</Text>
                            <TouchableOpacity style={StyleHelpAndSupport.modalButton}
                                onPress={() => {
                                    this.setState({ modal_Visible: false })
                                    this.props.navigation.navigate('Dashboard')
                                }}
                            >
                                <Text style={StyleHelpAndSupport.modalButtonText}>{Constants.OK}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </Modal>

            </View>
        )
    }
}