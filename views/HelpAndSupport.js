/*  screen -MANAPPCUS002,3,4,5
    design by -mayur s
    design changes by Udayraj
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, Modal } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleHelpAndSupport, StyleTripHelpAndSupport } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import TruckingWarehouseServices from './TruckingWarehouseServices';
import Textarea from 'react-native-textarea';
import {MainPresenter} from '../config/MainPresenter';
import ApiConstants from '../config/ApiConstants';
import {Picker} from 'native-base';

export default class HelpAndSupport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            support_subject: "",
            support_message: "",
            support_contact_number: "",
            support_email:"jim.d@abc.com",
            modal_Visible: false,
            isUser:true,  //help and suport(user)=true ,trip help and support(company)=false

            supportSubjectList:[]
        }
    }
    sendMessage(){
        this.setState({ modal_Visible: true })
    }
    componentDidMount(){
        if(this.state.isUser){
            this.setState({
                supportSubjectList:[{
                    subject_id:new Date().getTime(),
                    subject_name:'Cargo Lost'
                },
                {
                    subject_id:new Date().getTime(),
                    subject_name:'Late Delivery'
                },
                {
                    subject_id:new Date().getTime(),
                    subject_name:'Driver not in contact'
                },
                {
                    subject_id:new Date().getTime(),
                    subject_name:'Others'
                }
            ]
            })
        }else{
            this.getSupportSubjectList()

        }
    }

    async getSupportSubjectList(){
        await this.presenter.callPostApi(ApiConstants.getSupportSubject, {'driver_id':1}, true);
    }

    onResponse(apiConstant, data) {
        switch (apiConstant) {
          case ApiConstants.getSupportSubject: {
              console.log("Subject list => " + JSON.stringify(data))
              this.setState({supportSubjectList : data.support_subjects})
            break;
          }
        }
      }

    render() {
        let isTrip = this.props.navigation.getParam('flag', false);
        let { navigation } = this.props
        return (
            <View style={{ flex: 1, }}>
                <HeaderBar title={this.state.isUser ? "Help & Support" : "Trip-Help & support"} isBack={true} isLogout={true} navigation={navigation}/>
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} />
                <ScrollView bounces={false} style={{ width: wp('100%') }}>
                   
                    <View style={{ flex: 1, backgroundColor: Constants.colorGrey }}>

                        <View style={{ flex: 8, flexDirection: 'row', height: 180,marginBottom:15, maxHeight: 180, backgroundColor: Constants.COLOR_WHITE }}>
                            
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
                                        source={require('../images/email_id.png')}
                                    />
                                    <Text style={StyleHelpAndSupport.name}>{this.state.support_email}</Text>
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

                            <View style={
                                isTrip 
                                ? 
                                    [StyleHelpAndSupport.pickerView, {borderWidth:0, marginTop:35}]
                                : 
                                [{ display:'none'}]}
                            >
                                <View style={{ position: 'absolute', top: -15, left: 20, padding: 5, paddingLeft: 10, paddingRight: 10, backgroundColor: Constants.COLOR_WHITE, }}>
                                    <Text style={StyleHelpAndSupport.pickerTitle}>Trip ID</Text>
                                    <Text style={[StyleHelpAndSupport.pickerTitle,{marginTop:5, fontWeight:'normal', color:Constants.COLOR_GREY_LIGHT}]}>{isTrip}</Text>
                                </View>
                                
                            </View>

                            <View style={this.state.isUser ? [StyleHelpAndSupport.pickerView, { marginTop: 10 }] : [StyleHelpAndSupport.pickerView, { marginTop: 25 }]}>
                                <View style={{ position: 'absolute', top: -15, left: 20, padding: 5, paddingLeft: 10, paddingRight: 10, backgroundColor: Constants.COLOR_WHITE, }}>
                                    <Text style={StyleHelpAndSupport.pickerTitle}>{Constants.SupportSubject}</Text>
                                </View>
                                <Picker style={StyleHelpAndSupport.picker}
                                    mode="dropdown"
                                    placeholder="Select Support Subject"
                                    selectedValue={this.state.support_subject}
                                    onValueChange={ (value)=>{ this.setState({support_subject:value})} }
                                >
                                    <Picker.Item key="-1" label="Select Support Subject" value="-1"/>
                                    {
                                        this.state.supportSubjectList!=""
                                        ?
                                            this.state.supportSubjectList.map((item)=>
                                                <Picker.Item key={item.subject_id} value={item.subject_name} label={item.subject_name}/>
                                            )
                                        : null
                                    }
                                    
                                </Picker>
                            </View>

                            <View style={StyleHelpAndSupport.messageView}>
                                <View style={{ position: 'absolute', top: -15, left: 20, padding: 5, paddingLeft: 8, paddingRight: 8, backgroundColor: Constants.COLOR_WHITE, }}>
                                    <Text style={StyleHelpAndSupport.messageTitle}>{Constants.Message}</Text>
                                </View>
                                    <Textarea
                                        containerStyle={StyleHelpAndSupport.messageText}
                                        style={[{ marginTop:-120, height:150, maxHeight:150,}]}
                                        onChangeText={(value)=>{this.setState({support_message:value})}}
                                        defaultValue={this.state.support_message}
                                        maxLength={200}
                                        placeholder={"Write you message here"}
                                        underlineColorAndroid={'transparent'}
                                    />
                            </View>
                            

                            {
                                isTrip
                                ?
                                    <View style={isTrip ? {display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'} :{display:'none'}}>
                                        
                                        <TouchableOpacity style={[StyleHelpAndSupport.buttonView,{width:'40%', marginRight:20}]}
                                        onPress={() => {this.props.navigation.pop()}}
                                        >
                                            <Text style={StyleHelpAndSupport.buttonText}>{Constants.BACK}</Text>
                                        </TouchableOpacity>
                                        
                                        <TouchableOpacity style={[StyleHelpAndSupport.buttonView,{width:'40%'}]}
                                            onPress={() => {this.sendMessage()}}
                                        >
                                            <Text style={StyleHelpAndSupport.buttonText}>{Constants.SEND}</Text>
                                        </TouchableOpacity>

                                    </View>
                                :
                                    <TouchableOpacity style={
                                        //this.state.isUser ? 
                                        StyleHelpAndSupport.buttonView 
                                        //: { display: 'flex' }
                                        }
                                        onPress={() => {this.sendMessage()}}
                                    >
                                        <Text style={StyleHelpAndSupport.buttonText}>{Constants.SEND}</Text>
                                    </TouchableOpacity>
                            }
 
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
                                onPress={() => { this.setState({ modal_Visible: false })}}
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