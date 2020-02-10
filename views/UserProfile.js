/* screen -MANAPPCUS002
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { StyleMyProfile } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        let { navigation } = this.props
        return (

            <View style={{}}>

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/person.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.FirstName}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>Jimmy</Text>
                    </View>
                </View>

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/person.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.LastName}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>Dager</Text>
                    </View>
                </View>

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/company_name.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.CompanyName}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>IBM</Text>
                    </View>
                </View>

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/designation.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.Designation}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>PMO</Text>
                    </View>
                </View>

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/mobile_number.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.TelephoneNo}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>459625123</Text>
                    </View>
                </View>

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/mobile_number.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.SecondaryNo}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>454565651</Text>
                    </View>
                </View>

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/address.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.Address}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>NYC,1,235 Street</Text>
                    </View>
                </View>

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/email_id.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.Email}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>bhj@gmail.com</Text>
                    </View>
                </View>

                <View style={[StyleMyProfile.row, { borderBottomWidth: 0 }]}>

                <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/password.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.Password}</Text>
                    </View>

                    <View style={[StyleMyProfile.col2,]}>
                        <TextInput secureTextEntry={this.state.password_visible}
                            editable={false}
                            value="johnson"

                            style={{ width: 130, letterSpacing: 2, fontSize: Constants.FONT_SIZE_LARGE }}

                        />

                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ password_visible: !this.state.password_visible })
                            }}
                        >
                            <Image source={this.state.password_visible ? require('../images/hide_pass.png') : require('../images/show_pass.png')}
                                style={[StyleMyProfile.Icon, { marginLeft: 5 }]}
                            />
                        </TouchableOpacity>

                    </View>
             
                </View>

            </View>

        )
    }
}