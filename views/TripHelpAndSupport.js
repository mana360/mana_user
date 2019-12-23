/* screen -MANAPPCUS004
    design by -mayur
 */
import React, { Component } from 'react';
import {View, Text, TouchableOpacity,Image,ScrollView,Picker,TextInput,Modal} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleTripHelpAndSupport} from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
export default class TripHelpAndSupport extends React.Component{
    constructor() {
        super();
        this.state = {
          support_subject:"Lorem ipsum",
          support_message:"",
          support_contact_number:"8866114477",
          modal_Visible:'false',
        }
      }
    render(){
        let {navigation} = this.props
        return(
            <View style={{flex:1,}}>
            <HeaderBar title="TRIP-HELP & SUPPORT" isBack={true} isLogout={true} navigation={navigation}/>

                <ScrollView bounces={false} style={{width:wp('100%')}}>
                <View style={{flex:1, backgroundColor:Constants.colorGrey}}>
                    
                    <View style={{flex:8, flexDirection:'row', height:180, maxHeight:180, backgroundColor:Constants.COLOR_WHITE}}>
                            <View style={{flex:3, justifyContent:'center', alignItems:'flex-end',marginLeft:10}}>
                                <Image
                                    style={StyleTripHelpAndSupport.userImage}
                                    source={require('../images/Profile_pic.png')}
                                />
                            </View>
                            <View style={{flex:5, justifyContent:'center', alignItems:'flex-start', paddingBottom:25}}>
                                <View style={{flexDirection:'row', paddingLeft:10, marginVertical:5}}>
                                    <Image
                                        style={StyleTripHelpAndSupport.icon}
                                        source={require('../images/person.png')}
                                    />
                                    <Text style={StyleTripHelpAndSupport.name}>John Henry</Text>
                                </View>
                                <View style={{flexDirection:'row', paddingLeft:10, marginVertical:5}}>
                                    <Image
                                        style={StyleTripHelpAndSupport.icon}
                                        source={require('../images/mobile_number.png')}
                                    />
                                    <Text style={StyleTripHelpAndSupport.name}>+27 680308023</Text>
                                </View>
                            </View>
                            <View style={{position:'absolute',zIndex:-1, width:'100%', bottom:0,backgroundColor:"rgba(240,240,240,1)", padding:30}}>
                            </View>
                    </View>
                    
                    <View style={{backgroundColor:Constants.COLOR_WHITE}}>
                        <View style={{paddingLeft:45, marginTop: 15,}}>
                            <Text style={StyleTripHelpAndSupport.pickerTitle}>{Constants.Trip}</Text>
                             <Text style={{color:Constants.COLOR_GREY_LIGHT,marginVertical:2}}>{Constants.Nyc_Syc}</Text>
                              
                        </View>
                        <View style={StyleTripHelpAndSupport.pickerView}>
                            <View style={{position:'absolute', top:-15, left:20, padding:5, paddingLeft:10, paddingRight:10, backgroundColor:Constants.COLOR_WHITE,}}>
                                <Text style={StyleTripHelpAndSupport.pickerTitle}>{Constants.SupportSubject}</Text>
                            </View>
                            <Picker style={StyleTripHelpAndSupport.picker}>
                                <option label="Lorem ipsum" value="Lorem ipsum"></option>
                                <option label="Lorem ipsum" value="Lorem ipsum"></option>
                            </Picker>
                        </View>

                        <View style={StyleTripHelpAndSupport.messageView}>
                            <View style={{position:'absolute', top:-15, left:20, padding:5, paddingLeft:8, paddingRight:8, backgroundColor:Constants.COLOR_WHITE,}}>
                                <Text style={StyleTripHelpAndSupport.messageTitle}>{Constants.Message}</Text>
                            </View>
                            <TextInput
                                value={this.state.support_message}
                                onChangeText={(value)=>{this.setState({support_message:value})}}
                                multiline={true}
                                placeholder="Write you message here"
                                placeholderTextColor="rgba(64,64,64,0.5)"
                                style={StyleTripHelpAndSupport.messageText}
                            />
                        </View>
                         <Modal 
                            transparent={true}
                            animationType="fade"
                            visible={this.state.modal_Visible}
                         >
                             <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
                                 <View style={StyleTripHelpAndSupport.modalView}>
                                        <TouchableOpacity style={StyleTripHelpAndSupport.leftCross_View}
                                            onPress={()=>{
                                                    this.setState({modal_Visible:false})
                                            }}
                                        >
                                            <Text style={StyleTripHelpAndSupport.leftCrossText}>X</Text>
                                        </TouchableOpacity>
                                        <Image style={StyleTripHelpAndSupport.modalImage}
                                            source={require('../images/sent_icon.png')}
                                        />
                                        <Text style={StyleTripHelpAndSupport.modalMsg}>{Constants.RequestSentSuccessfully}</Text>
                                        <TouchableOpacity style={StyleTripHelpAndSupport.modalButton}
                                                  onPress={()=>{
                                                    this.setState({modal_Visible:false})
                                            }}
                                        >
                                            <Text style={StyleTripHelpAndSupport.modalButtonText}>{Constants.OK}</Text>
                                        </TouchableOpacity>
                                 </View>
                             </View>
                            

                         </Modal>

                         <View style={StyleTripHelpAndSupport.bottomButtonView}>
                                <TouchableOpacity style={StyleTripHelpAndSupport.bottomButtonlabel}
                                                onPress={()=>{
                                                    
                                                }}
                                >
                                    <Text style={StyleTripHelpAndSupport.bottomButtonText}>{Constants.BACK}</Text>
                                </TouchableOpacity> 
                                    
                                <TouchableOpacity style={StyleTripHelpAndSupport.bottomButtonlabel}
                                                onPress={()=>{
                                                    this.setState({modal_Visible:true})
                                                }}
                                >
                                    <Text style={StyleTripHelpAndSupport.bottomButtonText}>{Constants.SEND}</Text>
                                </TouchableOpacity>                     
                     </View>
                       
                    </View>
                
                </View>
        </ScrollView>
               
            <FooterBar navigation={navigation}/>

        </View>
        )
    }
}