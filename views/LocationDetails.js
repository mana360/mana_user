/* screen -MANAPPCUS064
    design by -Harshad 
 */
import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, DatePickerAndroid, TimePickerAndroid, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleLocationDetails } from '../config/CommonStyles';
import { Picker } from "native-base";
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import Textarea from 'react-native-textarea';
import moment from 'moment'

export default class LocationDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pick_up_address: "",
            drop_off_address: "",
            drop_off_address_1: "",
            add_nextAddress:'',
            pickup_date: "",
            pickup_time: "",
            load_category: '',
        }
    }

    async openCalender() {
        console.log("called")
        try {
            let today = moment();
            today.local(true);
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date(today),
                minDate: new Date(today),
            })
            if (action !== DatePickerAndroid.dismissedAction) {
                const finalDate = `${month + 1}/${day}/${year}`;
                console.log(finalDate)
                this.setState({ pickup_date: moment(finalDate).format('DD/MM/YYYY') })
                console.log("selected date ===>" + this.state.pickup_date)
            }

        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }

    async openTimer() {
        console.log("Timer called")
        var { action, minute, hour } = await TimePickerAndroid.open({
            is24Hour: false,
        });
        if (action === TimePickerAndroid.dismissedAction) {
            this.setState({ pickup_time: "" })
            return;
        }
        // setting AM/PM and hour to 12 by checking condition
        let am_pm = 'AM';

        if (hour > 11) {
            am_pm = 'PM';
            if (hour > 12) {
                hour = hour - 12;
            }
        }

        if (hour == 0) {
            hour = 12;
        }
        const selectedTime = `${hour}:${minute} ${am_pm}`;
        this.setState({ pickup_time: selectedTime })
    }
    render() {

        let { navigation } = this.props;
        return (
            <View style={{ flex: 1, }}>

                {/* Header Start */}
                <HeaderBar title="Location Details" isBack={true} isLogout={true} navigation={navigation} />
                {/* Header Close */}

                {/* Main Body Start */}
                <ScrollView bounces={false} style={{ width: wp('100%') }}>
                    <View style={{ flex: 1, backgroundColor: Constants.COLOR_WHITE }}>
                        <View style={StyleLocationDetails.locationWrapp}>

                            <View style={ StyleLocationDetails.inputContainer }>

                                <View style={StyleLocationDetails.labelBoxNew}>
                                    <Text style={StyleLocationDetails.labelTextNew}>{Constants.PickUpAddress}</Text>
                                </View>
                                <TextInput
                                    placeholder='Lorum ipsum dolor sit amet,'
                                    placeholderTextColor="#a4a4a4"
                                    ref={(ref) => { this.pick_up_address = ref }}
                                    value={this.state.pick_up_address}
                                    onChangeText={
                                        (value) => {
                                            this.setState({ pick_up_address: value })
                                        }
                                    }
                                    style={StyleLocationDetails.inputBox} />
                                <TouchableOpacity
                                    style={{ position: "absolute", right: 20, top: 12, }}
                                    onPress={() => {
                                        this.props.navigation.navigate('ViewMap')
                                    }}>
                                    <Image style={{ width: 20, height: 20, }}
                                        source={require('../images/address.png')} />
                                </TouchableOpacity>

                            </View>


                            <View style={this.state.add_nextAddress=='1'?[StyleLocationDetails.inputContainer, {marginBottom: 20,width:'94%'}]:[StyleLocationDetails.inputContainer, { marginBottom: 20 }]}>
                                <View style={StyleLocationDetails.labelBoxNew}>
                                    <Text style={StyleLocationDetails.labelTextNew}>{Constants.DropOffAddress}</Text>
                                </View>
                                <TextInput placeholder='Drop Off Address'
                                    placeholderTextColor="#a4a4a4"
                                    ref={(ref) => { this.drop_off_address = ref }}
                                    value={this.state.drop_off_address}
                                    onChangeText={
                                        (value) => {
                                            this.setState({ drop_off_address: value })
                                        }
                                    }
                                    style={StyleLocationDetails.inputBox} />
                                <TouchableOpacity
                                    style={{ position: "absolute", right: 20, top: 12, }}
                                    onPress={() => {
                                        this.props.navigation.navigate('ViewMap')
                                    }}>
                                    <Image style={{ width: 20, height: 20, }}
                                        source={require('../images/address.png')} />
                                </TouchableOpacity>

                            </View>

                            <TouchableOpacity
                                style={this.state.add_nextAddress=='1'?{position: "absolute", right: 10, top: '17%',}:{display:"none"}}
                                onPress={() => { this.setState({ add_nextAddress: "" }) }}>
                                <Image style={{ width: 25, height: 25,}}
                                    source={require('../images/remove.png')} />
                                    
                            </TouchableOpacity>

                            <View style={this.state.add_nextAddress=='1'?[StyleLocationDetails.inputContainer, { marginBottom: 20 }]:{display:'none'}}>
                                <View style={StyleLocationDetails.labelBoxNew}>
                                    <Text style={StyleLocationDetails.labelTextNew}>{Constants.DropOffAddress}</Text>
                                </View>
                                <TextInput placeholder='Drop Off Address'
                                    placeholderTextColor="#a4a4a4"
                                    ref={(ref) => { this.drop_off_address = ref }}
                                    value={this.state.drop_off_address_1}
                                    onChangeText={
                                        (value) => {
                                            this.setState({ drop_off_address_1: value })
                                        }
                                    }
                                    style={[StyleLocationDetails.inputBox,{marginLeft:25}]} />
                                <TouchableOpacity
                                    style={{ position: "absolute", right: 20, top: 12, }}
                                    onPress={() => {
                                        this.props.navigation.navigate('MapViews')
                                    }}>
                                    <Image style={{ width: 20, height: 20, }}
                                        source={require('../images/address.png')} />
                                </TouchableOpacity>

                            </View>



                            <TouchableOpacity style={StyleLocationDetails.nextAddrBtn}
                            onPress={()=>{
                                this.setState({add_nextAddress:1})
                            }}
                            >
                                <Text style={StyleLocationDetails.nextAddrBtnText}>{Constants.NextAddress}</Text>
                            </TouchableOpacity>

                            <View style={StyleLocationDetails.inputContainer}>
                                <View style={StyleLocationDetails.labelBoxNew}>
                                    <Text style={StyleLocationDetails.labelTextNew}>{Constants.PickUpDate}</Text>
                                </View>
                                <TextInput placeholder='Select Pick Up Date'
                                    style={[StyleLocationDetails.inputBox, { width: '85%' }]}
                                    editable={false}
                                    value={this.state.pickup_date}
                                />
                                <TouchableOpacity
                                    style={{ width: 30, alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center', marginTop: -32, marginRight: 15 }}
                                    onPress={() => { this.openCalender() }}
                                >
                                    <Image style={{ width: 20, height: 20, }}
                                        source={require('../images/date_icon.png')}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={StyleLocationDetails.inputContainer}>
                                <View style={StyleLocationDetails.labelBoxNew}>
                                    <Text style={StyleLocationDetails.labelTextNew}>{Constants.PickUpTime}</Text>
                                </View>
                                <TextInput placeholder='Select Pick Up Time' style={[StyleLocationDetails.inputBox, { width: '85%', }]}
                                    value={this.state.pickup_time}
                                    editable={false}
                                />
                                <TouchableOpacity
                                    style={{ width: 30, alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center', marginTop: -32, marginRight: 15 }}
                                    onPress={() => { this.openTimer() }}
                                >
                                    <Image style={{ width: 20, height: 20, }}
                                        source={require('../images/time_icon.png')}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={StyleLocationDetails.instructContainer}>
                                <View style={StyleLocationDetails.labelBoxNew}>
                                    <Text style={StyleLocationDetails.labelTextNew}>{Constants.Instructions}</Text>
                                </View>
                                <Textarea
                                    style={StyleLocationDetails.textarea}
                                    maxLength={100}
                                    placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur'}
                                    placeholderTextColor={'#a4a4a4'}
                                />
                            </View>

                            <View style={[StyleLocationDetails.inputContainer,]}>
                                <View style={StyleLocationDetails.labelBoxNew}>
                                    <Text style={[StyleLocationDetails.labelTextNew, { textTransform: 'capitalize' }]}>{Constants.LOAD_CATEGORY}</Text>
                                </View>
                                <Picker
                                    mode='dropdown'
                                    style={{ color: Constants.COLOR_GREY_DARK, width: '95%', alignSelf: 'center', paddingVertical: 20 }}
                                    selectedValue={this.state.load_category}
                                    onValueChange={(value)=>{
                                        this.setState({load_category:value})
                                    }}
                                >
                                    <Picker.Item label='Select Load Category' value='default' />
                                    <Picker.Item label='Household' value='key1' />
                                    <Picker.Item label='Other' value='key2' />

                                </Picker>

                            </View>

                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate('BookingSummary')
                                }}
                                style={StyleLocationDetails.logButton}
                            >
                                <Text style={StyleLocationDetails.logButtonText}>{Constants.Next}</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ScrollView>
                {/* Main Body Close */}

                {/* Footer Start */}
                <FooterBar navigation={navigation} />
                {/* Footer Close */}

            </View>
        )
    }
}