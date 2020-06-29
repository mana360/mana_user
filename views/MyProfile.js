/* screen -MANAPPCUS108,36,37
    design by -mayur s
    api by Udayraj (changePassword, getMyProfile)

    REQUIRED NOTES
    1) user_type = 1 means company profile
    2) user type = 2 means individual profile

*/
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, TextInput, FlatList } from 'react-native';
import { StyleMyProfile } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import HeaderBar from '../config/HeaderBar';
import Constants from '../config/Constants';
import {MainPresenter} from '../config/MainPresenter';
import ApiConstants from '../config/ApiConstants';
import {getUserData, setUserData} from '../config/AppSharedPreference'
export default class MyProfile extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            current_password: '',
            new_password: '',
            confirm_password: '',
            password_visible: true,
            screen_title: 'UserProfile', //CompanyProfile, UserProfile
            modalVisible_Changepassword: false,
            modalVisible_SavedMsg: false,
            userData:"",
            userProfile_image: [
                { image_name: "", image_path: require('../images/Profile_pic.png') },
                { image_name: "", image_path: require('../images/Trucking+Warehouse.png') },
                { image_name: "", image_path: require('../images/upload_normal.png') },
                { image_name: "", image_path: require('../images/truck_icon.png') },
            ]
        }
    }

    componentDidMount() {
        this.presenter.callPostApi(ApiConstants.getMyProfile, "", true)
    }

    async updateUserObject(data){
        await setUserData(data)
        let new_data = await getUserData()
        this.setState({userData : data})
        console.log("updated user data====> "+JSON.stringify(this.state.userData))
        console.log("name=====> "+this.state.userData.first_name)
    }

    onResponse(apiConstant, data) {
        switch (apiConstant) {
            case ApiConstants.getMyProfile:{
                if(data.status){
                    if(data.user_data.user_type==1){
                        this.setState({screen_title:"CompanyProfile"})
                    }else{
                        this.setState({screen_title:"UserProfile"})
                    }
                    this.updateUserObject(data.user_data)           // storing user details in local db
                }else{
                    alert(data.msg)
                }
                break;
            }
            case ApiConstants.updateProfilePic: {
                if (data.status) {
                } else {
                    alert(data.message)
                }
    
                break;
            }
            case ApiConstants.changePassword:{
                if(data.status){
                    this.setState({ modalVisible_Changepassword: false, current_password:"", new_password:"", confirm_password:"" })
                    alert(data.message)
                }else{
                    alert(data.message)
                }
                break;
            }
        }
    }

    company_Profile() {
        return (
            <View style={{ flex: 1 }}>

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/company_name.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}> {Constants.CompanyName} </Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}> { this.state.userData.company_name!=undefined ? this.state.userData.company_name : "" } </Text>
                    </View>
                </View>

                <View style={[StyleMyProfile.row,{display:'none'}]}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/person.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.CompanyContactPerson}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{ this.state.userData.comp_cont_person!=undefined ? this.state.userData.comp_cont_person : "" }</Text>
                    </View>
                </View>

                <View style={[StyleMyProfile.row,{display:'none'}]}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/designation.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.CompanyContactPosition}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userData.company_cont_position!=undefined ? this.state.userData.company_cont_position : ""}</Text>
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
                        <Text style={StyleMyProfile.col2Text}>{this.state.userData.tele_number!=undefined ? this.state.userData.tele_number : "" }</Text>
                    </View>
                </View>

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/email_id.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.EmailAddress}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userData.email!=undefined ? this.state.userData.email : ""}</Text>
                    </View>
                </View>

                <View style={[StyleMyProfile.row,{display:'none'}]}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/address.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.StreetAddress}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userData.address!=undefined ? this.state.userData.address : ""}</Text>
                    </View>
                </View>

                <View style={[StyleMyProfile.row,{display:'none'}]}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/address.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.City}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userData.city_name!=undefined ? this.state.userData.city_name : ""}</Text>
                    </View>
                </View>

                <View style={[StyleMyProfile.row,{display:'none'}]}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/address.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.SELECT_COUNTRY}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userData.country_name!=undefined ? this.state.userData.country_name : ""}</Text>
                    </View>
                </View>

                <View style={[StyleMyProfile.row,{display:'none'}]}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/address.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.SelectProvince}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userData.province_name!=undefined ? this.state.userData.province_name : ""}</Text>
                    </View>
                </View>

                <View style={[StyleMyProfile.row,{display:'none'}]}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/address.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.ZipCode}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userData.zipcode!=undefined ? this.state.userData.zipcode : ""}</Text>
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
                        <Text style={StyleMyProfile.col2Text}>{this.state.userData.first_name!=undefined ? this.state.userData.first_name : ""}</Text>
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
                        <Text style={StyleMyProfile.col2Text}>{this.state.userData.last_name!=undefined ? this.state.userData.last_name : ""}</Text>
                    </View>
                </View>

                <View style={[StyleMyProfile.row,{display:'none'}]}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/person.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.Title}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userData.title!=undefined ? this.state.userData.title : ""}</Text>
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
                        <Text style={StyleMyProfile.col2Text}>{this.state.userData.tele_number!=undefined ? this.state.userData.tele_number : ""}</Text>
                    </View>
                </View>

                <View style={[StyleMyProfile.row, { borderBottomWidth: 0, display:'none'}]}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/designation.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.RSAIDPassNO}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userData.rsa_id!=undefined ? this.state.userData.rsa_id : ""}</Text>
                    </View>
                </View>

                <View style={[StyleMyProfile.row, { flexDirection: "column", display:'none' }]}>
                    <Text style={[StyleMyProfile.col1Text, {}]}>Document Images</Text>
                    <FlatList
                        numColumns={1}
                        horizontal={true}
                        style={{ marginLeft: 15, marginVertical: 10 }}
                        data={this.state.userProfile_image}
                        extraData={this.state}
                        keyExtractor={(item) => { item.id }}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ width: 55, height: 55, marginHorizontal: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 100, }}>
                                    <TouchableOpacity style={{ position: 'absolute', bottom: 1, zIndex: 1, right: 0, }}
                                        onPress={() => {
                                            this.delete_image(index);
                                        }}
                                    >
                                        <Image source={require('../images/remove.png')} style={{ width: 18, height: 18, borderWidth: 1.5, borderColor: 'white', borderRadius: 100 }} />
                                    </TouchableOpacity>
                                    <Image style={{ width: 55, height: 55, alignSelf: 'center', borderRadius: 100 }} source={item.image_path} />
                                </View>
                            )
                        }}
                    />



                </View>

                <View style={[StyleMyProfile.row,{display:'none'}]}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/address.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.StreetAddress}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userData.street_name!=undefined ? this.state.userData.street_name : ""}</Text>
                    </View>
                </View>

                <View style={[StyleMyProfile.row,{display:'none'}]}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/address.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.SELECT_COUNTRY}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userData.country_name!=undefined ? this.state.userData.country_name : ""}</Text>
                    </View>
                </View>

                <View style={[StyleMyProfile.row,{display:'none'}]}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/address.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.SelectProvince}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userData.province_name!=undefined ? this.state.userData.province_name : ""}</Text>
                    </View>
                </View>

                <View style={[StyleMyProfile.row,{display:'none'}]}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/address.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.SelectCity}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userData.city_name!=undefined ? this.state.userData.city_name : ""}</Text>
                    </View>
                </View>

                <View style={[StyleMyProfile.row,{display:'none'}]}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/address.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.ZipCode}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userData.zipcode!=undefined ? this.state.userData.zipcode : ""}</Text>
                    </View>
                </View>

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/email_id.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.EmailAddress}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userData.email!=undefined ? this.state.userData.email : ""}</Text>
                    </View>
                </View>

            </View>

        )
    }

    delete_image(position) {

        var temparray = this.state.userProfile_image

        temparray.splice(position, 1);
        this.setState({ userProfile_image: temparray })

    }
    
    isValidPasswords(){
        if(this.state.current_password==""){
            alert("Please enter current password")
            return false
        }
        if(this.state.new_password==""){
            alert("Please enter new password")
            return false
        }
        if(this.state.confirm_password==""){
            alert("Please enter confirm passowrd")
            return false
        }
        if(this.state.new_password != this.state.confirm_password){
            alert("New and Confirm password doesn't matched.")
            return false
        }
        return true
    }

    updatePassword(){
        if(this.isValidPasswords()){
            //----- api call for change password
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
                        onPress={() => {
                            this.setState({ modalVisible_Changepassword: false, current_password:"", new_password:"", confirm_password:"" })
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
                                ref={(ref)=>{this.input_current_password = ref}}
                                style={StyleMyProfile.TextInput}
                                value={this.state.current_password}
                                secureTextEntry={true}
                                autoCapitalize="none"
                                onChangeText={(text) => { this.setState({ current_password: text }) }}
                                onBlur={()=>{ this.input_new_password.focus() }}
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
                                placeholder="Enter New Password"
                                ref={(ref)=>{this.input_new_password = ref }}
                                style={StyleMyProfile.TextInput}
                                value={this.state.new_password}
                                secureTextEntry={true}
                                autoCapitalize="none"
                                onChangeText={(text) => { this.setState({ new_password: text }) }}
                                onBlur={()=>{this.input_confirm_password.focus()}}
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
                                placeholder="Enter Confirm Password"
                                ref={(ref)=>{this.input_confirm_password = ref}}
                                style={StyleMyProfile.TextInput}
                                value={this.state.confirm_password}
                                secureTextEntry={true}
                                autoCapitalize="none"
                                onChangeText={(text) => { this.setState({ confirm_password: text }) }}
                            />
                        </View>

                    </View>

                    <TouchableOpacity style={[StyleMyProfile.ButtonView, { width: '90%',
                        backgroundColor : this.state.current_password=="" ? Constants.COLOR_GREY_LIGHT
                            :
                            this.state.new_password=="" ? Constants.COLOR_GREY_LIGHT
                            :
                            this.state.confirm_password=="" ? Constants.COLOR_GREY_LIGHT
                            : Constants.COLOR_GREEN
                        }]}
                        disabled={
                            this.state.current_password=="" ? true
                            :
                            this.state.new_password=="" ? true
                            :
                            this.state.confirm_password=="" ? true
                            : false
                        }
                        onPress={() => { this.updatePassword() }}
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
                
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} />
                
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

                                {
                                    this.state.userData.profile_picture!=undefined
                                    ?
                                    <Image 
                                        source ={{uri: this.state.userData.profile_picture}}
                                        style={[StyleMyProfile.ProfileImage,{display: this.state.screen_title=="UserProfile" ? 'flex' : 'none'}]}
                                    />
                                    :
                                    <Image 
                                        source ={require('../images/user_name.png')}
                                        style={[StyleMyProfile.ProfileImage,{display: this.state.screen_title=="UserProfile" ? 'flex' : 'none'}]}
                                    />
                                }
                                {
                                    this.state.userData.company_logo!=undefined
                                    ?
                                    <Image 
                                        source ={{uri: this.state.userData.company_logo}}
                                        style={[StyleMyProfile.ProfileImage,{display: this.state.screen_title=="CompanyProfile" ? 'flex' : 'none'}]}
                                    />
                                    :
                                    <Image 
                                        source ={require('../images/user_name.png')}
                                        style={[StyleMyProfile.ProfileImage,{display: this.state.screen_title=="CompanyProfile" ? 'flex' : 'none'}]}
                                    />
                                }

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

                        <Text style={[StyleMyProfile.label,{textTransform:'capitalize'}]}>
                            {
                                this.state.screen_title == 'UserProfile' 
                                ? this.state.userData.first_name+" "+ this.state.userData.last_name
                                : this.state.userData.company_name
                            }
                        </Text>

                        <View style={StyleMyProfile.bottomline}></View>

                        {
                            this.state.screen_title == "UserProfile"
                            ? this.user_Profile()
                            : this.state.screen_title == "CompanyProfile"
                            ? this.company_Profile()
                            : null
                        }

                        <TouchableOpacity style={StyleMyProfile.UpdateBtn_view}
                            onPress={()=>{ this.setState({modalVisible_Changepassword:true}) }}
                        >
                            <Text style={StyleMyProfile.UpdateBtn_text}>Change Password</Text>
                        </TouchableOpacity>
                    
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