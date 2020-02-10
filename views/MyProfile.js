/* screen -MANAPPCUS108,36,37
    design by -mayur s
 */
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, TextInput, FlatList } from 'react-native';
import { StyleMyProfile } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import HeaderBar from '../config/HeaderBar';
import Constants from '../config/Constants';

export default class MyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_password: '',
            new_password: '',
            confirm_password: '',
            password_visible: true,
            screen_title: 'UserProfile', //CompanyProfile,UserProfile
            modalVisible_Changepassword: false,
            modalVisible_SavedMsg: false,
            password_visible: true,
            companyProfile_data: [
                { title: 'IBM', company_name: 'IBM', company_contactPerson: 'PMO', company_contactPositiion: 'PMO', company_telephoneNo: '+56 1245521425', email: 'ibmn@ibm.com', address: 'NYC,Lane 345,street 2.', city: 'Johnasburg', province: 'AAA', zipcode: '4561258' }
            ],
            userProfileData: [
                { title: "Jimmy Dager", first_name: 'Jimmy123', last_name: 'Dager', title_1: 'Mr', telephone_no: '+56 454567874651', rsa_id: '4561323784251', street_address: 'NYC,Lane 345,street2', province: 'AAA', city: 'johnsburg', zipcode: '442301', email: 'vty2@gkml.com' }
            ],
            userProfile_image: [
                { image_name: "", image_path: require('../images/Profile_pic.png') },
                { image_name: "", image_path: require('../images/Trucking+Warehouse.png') },
                { image_name: "", image_path: require('../images/upload_normal.png') },
                { image_name: "", image_path: require('../images/truck_icon.png') },
            ]
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
                        <Text style={StyleMyProfile.col1Text}>{Constants.CompanyName}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.companyProfile_data[0].company_name}</Text>
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
                        <Text style={StyleMyProfile.col2Text}>{this.state.companyProfile_data[0].company_contactPerson}</Text>
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
                        <Text style={StyleMyProfile.col2Text}>{this.state.companyProfile_data[0].company_contactPositiion}</Text>
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
                        <Text style={StyleMyProfile.col2Text}>{this.state.companyProfile_data[0].company_telephoneNo}</Text>
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
                        <Text style={StyleMyProfile.col2Text}>{this.state.companyProfile_data[0].email}</Text>
                    </View>
                </View>

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/address.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.StreetAddress}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.companyProfile_data[0].address}</Text>
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
                        <Text style={StyleMyProfile.col2Text}>{this.state.companyProfile_data[0].city}</Text>
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
                        <Text style={StyleMyProfile.col2Text}>{this.state.companyProfile_data[0].province}</Text>
                    </View>
                </View>

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/address.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.ZipCode}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.companyProfile_data[0].zipcode}</Text>
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
                        <Text style={StyleMyProfile.col2Text}>{this.state.userProfileData[0].first_name}</Text>
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
                        <Text style={StyleMyProfile.col2Text}>{this.state.userProfileData[0].last_name}</Text>
                    </View>
                </View>

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/person.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.Title}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userProfileData[0].title_1}</Text>
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
                        <Text style={StyleMyProfile.col2Text}>{this.state.userProfileData[0].telephone_no}</Text>
                    </View>
                </View>

                <View style={[StyleMyProfile.row, { borderBottomWidth: 0, }]}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/designation.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.RSAIDPassNO}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userProfileData[0].rsa_id}</Text>
                    </View>
                </View>

                <View style={[StyleMyProfile.row, { flexDirection: "column" }]}>
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

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/address.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.StreetAddress}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userProfileData[0].street_address}</Text>
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
                        <Text style={StyleMyProfile.col2Text}>{this.state.userProfileData[0].province}</Text>
                    </View>
                </View>

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/address.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.SelectCity}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userProfileData[0].city}</Text>
                    </View>
                </View>

                <View style={StyleMyProfile.row}>
                    <View style={StyleMyProfile.col1}>
                        <Image source={require('../images/address.png')}
                            style={StyleMyProfile.Icon}
                        />
                        <Text style={StyleMyProfile.col1Text}>{Constants.ZipCode}</Text>
                    </View>
                    <View style={StyleMyProfile.col2}>
                        <Text style={StyleMyProfile.col2Text}>{this.state.userProfileData[0].zipcode}</Text>
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
                        <Text style={StyleMyProfile.col2Text}>{this.state.userProfileData[0].email}</Text>
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

                        <Text style={StyleMyProfile.label}>{this.state.screen_title == 'UserProfile' ? this.state.userProfileData[0].title : this.state.companyProfile_data[0].title}</Text>
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

                        <TouchableOpacity style={StyleMyProfile.UpdateBtn_view}>
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