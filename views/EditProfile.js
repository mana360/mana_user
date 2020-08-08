/* screen -MANAPPCUS039,107
    design by -mayur s
    API : Udayraj (country, cityList, profileImage upload)

    REQUIRED NOTES
    1) user_type = 1 means company profile
    2) user type = 2 means individual profile
 */
import React from 'react';
import {Platform, View, Text, Image, ScrollView, TouchableOpacity, Modal, TextInput,FlatList } from 'react-native';
import { StyleEditProfile, StyleMyProfile,StyleSetUpProfile } from '../config/CommonStyles';
import { Picker } from "native-base";
import ImagePicker from "react-native-image-picker";
import FooterBar from '../config/FooterBar';
import HeaderBar from '../config/HeaderBar';
import Constants from '../config/Constants';
import ApiConstants from '../config/ApiConstants';
import {MainPresenter} from '../config/MainPresenter';
import {getUserData, setUserData} from '../config/AppSharedPreference'

export default class EditProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userData:"",
            isProfileUpdatedModal:false,
            modalVisible_Changepassword: false,
            modalVisible_successMsg: false,
            customerType: '',//user_profile,company_profile
            current_password: '',
            new_password: '',
            confirm_password: '',
            password_visible: true,

            user_first_name: '',
            user_last_name: '',
            user_title: '',

            user_rsa_id: '',
            user_rsa_photo:"",
            user_rsa_photo_data:"",
            user_passport_number:"",
            user_passport_photo:"",
            user_passport_photo_data:"",

            user_img_arry: [],
            user_address: '',
            user_province: '',
            user_city: '',
            designation: '',
            user_telephoneNo: '',
            user_country:'',
            user_country_id:'',
            user_city: '',
            user_province: '',
            user_zipcode: '',
            user_docType:"0",
            user_profile_photo:"",
            user_profile_photo_data:"",

            email_id: '',
            password: '',
            company_name: '',
            company_contactPerson: '',
            company_contactPosition: '',
            company_telephoneNo: '',
            company_email: '',
            company_address: '',
            company_country:'',
            company_country_id:'',
            company_city: '',
            company_province: '',
            company_zipcode: '',
            company_password: '',
            company_logo:"",
            company_logo_data:"",

            countryList:[],
            isCountryListFilled:0,

            provinceList:[],
            isProvinceListFilled:0,

            cityList:[],
            isCityListFilled:0,

            defaultProfileImagePath:require('../images/Profile_pic.png'),

        }
    }

    componentDidMount(){
        this.presenter.callPostApi(ApiConstants.getMyProfile, "", true)
    }

    async updateUserObject(data){
        let new_data = await getUserData()
        this.setState({userData : data})
    }
    
    OpenImagePicker() {
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
                    this.setState({ user_filename: source, user_rsa_photo:response.uri, user_rsa_photo_data:response})
                    //this.uploadImage(response.uri);
                }
            })
    }

    getPassportPhoto() {
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
                    this.setState({ user_filename: source, user_passport_photo:response.uri, user_passport_photo_data:response})
                }
            })
    }

    getCompanyPhoto() {
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
                this.setState({ user_filename: source, company_logo:response.uri, company_logo_data:response})
                console.log("calling api")
                let params = {
                    "file" : response
                }
                this.presenter.callMultipartApi(ApiConstants.updateProfilePic, params, true)
            }
        })
    }

    getUserPhoto() {
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
                this.setState({ user_filename: source, user_profile_photo:response.uri, user_profile_photo_data:response})
            }
        })
    }
    
    uploadImage(uri) {
        let temp_arry = this.state.user_img_arry;
        temp_arry.push({ uri: uri });
        this.setState({ user_img_arry: temp_arry })
    }

    options = {
        title: 'Select Image',
        // customButtons: [
        //     { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
        // ],
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };

    Pop_UploadImageArray(position) {
        let temp_arry = this.state.user_img_arry;
        temp_arry.splice(position, 1);
        this.setState({ user_img_arry: temp_arry });

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
                        value={this.state.company_name}
                        onChangeText={(text) => { this.setState({ company_name: text }) }}
                    />
                </View>

            {/* <View style={StyleEditProfile.TextInputView}>
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
            */}
                {/* <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
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
 */}
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
                        value={this.state.company_telephoneNo}
                        keyboardType="number-pad"
                        maxLength={9}
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

                {/* <View style={StyleEditProfile.TextInputView}>
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
 */}
                {/* <View style={StyleEditProfile.TextInputView}>
                    <View style={StyleEditProfile.LabelView}>
                        <Image source={require('../images/address.png')}
                            style={StyleEditProfile.labelIcon}
                        />
                        <Text style={StyleEditProfile.modalLabelText}>{Constants.SELECT_COUNTRY}</Text>
                    </View>
                    <Picker
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_DARK }}
                        selectedValue={this.state.company_country}
                        onValueChange={
                            (value, index) => {
                                this.setState({ company_country : value })
                                this.state.countryList.map((item, index)=>{
                                    if(value == item.name){
                                        //fetching country_id
                                        //this.setState({user_Province_id : item.state_id})
                                        this.getProvinceList(item.country_id)
                                    }
                                })
                            }
                        }
                    >
                        <Picker.Item label='select Country' value='-1' />
                        {
                            this.state.isCountryListFilled==1
                            ?
                            this.state.countryList.map((item, index) =>
                            <Picker.Item key={item.country_id} label={"" + item.name} value={item.name} />)
                            : null
                        }

                    </Picker>
                </View>
 */}
                {/* <View style={StyleEditProfile.TextInputView}>
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
                        onValueChange={
                            (value, index) => {
                                console.log("value ===>"+value)
                                this.setState({ company_province : value })
                                this.state.provinceList.map((item)=>{
                                    if(value == item.name){
                                        this.getCityList(item.state_id)
                                    }
                                })
                            }
                        }
                    >
                        <Picker.Item label='select Province' value='-1' />
                        {
                            this.state.isProvinceListFilled==1
                            ?
                            this.state.provinceList.map((item) =>
                            <Picker.Item key={item.state_id} label={"" + item.name} value={item.name} />)
                            : null
                        }
                    </Picker>
                </View>
 */}
                {/* <View style={StyleEditProfile.TextInputView}>
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
                        onValueChange={
                            (value, index) => {
                                this.setState({ company_city : value })
                                this.state.cityList.map((item)=>{
                                    if(value == item.name){
                                        // city id
                                    }
                                })
                            }
                        }
                    >
                        <Picker.Item label='select City' value='1' />
                        {
                            this.state.isCityListFilled==1
                            ?
                            this.state.cityList.map((item) =>
                            <Picker.Item key={item.city_id} label={"" + item.name} value={item.name} />)
                            : null
                        }

                    </Picker>
                </View>
 */}
                {/* <View style={StyleEditProfile.TextInputView}>
                    <View style={StyleEditProfile.LabelView}>
                        <Image source={require('../images/address.png')}
                            style={StyleEditProfile.labelIcon}
                        />
                        <Text style={StyleEditProfile.modalLabelText}>{Constants.ZipCode}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter ZipCode"
                        keyboardType="number-pad"
                        maxLength={4}
                        style={StyleEditProfile.TextInput}
                        value={this.state.company_zipcode}
                        onChangeText={(text) => { this.setState({ company_zipcode: text }) }}
                    />
                </View> */}
{/* 
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
 */}
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
                        value={this.state.user_first_name}
                        onChangeText={(text) => { this.setState({ user_first_name: text }) }}
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
                        value={this.state.user_last_name}
                        onChangeText={(text) => { this.setState({ user_last_name: text }) }}
                    />
                </View>

                {/* <View style={StyleEditProfile.TextInputView}>
                    <View style={StyleEditProfile.LabelView}>
                        <Image source={require('../images/user_name.png')}
                            style={StyleEditProfile.labelIcon}
                        />
                        <Text style={StyleEditProfile.modalLabelText}>{Constants.Title}</Text>
                    </View>
                    <TextInput
                        placeholder="Enter Title"
                        style={StyleEditProfile.TextInput}
                        value={this.state.user_title}
                        onChangeText={(text) => { this.setState({ user_title: text }) }}
                    />
                </View> */}

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
                        maxLength={9}
                        onChangeText={(text) => {
                            if (!isNaN(text))
                                this.setState({ user_telephoneNo: text })
                            else
                                this.setState({ user_telephoneNo: '' })

                        }}
                    />
                </View>

                {/* <View style={{flexDirection:'row', width:'90%', height: 50, marginVertical:0, marginHorizontal:25, backgroundColor: Constants.COLOR_WHITE, alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}
                        onPress={()=>{ this.setState({user_docType:"1", user_rsa_photo:""}) }}
                    >
                        <Image
                            source={ this.state.user_docType =="1" ? require('../images/radio_button_circular_selected.png') : require('../images/radio_button_circular.png')}
                            style={{width:25, height:25, resizeMode:'cover'}}
                        />
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none', marginLeft:5, marginBottom:3, }]}>RSA ID</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginLeft:20}}
                        onPress={()=>{ this.setState({user_docType:"2",}) }}
                    >
                        <Image
                            source={ this.state.user_docType =="2" ? require('../images/radio_button_circular_selected.png') : require('../images/radio_button_circular.png')}
                            style={{width:25, height:25, resizeMode:'cover'}}
                        />
                        <Text style={[StyleSetUpProfile.modalLabelText, { textTransform: 'none', marginLeft:5, marginBottom:3, }]}>Passport</Text>
                    </TouchableOpacity>

                </View>
 */}
{/* 
                <View style={{ flexDirection: 'column',justifyContent:'center', display : this.state.user_docType==1 ? 'flex' : 'none'}}>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={[StyleEditProfile.TextInputView, { width: '68%' }]}>
                            <View style={StyleEditProfile.LabelView}>
                                <Image source={require('../images/designation.png')}
                                    style={StyleEditProfile.labelIcon}
                                />
                                <Text style={StyleEditProfile.modalLabelText}>{Constants.RSAIDPassNO}</Text>
                            </View>
                            <TextInput
                                placeholder="Enter RSA Id"
                                style={[StyleEditProfile.TextInput]}
                                value={this.state.user_rsa_id}
                                onChangeText={(text) => { this.setState({ user_rsa_id: text }) }}
                            />
                        </View>
                        <TouchableOpacity style={{ marginLeft: 10, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 18 }}
                        onPress={()=>{
                            this.OpenImagePicker();
                        }}
                        >
                            <Image source={require('../images/add.png')} style={{ width: 55, height: 55, alignSelf: 'center' }} />
                        </TouchableOpacity>
                    </View>
                    {
                        this.state.user_rsa_photo && this.state.user_docType=="1" ?
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <Image source={{ uri: this.state.user_rsa_photo }} style={{ width: 60, height: 60, borderRadius: 5, margin: 5, marginBottom:10, resizeMode:'cover' }}/>
                        </View>
                        : null
                    }
                
                    {/* <FlatList
                        data={this.state.user_img_arry}
                        extraData={this.state}
                        horizontal={true}
                        style={{ marginLeft: 25,marginBottom:10 }}
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

                </View> */}


                {/* <View style={{ flexDirection: 'column',justifyContent:'center', display : this.state.user_docType==2 ? 'flex' : 'none'}}>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={[StyleEditProfile.TextInputView, { width: '68%' }]}>
                            <View style={StyleEditProfile.LabelView}>
                                <Image source={require('../images/designation.png')}
                                    style={StyleEditProfile.labelIcon}
                                />
                                <Text style={StyleEditProfile.modalLabelText}>Passport</Text>
                            </View>
                            <TextInput
                                placeholder="Enter Passport number"
                                style={[StyleEditProfile.TextInput]}
                                value={this.state.user_passport_number}
                                onChangeText={(text) => { this.setState({ user_passport_number: text }) }}
                            />
                        </View>
                        <TouchableOpacity style={{ marginLeft: 10, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 18 }}
                        onPress={()=>{
                            this.getPassportPhoto();
                        }}
                        >
                            <Image source={require('../images/add.png')} style={{ width: 55, height: 55, alignSelf: 'center' }} />
                        </TouchableOpacity>
                    </View>
                    {
                        this.state.user_passport_photo && this.state.user_docType=="2" ?
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <Image source={{ uri: this.state.user_passport_photo }} style={{ width: 60, height: 60, borderRadius: 5, margin: 5, marginBottom:10, resizeMode:'cover' }}/>
                        </View>
                        : null
                    }
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
                </View> */}
{/* 
                <View style={StyleEditProfile.TextInputView}>
                    <View style={StyleEditProfile.LabelView}>
                        <Image source={require('../images/address.png')}
                            style={StyleEditProfile.labelIcon}
                        />
                        <Text style={StyleEditProfile.modalLabelText}>{Constants.SELECT_COUNTRY}</Text>
                    </View>
                    <Picker
                        mode="dropdown"
                        style={{ color: Constants.COLOR_GREY_DARK }}
                        selectedValue={this.state.user_country}
                        onValueChange={
                            (value, index) => {
                                this.setState({ user_country : value })
                                this.state.countryList.map((item, index)=>{
                                    if(value == item.name){
                                        //fetching country_id
                                        //this.setState({user_Province_id : item.state_id})
                                        this.getProvinceList(item.country_id)
                                    }
                                })
                            }
                        }
                    >
                        <Picker.Item label='select Country' value='-1' />
                        {
                            this.state.isCountryListFilled==1
                            ?
                            this.state.countryList.map((item, index) =>
                            <Picker.Item key={item.country_id} label={"" + item.name} value={item.name} />)
                            : null
                        }

                    </Picker>
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
                        onValueChange={
                            (value, index) => {
                                this.setState({ user_province : value })
                                this.state.provinceList.map((item, index)=>{
                                    if(value == item.name){
                                        //fetching country_id
                                        //this.setState({user_Province_id : item.state_id})
                                        this.getCityList(item.state_id)
                                    }
                                })
                            }
                        }
                    >
                        <Picker.Item label='select Province' value='-1' />
                        {
                            this.state.isProvinceListFilled==1
                            ?
                            this.state.provinceList.map((item, index) =>
                            <Picker.Item key={item.state_id} label={"" + item.name} value={item.name} />)
                            : null
                        }

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
                        onValueChange={(value) => { this.setState({ user_city: value }) }}
                    >
                        <Picker.Item label='select City' value='1' />
                        {
                            this.state.isCityListFilled==1
                            ?
                            this.state.cityList.map((item, index) =>
                            <Picker.Item key={item.city_id} label={"" + item.name} value={item.name} />)
                            : null
                        }
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
                        keyboardType="number-pad"
                        maxLength={4}
                        onChangeText={(text) => { this.setState({ user_zipcode: text }) }}
                    />
                </View>
 */}
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

                {/* <View style={StyleEditProfile.TextInputView}>
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

                </View> */}
            </View>
        )
    }

    isCompanyFormValid(){
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(this.state.customerType=="company_profile"){

            if(this.state.company_name==""){
                alert("Please enter company name")
                return false
            }
            // if(this.state.company_contactPerson==""){
            //     alert("Please enter company contact person name")
            //     return false
            // }
            // if(this.state.company_contactPosition==""){
            //     alert("Please enter position of company contact person")
            //     return false
            // }
            if(this.state.company_telephoneNo==""){
                alert("Please enter telephone number")
                return false
            }
            // if(this.state.company_telephoneNo.length!=9){
            //     alert("Please enter correct telephone number")
            //     return false
            // }
            if(this.state.company_email==""){
                alert("Please enter email Id")
                return false
            }
            if(!emailRegex.test(this.state.company_email)){
                alert("Please enter valid email Id")
                return false
            }
            // if(this.state.company_address==""){
            //     alert("Please enter street address")
            //     return false
            // }
            // if(this.state.company_logo==""){
            //     alert("Please upload company logo")
            //     return false
            // }
            // if(this.state.company_country=="-1"){
            //     alert("Please select country")
            //     return false
            // }
            // if(this.state.company_Province=="-1"){
            //     alert("Please select province")
            //     return false
            // }
            // if(this.state.company_City=="-1"){
            //     alert("Please select city")
            //     return false
            // }
            // if(this.state.company_zipCode==""){
            //     alert("Please enter zip code")
            //     return false
            // }
            // if(this.state.company_zipCode.length != 4){
            //     alert("Please enter correct zip code")
            //     return false
            // }
            // if(this.state.company_password==""){
            //     alert("Please enter password")
            //     return false
            // }
            // if(this.state.company_password.length <=7){
            //     alert("Please enter strong password")
            //     return false
            // }
            // if(this.state.company_confirmPass==""){
            //     alert("Please enter confirm password")
            //     return false
            // }
            // if(this.state.company_confirmPass!= this.state.company_password){
            //     alert("Please enter confirm password matching with new password")
            //     return false
            // }
        }
        return true
    }

    isUserFormValid(){
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(this.state.customerType=="user_profile")
        {
            if(this.state.user_first_name==""){
                    alert("Please enter first name")
                    return false
            }
            if(this.state.user_last_name==""){
                    alert("Please enter last name")
                    return false
            }
            // if(this.state.user_title==""){
            //         alert("Please select title")
            //         return false
            // }
            if(this.state.user_telephoneNo==""){
                    alert("Please enter telephone number")
                    return false
            }
            if(this.state.user_telephoneNo.length!=9){
                    alert("Please enter correct telephone number")
                    return false
            }
            // if(this.state.user_docType=="0"){
            //     alert("Please select Identification")
            //     return false
            // }
            // if( this.state.user_docType=="1" && this.state.user_rsa_id==""){
            //         alert("Please enter RSA Id")
            //         return false
            // }
            // if( this.state.user_docType=="1" && this.state.user_rsa_photo==""){
            //     alert("Upload photo for RSA Id")
            //     return false
            // }
            // if( this.state.user_docType=="2" && this.state.user_passport_number==""){
            //     alert("Please enter passport number")
            //     return false
            // }
            // if( this.state.user_docType=="2" && this.state.user_passport_photo==""){
            //     alert("Upload photo for passport")
            //     return false
            // }
        //     if(this.state.user_address==""){
        //             alert("Please enter address")
        //             return false
        //     }
        //     if(this.state.user_country=="-1"){
        //         alert("Please select country")
        //         return false
        // }
        //     if(this.state.user_Province=="-1"){
        //             alert("Please select province")
        //             return false
        //     }
        //     if(this.state.user_city=="-1"){
        //             alert("Please select city")
        //             return false
        //     }
        //     if(this.state.user_zipCode==""){
        //             alert("Please enter zip code")
        //             return false
        //     }
        //     if(this.state.user_zipCode.length!=4){
        //             alert("Please enter correct zip code")
        //             return false
        //     }
            if(this.state.email_id==""){
                alert("Please enter email Id")
                return false
            }
            if(!emailRegex.test(this.state.email_id)){
                    alert("Please enter valid email Id")
                    return false
            }
            // if(this.state.user_password==""){
            //         alert("Please enter password")
            //         return false
            // }
            // if(this.state.user_password.length<=7){
            //         alert("Please enter strong password")
            //         return false
            // }
            // if(this.state.user_confirmPassword==""){
            //         alert("Please enter confirm password")
            //         return false
            // }
            // if(this.state.user_confirmPassword != this.state.user_password){
            //         alert("Please enter confirm password matching with new password")
            //         return false
            // }
        }
        return true
    }

    isPasswordValid(){
        if(this.state.current_password==""){
            alert("Please enter current password")
            return false
        }
        if(this.state.new_password==""){
            alert("Please enter new password")
            return false
        }
        if(this.state.confirm_password==""){
            alert("Please enter confirm password")
            return false
        }
        if(this.state.confirm_password!=this.state.new_password){
            alert("Password didn't matched.")
            return false
        }
        return true
    }

    changePassword(){
        if(this.isPasswordValid()){
            let params = {
                "current_password" : this.state.current_password,
                "new_password": this.state.new_password
            }
            this.presenter.callPostApi(ApiConstants.changePassword,params ,true)
        }
    }

    Modal_ChangePassword() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                
                <View style={StyleMyProfile.ModalWrapper}>
                    
                    <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10 }}
                        onPress={() => { this.setState({ modalVisible_Changepassword: false, current_password:"", new_password:"", confirm_password:""})}}
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
                                autoCapitalize="none"
                                maxLength={12}
                                secureTextEntry={true}
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
                                autoCapitalize="none"
                                secureTextEntry={true}
                                maxLength={12}
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
                                autoCapitalize="none"
                                secureTextEntry={true}
                                value={this.state.confirm_password}
                                onChangeText={(text) => { this.setState({ confirm_password: text }) }}

                            />
                        </View>
                    
                    </View>
                    
                    <TouchableOpacity 
                        disabled={
                            this.state.current_password==""
                            ? true
                            :
                            this.state.new_password==""
                            ? true
                            :
                            this.state.confirm_password==""
                            ? true
                            : false
                        }
                        style={[StyleMyProfile.ButtonView,{width: '90%',
                            backgroundColor: 
                                this.state.current_password==""
                                ? Constants.COLOR_GREY_LIGHT
                                :
                                this.state.new_password==""
                                ? Constants.COLOR_GREY_LIGHT
                                :
                                this.state.confirm_password==""
                                ? Constants.COLOR_GREY_LIGHT
                                : Constants.COLOR_GREEN
                            }]}
                        onPress={() => { 
                            this.changePassword()
                            //this.setState({ modalVisible_successMsg: true })
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
          case ApiConstants.countryList:{
              if(data.status){
                  this.setState({countryList : data.countryList, isCountryListFilled:1})
              }else{
                //   alert(data.msg)
            this.presenter.getCommonAlertBox(data.message);

              }
              break;
          }
          case ApiConstants.provinceList: {
              if(data.status)
              {
                  console.log("country List => " + JSON.stringify(data))
                  this.setState({provinceList : data.stateList, isProvinceListFilled:1})
              }
              else {
                //   alert(data.message)
            this.presenter.getCommonAlertBox(data.message);

              }
            break;
          }
          case ApiConstants.cityList:{
              if(data.status){
                    console.log("country List => " + JSON.stringify(data))
                    this.setState({cityList: data.cityList, isCityListFilled:1})
              }
              else{
                //   alert(data.message)
            this.presenter.getCommonAlertBox(data.message);

              }
              break;
          }
          case ApiConstants.updateProfilePic:{
              if(data.status){
                alert(data.message)
                this.presenter.callPostApi(ApiConstants.getMyProfile, "", true)
              }
              else {
                //   alert(data.message)
            this.presenter.getCommonAlertBox(data.message);

              }
              break;
          }
          case ApiConstants.changePassword:{
              if(data.status){
                  this.setState({current_password:"", new_password:"", confirm_password:"", modalVisible_Changepassword:false})
                  alert(data.message)
              }else{
                  alert(data.message)
              }
              break;
          }
          case ApiConstants.updateProfile:{
              if(data.status){
                  this.setState({isProfileUpdatedModal:true})
              }else{
                //   alert(data.message)
            this.presenter.getCommonAlertBox(data.message);

              }
              break;
          }
          case ApiConstants.getMyProfile:{
            if(data.status){
                if(data.user_data.user_type==1){
                    this.setState({
                        customerType:"company_profile",
                        company_name:data.user_data.company_name,
                        company_telephoneNo:data.user_data.telephone_number,
                        company_email:data.user_data.email
                    })
                }else{
                    this.setState({
                        customerType:"user_profile",
                        user_first_name:data.user_data.first_name,
                        user_last_name:data.user_data.last_name,
                        user_telephoneNo:data.user_data.telephone_number,
                        email_id:data.user_data.email
                    })
                }
                this.updateUserObject(data.user_data)           // storing user details in local db
            }else{
                // alert(data.msg)
            this.presenter.getCommonAlertBox(data.message);

            }
              break;
          }
        }
      }

    uploadProfileImage(){
        ImagePicker.showImagePicker(this.options, (response) => {
            console.log('response==', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let source = { uri: response.uri };
                console.log('response-->', source);
                this.setState({ profileImagePath: source })
                this.setState({ user_filename: source, user_profile_photo:response.uri})
                console.log("calling api =====> ")
                let params = {
                    "file" : response
                }
                this.presenter.callMultipartApi(ApiConstants.updateProfilePic, params, true)
            }
        })
      }

    updateProfile(){
        if(this.state.customerType=="user_profile"){
            if(this.isUserFormValid()){
                let params={
                    "registration_type":2,                  // individual profile
                    "first_name":this.state.user_first_name,
                    "last_name":this.state.user_last_name,
                    "email_id":this.state.email_id,
                    "telephone_number":this.state.user_telephoneNo,
                }
                this.presenter.callPostApi(ApiConstants.updateProfile, params, true)
            }
        }else{
            //for company
            if(this.isCompanyFormValid()){
                let params={
                    "registration_type":1,                  // company profile
                    "company_name":this.state.company_name,
                    // "company_contact":this.state.company_telephoneNo,
                    "telephone_number":this.state.company_telephoneNo,
                    "email_id":this.state.company_email,
                }
                this.presenter.callPostApi(ApiConstants.updateProfile, params, true)
            }
        }
    }

    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>

                <HeaderBar title="EDIT PROFILE" isBack={true} isLogout={true} navigation={navigation} />

                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} />

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
                                
                                {
                                    this.state.userData.profile_picture!=undefined
                                    ?
                                    <Image 
                                        source ={{uri: this.state.userData.profile_picture}}
                                        style={[StyleEditProfile.ProfileImage,{display: this.state.customerType=="user_profile" ? 'flex' : 'none',  resizeMode: Platform.OS=="android" ? "cover" :'contain'}]}
                                    />
                                    :
                                    <Image 
                                        source ={require('../images/user_name.png')}
                                        style={[StyleEditProfile.ProfileImage,{display: this.state.customerType=="user_profile" ? 'flex' : 'none'}]}
                                    />
                                }
                                {
                                    this.state.userData.company_logo!=undefined
                                    ?
                                    <Image 
                                        source ={{uri: this.state.userData.company_logo}}
                                        style={[StyleEditProfile.ProfileImage,{display: this.state.customerType=="company_profile" ? 'flex' : 'none', resizeMode: Platform.OS=="android" ? "cover" :'contain'}]}
                                    />
                                    :
                                    <Image 
                                        source ={require('../images/user_name.png')}
                                        style={[StyleEditProfile.ProfileImage,{display: this.state.customerType=="company_profile" ? 'flex' : 'none'}]}
                                    />
                                }

                                <TouchableOpacity style={StyleEditProfile.sideImageView}
                                    onPress={()=>{
                                        if(this.state.customerType=='user_profile'){
                                            this.uploadProfileImage()
                                        }else{
                                            this.getCompanyPhoto()
                                        }
                                    }}
                                >
                                    <Image source={require('../images/upload_normal.png')}
                                        style={StyleEditProfile.sideImage}
                                    />
                                </TouchableOpacity>
                            
                            </View>

                        </View>

                        {
                            this.state.customerType == 'user_profile'
                            ? <Text style={StyleEditProfile.label}>{this.state.userData.first_name}&nbsp;{this.state.userData.last_name}</Text>
                            : this.state.customerType == 'company_profile'
                            ? <Text style={StyleEditProfile.label}>{this.state.userData.company_name}</Text>
                            : null
                        }
                        <View style={StyleEditProfile.bottomline}></View>

                        <View style={{ marginTop: 10 }}>
                            {
                                this.state.customerType == 'user_profile'
                                ? this.user_Profile()
                                : this.state.customerType == 'company_profile'
                                ? this.company_Profile()
                                : null
                            }

                            <TouchableOpacity style={{ backgroundColor: Constants.COLOR_GREEN, paddingHorizontal: 25, borderRadius: 50, marginVertical: 15, alignSelf: 'flex-end', marginRight: 15 }}
                                onPress={() => {
                                    this.setState({ modalVisible_Changepassword: true })
                                }}
                            >
                                <Text style={{ textTransform: 'uppercase', color: 'white', paddingVertical: 12, textAlign:'center' }}>Change Password</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={StyleEditProfile.ButtonView} onPress={() => { this.updateProfile();}}>
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

                <Modal
                    visible={this.state.isProfileUpdatedModal}
                    animationType='fade'
                    transparent={true}
                >
                    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        
                        <View style={[StyleMyProfile.ModalWrapper, { width: '80%' }]}>

                            <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10 }}
                                onPress={() => {
                                    this.setState({ isProfileUpdatedModal: false,})
                                    this.props.navigation.navigate("Dashboard")
                                }}
                            >
                                <Image source={require('../images/close.png')}
                                    style={{ width: 15, height: 15 }}
                                />
                            </TouchableOpacity>
                            
                            <Image source={require('../images/sent_icon.png')} style={{ width: 90, height: 90, marginVertical: 10, alignSelf: 'center' }}/>

                            <Text style={[StyleMyProfile.col1Text, { alignSelf: 'center', fontSize: Constants.FONT_SIZE_EXTRA_LARGE, textAlign:'center' }]}>
                                Your profie has been updated successfully.
                            </Text>
                            
                            <TouchableOpacity style={[StyleMyProfile.ButtonView, { paddingHorizontal: 50, marginVertical: 15 }]}
                                onPress={() => {
                                    this.setState({ isProfileUpdatedModal: false})
                                    this.props.navigation.navigate("Dashboard")
                                }}
                            >
                                <Text style={StyleMyProfile.ButtonLabel}>{Constants.OK}</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </Modal>

            </View>
        )

    }
}