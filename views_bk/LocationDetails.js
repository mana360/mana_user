/* screen -MANAPPCUS071
    design by -Sameer 
 */
import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, Picker, TextInput, Modal,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleDiscountVouchers} from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
export default class DiscountVouchers extends React.Component{
    constructor() {
        super();
        this.state = {
          support_subject:"Lorem ipsum",
          support_message:"",
          support_contact_number:"8866114477",
          modal_Visible:false,
          isUser:'',
          isTruck:'',
        }
      }
    render(){
        
        let {navigation} = this.props
        return(
            <View style={{flex:1,}}>
                {/ Header Start / }
                <HeaderBar  title="Discount Vouchers" isBack={true} isLogout={true} navigation={navigation}/>
                {/ Header Close / }
                {/ Main Body Start /}
                <ScrollView bounces={false} style={{width:wp('100%')}}>
                    <View style={{flex:1, backgroundColor:Constants.colorGrey}}>
                        <View style={{flex:8, flexDirection:'row', height:180, maxHeight:180, backgroundColor:Constants.COLOR_WHITE}}>
                                <View style={{flex:3, justifyContent:'center', alignItems:'flex-end',marginLeft:10}}>
                                    <Image
                                        style={StyleDiscountVouchers.userImage}
                                        source={require('../images/Profile_pic.png')}
                                    />
                                </View>
                                <View style={{flex:5, justifyContent:'center', alignItems:'flex-start', paddingBottom:25}}>
                                    <View style={{flexDirection:'row', paddingLeft:10, marginVertical:5}}>
                                        <Image
                                            style={StyleDiscountVouchers.icon}
                                            source={require('../images/person.png')}
                                        />
                                        <Text style={StyleDiscountVouchers.name}>John Henry</Text>
                                    </View>
                                    <View style={{flexDirection:'row', paddingLeft:10, marginVertical:5}}>
                                        <Image
                                            style={StyleDiscountVouchers.icon}
                                            source={require('../images/mobile_number.png')}
                                        />
                                        <Text style={StyleDiscountVouchers.name}>+27 680308023</Text>
                                    </View>
                                </View>
                                <View style={{position:'absolute',zIndex:-1, width:'100%', bottom:0,backgroundColor:"rgba(240,240,240,1)", padding:30}}>
                                </View>
                        </View>
                    
                    <View style={{backgroundColor:Constants.COLOR_WHITE}}>
                        <View style={{paddingLeft:45, marginTop: 15,}}>
                            <Text style={StyleDiscountVouchers.pickerTitle}>{Constants.Trip}</Text>
                             <Text style={{color:Constants.COLOR_GREY_LIGHT,marginVertical:2}}>{Constants.Nyc_Syc}</Text>
                              
                        </View>
                        <View style={StyleDiscountVouchers.pickerView}>
                            <View style={{position:'absolute', top:-15, left:20, padding:5, paddingLeft:10, paddingRight:10, backgroundColor:Constants.COLOR_WHITE,}}>
                                <Text style={StyleDiscountVouchers.pickerTitle}>{Constants.SupportSubject}</Text>
                            </View>
                            <Picker style={StyleDiscountVouchers.picker}>
                                <option label="Lorem ipsum" value="Lorem ipsum"></option>
                                <option label="Lorem ipsum" value="Lorem ipsum"></option>
                            </Picker>
                        </View>

                        <View style={StyleDiscountVouchers.messageView}>
                            <View style={{position:'absolute', top:-15, left:20, padding:5, paddingLeft:8, paddingRight:8, backgroundColor:Constants.COLOR_WHITE,}}>
                                <Text style={StyleDiscountVouchers.messageTitle}>{Constants.Message}</Text>
                            </View>
                            <TextInput
                                value={this.state.support_message}
                                onChangeText={(value)=>{this.setState({support_message:value})}}
                                multiline={true}
                                placeholder="Write you message here"
                                placeholderTextColor="rgba(64,64,64,0.5)"
                                style={StyleDiscountVouchers.messageText}
                            />
                        </View>
                         <Modal 
                            transparent={true}
                            animationType="fade"
                            visible={this.state.modal_Visible}
                         >
                             <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
                                 <View style={StyleDiscountVouchers.modalView}>
                                        <TouchableOpacity style={StyleDiscountVouchers.leftCross_View}
                                            onPress={()=>{
                                                    this.setState({modal_Visible:false})
                                            }}
                                        >
                                            <Text style={StyleDiscountVouchers.leftCrossText}>X</Text>
                                        </TouchableOpacity>
                                        <Image style={StyleDiscountVouchers.modalImage}
                                            source={require('../images/sent_icon.png')}
                                        />
                                        <Text style={StyleDiscountVouchers.modalMsg}>{Constants.RequestSentSuccessfully}</Text>
                                        <TouchableOpacity style={StyleDiscountVouchers.modalButton}
                                                  onPress={()=>{
                                                    this.setState({modal_Visible:false})
                                            }}
                                        >
                                            <Text style={StyleDiscountVouchers.modalButtonText}>{Constants.OK}</Text>
                                        </TouchableOpacity>
                                 </View>
                             </View>
                            

                         </Modal>

                         <View style={StyleDiscountVouchers.bottomButtonView}>
                                <TouchableOpacity style={StyleDiscountVouchers.bottomButtonlabel}
                                                onPress={()=>{
                                                    
                                                }}
                                >
                                    <Text style={StyleDiscountVouchers.bottomButtonText}>{Constants.BACK}</Text>
                                </TouchableOpacity> 
                                    
                                <TouchableOpacity style={StyleDiscountVouchers.bottomButtonlabel}
                                                onPress={()=>{
                                                    this.setState({modal_Visible:true})
                                                }}
                                >
                                    <Text style={StyleDiscountVouchers.bottomButtonText}>{Constants.SEND}</Text>
                                </TouchableOpacity>                     
                     </View>
                       
                    </View>
                
                </View>
        </ScrollView>
        {/ Main Body Close /}

            {/ Footer Start /}
            <FooterBar navigation={navigation}/>
            {/ Footer Close /}
        </View>
        )
    }
}