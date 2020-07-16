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
import {getUserData} from '../config/AppSharedPreference'

export default class HelpAndSupport extends React.Component {

    constructor(props) {
        super(props);
        this.subject_id="",
        this.driver_id=""
        this.state = {
            support_subject: "",
            support_message: "",
            support_contact_number: "",
            support_email:"jim.d@abc.com",
            modal_Visible: false,
            isUser:true,  //help and suport(user)=true ,trip help and support(company)=false

            supportSubjectList:[],
            userData:'',
        }
    }
    
    componentDidMount(){
        this.service_type_id=this.props.navigation.getParam("service_type_id");
        this.booking_id=this.props.navigation.getParam("booking_id");
        this.driver_id=this.props.navigation.getParam("driver_id");
        this.getUserLocalInfo()
    }

    async getUserLocalInfo(){
        let data = JSON.parse(await getUserData())
        // console.log("are bhai mai agaya"+JSON.stringify(data));
        if(data[0].user_type==1){
            this.setState({isUser:false})
        }else{
            this.setState({isUser:true})
        }
        this.setState({userData : data[0]})

        if(this.state.isUser){
            this.setState({
                supportSubjectList:[
                    { subject_id:0, subject_name:'Cargo Lost'},
                    { subject_id:1, subject_name:'Late Delivery'},
                    { subject_id:2, subject_name:'Driver not in contact'},
                    { subject_id:3, subject_name:'Others'}
                ]
            })
        }else{
            this.getSupportSubjectList()
        }
    }

    async getSupportSubjectList(){
        let param={
            driver_id:this.driver_id==""?0:this.driver_id
        }
        await this.presenter.callPostApi(ApiConstants.getSupportSubject,param, true);
    }

    async sendMessage(){
        if(this.subject_id=="-1"){
            alert("Please select subject")
        }else if(this.state.support_message==""){
            alert("Please enter subject")
        }else{
            let param ={
                'booking_id':this.booking_id==undefined?0:this.booking_id,
                'service_type_id':this.service_type_id==undefined?5:this.service_type_id,
                'subject_id':this.subject_id,
                'message': this.state.support_message
            }
            await this.presenter.callPostApi(ApiConstants.addSupportData, param, true);
        }
    }

    onResponse(apiConstant, data) {
        switch (apiConstant) {
          case ApiConstants.getSupportSubject: {
              if(data.status){
                this.setState({supportSubjectList : data.support_subjects})
              }else{
                this.setState({supportSubjectList : []})
              }
             
            break;
          }
          case ApiConstants.addSupportData: {
              if(data.status){
                // this.setState({supportSubjectList : data.support_subjects})
              }else{
                alert(data.message)
              }
            
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
                                    source={{uri:this.state.userData.profile_picture}}
                                />
                            </View>

                            <View style={{ flex: 5, justifyContent: 'center', alignItems: 'flex-start', paddingBottom: 25 }}>
                                
                                <View style={{ flexDirection: 'row', paddingLeft: 10, marginVertical: 5 }}>
                                    <Image
                                        style={StyleHelpAndSupport.icon}
                                        source={require('../images/person.png')}
                                    />
                                    <Text style={StyleHelpAndSupport.name}>
                                    {
                                        this.state.userData.user_type==1 ? this.state.userData.company_name : this.state.userData.first_name+ " "+this.state.userData.last_name
                                    }
                                    </Text>
                                </View>
                                
                                <View style={{ flexDirection: 'row', paddingLeft: 10, marginVertical: 5 }}>
                                    <Image
                                        style={StyleHelpAndSupport.icon}
                                        source={require('../images/email_id.png')}
                                    />
                                    <Text style={[StyleHelpAndSupport.name,{width:'70%'}]}> { this.state.userData.email}
                                    </Text>
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
                                    onValueChange={ (value)=>{
                                        this.subject_id= value
                                        this.setState({support_subject:value})
                                        } }
                                >
                                    <Picker.Item key="-1" label="Select Support Subject" value="-1"/>
                                    {
                                        this.state.supportSubjectList!=""
                                        ?
                                            this.state.supportSubjectList.map((item)=>
                                                <Picker.Item key={item.subject_id} value={item.subject_id} label={item.subject_name}/>
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
                                        value={this.state.support_message}
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
                                        onPress={() => {
                                            this.sendMessage()
                                        }}
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