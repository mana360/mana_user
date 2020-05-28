/* screen -MANAPPCUS067
    design by -Harshad 
    do not used this file
 */
import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, Picker, TextInput, Modal} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleLoadCategory,StyleLocationDetails} from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';

export default class LoadCategory extends React.Component{
    
    render(){
        
        let {navigation} = this.props
        return(
            <View style={{flex:1,}}>
                
                {/* Header Start */ }
                   <HeaderBar  title="Load Category" isBack={true} isLogout={true} navigation={navigation}/>
                {/* Header Close */ }

                {/* Main Body Start */}
                    <ScrollView bounces={false} style={{width:wp('100%')}}>
                        <View style={{flex:1, backgroundColor:Constants.COLOR_WHITE}}>                        
                            <View style={StyleLoadCategory.loadWrapp}>

                                <TouchableOpacity style={StyleLoadCategory.loadBox}>
                                    <View style={StyleLoadCategory.loadLt}>  
                                        <View style={StyleLoadCategory.radioBtn}>
                                            <Image style={StyleLoadCategory.radioImage}
                                                            source={require('../images/radio_button_circular_selected.png')} />
                                        </View>
                                    </View>
                                    <View style={StyleLoadCategory.loadRt}>  
                                        <View style={StyleLoadCategory.loadCatBox}>
                                            <Text style={StyleLoadCategory.loadCatTxt}>Household</Text>
                                        </View>                                        
                                        <View style={StyleLoadCategory.boxLoad}>
                                             <Image style={StyleLoadCategory.catImage}
                                                            source={require('../images/Household.png')} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                              
                                <TouchableOpacity style={StyleLoadCategory.loadBox}>
                                    <View style={StyleLoadCategory.loadLt}>  
                                        <View style={StyleLoadCategory.radioBtn}>
                                            <Image style={StyleLoadCategory.radioImage}
                                                            source={require('../images/radio_button_circular.png')} />
                                        </View>
                                    </View>
                                    <View style={StyleLoadCategory.loadRt}>  
                                        <View style={StyleLoadCategory.loadCatBox}>
                                            <Text style={StyleLoadCategory.loadCatTxt}>Building Materials</Text>
                                        </View>                                        
                                        <View style={StyleLoadCategory.boxLoad}>
                                             <Image style={StyleLoadCategory.catImage}
                                                            source={require('../images/Building_Material.png')} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                              
                                <TouchableOpacity style={StyleLoadCategory.loadBox}>
                                    <View style={StyleLoadCategory.loadLt}>  
                                        <View style={StyleLoadCategory.radioBtn}>
                                            <Image style={StyleLoadCategory.radioImage}
                                                            source={require('../images/radio_button_circular.png')} />
                                        </View>
                                    </View>
                                    <View style={StyleLoadCategory.loadRt}>  
                                        <View style={StyleLoadCategory.loadCatBox}>
                                            <Text style={StyleLoadCategory.loadCatTxt}>Refuse</Text>
                                        </View>                                        
                                        <View style={StyleLoadCategory.boxLoad}>
                                             <Image style={StyleLoadCategory.catImage}
                                                            source={require('../images/Refuse.png')} />
                                        </View>
                                    </View>
                                </TouchableOpacity>  
                              
                                <TouchableOpacity style={StyleLoadCategory.loadBox}>
                                    <View style={StyleLoadCategory.loadLt}>  
                                        <View style={StyleLoadCategory.radioBtn}>
                                            <Image style={StyleLoadCategory.radioImage}
                                                            source={require('../images/radio_button_circular.png')} />
                                        </View>
                                    </View>
                                    <View style={StyleLoadCategory.loadRt}>  
                                        <View style={StyleLoadCategory.loadCatBox}>
                                            <Text style={StyleLoadCategory.loadCatTxt}>Building Rubble</Text>
                                        </View>                                        
                                        <View style={StyleLoadCategory.boxLoad}>
                                             <Image style={StyleLoadCategory.catImage}
                                                            source={require('../images/Building_Rubble.png')} />
                                        </View>
                                    </View>
                                </TouchableOpacity>  
                              
                                <TouchableOpacity style={StyleLoadCategory.loadBox}>
                                    <View style={StyleLoadCategory.loadLt}>  
                                        <View style={StyleLoadCategory.radioBtn}>
                                            <Image style={StyleLoadCategory.radioImage}
                                                            source={require('../images/radio_button_circular.png')} />
                                        </View>
                                    </View>
                                    <View style={StyleLoadCategory.loadRt}>  
                                        <View style={StyleLoadCategory.loadCatBox}>
                                            <Text style={StyleLoadCategory.loadCatTxt}>Consumables</Text>
                                        </View>                                        
                                        <View style={StyleLoadCategory.boxLoad}>
                                             <Image style={StyleLoadCategory.catImage}
                                                            source={require('../images/Consumables.png')} />
                                        </View>
                                    </View>
                                </TouchableOpacity>  
                              
                                <TouchableOpacity style={StyleLoadCategory.loadBox}>
                                    <View style={StyleLoadCategory.loadLt}>  
                                        <View style={StyleLoadCategory.radioBtn}>
                                            <Image style={StyleLoadCategory.radioImage}
                                                            source={require('../images/radio_button_circular.png')} />
                                        </View>
                                    </View>
                                    <View style={StyleLoadCategory.loadRt}>  
                                        <View style={StyleLoadCategory.loadCatBox}>
                                            <Text style={StyleLoadCategory.loadCatTxt}>Other</Text>
                                        </View>                                        
                                        <View style={StyleLoadCategory.boxLoad}>
                                             <Image style={StyleLoadCategory.catImage}
                                                            source={require('../images/Other.png')} />
                                        </View>
                                    </View>
                                </TouchableOpacity>   

                                <TouchableOpacity 
                                     onPress={() =>{
                                        this.props.navigation.navigate('BookingSummary')
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