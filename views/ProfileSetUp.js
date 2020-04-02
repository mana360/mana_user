/*
Screen-Id : MANAPPCUS090-1,90-3,90
@author :mayur s
API : Udayraj (provinceList, cityList, profileSetup, verifyOTP)
*/
import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Modal, FlatList } from "react-native";
import HeaderBar from "../config/HeaderBar";
import ImagePicker from "react-native-image-picker";
import { Picker } from "native-base";
import Constants from '../config/Constants';
import { StyleSetUpProfile, StyleSignUp,StyleForgotPassword } from '../config/CommonStyles';
import ApiConstants from '../config/ApiConstants';
import {MainPresenter} from '../config/MainPresenter';
import { setUserData, clearAllData } from '../config/AppSharedPreference';
import { StackActions, NavigationActions } from 'react-navigation';

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
            user_img_arry: [],
            user_filename: '',
            user_address: '',
            user_email: '',
            user_streetAddress: '',
            user_country:"",
            user_country_id:'',
            user_City: '',
            user_city_id:'',
            user_Province: '',
            user_Province_id:'',
            user_zipCode: '',
            user_password: '',
            user_confirmPassword: '',
            company_contactPerson: '',
            company_name: '',
            company_contactPosition: '',
            company_telephoneNo: '',
            company_emailId: '',
            company_img_arry: [],
            company_fileName: '',
            company_streetAddress: '',
            company_country:'',
            company_country_id:'',
            company_City: '',
            company_city_id: '',
            company_Province: '',
            company_province_id:'',
            company_zipCode: '',
            company_password: '',
            company_confirmPass: '',

            countryList:[],
            isCountryListFilled:0,

            provinceList:[],
            isProvinceListFilled:0,


            cityList:[],
            isCityListFilled:0,

            otp_code:'',
            otp_modal_visible:false,
            resp_otp:'',
            resp_token:'',

        }
    }

    OpenImagePicker() {
        if (this.state.user_img_arry.length < 4 || this.state.company_img_arry.length < 4) {
            ImagePicker.showImagePicker(this.options, (response) => {
                console.log('response==', response);
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    const source = { uri: response.uri };
                    console.log('response-->', source);
                    this.setState({ user_filename: source })
                    this.uploadImage(response.uri);
                }

            })
        } else {
            alert('maximum 4 image selected');

        }
    }
    uploadImage(uri) {
        if (this.state.customerType == 'Individual') {
            let temp_arry = this.state.user_img_arry;
            temp_arry.push({ uri: uri });
            this.setState({ user_img_arry: temp_arry })
           
        } else {
            let temp_arry = this.state.company_img_arry;
            temp_arry.push({ uri: uri });
            this.setState({ company_img_arry: temp_arry })
        }
    }

    options = {
        title: 'Select Image',
        customButtons: [
            { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
        ],
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };

    Pop_UploadImageArray(position) {
        if (this.state.customerType == 'Individual') {
            let temp_arry = this.state.user_img_arry;
            temp_arry.splice(position, 1);
            this.setState({ user_img_arry: temp_arry });
        }
        else {
            let temp_arry = this.state.company_img_arry;
            temp_arry.splice(position, 1);
            this.setState({ company_img_arry: temp_arry });
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
                        ref={(ref)=>{this.input_company_name = ref}}
                        onChangeText={(text) => { this.setState({ company_name: text }) }}
                        onBlur={()=>{this.input_company_contact_person.focus()}}
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
                        ref={(ref)=>{this.input_company_contact_person = ref}}
                        onChangeText={(text) => { this.setState({ company_contactPerson: text }) }}
                        onBlur={()=>{this.input_company_contact_position.focus()}}
                    />
                </View>

                <View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={StyleSetUpProfile.TextInputView}>
                            <View style={StyleSetUpProfile.LabelView}>
                                <Text style={StyleSetUpProfile.modalLabelText}>{Constants.CompanyContactPosition}</Text>
                                <Text style={{ color: 'red' }}>*</Text>
                            </View>
                            <TextInput
                                placeholder="Enter Position Name"
                                style={StyleSetUpProfile.TextInput}
                                value={this.state.company_contactPosition}
                                ref={(ref)=>{this.input_company_contact_position = ref}}
                                onChangeText={(text) => { this.setState({ company_contactPosition: text }) }}
                                onBlur={()=>{this.input_company_telephone_number.focus()}}
                            />
                        </View>
                        {/* if required image upload in company profile,make TextInputView width small */}
                        {/* <TouchableOpacity style={this.state.customerType == 'Company' ? {} : { paddingLeft: 10 }}
                            onPress={() => {
                                this.OpenImagePicker();
                            }}
                        >
                            <Image style={{ width: 40, height: 40, }}
                                source={require('../images/Upload_file.png')} />
                        </TouchableOpacity> */}
                    </View>
                    <FlatList
                        data={this.state.company_img_arry}
                        extraData={this.state}
                        horizontal={true}
                        style={{ marginLeft: 25 }}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ width: 65, height: 65, borderRadius: 5, }}>
                                    <TouchableOpacity onPress={() => { this.Pop_UploadImageArray(index); }}
                                        style={{ position: 'absolute', alignSelf: 'flex-end', right: 8, top: 8, width: 15, height: 15, zIndex: 1, borderRadius: 100, justifyContent: 'center' }}>
                                        <Image style={{ width: 12, height: 12, paddingBottom: 2, borderRadius: 50, borderWidth: 0.5, borderColor: 'white' }} source={require('../images/remove.png')} />
                                    </TouchableOpacity>
                                    <Image source={{ uri: item.uri }}
                                        style={{ width: 50, height: 50, borderRadius: 5, margin: 5 }}
                                    />
                                </View>
                            )
                        }}
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
                        ref={(ref)=>{this.input_company_telephone_number = ref}}
                        maxLength={10}
                        keyboardType="number-pad"
                        onChangeText={(text) => { this.setState({ company_telephoneNo: text }) }}
                        onBlur={()=>{this.input_company_emailId.focus()}}
                    />
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>Email ID</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Email Id"
                        style={StyleSetUpProfile.TextInput}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={this.state.company_emailId}
                        ref={(ref)=>{this.input_company_emailId = ref}}
                        onChangeText={(text) => { this.setState({ company_emailId: text }) }}
                        onBlur={()=>{this.input_company_street_address.focus()}}
                    />
                </View>

                <Text style={{ color: Constants.COLOR_GREEN, fontWeight: "bold", textTransform: 'uppercase', paddingLeft: 45, marginVertical: 10 }}>
                    {Constants.CompanyAddress}
                </Text>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.StreetAddress}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Address"
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.company_streetAddress}
                        ref={(ref)=>{this.input_company_street_address = ref}}
                        onChangeText={(text) => { this.setState({ company_streetAddress: text }) }}
                    />
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.SELECT_COUNTRY}</Text>
                    </View>
                    <Picker
                        ref={(ref)=>{this.input_company_country = ref}}
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_LIGHT }}
                        selectedValue={this.state.company_country}
                        onValueChange={
                            (value, index) => {
                                console.log("value ===>"+value)
                                this.setState({ company_country : value })
                                this.state.countryList.map((item)=>{
                                    if(value == item.name){
                                        this.setState({company_country_id : item.country_id})
                                        this.getProvinceList(item.country_id)
                                    }
                                })
                            }
                        }
                    >
                        <Picker.Item label="Select Country" value="-1" />
                        {
                            this.state.isCountryListFilled==1
                            ?
                            this.state.countryList.map((item) =>
                            <Picker.Item key={item.country_id} label={"" + item.name} value={item.name} />)
                            : null
                        }
                    </Picker>
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.SelectProvince}</Text>
                    </View>
                    <Picker
                        ref={(ref)=>{this.input_company_province = ref}}
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_LIGHT }}
                        selectedValue={this.state.company_Province}
                        onValueChange={
                            (value, index) => {
                                console.log("value ===>"+value)
                                this.setState({ company_Province : value })
                                this.state.provinceList.map((item)=>{
                                    if(value == item.name){
                                        this.setState({company_province_id : item.state_id})
                                        this.getCityList(item.state_id)
                                    }
                                })
                            }
                        }
                    >
                        <Picker.Item label="Select Province" value="-1" />
                        {
                            this.state.isProvinceListFilled==1
                            ?
                            this.state.provinceList.map((item) =>
                            <Picker.Item key={item.state_id} label={"" + item.name} value={item.name} />)
                            : null
                        }
                    </Picker>
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.SelectCity}</Text>
                    </View>
                    <Picker
                        ref={(ref)=>{this.input_company_city = ref}}
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_LIGHT }}
                        selectedValue={this.state.company_City}
                        onValueChange={
                            (value, index) => {
                                this.setState({ company_City : value })
                                this.state.cityList.map((item)=>{
                                    if(value == item.name){
                                        // city id
                                        this.setState({company_city_id : item.city_id})
                                    }
                                })
                            }
                        }
                    >
                        <Picker.Item label="Select city" value="-1" />
                        {
                            this.state.isCityListFilled==1
                            ?
                            this.state.cityList.map((item) =>
                            <Picker.Item key={item.city_id} label={"" + item.name} value={item.name} />)
                            : null
                        }
                    </Picker>

                </View>

                <View style={[StyleSetUpProfile.TextInputView]}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.ZipCode}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Zipcode"
                        style={StyleSetUpProfile.TextInput}
                        keyboardType="number-pad"
                        maxLength={6}
                        value={this.state.company_zipCode}
                        ref={(ref)=>{this.input_company_zipcode = ref}}
                        onChangeText={(text) => { this.setState({ zipCode: text }) }}
                        onBlur={()=>{this.input_company_new_password.focus()}}
                    />
                </View>

                <View style={[StyleSetUpProfile.TextInputView]}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.NewPassword}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Password"
                        style={StyleSetUpProfile.TextInput}
                        autoCapitalize="none"
                        value={this.state.company_password}
                        secureTextEntry={true}
                        ref={(ref)=>{this.input_company_new_password = ref}}
                        onChangeText={(text) => { this.setState({ company_password: text }) }}
                        onBlur={()=>{this.input_company_confirm_password.focus()}}
                    />
                </View>

                <View style={[StyleSetUpProfile.TextInputView]}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.ConfirmPassword}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Confirm Password"
                        style={StyleSetUpProfile.TextInput}
                        autoCapitalize="none"
                        value={this.state.company_confirmPass}
                        secureTextEntry={true}
                        ref={(ref)=>{this.input_company_confirm_password = ref}}
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
                        ref={(ref)=>{this.input_user_first_name=ref}}
                        onChangeText={(text) => { this.setState({ user_firstName: text }) }}
                        onBlur={()=>{this.input_user_last_name.focus()}}
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
                        ref={(ref)=>{this.input_user_last_name=ref}}
                        onChangeText={(text) => { this.setState({ user_lastName: text }) }}
                    />
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={StyleSetUpProfile.modalLabelText}>{Constants.Title}</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <Picker
                        ref={(ref)=>{this.input_user_title = ref}}
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_LIGHT }}
                        selectedValue={this.state.user_title}
                        onValueChange={(value) => { this.setState({ user_title: value }) }}
                    >
                        <Picker.Item label="Select" value="-1" />
                        <Picker.Item label="Mr" value="Mr" />
                        <Picker.Item label="Mrs" value="Mrs" />
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
                        keyboardType="number-pad"
                        maxLength={10}
                        ref={(ref)=>{this.input_user_telephone_number=ref}}
                        value={this.state.user_telephoneNumber}
                        onChangeText={(text) => { this.setState({ user_telephoneNumber: text }) }}
                        onBlur={()=>{this.input_user_rsa_id.focus()}}
                    />
                </View>

                <View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={[StyleSetUpProfile.TextInputView, { width: '74%' }]}>
                            <View style={StyleSetUpProfile.LabelView}>
                                <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.RSAIDPassport}</Text>
                                <Text style={{ color: 'red' }}>*</Text>
                            </View>
                            <TextInput
                                placeholder="Enter Number"
                                style={StyleSetUpProfile.TextInput}
                                keyboardType="number-pad"
                                ref={(ref)=>{this.input_user_rsa_id=ref}}
                                value={this.state.user_rsaPassport}
                                onChangeText={(text) => { this.setState({ user_rsaPassport: text }) }}
                                onBlur={()=>{this.input_user_emailId.focus()}}
                            />

                        </View>

                        <TouchableOpacity style={{ paddingLeft: 10 }}
                            onPress={() => {
                                this.OpenImagePicker();
                            }}
                        >
                            <Image style={{ width: 40, height: 40, }}
                                source={require('../images/Upload_file.png')} />
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={this.state.user_img_arry}
                        extraData={this.state}
                        horizontal={true}
                        style={{ marginLeft: 25 }}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ width: 65, height: 65, borderRadius: 5, }}>
                                    <TouchableOpacity onPress={() => { this.Pop_UploadImageArray(index); }}
                                        style={{ position: 'absolute', alignSelf: 'flex-end', right: 8, top: 8, width: 15, height: 15, zIndex: 1, borderRadius: 100, justifyContent: 'center' }}>
                                        <Image style={{ width: 12, height: 12, paddingBottom: 2, borderRadius: 50, borderWidth: 0.5, borderColor: 'white' }} source={require('../images/remove.png')} />
                                    </TouchableOpacity>
                                    <Image source={{ uri: item.uri }}
                                        style={{ width: 50, height: 50, borderRadius: 5, margin: 5 }}
                                    />
                                </View>
                            )
                        }}
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
                        value={this.state.user_email}
                        ref={(ref)=>{this.input_user_emailId=ref}}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        onChangeText={(text) => { this.setState({ user_email: text }) }}
                        onBlur={()=>{this.input_user_address.focus()}}
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
                        ref={(ref)=>{this.input_user_address=ref}}
                        onChangeText={(text) => { this.setState({ user_address: text }) }}
                        onBlur={()=>{this.input_user_street_address.focus()}}
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
                        ref={(ref)=>{this.input_user_street_address=ref}}
                        onChangeText={(text) => { this.setState({ user_streetAddress: text }) }}
                    />
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.SELECT_COUNTRY}</Text>
                    </View>
                    <Picker
                        ref={(ref)=>{this.input_user_country = ref}}
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_LIGHT }}
                        selectedValue={this.state.user_country}
                        onValueChange={
                            (value, index) => {
                                console.log("value ===>"+value)
                                this.setState({ user_country : value })
                                this.state.countryList.map((item)=>{
                                    if(value == item.name){
                                        this.setState({user_country_id : item.country_id})
                                        this.getProvinceList(item.country_id)
                                    }
                                })
                            }
                        }
                    >
                        <Picker.Item label="Select Country" value="-1" />
                        {
                            this.state.isCountryListFilled==1
                            ?
                            this.state.countryList.map((item) =>
                            <Picker.Item key={item.country_id} label={"" + item.name} value={item.name} />)
                            : null
                        }
                    </Picker>
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.SelectProvince}</Text>
                    </View>
                    <Picker
                        ref={(ref)=>{this.input_user_province = ref}}
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_LIGHT }}
                        selectedValue={this.state.user_Province}
                        onValueChange={
                            (value, index) => {
                                this.setState({ user_Province : value })
                                this.state.provinceList.map((item, index)=>{
                                    if(value == item.name){
                                        //fetching country_id
                                        this.setState({user_Province_id : item.state_id})
                                        this.getCityList(item.state_id)
                                    }
                                })
                            }
                        }
                    >
                        <Picker.Item label="Select Province" value="-1"/>
                        {
                            this.state.isProvinceListFilled==1
                            ?
                            this.state.provinceList.map((item, index) =>
                            <Picker.Item key={item.state_id} label={"" + item.name} value={item.name} />)
                            : null
                        }
                    </Picker>
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.SelectCity}</Text>
                    </View>
                    <Picker
                        ref={(ref)=>{this.input_user_city = ref}}
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_LIGHT }}
                        selectedValue={this.state.user_City}
                        onValueChange={(value) => {
                            this.setState({ user_City: value })
                            this.state.cityList.map((item, index)=>{
                                    if(value == item.name){
                                        this.setState({user_city_id : item.city_id})
                                    }
                            })
                        }}
                    >
                        <Picker.Item label="Selct city" value="-1" />
                        {
                            this.state.isCityListFilled==1
                            ?
                            this.state.cityList.map((item, index) =>
                            <Picker.Item key={item.city_id} label={"" + item.name} value={item.name} />)
                            : null
                        }
                    </Picker>
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.ZipCode}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter zip code"
                        style={StyleSetUpProfile.TextInput}
                        keyboardType="number-pad"
                        maxLength={6}
                        value={this.state.user_zipCode}
                        ref={(ref)=>{this.input_user_zipcode=ref}}
                        onChangeText={(text) => { this.setState({ user_zipCode: text }) }}
                        onBlur={()=>{this.input_user_new_password.focus()}}
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
                        autoCapitalize="none"
                        ref={(ref)=>{this.input_user_new_password=ref}}
                        onChangeText={(text) => { this.setState({ user_password: text }) }}
                        onBlur={()=>{this.input_user_confirm_password.focus()}}
                    />
                </View>

                <View style={StyleSetUpProfile.TextInputView}>
                    <View style={StyleSetUpProfile.LabelView}>
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none' }]}>{Constants.ConfirmPassword}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Confirm Password"
                        secureTextEntry={true}
                        style={StyleSetUpProfile.TextInput}
                        value={this.state.user_confirmPassword}
                        autoCapitalize="none"
                        ref={(ref)=>{this.input_user_confirm_password=ref}}
                        onChangeText={(text) => { this.setState({ user_confirmPassword: text }) }}
                    />
                </View>
            
            </View>
        )

    }

    componentDidMount(){
        //this.getProvinceList()
        this.getCountryList()
    }

    async getCountryList(){
        await this.presenter.callGetApi(ApiConstants.countryList, "", true);
    }

    async getProvinceList(country_id){
       await this.presenter.callPostApi(ApiConstants.provinceList, {country_id:country_id}, true);
    }

    getCityList(state_id){
        let params = {
            "state_id": state_id
        }
        this.presenter.callPostApi(ApiConstants.cityList, params, true);
    }

    onResponse(apiConstant, data) {
        switch (apiConstant) {
          case ApiConstants.countryList :{
              if(data.status){
                this.setState({countryList : data.countryList, isCountryListFilled:1})
              }else{
                  alert(data.message)
              }
              break;
          }
          case ApiConstants.provinceList: {
              if(data.status){
                  console.log("country List => " + JSON.stringify(data))
                  this.setState({provinceList : data.stateList, isProvinceListFilled:1})
              }
              else {
                  alert(data.message)
              }
            break;
          }
          case ApiConstants.cityList:{
              if(data.status){
                  console.log("country List => " + JSON.stringify(data))
                  this.setState({cityList: data.cityList, isCityListFilled:1})
              }
              else{
                  alert(data.message)
              }
              break;
          }
          case ApiConstants.profileSetup:{
              if(data.status){
                  this.setState({resp_otp:data.email_otp, resp_token: data.access_token, Modal_visible : true})
              }else{
                  alert(data.message)
              }
              break;
          }
        }
    }
    
    isUserFormValid(){
        if(this.state.customerType=="Individual")
        {

            if(this.state.user_firstName==""){
                    alert("Please enter first name")
                    this.input_user_first_name.focus()
                    return false
            }
            if(this.state.user_lastName==""){
                    alert("Please enter last name")
                    this.input_user_last_name.focus()
                    return false
            }
            if(this.state.user_title=="-1"){
                    alert("Please select title")
                    this.input_user_title.focus()
                    return false
            }
            if(this.state.user_telephoneNumber==""){
                    alert("Please enter telephone number")
                    this.input_user_telephone_number.focus()
                    return false
            }
            if(this.state.user_telephoneNumber.length!=10){
                    alert("Please enter correct telephone number")
                    this.input_user_telephone_number.focus()
                    return false
            }
            if(this.state.user_rsaPassport==""){
                    alert("Please enter RSA Id / Passport")
                    this.input_user_rsa_id.focus()
                    return false
            }
            if(this.state.user_email==""){
                    alert("Please enter email Id")
                    this.input_user_emailId.focus()
                    return false
            }
            if(this.state.user_address==""){
                    alert("Please enter address")
                    this.input_user_address.focus()
                    return false
            }
            if(this.state.user_streetAddress==""){
                    alert("Please enter street address")
                    this.input_user_street_address.focus()
                    return false
            }
            if(this.state.user_Province=="-1"){
                    alert("Please select province")
                    this.input_user_province.focus()
                    return false
            }
            if(this.state.user_City=="-1"){
                    alert("Please select city")
                    this.input_user_city.focus()
                    return false
            }
            if(this.state.user_zipCode==""){
                    alert("Please enter zip code")
                    this.input_user_zipcode.focus()
                    return false
            }
            if(this.state.user_zipCode.length!=6){
                    alert("Please enter correct zip code")
                    this.input_user_zipcode.focus()
                    return false
            }
            if(this.state.user_password==""){
                    alert("Please enter password")
                    this.input_user_new_password.focus()
                    return false
            }
            if(this.state.user_password.length<=7){
                    alert("Please enter strong password")
                    this.input_user_new_password.focus()
                    return false
            }
            if(this.state.user_confirmPassword==""){
                    alert("Please enter confirm password")
                    this.input_user_confirm_password.focus()
                    return false
            }
            if(this.state.user_confirmPassword != this.state.user_password){
                    alert("Please enter confirm password matching with new password")
                    this.input_user_confirm_password.focus()
                    return false
            }
        }
        return true
    }

    isCompanyFormValid(){
        if(this.state.company_name==""){
            alert("Please enter company name")
            this.input_company_name.focus()
            return false
        }
        if(this.state.company_contactPerson==""){
            alert("Please enter company contact person name")
            this.input_company_contact_person.focus()
            return false
        }
        if(this.state.company_contactPosition==""){
            alert("Please enter position of company contact person")
            this.input_company_contact_position.focus()
            return false
        }
        if(this.state.company_telephoneNo==""){
            alert("Please enter telephone number")
            this.input_company_telephone_number.focus()
            return false
        }
        if(this.state.company_telephoneNo.length!=10){
            alert("Please enter correct telephone number")
            this.input_company_telephone_number.focus()
            return false
        }
        if(this.state.company_emailId==""){
            alert("Please enter email Id")
            this.input_company_emailId.focus()
            return false
        }
        if(this.state.company_streetAddress==""){
            alert("Please enter street address")
            this.input_company_street_address.focus()
            return false
        }
        if(this.state.company_Province=="-1"){
            alert("Please select province")
            this.input_company_province.focus()
            return false
        }
        if(this.state.company_City=="-1"){
            alert("Please select city")
            this.input_company_city.focus()
            return false
        }
        if(this.state.company_zipCode==""){
            alert("Please enter zip code")
            this.input_company_zipcode.focus()
            return false
        }
        if(this.state.company_zipCode.length != 6){
            alert("Please enter correct zip code")
            this.input_company_zipcode.focus()
            return false
        }
        if(this.state.company_password==""){
            alert("Please enter password")
            this.input_company_new_password.focus()
            return false
        }
        if(this.state.company_password.length <=7){
            alert("Please enter strong password")
            this.input_company_new_password.focus()
            return false
        }
        if(this.state.company_confirmPass==""){
            alert("Please enter confirm password")
            this.input_company_confirm_password.focus()
            return false
        }
        if(this.state.company_confirmPass!= this.state.company_password){
            alert("Please enter confirm password matching with new password")
            this.input_company_confirm_password.focus()
            return false
        }
        return true
    }

    submit(){
        if(this.state.customerType=="Individual"){
            if(this.isUserFormValid()){
                // api call for user
                let params = {
                    "first_name":this.state.user_firstName,
                    "last_name":this.state.user_lastName,
                    "title":this.state.user_title,
                    //"telephone_number":this.state.user_telephoneNumber,    // missing param in api
                    "rsa_id":this.state.user_rsaPassport,
                    "email_id":this.state.user_email,
                    "password":this.state.user_confirmPassword,
                    //"address":this.state.user_address,                     // missing param in api
                    "street_address":this.state.user_streetAddress,
                    "state_id":this.state.user_Province_id,
                    "city_id":this.state.user_city_id,
                    "zipcode":this.state.user_zipCode,
                    "registration_type":1,
                    "terms_accepted":1,
                }
                this.presenter.callPostApi(ApiConstants.profileSetup, params, true);
            }
        }
        else{
            if(this.isCompanyFormValid()){
                // api call for company
                let params = {
                    "company_name":this.state.company_name,
                    "comp_cont_person":this.state.company_contactPerson,
                    "comp_cont_position":this.state.company_contactPosition,
                    //"telephone_number":this.state.company_telephoneNo,        // missing param in api
                    "email_id":this.state.company_emailId,
                    //"password":this.state.company_confirmPass,                // missing param in api
                    "street_address":this.state.company_streetAddress,
                    "state_id":this.state.company_province_id,
                    "city_id":this.state.company_city_id,
                    "zipcode":this.state.company_zipCode,
                    "registration_type":2,
                    "terms_accepted":1,
                }
                this.presenter.callPostApi(ApiConstants.profileSetup, params, true);
            }
        }
    }

    async verifyOTP(){
        if(this.state.otp_code == this.state.resp_otp){
            this.setState({otp_modal_visible:false})
            //-- instructions by Rohit
            await clearAllData()
            this.props.navigation.dispatch(
                StackActions.reset({
                    index :0,
                    actions :[NavigationActions.navigate({routeName : 'SignIn'})]
                })
            );
            //---------------------------
        }
        else{
            alert("Please enter valid OTP code")
            this.setState({otp_code:'',})
        }
    }

    showOTpModal() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={[StyleForgotPassword.ModalView, { width: '80%' }]}>
                    
                    <TouchableOpacity style={{ display:'none', alignSelf: 'flex-end', top: 10, right: 10 }}
                            onPress={()=>{
                                this.setState({otp_modal_visible:false})
                        }}
                    >
                        <Image source={require('../images/close.png')}
                            style={{ width: 15, height: 15 }}
                        />
                    </TouchableOpacity>
                    
                    <Text style={StyleForgotPassword.modalTextMSg}>{Constants.VerificationCode}</Text>
                    
                    <Text style={{ color: Constants.COLOR_GREY_SHADED, alignSelf: 'center' }}>{Constants.EnterOTP}</Text>
                    
                    <TextInput 
                        style={StyleForgotPassword.ModaltextInput}
                        value={this.state.otp_code}
                        keyboardType="number-pad"
                        maxLength={6}
                        placeholder='000000'
                        onChangeText={(Text) => {
                            if(!isNaN(Text))
                                this.setState({ otp_code: Text })
                            else
                             this.setState({ otp_code:'' })
                        }}
                        onBlur={()=>{this.verifyOTP()}}
                    />
                    <TouchableOpacity style={{ display:'none', alignSelf: 'center', marginTop: 15 }}
                    onPress={()=>{ this.resendOTP() }}
                    >
                        <Text style={StyleForgotPassword.resendText}>{Constants.ResendCode}</Text>
                    </TouchableOpacity>
                   
                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
                                
                        <TouchableOpacity style={StyleForgotPassword.modalButtonView}
                            onPress={()=>{
                                this.verifyOTP();
                            }}
                        >
                            <Text style={StyleForgotPassword.modalButtonLabel}>{Constants.VERIFY}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
  
    render() {
        let { navigation } = this.props
        return (

            <View style={{ flex: 1 }}>
                
                <HeaderBar isBack={false} title="Profile setup" isLogout={true} navigation={navigation} />
                
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} />
                
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

                                <TouchableOpacity style={this.state.policyRadio_button ? [StyleSetUpProfile.ButtonView, { paddingVertical: 10 }] : [StyleSetUpProfile.ButtonView, { paddingVertical: 10, backgroundColor: Constants.COLOR_GREY_LIGHT }]} disabled={!this.state.policyRadio_button}
                                    onPress={() => {
                                        this.submit()
                                        //this.setState({ Modal_visible: true })
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
                    //visible={true}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View style={StyleSetUpProfile.modalView}>
                            <TouchableOpacity style={{ display:'none', alignSelf: 'flex-end', top: 10, right: 10 }}
                                onPress={() => {
                                    this.setState({ Modal_visible: false })
                                    //this.props.navigation.navigate('Dashboard');
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
                                    let timer = setInterval(()=>{
                                        this.setState({otp_modal_visible:true})
                                        clearInterval(timer)
                                    } ,600)
                                    //this.props.navigation.navigate('Dashboard');
                                }}
                            >
                                <Text style={StyleSetUpProfile.modalButtonText}>{Constants.OK}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Modal
                    transparent={true}
                    visible={this.state.otp_modal_visible}
                >
                    {this.showOTpModal()}
                </Modal>
            
            </View>
        )
    }
}
