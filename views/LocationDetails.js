/* screen -MANAPPCUS064
    design by -Harshad 
 */
import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, DatePickerAndroid, TimePickerAndroid, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleLocationDetails } from '../config/CommonStyles';
import { Picker, List } from "native-base";
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import Textarea from 'react-native-textarea';
import moment from 'moment'
import ApiConstants from '../config/ApiConstants';
import { MainPresenter } from '../config/MainPresenter';

export default class LocationDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pick_up_address: "",
            pick_up_address_lat:"",
            pick_up_address_long:"",
            pick_up_addressDetails:"",

            drop_off_address: "",
            drop_off_address_lat:'',
            drop_off_address_long:"",
            drop_off_addressDetails:"",


            drop_off_address_1: "",
            drop_off_address_1_lat:'',
            drop_off_address_1_long:"",
            drop_off_address_1Details:"",

            add_nextAddress: '',
            pickup_date: "",
            pickup_time: "",
            // instruction:"",
            instruction_1:'',

            load_category: '',
            load_category_id:1,
            other_flag:0,
            load_Category_Manualtext:"",
            loadCategoryList:[],
            isLoadCategoryFilled:0,
            countList:[],
            otherServicesList:[],
        }
        this.userDetails="";

        }
componentDidMount(){
    this.inItService();
}

 async inItService(){
    
     this.userDetails=this.props.navigation.getParam('userDetails');
     console.log("UserDetails===>"+ JSON.stringify(this.userDetails));
    let i=1
        for(i=1;i<=15;i++){
      this.state.countList.push(i);
      console.log("count==>"+i);

        }
    this.getloadCategoryList();
    await this.presenter.callGetApi(ApiConstants.getotherServices,"",true);
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
    getMapInfo(resp) {
        console.log("RESP AALA RE ====>" + resp.results[1].formatted_address);
    }

    onResponse(apiConstant, data) {
        switch (apiConstant) {
          case ApiConstants.LoadCategoryList: {
              if(data.status){
                  console.log("LoadCategory List => " + JSON.stringify(data.load_category));
                  this.setState({loadCategoryList : data.load_category,isLoadCategoryFilled:1});

                }
              else {
                  alert(data.message);
              }
            break;
          }

          case ApiConstants.getotherServices:{
              if(data.status){
                        this.setState({otherServicesList:data.other_services});
                        console.log("service List ===>"+JSON.stringify(this.state.otherServicesList));
              }else{

              }
              break;

          }
          
        }
    }

    isValid(){
        if(this.state.load_category=="-1"){
            alert("please Select Load Category");
            this.input_loadcategory.focus();     
        return false
        }
        if(this.state.pick_up_address==""){
            alert("Please Enter Pickup Address");
            return false;
        }
        if(this.state.drop_off_address==""){
            alert("Please Enter Dropup Address");
            return false;
        }
        if(this.state.pickup_date==""){
            alert("Please Enter valid Date");
            return false;
        }
        if(this.state.pickup_time==""){
            alert("Please Enter valid Time");
            return false;
        }
        if(this.state.instructContainer==""){
            alert("Please Enter Instruction");
            return false;
        }
        return true
    }
    
    getloadCategoryList(){
    this.presenter.callGetApi(ApiConstants.LoadCategoryList,"",true);
    }

getAddress(flag){
    this.props.navigation.navigate('MapViews', {
        flag_location:flag, address: (resp) => {
            console.log("callback flag==>"+flag);
                      if(flag=="1"){
                        this.setState({
                            pick_up_address:resp.results[0].formatted_address,
                            pick_up_address_lat:resp.results[0].geometry.location.lat,
                            pick_up_address_long:resp.results[0].geometry.location.lng
                                });
                      }
                      if(flag=="2"){
                            this.setState({
                            drop_off_address:resp.results[0].formatted_address,
                            drop_off_address_lat:resp.results[0].geometry.location.lat,
                            drop_off_address_long:resp.results[0].geometry.location.lng
                            });
                      }
                      if(flag=='3'){
                        this.setState({
                            drop_off_address_1:resp.results[0].formatted_address,
                            drop_off_address_1_lat:resp.results[0].geometry.location.lat,
                            drop_off_address_1_long:resp.results[0].geometry.location.lng
                            });
                    }
         }
    })
}

    render() {

        let { navigation } = this.props;
        return (
            <View style={{ flex: 1, }}>

                {/* Header Start */}
                <HeaderBar title="Location Details" isBack={true} isLogout={true} navigation={navigation} />
                {/* Header Close */}
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} />

                {/* Main Body Start */}
                <ScrollView bounces={false} style={{ width: wp('100%') }}>
                    <View style={{ flex: 1, backgroundColor: Constants.COLOR_WHITE }}>
                        <View style={StyleLocationDetails.locationWrapp}>

                            <View style={StyleLocationDetails.inputContainer}>
                                <View style={StyleLocationDetails.labelBoxNew}>
                                    <Text style={StyleLocationDetails.labelTextNew}>{Constants.PickUpAddress}</Text>
                                </View>
                                <TextInput
                                    placeholder='Enter Pickup Address,'
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
                                        let flag=1;
                                       this.getAddress(flag);
                                    }
                                    }>
                                    <Image style={{ width: 20, height: 20, }}
                                        source={require('../images/address.png')} />
                                </TouchableOpacity>

                            </View>
                            <View style={StyleLocationDetails.inputContainer}>
                                <View style={StyleLocationDetails.labelBoxNew}>
                                    <Text style={StyleLocationDetails.labelTextNew}>{Constants.AddressDetails}</Text>
                                </View>
                                <TextInput
                                    placeholder='Enter Pickup Address Details'
                                    placeholderTextColor="#a4a4a4"
                                    // ref={(ref) => { this.pick_up_address_Details = ref }}
                                    value={this.state.pick_up_addressDetails}
                                    onChangeText={
                                        (value) => {
                                            this.setState({ pick_up_addressDetails: value })
                                        }
                                    }
                                    style={StyleLocationDetails.inputBox} />
                            </View>


                            <View style={this.state.add_nextAddress == '1' ? [StyleLocationDetails.inputContainer, { marginBottom: 20, width: '94%' }] : [StyleLocationDetails.inputContainer, { marginBottom: 20 }]}>
                                <View style={StyleLocationDetails.labelBoxNew}>
                                    <Text style={StyleLocationDetails.labelTextNew}>{Constants.DropOffAddress} 1</Text>
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
                                        let flag=2;
                                        this.getAddress(flag);
                                    }
                                    }>
                                    <Image style={{ width: 20, height: 20, }}
                                        source={require('../images/address.png')} />
                                </TouchableOpacity>

                            </View>
                            <View style={StyleLocationDetails.inputContainer}>
                                <View style={StyleLocationDetails.labelBoxNew}>
                                    <Text style={StyleLocationDetails.labelTextNew}>{Constants.AddressDetails}</Text>
                                </View>
                                <TextInput
                                    placeholder='Enter DropOff Address Details'
                                    placeholderTextColor="#a4a4a4"
                                    // ref={(ref) => { this.pick_up_address_Details = ref }}
                                    value={this.state.drop_off_addressDetails}
                                    onChangeText={
                                        (value) => {
                                            this.setState({ drop_off_addressDetails: value })
                                        }
                                    }
                                    style={StyleLocationDetails.inputBox} />
                            </View>


                            <TouchableOpacity
                                style={this.state.add_nextAddress == '1' ? { position: "absolute", right: 10, top: '22%', } : { display: "none" }}
                                onPress={() => { this.setState({ add_nextAddress: "" }) }}>
                                <Image style={{ width: 25, height: 25, }}
                                    source={require('../images/remove.png')} />

                            </TouchableOpacity>

                            <View style={this.state.add_nextAddress == '1' ? [StyleLocationDetails.inputContainer, { marginBottom: 20 }] : { display: 'none' }}>
                                <View style={StyleLocationDetails.labelBoxNew}>
                                    <Text style={StyleLocationDetails.labelTextNew}>{Constants.DropOffAddress} 2</Text>
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
                                    style={[StyleLocationDetails.inputBox, { marginLeft: 15 }]} />
                                <TouchableOpacity
                                    style={{ position: "absolute", right: 20, top: 12, }}
                                    onPress={() => {
                                        let flag=3;
                                        this.getAddress(flag);
                                    }
                                    }>
                                    <Image style={{ width: 20, height: 20, }}
                                        source={require('../images/address.png')} />
                                </TouchableOpacity>
                                

                            </View>
                            <View  style={this.state.add_nextAddress == '1' ? [StyleLocationDetails.inputContainer, { marginBottom: 35,paddingLeft:15 }] : { display: 'none' }}>
                                <View style={StyleLocationDetails.labelBoxNew}>
                                    <Text style={StyleLocationDetails.labelTextNew}>{Constants.AddressDetails}</Text>
                                </View>
                                <TextInput
                                    placeholder='Enter DropOff Address Details'
                                    placeholderTextColor="#a4a4a4"
                                    // ref={(ref) => { this.pick_up_address_Details = ref }}
                                    value={this.state.pick_up_addressDetails}
                                    onChangeText={
                                        (value) => {
                                            this.setState({ pick_up_addressDetails: value })
                                        }
                                    }
                                    style={StyleLocationDetails.inputBox} />
                            </View>


                            <TouchableOpacity style={this.state.add_nextAddress?{display:'none'}:StyleLocationDetails.nextAddrBtn}
                                onPress={() => {
                                    this.setState({ add_nextAddress: 1 })
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
                                    // maxLength={100}
                                    placeholder="Enter Instruction"
                                    placeholderTextColor={'#a4a4a4'}
                                    value={this.state.instruction_1}
                                    onChangeText={value=>{
                                        this.setState({instruction_1:value});
                                    }}
                                />
                            </View>

                            <View style={[StyleLocationDetails.inputContainer,]}>
                                <View style={StyleLocationDetails.labelBoxNew}>
                                    <Text style={[StyleLocationDetails.labelTextNew, { textTransform: 'capitalize' }]}>{Constants.LOAD_CATEGORY}</Text>
                                </View>
                                <Picker
                                     ref={(ref)=>{this.input_loadcategory = ref}}
                                    mode='dropdown'
                                    style={{ color: Constants.COLOR_GREY_DARK, width: '95%', alignSelf: 'center', paddingVertical: 20 }}
                                    selectedValue={this.state.load_category}
                                    onValueChange={(value) => {
                                        this.setState({ load_category: value });
                                        console.log(value);
                                        this.state.loadCategoryList.map((Item,index)=>{
                                           if(value==Item.category_name){
                                            console.log("ID++>"+Item.category_id);
                                               this.setState({load_category_id:Item.category_id,other_flag:Item.other_flag});
                                               console.log("ID++>"+Item.category_id);
                                           }
                                        })
                                    }}
                                >
                                    <Picker.Item label='Select Load Category' value='-1' />
                                 {
                                     this.state.isLoadCategoryFilled==1
                                     ?
                                     this.state.loadCategoryList.map((item,index)=>
                                    
                                         <Picker.item key={item.category_id}  label={""+item.category_name} value={item.category_name}/>
                                     )
                                     :null 
                                    }
                                </Picker>

                            </View>

                            <View style={this.state.other_flag==1?[StyleLocationDetails.inputContainer,{justifyContent:"center",paddingLeft:25}]:{display:'none'}}>
                                <View style={StyleLocationDetails.labelBoxNew}>
                                    <Text style={StyleLocationDetails.labelTextNew}>{Constants.LOAD_CATEGORY}</Text>
                                </View>
                                <TextInput 
                                placeholder='Enter Load Category' 
                                style={[StyleLocationDetails.inputBox, { width: '90%',paddingLeft:15 }]}
                                    value={this.state.load_Category_Manualtext}
                                    onChangeText={(value)=>{
                                        this.setState({load_Category_Manualtext:value});
                                    }}
                                    
                                />
                              
                            </View>

                            <TouchableOpacity
                                onPress={() => {
                                 
                                    let user_data={
                                        "pick_up_address": this.state.pick_up_address,
                                        "pick_up_address_lat":this.state.pick_up_address_lat,
                                        "pick_up_address_long":this.state.pick_up_address_long,
                                        "pick_up_addressDetails":this.state.pick_up_addressDetails,

                                        "drop_off_address":this.state.drop_off_address,
                                        "drop_off_address_lat":this.state.drop_off_address_lat,
                                        "drop_off_address_long":this.state. drop_off_address_long,
                                        "drop_off_addressDetails":this.state.drop_off_addressDetails,

                                        "drop_off_address_1": this.state.drop_off_address_1,
                                        "drop_off_address_1_lat":this.state.drop_off_address_1_lat,
                                        "drop_off_address_1_long":this.state.drop_off_address_1_long,
                                        "drop_off_address_1Details": this.state. drop_off_address_1Details,


                                        "pickupDate":this.state.pickup_date,
                                        "pickupTime":this.state.pickup_time,
                                        "instruction":this.state.instruction_1,
                                        "load_category":this.state.other_flag==1?this.state.load_Category_Manualtext:this.state.load_category,
                                        "load_category_id":this.state.other_flag==0?this.state.load_category_id:this.state.other_flag,
                                       " other_flag":this.state.other_flag,
                                        
                                    }
                                  

                                    if(!this.isValid()){
                                    }else{
                                    this.props.navigation.navigate('BookingSummary',{userDetails_1:this.userDetails,userDetails_2:user_data});
                                    }
                                    // this.props.navigation.navigate('BookingSummary',{userDetails_1:this.userDetails,userDetails_2:user_data});


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