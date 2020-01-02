/* screen -MANAPPCUS039
    design by -mayur
 */
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
import { StyleEditProfile, StyleMyProfile } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import HeaderBar from '../config/HeaderBar';
import Constants from '../config/Constants';
export default class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_password: '',
            new_password: '',
            confirm_password: '',
            password_visible: true,
            screen_title: 'CompanyProfile',
            first_name: '',
            last_name: '',
            company_name: '',
            designation: '',
            telephone_no: '',
            secondary_no: '',
            address: '',
            email_id: '',
            password: '',
            modalVisible_Changepassword: false,
            modalVisible_successMsg: false,
        }
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
                        onPress={() => { this.setState({ modalVisible_successMsg: true }) }}
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
                            this.setState({ modalVisible_successMsg: false, modalVisible_Changepassword: false })
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
                            this.setState({ modalVisible_successMsg: false, modalVisible_Changepassword: false })
                            this.props.navigation.navigate('MyProfile');
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

                <HeaderBar title="EDIT profile" isBack={true} isLogout={true} navigation={navigation} />
                <View style={{ flex: 1 }}>
                    <ScrollView style={{ width: '100%', flex: 1 }} bounces={false}>

                        <View style={{ marginBottom: 2 }}>
                            <View style={StyleEditProfile.topCircle} />

                            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                                <TouchableOpacity style={StyleEditProfile.sideImageView}
                                    onPress={() => {
                                        this.setState({ modalVisible_Changepassword: true })
                                    }}
                                >
                                    <Image source={this.state.modalVisible_Changepassword ? require('../images/change_passward.png') : require('../images/change_passward.png')}
                                        style={StyleEditProfile.sideImage}
                                    />
                                </TouchableOpacity>

                                <Image source={require('../images/Profile_pic.png')}
                                    style={StyleEditProfile.ProfileImage}
                                />

                                <TouchableOpacity style={StyleEditProfile.sideImageView}>
                                    <Image source={require('../images/upload_normal.png')}
                                        style={StyleEditProfile.sideImage}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <Text style={StyleEditProfile.label}>Jimmy Dagger</Text>
                        <View style={StyleEditProfile.bottomline}></View>

                        <View style={{ marginTop: 10 }}>

                            <View style={StyleEditProfile.TextInputView}>
                                <View style={StyleEditProfile.LabelView}>
                                    <Image source={require('../images/user_name.png')}
                                        style={StyleEditProfile.labelIcon}
                                    />
                                    <Text style={StyleEditProfile.modalLabelText}>{Constants.FirstName}</Text>
                                </View>
                                <TextInput
                                    placeholder="Enter First Name"
                                    style={StyleEditProfile.TextInput}
                                    value={this.state.first_name}
                                    onChangeText={(text) => { this.setState({ first_name: text }) }}
                                />
                            </View>

                            <View style={StyleEditProfile.TextInputView}>
                                <View style={StyleEditProfile.LabelView}>
                                    <Image source={require('../images/user_name.png')}
                                        style={StyleEditProfile.labelIcon}
                                    />
                                    <Text style={StyleEditProfile.modalLabelText}>{Constants.LastName}</Text>
                                </View>
                                <TextInput
                                    placeholder="Enter Last Name"
                                    style={StyleEditProfile.TextInput}
                                    value={this.state.last_name}
                                    onChangeText={(text) => { this.setState({ last_name: text }) }}
                                />
                            </View>

                            <View style={StyleEditProfile.TextInputView}>
                                <View style={StyleEditProfile.LabelView}>
                                    <Image source={require('../images/company_name.png')}
                                        style={StyleEditProfile.labelIcon}
                                    />
                                    <Text style={StyleEditProfile.modalLabelText}>{Constants.CompanyName}</Text>
                                </View>
                                <TextInput
                                    placeholder="Enter Company Name"
                                    style={StyleEditProfile.TextInput}
                                    value={this.state.company_name}
                                    onChangeText={(text) => { this.setState({ company_name: text }) }}
                                />
                            </View>

                            <View style={StyleEditProfile.TextInputView}>
                                <View style={StyleEditProfile.LabelView}>
                                    <Image source={require('../images/designation.png')}
                                        style={StyleEditProfile.labelIcon}
                                    />
                                    <Text style={StyleEditProfile.modalLabelText}>{Constants.Designation}</Text>
                                </View>
                                <TextInput
                                    placeholder="Enter Designation"
                                    style={StyleEditProfile.TextInput}
                                    value={this.state.designation}
                                    onChangeText={(text) => { this.setState({ designation: text }) }}
                                />
                            </View>

                            <View style={StyleEditProfile.TextInputView}>
                                <View style={StyleEditProfile.LabelView}>
                                    <Image source={require('../images/telephone.png')}
                                        style={StyleEditProfile.labelIcon}
                                    />
                                    <Text style={StyleEditProfile.modalLabelText}>{Constants.TelephoneNo}</Text>
                                </View>
                                <TextInput
                                    placeholder="Enter Telephone No"
                                    style={StyleEditProfile.TextInput}
                                    value={this.state.telephone_no}
                                    onChangeText={(text) => { this.setState({ telephone_no: text }) }}
                                />
                            </View>

                            <View style={StyleEditProfile.TextInputView}>
                                <View style={StyleEditProfile.LabelView}>
                                    <Image source={require('../images/telephone.png')}
                                        style={StyleEditProfile.labelIcon}
                                    />
                                    <Text style={StyleEditProfile.modalLabelText}>{Constants.SecondaryNo}</Text>
                                </View>
                                <TextInput
                                    placeholder="Enter Secondary No"
                                    style={StyleEditProfile.TextInput}
                                    value={this.state.secondary_no}
                                    onChangeText={(text) => { this.setState({ secondary_no: text }) }}
                                />
                            </View>

                            <View style={StyleEditProfile.TextInputView}>
                                <View style={StyleEditProfile.LabelView}>
                                    <Image source={require('../images/address.png')}
                                        style={StyleEditProfile.labelIcon}
                                    />
                                    <Text style={StyleEditProfile.modalLabelText}>{Constants.Address}</Text>
                                </View>
                                <TextInput
                                    placeholder="Enter Address"
                                    style={StyleEditProfile.TextInput}
                                    value={this.state.address}
                                    onChangeText={(text) => { this.setState({ address: text }) }}
                                />
                            </View>

                            <View style={StyleEditProfile.TextInputView}>
                                <View style={StyleEditProfile.LabelView}>
                                    <Image source={require('../images/email_id.png')}
                                        style={StyleEditProfile.labelIcon}
                                    />
                                    <Text style={StyleEditProfile.modalLabelText}>{Constants.Email}</Text>
                                </View>
                                <TextInput
                                    placeholder="Enter Email Id"
                                    style={StyleEditProfile.TextInput}
                                    value={this.state.email_id}
                                    onChangeText={(text) => { this.setState({ email_id: text }) }}
                                />
                            </View>

                            <View style={StyleEditProfile.TextInputView}>
                                <View style={StyleEditProfile.LabelView}>
                                    <Image source={require('../images/password.png')}
                                        style={StyleEditProfile.labelIcon}
                                    />
                                    <Text style={StyleEditProfile.modalLabelText}>{Constants.Password}</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: 'center', alignSelf: 'center' }}>
                                    <TextInput
                                        placeholder="Enter Password"
                                        style={[StyleEditProfile.TextInput, { width: '90%' }]}
                                        secureTextEntry={this.state.password_visible}
                                        value={this.state.password}
                                        onChangeText={(text) => { this.setState({ password: text }) }}
                                    />
                                    <TouchableOpacity style={{ alignSelf: 'flex-end', right: 15, alignSelf: 'center' }}
                                        onPress={() => {
                                            this.setState({ password_visible: !this.state.password_visible })
                                        }}
                                    >
                                        <Image source={this.state.password_visible ? require('../images/hide_pass.png') : require('../images/show_pass.png')}
                                            style={{ width: 20, height: 20, alignSelf: 'center' }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <TouchableOpacity style={StyleEditProfile.ButtonView}
                                onPress={()=>{
                                        this.setState({modalVisible_successMsg:true})
                                }}
                            >
                                <Text style={StyleEditProfile.ButtonLabel}>{Constants.Update}</Text>
                            </TouchableOpacity>

                        </View>

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
                    visible={this.state.modalVisible_successMsg}
                    animationType='fade'
                    transparent={true}
                >
                    {this.Modal_chnagesSaveSuccessFully()}
                </Modal>

            </View>
        )
    }
}