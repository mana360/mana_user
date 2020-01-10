/*
Screen-Id : MANAPPCUS090-1
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
            customerType: '',
            firstName: '',
            lastName: '',
            title: '',
            telephoneNumber: '',
            RsaPassport: '',
            address: '',
            emailAddress: '',
            password: '',
            confirmPassword: '',
            companyContactPerson: '',
            companyName: '',
            companyContactPosition: '',
            companyTelephoneNo: '',
            emailId: '',
            streetAddress: '',
            SelectCity: '',
            SelectProvince: '',
            zipCode: '',
            policyRadio_button: false,
            Modal_visible: false,
        }
    }
    onValueChange_customerType(value) {
        this.setState({
            customerType: value
        })
    }
    onValueChange_title(value) {
        this.setState({
            title: value
        })
    }
    onValueChange_City(value) {
        this.setState({
            SelectCity: value
        })
    }
    onValueChange_Province(value) {
        this.setState({
            SelectProvince: value
        })
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
                        value={this.state.companyName}
                        onChangeText={(text) => { this.setState({ companyName: text }) }}
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
                        value={this.state.companyContactPerson}
                        onChangeText={(text) => { this.setState({ companyContactPerson: text }) }}
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
                        value={this.state.companyContactPosition}
                        onChangeText={(text) => { this.setState({ companyContactPosition: text }) }}
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
                        value={this.state.companyTelephoneNo}
                        onChangeText={(text) => { this.setState({ companyTelephoneNo: text }) }}
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
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Address"
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.streetAddress}
                        onChangeText={(text) => { this.setState({ streetAddress: text }) }}
                    />
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.SelectCity}</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <Picker
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_LIGHT }}
                        selectedValue={this.state.SelectCity}
                        onValueChange={this.onValueChange_City.bind(this)}
                    >
                        <Picker.Item label="Selct city" value="city" />
                        <Picker.Item label="pune" value="city" />
                    </Picker>

                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.SelectProvince}</Text>
                    </View>
                    <Picker
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_LIGHT }}
                        selectedValue={this.state.SelectProvince}
                        onValueChange={this.onValueChange_Province.bind(this)}
                    >
                        <Picker.Item label="Selct Province" value="Province" />
                        <Picker.Item label="Province" value="Province" />
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
                        value={this.state.firstName}
                        onChangeText={(text) => { this.setState({ firstName: text }) }}
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
                        value={this.state.lastName}
                        onChangeText={(text) => { this.setState({ lastName: text }) }}
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
                        selectedValue={this.state.title}
                        onValueChange={this.onValueChange_title.bind(this)}
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
                        value={this.state.telephoneNumber}
                        onChangeText={(text) => { this.setState({ telephoneNumber: text }) }}
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
                            value={this.state.RsaPassport}
                            onChangeText={(text) => { this.setState({ RsaPassport: text }) }}
                        />

                    </View>
                    <TouchableOpacity style={{ paddingLeft: 10 }}>
                        <Image style={{ width: 40, height: 40, }}
                            source={require('../images/Upload_file.png')} />
                    </TouchableOpacity>
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.Address}</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Address"
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.address}
                        onChangeText={(text) => { this.setState({ address: text }) }}
                    />
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.EmailAddress}</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Email Addrss"
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.emailAddress}
                        onChangeText={(text) => { this.setState({ emailAddress: text }) }}
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
                        value={this.state.password}
                        onChangeText={(text) => { this.setState({ password: text }) }}
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
                        value={this.state.confirmPassword}
                        onChangeText={(text) => { this.setState({ confirmPassword: text }) }}
                    />
                </View>
            </View>
        )

    }

    render() {
        let {navigation}=this.props
        return (

            <View style={{ flex: 1 }}>
                <HeaderBar isBack={true} title="Profile setup" isLogout={true} navigation={navigation}/>
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
                            onValueChange={this.onValueChange_customerType.bind(this)}
                        >
                            <Picker.Item label="Company" value="Company" />
                            <Picker.Item label="Individual" value="Individual" />
                        </Picker>
                    </View>

                    {this.state.customerType=="Individual"
                        ?
                            this.UserProfile()
                        :
                            this.CompanyProfile()
                    }
                  
                    <View style={this.state.customerType == "Individual" ? { marginLeft: 15 } : { display: "none" }}>
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

                    <TouchableOpacity style={StyleSetUpProfile.ButtonView}
                        onPress={() => {
                            this.setState({ Modal_visible: true })
                            
                        }}
                    >
                        <Text style={StyleSetUpProfile.ButtonTextBottom}>{Constants.SUBMIT}</Text>
                    </TouchableOpacity>

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
