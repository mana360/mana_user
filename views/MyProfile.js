/* screen -MANAPPCUS036,36-1,37
    design by -mayur s
 */
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
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
            current_password: '',
            new_password: '',
            confirm_password: '',
            password_visible: true,
            screen_title: 'CompanyProfile', //CompanyProfile,UserProfile
            modalVisible_Changepassword: false,
            modalVisible_SavedMsg: false,
            password_visible: true,
        }
    }

    company_Profile() {
        return (
            <View style={{}}>

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
                        <Image source={require('../images/person.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.CompanyContactPerson}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>PMO</Text>
                    </View>
                </View>

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/designation.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.CompanyContactPosition}</Text>
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
                        <Text style={StyleMyProfile.col1Text}>{Constants.CompanyTelephonenumber}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>+45859625123</Text>
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
                        <Text style={StyleMyProfile.col2Text}>ghj@gmail.com</Text>
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
                        <Image source={require('../images/address.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.City}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>FGDHJAS</Text>
                    </View>
                </View>

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/address.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.SelectProvince}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>AAA</Text>
                    </View>
                </View>

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/password.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.Password}</Text>
                    </View>
                    <View style={[StyleMyProfile.col2, {}]}>
                        <TextInput secureTextEntry={this.state.password_visible}
                            editable={false}
                            value="johnson"
                            maxLength={8}
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

    user_Profile() {
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

    Modal_ChangePassword() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={StyleMyProfile.ModalWrapper}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10 }}
                        onPress={() => {
                            this.setState({ modalVisible_Changepassword: false })
                        }}
                    >
                        <Image source={require('../images/close.png')}
                            style={{ width: 15, height: 15 }}
                        />
                    </TouchableOpacity>
                    <Text style={[StyleMyProfile.col1Text, { fontSize: Constants.FONT_SIZE_EXTRA_LARGE, textTransform: 'uppercase', alignSelf: 'center', marginVertical: 10 }]}>{Constants.ChangePassword}</Text>

                    <View style={{ marginTop: 10 }} >

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
                                onChangeText={(text) => { this.setState({ current_password: text }) }}

                            />
                        </View>

                        <View style={StyleMyProfile.TextInputView}>
                            <View style={StyleMyProfile.LabelView}>
                                <Image source={require('../images/password.png')}
                                    style={StyleMyProfile.labelIcon}
                                />
                                <Text style={StyleMyProfile.modalLabelText}>{Constants.NewPassword}</Text>
                            </View>
                            <TextInput
                                placeholder="Enter Password"
                                style={StyleMyProfile.TextInput}
                                value={this.state.new_password}
                                onChangeText={(text) => { this.setState({ new_password: text }) }}

                            />
                        </View>

                        <View style={StyleMyProfile.TextInputView}>
                            <View style={StyleMyProfile.LabelView}>
                                <Image source={require('../images/password.png')}
                                    style={StyleMyProfile.labelIcon}
                                />
                                <Text style={StyleMyProfile.modalLabelText}>{Constants.ConfirmPassword}</Text>
                            </View>
                            <TextInput
                                placeholder="Enter Password"
                                style={StyleMyProfile.TextInput}
                                value={this.state.confirm_password}
                                onChangeText={(text) => { this.setState({ confirm_password: text }) }}

                            />
                        </View>

                    </View>
                    <TouchableOpacity style={[StyleMyProfile.ButtonView, { width: '90%' }]}
                        onPress={() => {
                            this.setState({ modalVisible_SavedMsg: true })
                        }}
                    >
                        <Text style={StyleMyProfile.ButtonLabel}>{Constants.Update}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    Modal_chnagesSaveSuccessFully() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={[StyleMyProfile.ModalWrapper, { width: '80%' }]}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10 }}
                        onPress={() => {
                            this.setState({ modalVisible_SavedMsg: false, modalVisible_Changepassword: false })
                        }}
                    >
                        <Image source={require('../images/close.png')}
                            style={{ width: 15, height: 15 }}
                        />
                    </TouchableOpacity>
                    <Image source={require('../images/sent_icon.png')}
                        style={{ width: 90, height: 90, marginVertical: 10, alignSelf: 'center' }}

                    />
                    <Text style={[StyleMyProfile.col1Text, { textTransform: 'capitalize', alignSelf: 'center', fontSize: Constants.FONT_SIZE_EXTRA_LARGE }]}>{Constants.ChangeSavedSuccessFully}</Text>
                    <TouchableOpacity style={[StyleMyProfile.ButtonView, { paddingHorizontal: 50, marginVertical: 15 }]}
                        onPress={() => {
                            this.setState({ modalVisible_SavedMsg: false, modalVisible_Changepassword: false })
                        }}
                    >
                        <Text style={StyleMyProfile.ButtonLabel}>{Constants.OK}</Text>
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

                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={StyleMyProfile.sideImageView}
                                    onPress={() => {
                                        this.setState({ modalVisible_Changepassword: true })
                                    }}
                                >
                                    <Image source={this.state.modalVisible_Changepassword ? require('../images/change_passward.png') : require('../images/change_passward.png')}
                                        style={StyleMyProfile.sideImage}
                                    />
                                </TouchableOpacity>


                                <Image source={require('../images/Profile_pic.png')}
                                    style={StyleMyProfile.ProfileImage}
                                />

                                <TouchableOpacity style={StyleMyProfile.sideImageView}
                                    onPress={() => {
                                        this.props.navigation.navigate('EditProfile')
                                    }}
                                >
                                    <Image source={require('../images/edit_passward.png')}
                                        style={StyleMyProfile.sideImage}
                                    />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <Text style={StyleMyProfile.label}>Jimmy Dager</Text>
                        <View style={StyleMyProfile.bottomline}></View>

                        {
                            this.state.screen_title == "UserProfile"
                                ?
                                this.user_Profile()
                                :
                                this.state.screen_title == "CompanyProfile"
                                    ?
                                   this.company_Profile()
                                    :
                                    null
                        }


                    </ScrollView>
                </View>

                <FooterBar navigation={navigation} />
                <Modal
                    visible={this.state.modalVisible_Changepassword}
                    animationType='fade'
                    transparent={true}
                >
                    {this.Modal_ChangePassword()}
                </Modal>
                <Modal
                    visible={this.state.modalVisible_SavedMsg}
                    animationType='fade'
                    transparent={true}
                >
                    {this.Modal_chnagesSaveSuccessFully()}
                </Modal>
            </View>
        )
    }
}