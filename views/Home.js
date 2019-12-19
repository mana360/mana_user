import React, { Component } from 'react';
import {View, Text, TouchableOpacity,ScrollView,Image,TextInput} from 'react-native'
import { StyleMyProfile} from '../config/CommonStyles';
import Constants from '../config/Constants';
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
          current_password:'',
          new_password:'',
          confirm_password:'',
        }
    }
    render(){
        let {navigation} = this.props
        return(
            <View style={{flex:1,justifyContent:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
                <View style={StyleMyProfile.ModalWrapper}>
                    <TouchableOpacity style={{alignSelf:'flex-end',top:10,right:10}}>
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
}