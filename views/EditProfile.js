/* screen -MANAPPCUS039,107
    design by -mayur s
 */
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
import { StyleEditProfile, StyleMyProfile } from '../config/CommonStyles';
import { Picker } from "native-base";
import FooterBar from '../config/FooterBar';
import HeaderBar from '../config/HeaderBar';
import Constants from '../config/Constants';
export default class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible_Changepassword: false,
            modalVisible_successMsg: false,
            screen_title: 'company_profile',//user_profile,company_profile
            current_password: '',
            new_password: '',
            confirm_password: '',
            password_visible: true,
            first_name: 'Jimmy',
            last_name: 'Dagger',
            title: 'Mr',
            user_rsa_id: '545632102',
            user_address: 'NYC,Lane 345,street2.',
            user_province: '',
            user_city: '',
            designation: 'PMO',
            user_telephoneNo: '459625123',
            user_city: 'johnasburg',
            user_province: 'AAAA',
            user_zipcode: '4567854',
            email_id: 'bhj@gmail.com',
            password: 'johnson',
            company_name: 'IBM',
            company_contactPerson: 'PMO',
            company_contactPosition: 'PMO',
            company_telephoneNo: '45875323564',
            company_email: 'inm2@ibm.com',
            company_address: 'NYC,Lane 345,street 2.',
            company_city: 'AAA',
            company_province: 'Cape',
            company_zipcode: '5456464',
            company_password: 'sdadfas'

        }
    }
    onValueChange_province(value) {
        this.setState({ user_province: value })
    }

    onValueChange_city(value) {
        this.setState({ user_city: value })
    }

    company_Profile() {
        return (
            <View>

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
                        value={this.state.first_name}
                        onChangeText={(text) => { this.setState({ first_name: text }) }}
                    />
                </View>

                <View style={StyleEditProfile.TextInputView}>
                    <View style={StyleEditProfile.LabelView}>
                        <Image source={require('../images/person.png')}
                            style={StyleEditProfile.labelIcon}
                        />
                        <Text style={StyleEditProfile.modalLabelText}>{Constants.CompanyContactPerson}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Company Contact Person"
                        style={StyleEditProfile.TextInput}
                        value={this.state.company_contactPerson}
                        onChangeText={(text) => { this.setState({ company_contactPerson: text }) }}
                    />
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={[StyleEditProfile.TextInputView, { width: '68%' }]}>
                        <View style={StyleEditProfile.LabelView}>
                            <Image source={require('../images/designation.png')}
                                style={StyleEditProfile.labelIcon}
                            />
                            <Text style={StyleEditProfile.modalLabelText}>{Constants.CompanyContactPosition}</Text>
                        </View>
                        <TextInput
                            placeholder="Enter Company Contact Position"
                            style={[StyleEditProfile.TextInput]}
                            value={this.state.company_contactPosition}
                            onChangeText={(text) => { this.setState({ company_contactPosition: text }) }}
                        />
                    </View>
                    <TouchableOpacity style={{ marginLeft: 10, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 18 }}>
                        <Image source={require('../images/add.png')} style={{ width: 55, height: 55, alignSelf: 'center' }} />
                    </TouchableOpacity>
                </View>

                <View style={StyleEditProfile.TextInputView}>
                    <View style={StyleEditProfile.LabelView}>
                        <Image source={require('../images/telephone.png')}
                            style={StyleEditProfile.labelIcon}
                        />
                        <Text style={StyleEditProfile.modalLabelText}>{Constants.CompanyTelephonenumber}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Telephone Number"
                        style={StyleEditProfile.TextInput}
                        value={this.state.user_telephoneNo}
                        keyboardType="number-pad"
                        maxLength={10}
                        onChangeText={(text) => {
                            this.setState({ company_telephoneNo: text })
                        }}
                    />
                </View>

                <View style={StyleEditProfile.TextInputView}>
                    <View style={StyleEditProfile.LabelView}>
                        <Image source={require('../images/email_id.png')}
                            style={StyleEditProfile.labelIcon}
                        />
                        <Text style={StyleEditProfile.modalLabelText}>{Constants.EmailAddress}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Email Id"
                        style={StyleEditProfile.TextInput}
                        value={this.state.company_email}
                        onChangeText={(text) => { this.setState({ company_email: text }) }}
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
                        value={this.state.company_address}
                        onChangeText={(text) => { this.setState({ company_address: text }) }}
                    />
                </View>

                <View style={StyleEditProfile.TextInputView}>
                    <View style={StyleEditProfile.LabelView}>
                        <Image source={require('../images/address.png')}
                            style={StyleEditProfile.labelIcon}
                        />
                        <Text style={StyleEditProfile.modalLabelText}>{Constants.SelectProvince}</Text>
                    </View>
                    <Picker
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_DARK }}
                        selectedValue={this.state.company_province}
                        onValueChange={this.onValueChange_province.bind(this)}
                    >
                        <Picker.Item label='select Province' value='1' />
                        <Picker.Item label='CA' value='2' />
                        <Picker.Item label='DSA' value='3' />

                    </Picker>
                </View>

                <View style={StyleEditProfile.TextInputView}>
                    <View style={StyleEditProfile.LabelView}>
                        <Image source={require('../images/address.png')}
                            style={StyleEditProfile.labelIcon}
                        />
                        <Text style={StyleEditProfile.modalLabelText}>{Constants.SelectCity}</Text>
                    </View>
                    <Picker
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_DARK }}
                        selectedValue={this.state.company_city}
                        onValueChange={this.onValueChange_city.bind(this)}
                    >
                        <Picker.Item label='select City' value='1' />
                        <Picker.Item label='CA' value='2' />
                        <Picker.Item label='DSA' value='3' />

                    </Picker>
                </View>

                <View style={StyleEditProfile.TextInputView}>
                    <View style={StyleEditProfile.LabelView}>
                        <Image source={require('../images/address.png')}
                            style={StyleEditProfile.labelIcon}
                        />
                        <Text style={StyleEditProfile.modalLabelText}>{Constants.ZipCode}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter ZipCode"
                        style={StyleEditProfile.TextInput}
                        value={this.state.user_zipcode}
                        onChangeText={(text) => { this.setState({ user_zipcode: text }) }}
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
                            editable={false}
                            style={[StyleEditProfile.TextInput, { width: '90%' }]}
                            secureTextEntry={this.state.password_visible}
                            value={this.state.company_password}
                            onChangeText={(text) => { this.setState({ company_password: text }) }}
                        />
                        <TouchableOpacity style={{ alignSelf: 'flex-end', right: 15, alignSelf: 'center' }}
                            onPress={() => {
                                this.setState({ password_visible: !this.state.password_visible })
                            }}
                        >
                            <Image source={this.state.password_visible ? require('../images/show_pass.png') : require('../images/hide_pass.png')}
                                style={{ width: 20, height: 20, alignSelf: 'center' }}
                            />
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        )
    }

    user_Profile() {
        return (
            <View>

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
                        <Image source={require('../images/user_name.png')}
                            style={StyleEditProfile.labelIcon}
                        />
                        <Text style={StyleEditProfile.modalLabelText}>{Constants.Title}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Title"
                        style={StyleEditProfile.TextInput}
                        value={this.state.title}
                        onChangeText={(text) => { this.setState({ title: text }) }}
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
                        value={this.state.user_telephoneNo}
                        keyboardType="number-pad"
                        maxLength={10}
                        onChangeText={(text) => {
                            if (!isNaN(text))
                                this.setState({ user_telephoneNo: text })
                            else
                                this.setState({ user_telephoneNo: '' })

                        }}
                    />
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={[StyleEditProfile.TextInputView, { width: '68%' }]}>
                        <View style={StyleEditProfile.LabelView}>
                            <Image source={require('../images/designation.png')}
                                style={StyleEditProfile.labelIcon}
                            />
                            <Text style={StyleEditProfile.modalLabelText}>{Constants.RSAIDPassNO}</Text>
                        </View>
                        <TextInput
                            placeholder="Enter Company Name"
                            style={[StyleEditProfile.TextInput]}
                            value={this.state.user_rsa_id}
                            onChangeText={(text) => { this.setState({ rsa_id: text }) }}
                        />
                    </View>
                    <TouchableOpacity style={{ marginLeft: 10, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 18 }}>
                        <Image source={require('../images/add.png')} style={{ width: 55, height: 55, alignSelf: 'center' }} />
                    </TouchableOpacity>
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
                        value={this.state.user_address}
                        onChangeText={(text) => { this.setState({ user_address: text }) }}
                    />
                </View>

                <View style={StyleEditProfile.TextInputView}>
                    <View style={StyleEditProfile.LabelView}>
                        <Image source={require('../images/address.png')}
                            style={StyleEditProfile.labelIcon}
                        />
                        <Text style={StyleEditProfile.modalLabelText}>{Constants.SelectProvince}</Text>
                    </View>
                    <Picker
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_DARK }}
                        selectedValue={this.state.user_province}
                        onValueChange={this.onValueChange_province.bind(this)}
                    >
                        <Picker.Item label='select Province' value='1' />
                        <Picker.Item label='CA' value='2' />
                        <Picker.Item label='DSA' value='3' />

                    </Picker>
                </View>

                <View style={StyleEditProfile.TextInputView}>
                    <View style={StyleEditProfile.LabelView}>
                        <Image source={require('../images/address.png')}
                            style={StyleEditProfile.labelIcon}
                        />
                        <Text style={StyleEditProfile.modalLabelText}>{Constants.SelectCity}</Text>
                    </View>
                    <Picker
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_DARK }}
                        selectedValue={this.state.user_city}
                        onValueChange={this.onValueChange_city.bind(this)}
                    >
                        <Picker.Item label='select City' value='1' />
                        <Picker.Item label='CA' value='2' />
                        <Picker.Item label='DSA' value='3' />

                    </Picker>
                </View>

                <View style={StyleEditProfile.TextInputView}>
                    <View style={StyleEditProfile.LabelView}>
                        <Image source={require('../images/address.png')}
                            style={StyleEditProfile.labelIcon}
                        />
                        <Text style={StyleEditProfile.modalLabelText}>{Constants.ZipCode}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter ZipCode"
                        style={StyleEditProfile.TextInput}
                        value={this.state.user_zipcode}
                        onChangeText={(text) => { this.setState({ user_zipcode: text }) }}
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
                            editable={false}
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
                            <Image source={this.state.password_visible ? require('../images/show_pass.png') : require('../images/hide_pass.png')}
                                style={{ width: 20, height: 20, alignSelf: 'center' }}
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

                <HeaderBar title="EDIT PROFILE" isBack={true} isLogout={true} navigation={navigation} />
                <View style={{ flex: 1 }}>
                    <ScrollView style={{ width: '100%', flex: 1 }} bounces={false}>

                        <View style={{ marginBottom: 2 }}>
                            <View style={StyleEditProfile.topCircle} />

                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={StyleEditProfile.sideImageView}
                                    onPress={() => {
                                        this.setState({ modalVisible_Changepassword: true })
                                    }}
                                >
                                    <Image source={this.state.modalVisible_Changepassword ? require('../images/change_passward.png') : require('../images/change_passward.png')}
                                        style={StyleEditProfile.sideImage}
                                    />
                                </TouchableOpacity>

                                <Image source={this.state.screen_title=='user_profile'?require('../images/Profile_pic.png'):require('../images/ibm.jpeg')}
                                    style={StyleEditProfile.ProfileImage}
                                />

                                <TouchableOpacity style={StyleEditProfile.sideImageView}>
                                    <Image source={require('../images/upload_normal.png')}
                                        style={StyleEditProfile.sideImage}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>


                        {this.state.screen_title == 'user_profile'
                            ? <Text style={StyleEditProfile.label}>{this.state.first_name}&nbsp;{this.state.last_name}</Text>
                            : this.state.screen_title == 'company_profile'
                                ? <Text style={StyleEditProfile.label}>{this.state.company_name}</Text>
                                : null
                        }
                        <View style={StyleEditProfile.bottomline}></View>

                        <View style={{ marginTop: 10 }}>
                            {this.state.screen_title == 'user_profile'
                                ? this.user_Profile()
                                : this.state.screen_title == 'company_profile'
                                    ? this.company_Profile()
                                    : null
                            }

                            <TouchableOpacity style={{ backgroundColor: Constants.COLOR_GREEN, paddingHorizontal: 25, borderRadius: 50, marginVertical: 15, alignSelf: 'flex-end', marginRight: 15 }}
                                onPress={() => {
                                    this.setState({ modalVisible_Changepassword: true })
                                }}
                            >
                                <Text style={{ textTransform: 'uppercase', color: 'white', paddingVertical: 12 }}>Change Password</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleEditProfile.ButtonView}
                                onPress={() => {
                                    this.setState({ modalVisible_successMsg: true })
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