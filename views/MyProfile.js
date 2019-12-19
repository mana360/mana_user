/* screen -MANAPPCUS002
    design by -mayur
 */
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity,Modal,TextInput} from 'react-native';
import { StyleMyProfile } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import HeaderBar from '../config/HeaderBar';
import CompanyMyProfile from './CompanyProfile';
import UserProfile from './UserProfile';
import Constants from '../config/Constants';
export default class MyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password_visible: true,
            screen_title: 'CompanyProfile',
            modal_visible:false
        }
    }

    Modal_ChangePassword(){
        return(
        <View style={{flex:1,justifyContent:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
             <View style={StyleMyProfile.ModalWrapper}>
            <TouchableOpacity style={{alignSelf:'flex-end',top:10,right:10}}
                onPress={()=>{
                    this.setState({modal_visible:false})
                }}
            >
                <Image source={require('../images/close.png')}
                      style={{width:15,height:15}}
                />
            </TouchableOpacity>
            <Text style={[StyleMyProfile.col1Text,{fontSize:Constants.FONT_SIZE_EXTRA_LARGE,textTransform:'uppercase',alignSelf:'center',marginVertical:10}]}>{Constants.ChangePassword}</Text>
             
             <View style={{marginTop:10}} >

                <View style={StyleMyProfile.TextInputView}>
                    <View style={StyleMyProfile.LabelView}>
                        <Image source={require('../images/password.png')}
                            style={StyleMyProfile.labelIcon}
                        />
                        <Text style={StyleMyProfile.modalLabelText}>{Constants.CurrentPassword}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Password"
                        style={StyleMyProfile.TextInput} 
                        value={this.state.current_password}
                        onChangeText={(text)=>{this.setState({current_password:text})}}
                            
                    />
                </View>

                <View style={StyleMyProfile.TextInputView}>
                    <View style={StyleMyProfile.LabelView}>
                        <Image source={require('../images/password.png')}
                            style={StyleMyProfile.labelIcon}
                        />
                        <Text style={StyleMyProfile.modalLabelText}>{Constants.CurrentPassword}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Password"
                        style={StyleMyProfile.TextInput} 
                        value={this.state.current_password}
                        onChangeText={(text)=>{this.setState({current_password:text})}}
                            
                    />
                </View>
                
                <View style={StyleMyProfile.TextInputView}>
                    <View style={StyleMyProfile.LabelView}>
                        <Image source={require('../images/password.png')}
                            style={StyleMyProfile.labelIcon}
                        />
                        <Text style={StyleMyProfile.modalLabelText}>{Constants.CurrentPassword}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Password"
                        style={StyleMyProfile.TextInput} 
                        value={this.state.current_password}
                        onChangeText={(text)=>{this.setState({current_password:text})}}
                            
                    />
                </View>

           </View>
           <TouchableOpacity style={StyleMyProfile.ButtonView}>
               <Text style={StyleMyProfile.ButtonLabel}>{Constants.Update}</Text>
           </TouchableOpacity>
       </View>
    </View>
        )
    }


    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>

                <HeaderBar title="MY profile" isBack={true} isLogout={true} navigation={navigation} />
                <View style={{ flex: 1 }}>
                    <ScrollView style={{ width: '100%', flex: 1 }} bounces={false}>

                        <View style={{ marginBottom: 2 }}>
                            <View style={StyleMyProfile.topCircle} />
                                  
                            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                                <TouchableOpacity style={StyleMyProfile.sideImageView}
                                    onPress={()=>{
                                        this.setState({modal_visible:true})
                                    }}
                                >
                                    <Image source={this.state.modal_visible?require('../images/change_passward.png'):require('../images/change_passward.png')}
                                        style={StyleMyProfile.sideImage}
                                    />
                                </TouchableOpacity>
                                    <Modal
                                        visible={this.state.modal_visible}
                                        animationType='fade'  
                                        transparent={true}                                      
                                    >
                                        {this.Modal_ChangePassword()}
                                    </Modal>

                                <Image source={require('../images/Profile_pic.png')}
                                    style={StyleMyProfile.ProfileImage}
                                />

                                <TouchableOpacity style={StyleMyProfile.sideImageView}>
                                    <Image source={require('../images/support_icon.png')}
                                        style={StyleMyProfile.sideImage}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <Text style={StyleMyProfile.label}>{this.state.screen_title}</Text>
                        <View style={StyleMyProfile.bottomline}></View>

                        {
                            this.state.screen_title == "UserProfile"
                                ?
                                <UserProfile navigation={navigation} />
                                :
                                this.state.screen_title == "CompanyProfile"
                                    ?
                                    <CompanyMyProfile />
                                    :
                                    null
                        }


                    </ScrollView>
                </View>

                <FooterBar navigation={navigation} />
            </View>
        )
    }
}