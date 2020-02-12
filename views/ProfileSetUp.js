/*
Screen-Id : MANAPPCUS090-1,90-3,90
@author :mayur s
*/
import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Modal } from "react-native";
import HeaderBar from "../config/HeaderBar";
import { Picker } from "native-base";
import Constants from '../config/Constants';
import { StyleSetUpProfile, StyleSignUp } from '../config/CommonStyles';
export default class ProfileSetUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            policyRadio_button: false,
            Modal_visible: false,
            customerType: '',//Individual,Company
            user_firstName: '',
            user_lastName: '',
            user_title: '',
            user_telephoneNumber: '',
            user_rsaPassport: '',
            user_address: '',
            user_email: '',
            user_streetAddress: '',
            user_City: '',
            user_Province: '',
            user_zipCode: '',
            user_password: '',
            user_confirmPassword: '',
            company_contactPerson: '',
            company_name: '',
            company_contactPosition: '',
            company_telephoneNo: '',
            company_emailId: '',
            company_streetAddress: '',
            company_City: '',
            company_Province: '',
            company_zipCode: '',
            company_password: '',
            company_confirmPass: '',

        }
    }


    CompanyProfile() {
        return (
            <View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={StyleSetUpProfile.modalLabelText}>{Constants.CompanyName}</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Company Name"
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.company_name}
                        onChangeText={(text) => { this.setState({ company_name: text }) }}
                    />
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>

                        <Text style={StyleSetUpProfile.modalLabelText}>{Constants.CompanyContactPerson}</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Name"
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.company_contactPerson}
                        onChangeText={(text) => { this.setState({ company_contactPerson: text }) }}
                    />
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={StyleSetUpProfile.modalLabelText}>{Constants.CompanyContactPosition}</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Position Name"
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.company_contactPosition}
                        onChangeText={(text) => { this.setState({ company_contactPosition: text }) }}
                    />
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={StyleSetUpProfile.modalLabelText}>{Constants.CompanyTelephonenumber}</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Number"
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.company_telephoneNo}
                        onChangeText={(text) => { this.setState({ company_telephoneNo: text }) }}
                    />
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>Email ID</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Telephone Number"
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.emailId}
                        onChangeText={(text) => { this.setState({ emailId: text }) }}
                    />
                </View>

                <Text style={{ color: Constants.COLOR_GREEN, fontWeight: "bold", textTransform: 'uppercase', paddingLeft: 45, marginVertical: 10 }}>
                    {Constants.CompanyAddress}</Text>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.StreetAddress}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Address"
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.company_streetAddress}
                        onChangeText={(text) => { this.setState({ company_streetAddress: text }) }}
                    />
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.SelectProvince}</Text>
                    </View>
                    <Picker
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_LIGHT }}
                        selectedValue={this.state.company_Province}
                        onValueChange={() => this.setState({ company_Province })}
                    >
                        <Picker.Item label="Selct Province" value="Province" />
                        <Picker.Item label="Province" value="Province" />
                    </Picker>
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.SelectCity}</Text>
                    </View>
                    <Picker
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_LIGHT }}
                        selectedValue={this.state.company_Province}
                        onValueChange={(value) => { this.setState({ company_Province: value }) }}
                    >
                        <Picker.Item label="Selct city" value="city" />
                        <Picker.Item label="pune" value="city" />
                    </Picker>

                </View>

                <View style={[StyleSetUpProfile.TextInputView]}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.ZipCode}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Confirm Number"
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.zipCode}
                        onChangeText={(text) => { this.setState({ zipCode: text }) }}
                    />
                </View>

                <View style={[StyleSetUpProfile.TextInputView]}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.NewPassword}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Password"
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.company_password}
                        onChangeText={(text) => { this.setState({ company_password: text }) }}
                    />
                </View>

                <View style={[StyleSetUpProfile.TextInputView]}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.ConfirmPassword}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Confirm Password"
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.company_confirmPass}
                        onChangeText={(text) => { this.setState({ company_confirmPass: text }) }}
                    />
                </View>

            </View>

        )
    }

    UserProfile() {
        return (
            <View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={StyleSetUpProfile.modalLabelText}>{Constants.FirstName}</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <TextInput
                        placeholder="Enter First Name"
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.user_firstName}
                        onChangeText={(text) => { this.setState({ user_firstName: text }) }}
                    />
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>

                        <Text style={StyleSetUpProfile.modalLabelText}>{Constants.LastName}</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <TextInput
                        placeholder="Enter last Name"
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.user_lastName}
                        onChangeText={(text) => { this.setState({ user_lastName: text }) }}
                    />
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={StyleSetUpProfile.modalLabelText}>{Constants.Title}</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <Picker
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_LIGHT }}
                        selectedValue={this.state.user_title}
                        onValueChange={(value) => { this.setState({ user_title: value }) }}
                    >
                        <Picker.Item label="Select" value="Key1" />
                        <Picker.Item label="Title2" value="Key2" />
                    </Picker>
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={StyleSetUpProfile.modalLabelText}>{Constants.Telephonenumber}</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Telephone Number"
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.user_telephoneNumber}
                        onChangeText={(text) => { this.setState({ user_telephoneNumber: text }) }}
                    />
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={[StyleSetUpProfile.TextInputView, { width: '74%' }]}>
                        <View style={StyleSetUpProfile.LabelView}>
                            <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.RSAIDPassport}</Text>
                            <Text style={{ color: 'red' }}>*</Text>
                        </View>
                        <TextInput
                            placeholder="Enter Number"
                            style={StyleSetUpProfile.TextInput}
                            value={this.state.user_rsaPassport}
                            onChangeText={(text) => { this.setState({ user_rsaPassport: text }) }}
                        />

                    </View>
                    <TouchableOpacity style={{ paddingLeft: 10 }}>
                        <Image style={{ width: 40, height: 40, }}
                            source={require('../images/Upload_file.png')} />
                    </TouchableOpacity>
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.EmailAddress}</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Email Addrss"
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.user_email}
                        onChangeText={(text) => { this.setState({ user_email: text }) }}
                    />
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.Address}</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Address"
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.user_address}
                        onChangeText={(text) => { this.setState({ user_address: text }) }}
                    />
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.StreetAddress}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Address"
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.user_streetAddress}
                        onChangeText={(text) => { this.setState({ user_streetAddress: text }) }}
                    />
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.SelectProvince}</Text>
                    </View>
                    <Picker
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_LIGHT }}
                        selectedValue={this.state.user_Province}
                        onValueChange={(value) => this.setState({ user_Province: value })}
                    >
                        <Picker.Item label="Selct Province" />
                        <Picker.Item label="pune" value="Province" />
                    </Picker>
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.SelectCity}</Text>
                    </View>
                    <Picker
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_LIGHT }}
                        selectedValue={this.state.user_City}
                        onValueChange={(value) => this.setState({ user_City: value })}
                    >
                        <Picker.Item label="Selct city" value="city" />
                        <Picker.Item label="pune" value="city" />
                    </Picker>
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.ZipCode}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.user_zipCode}
                        onChangeText={(text) => { this.setState({ user_zipCode: text }) }}
                    />
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.NewPassword}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.user_password}
                        onChangeText={(text) => { this.setState({ user_password: text }) }}
                    />
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.ConfirmPassword}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Confirm Number"
                        secureTextEntry={true}
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.user_confirmPassword}
                        onChangeText={(text) => { this.setState({ user_confirmPassword: text }) }}
                    />
                </View>
            </View>
        )

    }

    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>
                <HeaderBar isBack={true} title="Profile setup" isLogout={true} navigation={navigation} />
                <ScrollView style={{ width: '100%', marginVertical: 20 }}
                    bounces={false}
                >

                    <View style={StyleSetUpProfile.TextInputView}>
                        <View style={StyleSetUpProfile.LabelView}>
                            <Text style={StyleSetUpProfile.modalLabelText}>{Constants.CustomerType}</Text>
                        </View>
                        <Picker
                            mode="dropdown"
                            style={{ color: Constants.COLOR_GREY_LIGHT }}
                            selectedValue={this.state.customerType}
                            onValueChange={(value) => { this.setState({ customerType: value }) }}
                        >
                            <Picker.Item label="Select Type" value="" />
                            <Picker.Item label="Company" value="Company" />
                            <Picker.Item label="Individual" value="Individual" />
                        </Picker>
                    </View>

                    {this.state.customerType == ""
                        ? <View style={{ flex: 1 }}></View>
                        : this.state.customerType == "Individual"
                            ? this.UserProfile()
                            : this.CompanyProfile()
                    }
                    {this.state.customerType == ""
                        ? null
                        :
                        <View>
                            <View style={{ marginLeft: 15 }}>
                                <View style={[StyleSignUp.policyView,]}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ policyRadio_button: !this.state.policyRadio_button })
                                        }}
                                    >
                                        <Image source={this.state.policyRadio_button ? require('../images/radio_buttons_selected.png') : require('../images/radio_buttons.png')}
                                            style={[StyleSignUp.policyImage, {}]} />
                                    </TouchableOpacity>
                                    <Text style={{ color: Constants.COLOR_GREY_DARK, fontWeight: 'bold', paddingHorizontal: 3 }}>{Constants.IagreeTo}</Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.props.navigation.navigate('TermsAndCondition', { flag: 'TermsAndCondition' })
                                        }}
                                    >
                                        <Text style={StyleSignUp.PolicyLabel}>{Constants.TermsAndConditions}</Text>
                                    </TouchableOpacity>
                                    <Text style={{ color: Constants.COLOR_GREY_DARK }}>,</Text>
                                </View>

                                <View style={[{ paddingLeft: 42, flexDirection: 'row', marginBottom: 10 }]}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.props.navigation.navigate('TermsAndCondition', { flag: 'CancellationPolicy' })
                                        }}
                                    >
                                        <Text style={StyleSignUp.PolicyLabel}>{Constants.CancellationPlicy}</Text>
                                    </TouchableOpacity>
                                    <Text style={{ color: Constants.COLOR_GREY_DARK, fontWeight: 'bold' }}> & </Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.props.navigation.navigate('TermsAndCondition', { flag: 'PaymentPolicy' })
                                        }}

                                    >
                                        <Text style={StyleSignUp.PolicyLabel}>{Constants.PaymentPolicy}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={[StyleSetUpProfile.ButtonView, { marginRight: 15, paddingHorizontal: 8, paddingVertical: 5 }]}
                                    onPress={() => {
                                        this.props.navigation.navigate('SignIn')
                                    }}
                                >
                                    <Text style={[StyleSetUpProfile.ButtonTextBottom, { fontSize: Constants.FONT_SIZE__MEDIUM }]}>{Constants.AlreadyRegistered}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={[StyleSetUpProfile.ButtonView, { paddingVertical: 10 }]} disabled={!this.state.policyRadio_button}
                                    onPress={() => {
                                        this.setState({ Modal_visible: true })

                                    }}
                                >
                                    <Text style={[StyleSetUpProfile.ButtonTextBottom, { fontSize: Constants.FONT_SIZE_EXTRA_LARGE }]}>{Constants.SUBMIT}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                </ScrollView>

                <Modal
                    transparent={true}
                    visible={this.state.Modal_visible}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View style={StyleSetUpProfile.modalView}>
                            <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10 }}
                                onPress={() => {
                                    this.setState({ Modal_visible: false })
                                    this.props.navigation.navigate('Dashboard');
                                }}
                            >
                                <Image source={require('../images/close.png')}
                                    style={{ width: 15, height: 15 }}
                                />
                            </TouchableOpacity>
                            <Image style={StyleSetUpProfile.modalImage}
                                source={require('../images/sent_icon.png')}
                            />
                            <Text style={StyleSetUpProfile.modalMsg}>{Constants.ProfileSetUPDoneSuccessFul}</Text>
                            <Text style={[StyleSetUpProfile.modalMsg, { fontWeight: 'none' }]}>{Constants.YouwillRevicefromourSupportTeam}</Text>
                            <TouchableOpacity style={StyleSetUpProfile.modalButton}
                                onPress={() => {
                                    this.setState({ Modal_visible: false })
                                    this.props.navigation.navigate('Dashboard');

                                }}
                            >
                                <Text style={StyleSetUpProfile.modalButtonText}>{Constants.OK}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            </View>
        )
    }
}
