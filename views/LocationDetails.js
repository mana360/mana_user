/* screen -MANAPPCUS064
    design by -Harshad 
 */
import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, Picker, TextInput, Modal} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleLocationDetails} from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import Textarea from 'react-native-textarea';

export default class LocationDetails extends React.Component{
    constructor(props){
        super(props)

        this.state={
            pick_up_address:"",
            drop_off_address:"",
        }
    }
    render(){
        
        let { navigation } = this.props;   
        return(
            <View style={{flex:1,}}>
                
                {/* Header Start */ }
                   <HeaderBar  title="Location Details" isBack={true} isLogout={true} navigation={navigation}/>
                {/* Header Close */ }

                {/* Main Body Start */}
                    <ScrollView bounces={false} style={{width:wp('100%')}}>
                        <View style={{flex:1, backgroundColor:Constants.COLOR_WHITE}}>                        
                            <View style={StyleLocationDetails.locationWrapp}>
                            
                                <View style={StyleLocationDetails.inputContainer}>
                                    <View style={StyleLocationDetails.labelBoxNew}>
                                        <Text style={StyleLocationDetails.labelTextNew}>{Constants.PickUpAddress}</Text>
                                    </View>
                                    <TextInput
                                        placeholder='Lorum ipsum dolor sit amet,'
                                        placeholderTextColor="#a4a4a4"
                                        ref={(ref)=>{this.pick_up_address=ref}}
                                        value={this.state.pick_up_address}
                                        onChangeText={
                                            (value)=>{
                                                this.setState({pick_up_address:value})
                                            }
                                        }
                                        style={StyleLocationDetails.inputBox} />
                                        <TouchableOpacity 
                                                style={{ position:"absolute",right:16,top:12,}}
                                                onPress={() =>{
                                                this.props.navigation.navigate('ViewMap')
                                            }}>
                                            <Image style={{width:20, height:20,}}
                                                   source={require('../images/address.png')} />
                                        </TouchableOpacity>    
                                </View>
                                <View style={StyleLocationDetails.inputContainer}>
                                    <View style={StyleLocationDetails.labelBoxNew}>
                                        <Text style={StyleLocationDetails.labelTextNew}>{Constants.DropOffAddress}</Text>
                                    </View>
                                    <TextInput placeholder='Drop Off Address' 
                                    placeholderTextColor="#a4a4a4"
                                    ref={(ref)=>{this.drop_off_address=ref}}
                                    value={this.state.drop_off_address}
                                    onChangeText={
                                        (value)=>{
                                            this.setState({drop_off_address:value})
                                        }
                                    }
                                    style={StyleLocationDetails.inputBox} />
                                    <Image style={StyleLocationDetails.labelIconLoc}
							            	source={require('../images/address.png')} />
                                </View>
                                <View style={{position:'relative',}}>
                                    <View style={[StyleLocationDetails.inputContainer, { width: '88%' } ]}>
                                        <View style={StyleLocationDetails.labelBoxNew}>
                                            <Text style={StyleLocationDetails.labelTextNew}>{Constants.DropOffAddress}</Text>
                                        </View>
                                        <TextInput placeholder='Drop Off Address' 
                                        placeholderTextColor="#a4a4a4"
                                        ref={(ref)=>{this.drop_off_address=ref}}
                                        value={this.state.drop_off_address}
                                        onChangeText={
                                            (value)=>{
                                                this.setState({drop_off_address:value})
                                            }
                                        }
                                        style={StyleLocationDetails.inputBox} />
                                        <Image style={StyleLocationDetails.labelIconLoc}
                                                source={require('../images/address.png')} />
                                    </View>
                                    <Image style={StyleLocationDetails.IconClose}
                                                source={require('../images/remove.png')} />
                                </View>
                                
                                <TouchableOpacity style={StyleLocationDetails.nextAddrBtn}>
                                     <Text style={StyleLocationDetails.nextAddrBtnText}>{Constants.NextAddress}</Text>
                                </TouchableOpacity>
                                <View style={StyleLocationDetails.inputContainer}>
                                    <View style={StyleLocationDetails.labelBoxNew}>
                                        <Text style={StyleLocationDetails.labelTextNew}>{Constants.PickUpDate}</Text>
                                    </View>
                                    <TextInput placeholder='Select Pick Up Date' style={StyleLocationDetails.inputBox} />
                                    <Image style={StyleLocationDetails.labelIconLoc}
							            	source={require('../images/date_icon.png')} />
                                </View>
                                <View style={StyleLocationDetails.inputContainer}>
                                    <View style={StyleLocationDetails.labelBoxNew}>
                                        <Text style={StyleLocationDetails.labelTextNew}>{Constants.PickUpTime}</Text>
                                    </View>
                                    <TextInput placeholder='Select Pick Up Time' style={StyleLocationDetails.inputBox} />
                                    <Image style={StyleLocationDetails.labelIconLoc}
							            	source={require('../images/time_icon.png')} />
                                </View>
                                <View style={StyleLocationDetails.instructContainer}>
                                    <View style={StyleLocationDetails.labelBoxNew}>
                                        <Text style={StyleLocationDetails.labelTextNew}>{Constants.Instructions}</Text>
                                    </View>
                                    <Textarea                                       
                                        style={StyleLocationDetails.textarea}
                                        maxLength={100}
                                        placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, '}
                                        placeholderTextColor={'#a4a4a4'}                                        
                                    />
                                </View>
                                <TouchableOpacity 
                                     onPress={() =>{
                                        this.props.navigation.navigate('LoadCategory')
                                     }}
                                    style={StyleLocationDetails.logButton}
                                >
                                    <Text style={StyleLocationDetails.logButtonText}>{Constants.Next}</Text>
                                </TouchableOpacity>
                            
                            </View>                        
                        </View>
                    </ScrollView>        
                  {/* Main Body Close */}

                {/* Footer Start */}
                    <FooterBar navigation={navigation}/>
                {/* Footer Close */}
            
        </View>
        )
    }
}