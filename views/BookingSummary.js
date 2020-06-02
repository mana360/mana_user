/* screen -MANAPPCUS069
    design by -Harshad 
    redesign by Udayraj (call for calendar, timer and map)
 */
import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, TextInput, Modal, DatePickerAndroid, TimePickerAndroid} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleBookingSummary, StyleLocationDetails} from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import Textarea from 'react-native-textarea';
import { Dropdown } from 'react-native-material-dropdown';
import moment from 'moment'
import { MainPresenter } from '../config/MainPresenter';
import ApiConstants from '../config/ApiConstants';
import { FlatList } from 'react-native-gesture-handler';
import { Picker } from 'native-base';
import {getUserData  } from "../config/AppSharedPreference";


export default class BookingSummary extends React.Component{
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    constructor(props){
        super(props)

        this.state={
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


            modalVisible: false,

            pickup_date:"",
            pick_time:"",
            instructions:"",
            load_category:"",
            load_category_id:"",
            other_flag:"",


            name:"",
            contact_number:"",
            // contact_number_additional:"",
           
            discountAmount:0,
            discountAmount_ID:0,
            booking_amount:"",
            grand_total:0,
            total_price:0,
            vat:0,

            countList:[],
            otherServicesList:[],
            selectedOtherService_value:[],
            otherServicesdata:[],
            otherServiceSelected:new Map(), 
            otherServices_amount:"0",
            truck_Type_id:"",
        }
        // this.userInfo=[];
        this.userDetails_1={};
        this.userDetails_2={};
    }

    componentDidMount(){
    this.getcalculatingBooking();
        this.initServices();

     
    }
async initServices(){
    this.getOtherServices();
    let i=1
    for(i=1;i<=15;i++){
            this.state.countList.push(i);
        console.log("count==>"+i);
    }
        this.userInfo = await getUserData();
        this.userInfo = JSON.parse(this.userInfo);
        console.log("userData_object========>"+ JSON.stringify(this.userInfo));
        console.log("userData_object========>"+ JSON.stringify(`${this.userInfo.first_name} ${this.userInfo.last_name}`));

    this.setState({name:`${this.userInfo.first_name} ${this.userInfo.last_name}`,
    contact_number:`${this.userInfo.telephone_no}`
});
     
        this.userDetails_1=this.props.navigation.getParam('userDetails_1');
        console.log("userDetails_1=====>"+JSON.stringify(this.userDetails_1));
        this.userDetails_2=this.props.navigation.getParam('userDetails_2');
        console.log("userDetails_2__=====>"+JSON.stringify(this.userDetails_2));


        this.setState({
            pick_up_address:this.userDetails_2.pick_up_address,
            pick_up_address_lat:this.userDetails_2.pick_up_address_lat,
            pick_up_address_long:this.userDetails_2.pick_up_address_long,
            pick_up_addressDetails:this.userDetails_2.pick_up_addressDetails,
            

            drop_off_address:this.userDetails_2.drop_off_address,
            drop_off_address_lat:this.userDetails_2.drop_off_address_lat,
            drop_off_address_long:this.userDetails_2.drop_off_address_long,
            drop_off_addressDetails:this.userDetails_2.drop_off_addressDetails,

            drop_off_address_1:this.userDetails_2.drop_off_address_1,
            drop_off_address_1_lat:this.userDetails_2.drop_off_address_1_lat,
            drop_off_address_1_long:this.userDetails_2.drop_off_address_1_long,
            drop_off_address_1Details:this.userDetails_2.drop_off_address_1Details,

            pickup_date:this.userDetails_2.pickupDate,
            pick_time:this.userDetails_2.pickupTime,
            instructions:this.userDetails_2.instruction,
            load_category:this.userDetails_2.load_category,
            other_flag:this.userDetails_2.other_flag,
            load_category_id:this.userDetails_2.load_category_id,
            truck_Type_id:this.userDetails_1.category_id,
            // name:`${this.userInfo.first_name} ${this.userInfo.last_name}`,
            // contact_number:`${this.userInfo.contact}`

        }) 
    }
isValid(){
   
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
    if(this.state.name==""){
        alert("Please Enter Name");
        return false;
    }
    if(this.state.contact_number==""){
        alert("Please Enter Contact Number");
        return false;
    }
    if(this.state.contact_number.length>10&&this.state.contact_number.length<13){
        alert("Please Enter Contact Number");
        return false;
    }

    return true
}

async getOtherServices(){
    await this.presenter.callGetApi(ApiConstants.getotherServices,"",true);
}
   
   async bookCMLtrip(){
    
    let params={
        "pickup_address":`${this.state.pick_up_addressDetails},${this.state.pick_up_address}`,
        "pickup_latlng":`${this.state.pick_up_address_lat},${this.state.pick_up_address_long}`,
        "drop1_address":`${this.state.drop_off_addressDetails},${this.state.drop_off_address}`,
        "drop1_latlng":`${this.state.drop_off_address_lat},${this.state.drop_off_address_long}`,
        "drop2_address":`${this.state.drop_off_address_1Details},${this.state.drop_off_address_1}`,
        "drop2_latlng":`${this.state.drop_off_address_1_lat},${this.state.drop_off_address_1_long}`,
        "truck_type_id":this.state.truck_Type_id,
        "pickup_date":this.state.pickup_date,
        "pickup_time":this.state.pick_time,
        "instructions":this.state.instructions,
        "other_services":[{"service_id" : 1, "qty": 23}],
        // this.state.otherServiceSelected,
        "booking_amount":this.state.booking_amount,
        "discount":this.state.discountAmount,
        "grand_total":this.state.grand_total,
        "coupon_id":this.state.coupon_id,
        "load_category_id":this.state.load_category_id,
        "name":this.state.name,
        "contact_number":this.state.contact_number,
       }
       await this.presenter.callPostApi(ApiConstants.bookCMLTrip,params,true);
   }
   
   async getcalculatingBooking(item){
       let params=  {
        "pickup_latlng":{
            "latitude": this.state.pick_up_address_lat,
            "longitude":this.state.pick_up_address_long
        },
             "drop1_latlng":{
            "latitude": this.state.drop_off_address_lat,
            "longitude":this.state.drop_off_address_long,
        },
        "drop2_latlng":{
            "latitude": this.state.drop_off_address_1_lat,
            "longitude":this.state.drop_off_address_1_long
        },
        "truck_type_id" : this.userDetails_1.category_id,
        "pickup_date": this.state.pick_time,
        "load_category_id":this.state.load_category_id , 
        
        "other_services" : this.state.otherServiceSelected,
        "coupon_id":item==[]?this.state.discountAmount_ID:item.coupon_id,

        "discount" :item==[]?this.state.discountAmount:item.coupon_desc,  
        
    }

    // console.log("calculating PArams====>"+ JSON.stringifyparams);
       await this.presenter.callPostApi(ApiConstants.calculateBooking,params,true);
    }

   async onResponse(apiConstant, data) {
       switch (apiConstant) {
         case ApiConstants.getotherServices: {
           if (data.status) { 
               console.log(data);
               this.setState({otherServicesList:data.other_services,selectedOtherService_value:data.other_services});

               console.log("other services List==>"+ JSON.stringify(this.state.otherServicesList));
   
            } else {
               alert(data.message)
             }
             break;
         }
         case ApiConstants.bookCMLTrip:{
             if(data.status){
            //    this.props.navigation.navigate('PaymentMethod');
             }else{
                //  alert(data.message);
            //    this.props.navigation.navigate('PaymentMethod');

             }
             break;
         }

         case ApiConstants.calculateBooking:{
            if(data.status){
                this.setState({grand_total:data.booking_summary.grand_total,
                    otherServices_amount:data.booking_summary.other_services,
                    discountAmount:parseInt(data.booking_summary.discount),
                    total_price:data.booking_summary.booking_amount
                  });
              }else{
                  alert(data.message);
              }
              break;

         }
         
         }
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

    async openCalender(){
        try {
          let today = moment();
              today.local(true);
          const { action, year, month, day } = await DatePickerAndroid.open({
            date: new Date(today),
            minDate:new Date(today),
          })
          if (action !== DatePickerAndroid.dismissedAction) {
            const finalDate = `${month + 1}/${day}/${year}`;
            console.log(finalDate)
            this.setState({ pickup_date: moment(finalDate).format('DD/MM/YYYY') })
            console.log("selected date ===>"+this.state.pickup_date)
          }
    
        } catch ({ code, message }) {
          console.warn('Cannot open date picker', message);
        }
    }
 
    async openTimer(){

        var { action, minute, hour } = await TimePickerAndroid.open({      
            is24Hour: false,
          });
          if (action === TimePickerAndroid.dismissedAction) {
              this.setState({pick_time:""})
              return;
          }
          // setting AM/PM and hour to 12 by checking condition
          let am_pm = 'AM';
          
          if(hour>11){
            am_pm = 'PM';
            if(hour>12){
              hour = hour - 12;
            }
          }
          
          if(hour == 0){
            hour = 12;
          }
            const selectedTime = `${hour}:${minute} ${am_pm}` ;
            this.setState({ pick_time:selectedTime})
    }

applyDiscount(amount){
    this.setState({discountAmount:amount})
}

removeDiscount(){
    this.setState({discountAmount:0})
}

    render(){

        let data = [{
            value: 'Subject 1',
          }, {
            value: 'Subject 2',
          }, {
            value: 'Subject 3',
          }];
        
        let {navigation} = this.props
        return(
            <View style={{flex:1,}}>
                
                {/* Header Start */ }
                   <HeaderBar  title="Booking Summary" isBack={true} isLogout={true} navigation={navigation}/>
                {/* Header Close */ }
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} />

                {/* Main Body Start */}
                    <ScrollView bounces={false} style={{width:wp('100%')}}>
                        <View style={{flex:1, backgroundColor:Constants.COLOR_WHITE}}>                        
                            <View style={StyleBookingSummary.booksummWrapp}>
                               
                                <View style={StyleBookingSummary.booksumminnWrapp}>                            
                                   
                                   <View style={StyleBookingSummary.topBox}>
                                        <View style={[StyleBookingSummary.topinnBox, { borderBottomColor:'#a9b0b5', borderBottomWidth:0.8,} ]}>
                                    <Text style={StyleBookingSummary.topinnTxt}>Truck Type -{this.userDetails_1.category_name}</Text>
                                        </View>
                                        <View style={StyleBookingSummary.topinnBox}>
                                       <Text style={StyleBookingSummary.topinnTxt}>Load Category -{this.userDetails_2.load_category}</Text>
                                        </View>
                                   </View>
                                
                                    <View style={StyleLocationDetails.inputContainer}>
                                        <View style={StyleLocationDetails.labelBoxNew}>
                                            <Text style={StyleLocationDetails.labelTextNew}>{Constants.PickUpAddress}</Text>
                                        </View>
                                        <TextInput
                                            placeholder='Enter Pickup Address,'
                                            placeholderTextColor="#a4a4a4"
                                            ref={(ref)=>{this.pick_up_address=ref}}
                                            value={this.state.pick_up_address}
                                            onChangeText={
                                                (value)=>{
                                                    this.setState({pick_up_address:value});
                                                }
                                            }
                                            style={StyleLocationDetails.inputBox}
                                        />
                                        <TouchableOpacity style={StyleLocationDetails.iconView}
                                            onPress={()=>{
                                                let flag="1"
                                                this.getAddress(flag);
                                                // this.props.navigation.navigate("MapViews");

                                            }}
                                        >
                                            <Image style={StyleLocationDetails.labelIconLoc}
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

                                    <View style={StyleLocationDetails.inputContainer}>
                                        <View style={StyleLocationDetails.labelBoxNew}>
                                            <Text style={StyleLocationDetails.labelTextNew}>{Constants.DropOffAddress1}</Text>
                                        </View>
                                        <TextInput placeholder='Enter Dropoff Address' 
                                        placeholderTextColor="#a4a4a4"
                                        ref={(ref)=>{this.drop_off_address1=ref}}
                                        value={this.state.drop_off_address}
                                        onChangeText={
                                            (value)=>{
                                                this.setState({drop_off_address:value})
                                            }
                                        }
                                        style={StyleLocationDetails.inputBox} />

                                        <TouchableOpacity style={StyleLocationDetails.iconView}
                                            onPress={()=>{
                                                this.props.navigation.navigate("MapViews");
                                                let flag="2"
                                                this.getAddress(flag);
                                            }}
                                        >
                                            <Image style={StyleLocationDetails.labelIconLoc}
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
                                           
                                    <View style={StyleLocationDetails.inputContainer}>
                                        <View style={StyleLocationDetails.labelBoxNew}>
                                            <Text style={StyleLocationDetails.labelTextNew}>{Constants.DropOffAddress2}</Text>
                                        </View>
                                        <TextInput placeholder='Enter Dropup Address' 
                                        placeholderTextColor="#a4a4a4"
                                        ref={(ref)=>{this.drop_off_address2=ref}}
                                        value={this.state.drop_off_address_1}
                                        onChangeText={
                                            (value)=>{
                                                this.setState({drop_off_address_1:value})
                                            }
                                        }
                                        style={StyleLocationDetails.inputBox} />
                                        <TouchableOpacity style={StyleLocationDetails.iconView}
                                            onPress={()=>{
                                                let flag="3"
                                                this.getAddress(flag);
                                                // this.props.navigation.navigate("MapViews");
                                            }}
                                        >
                                            <Image style={StyleLocationDetails.labelIconLoc}
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
                                    value={this.state.drop_off_address_1Details}
                                    onChangeText={
                                        (value) => {
                                            this.setState({ drop_off_address_1Details: value })
                                        }
                                    }
                                    style={StyleLocationDetails.inputBox} />
                            </View>

                                    <View style={StyleLocationDetails.inputContainer}>
                                        <View style={StyleLocationDetails.labelBoxNew}>
                                            <Text style={StyleLocationDetails.labelTextNew}>{Constants.PickUpDate}</Text>
                                        </View>
                                        <TextInput 
                                            placeholder='Select Pick Up Date'
                                            style={StyleLocationDetails.inputBox}
                                            value={this.state.pickup_date}
                                            editable={false} />

                                        <TouchableOpacity style={StyleLocationDetails.iconView}
                                            onPress={()=>{ this.openCalender() }}
                                        >
                                            <Image style={StyleLocationDetails.labelIconLoc}
                                                source={require('../images/date_icon.png')} />
                                        </TouchableOpacity>
                                        
                                    </View>
                                    
                                    <View style={StyleLocationDetails.inputContainer}>
                                        <View style={StyleLocationDetails.labelBoxNew}>
                                            <Text style={StyleLocationDetails.labelTextNew}>{Constants.PickUpTime}</Text>
                                        </View>
                                        <TextInput 
                                            placeholder='Select Pick Up Time' 
                                            style={StyleLocationDetails.inputBox} 
                                            value={this.state.pick_time}
                                            editable={false}
                                        />
                                        <TouchableOpacity style={StyleLocationDetails.iconView}
                                            onPress={()=>{ this.openTimer() }}
                                        >
                                            <Image style={StyleLocationDetails.labelIconLoc}
                                                source={require('../images/time_icon.png')} />
                                        </TouchableOpacity>
                                    </View> 
                                    
                                    <View style={StyleLocationDetails.instructContainer}>
                                        <View style={StyleLocationDetails.labelBoxNew}>
                                            <Text style={StyleLocationDetails.labelTextNew}>{Constants.Instructions}</Text>
                                        </View>
                                        <Textarea                                       
                                            style={StyleLocationDetails.textarea}
                                            maxLength={100}
                                            placeholder="Enter Instruction"
                                            placeholderTextColor={'#a4a4a4'}
                                            value={this.state.instructions}
                                            onChangeText={(value)=>{
                                                this.setState({instructions:value});
                                            }}
                                        />
                                    </View>  
                                    
                                    <View style={StyleLocationDetails.inputContainer}>
                                        <View style={StyleLocationDetails.labelBoxNew}>
                                            <Text style={StyleLocationDetails.labelTextNew}>{Constants.Name}</Text>
                                        </View>
                                        <TextInput placeholder='Name' 
                                            placeholderTextColor="#a4a4a4"
                                            editable={false}
                                            style={StyleLocationDetails.inputBox}
                                            value={this.state.name}
                                            onChangeText={(val)=>{this.setState({name:val})}}    
                                        />
                                    </View>
                                    
                                    <View style={StyleLocationDetails.inputContainer}>
                                        <View style={StyleLocationDetails.labelBoxNew}>
                                            <Text style={StyleLocationDetails.labelTextNew}>{Constants.ContactNumber}</Text>
                                        </View>
                                        <TextInput placeholder='Contact Number ' 
                                            placeholderTextColor="#a4a4a4"
                                            editable={false}
                                            style={StyleLocationDetails.inputBox}
                                            keyboardType="number-pad"
                                            value={this.state.contact_number}
                                            onChangeText={
                                                (val)=>{
                                                    if(!isNaN(val)){
                                                        this.setState({contact_number:val})
                                                    }else{
                                                        this.setState({contact_number:""})
                                                    }
                                                }
                                            }
                                        />
                                    </View>
                                    
                                    {/* <View style={StyleLocationDetails.inputContainer}>
                                        <View style={StyleLocationDetails.labelBoxNew}>
                                            <Text style={StyleLocationDetails.labelTextNew}>{Constants.AdditionalContactNumber}</Text>
                                        </View>
                                        <TextInput placeholder='+27 680308024 ' 
                                            placeholderTextColor="#a4a4a4"
                                            style={StyleLocationDetails.inputBox}
                                            value={this.state.contact_number_additional}
                                            keyboardType="number-pad"
                                            onChangeText={
                                                (val)=>{
                                                    if(!isNaN(val)){
                                                        this.setState({contact_number_additional:val})
                                                    }
                                                    else{
                                                        this.setState({contact_number_additional:""})
                                                    }
                                                }
                                            }
                                        />
                                    </View>    */}

                                    <View style={[StyleBookingSummary.otherServiceBox, {display: "flex"} ]}>
                                        <Text style={StyleBookingSummary.otherTxtser}>Other Services</Text>
                                        <View style={StyleBookingSummary.grayBox}>
                                             
                                               {
                                                   this.state.otherServiceSelected==[]?null:
                                                this.state.otherServiceSelected.forEach((item)=>{
                                                    <Text style={{color:'#a3a3a3', fontFamily: "Roboto-Light",fontSize:14, width:"90%",}}>
                                                    </Text>
                                                })

                                               }
                                                     

                                                 <Text style={{color:'#a3a3a3', fontFamily: "Roboto-Light",fontSize:14, width:"90%",}}>
                                                    {/* {item.service_id}-{item.qty}, */}
                                                      </Text>
                                            <TouchableOpacity style={StyleBookingSummary.rtSec}
                                            onPress={()=>{
                                                this.setState({otherServices:""});
                                            
                                                
                                                // this.setState({otherServiceSelected:temparry})
                                            }}>
                                                    <Image style={StyleBookingSummary.removeImg}
                                                    source={require('../images/remove.png')} />
                                            </TouchableOpacity>
                                        </View>
                                    </View> 

                                    <TouchableOpacity  
                                        onPress={() => {this.setModalVisible(true);}}
                                        underlayColor='#fff' 
                                        style={StyleLocationDetails.logButton}>
                                        <Text style={StyleLocationDetails.logButtonText}>{Constants.AddServices}</Text>
                                    </TouchableOpacity>  
 
                                </View>     

                                <View style={StyleBookingSummary.priceBox}>

                                    <View style={{ flexDirection:'row', }}>
                                        <Text style={StyleBookingSummary.priceTxt}>{Constants.TotalPrice}</Text>
                                        <Text style={StyleBookingSummary.priceVol}>{this.state.total_price}</Text>
                                    </View>

                                    <View style={{ flexDirection:'row', borderTopColor:'#c6c6c6', borderTopWidth:1, paddingTop:15, marginTop:15,}}>
                                        <Text style={StyleBookingSummary.priceTxt}>{Constants.OtherServices}</Text>
                                        <Text style={StyleBookingSummary.priceVol}>{this.state.otherServices_amount}</Text>
                                    </View>
                                    
                                    {/* <View style={{ flexDirection:'row', borderTopColor:'#c6c6c6', borderTopWidth:1, paddingTop:15, marginTop:15,}}>
                                        <Text style={StyleBookingSummary.priceTxt}>{Constants.vat}</Text>
                                        <Text style={StyleBookingSummary.priceVol}>{this.state.vat} %</Text>
                                    </View> */}

                                    <View style={{ flexDirection:'row', borderTopColor:'#c6c6c6', borderTopWidth:1, paddingTop:15, marginTop:15,}}>
                                        <Text style={[StyleBookingSummary.priceTxt,{width:'65%'}]}>{Constants.DiscountVoucher}</Text>
                                        <Text style={[StyleBookingSummary.priceVol,{width:'20%',}]}> R {this.state.discountAmount}</Text>
                                        <TouchableOpacity
                                            style={{width:30, justifyContent:'center', alignItems:'center', marginRight:5, marginTop:5}}
                                            onPress={()=>{this.removeDiscount()}}
                                        >
                                            <Image style={ this.state.discountAmount==0?{display:"none"}:{width:20, height:20, resizeMode:'stretch'}}
                                                source={require('../images/remove.png')} />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{flexDirection:'row', borderTopColor:'#c6c6c6', borderTopWidth:1, paddingTop:15, marginTop:15, }}>
                                        <Text style={[StyleBookingSummary.priceTxt, {color:Constants.COLOR_GREEN, textTransform:"uppercase", fontFamily: "Roboto-Bold",} ]}>{Constants.GrandTotal}</Text>
                                        <Text style={[StyleBookingSummary.priceVol, {color:Constants.COLOR_GREEN, fontFamily: "Roboto-Bold",} ]}>{this.state.grand_total}</Text>
                                    </View>
                                   
                                </View>            
                                
                                <TouchableOpacity 
                                     onPress={()=>{
                                        this.props.navigation.navigate('DiscountVouchers',{'isOrder':true, getAmount:(item)=>{
                                            //  console.log("discount Amount==>"+JSON.stringify(item.coupon_id));
                                            this.setState({discountAmount:item.coupon_desc,discountAmount_ID:item.coupon_id});
                                            // console.log("discount Amount==>"+JSON.stringify(item.coupon_id));
                                           
                                            this.getcalculatingBooking(item);
                                            }})
                                    }}
                                    style={StyleBookingSummary.discntBtn}
                                >
                                    <Text style={StyleBookingSummary.discntText}>Apply Discount</Text>
                                </TouchableOpacity>    
                                
                                <TouchableOpacity 
                                    onPress={()=>{
                                        this.bookCMLtrip();
                              this.props.navigation.navigate('PaymentMethod');

                                    }}
                                    style={[StyleLocationDetails.logButton, {marginTop:0, marginHorizontal:25,} ]}
                                >
                                    <Text style={StyleLocationDetails.logButtonText}>{Constants.BookTrip}</Text>
                                </TouchableOpacity>   

                            </View>                        
                        
                        </View>
                    
                    </ScrollView> 

                            <Modal          
                                animationType="fade"
                                transparent={true}
                                visible={this.state.modalVisible}
                                // visible={true}
                            >
                                        <View style={StyleBookingSummary.modalpopupBox}>
                                            <View style={StyleBookingSummary.modalinnBox}>                                               
                                                 
                                            <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10 }}
                                                    onPress={()=>{
                                                        this.setState({modalVisible:false});
                                                }}  
                                            >
                                            <Image source={require('../images/close.png')}
                                                style={{ width: 15, height: 15 }}
                                            />
                                            </TouchableOpacity>
                                                <View style={StyleBookingSummary.serpopSec}> 
                                                    <Text style={StyleBookingSummary.othserTxt}>Other Services</Text>  


                                                    {/* // <View style={StyleBookingSummary.inputboxDropDown}>
                                                            //     <View style={[StyleLocationDetails.labelBoxNew, {top:-9} ]}>
                                                            //     <Text style={[StyleLocationDetails.labelTextNew, {fontSize:13,} ]}>{item.service_name}</Text>
                                                            // </View>
                                                            
                                                        //    </View>  */}
                                                    <FlatList
                                                        data={this.state.otherServicesList}
                                                        extraData={this.state}
                                                        renderItem={({item,index})=>(
                                                           
                                                     <View style={{flex:1,flexDirection:'row',paddingBottom:20}}>
                                                        <View style={{paddingVertical:10,width:'60%'}}>
                                                        <Text style={[StyleLocationDetails.labelTextNew, {fontSize:13,} ]}>{item.service_name}</Text>
                                                      </View>

                                                      <View style={{width:"40%",borderWidth:1,borderColor:'grey',borderRadius:50}}>
                                                         <Picker
                                                                    mode='dropdown'
                                                                    style={{ color: Constants.COLOR_GREY_DARK, width: '95%', alignSelf: 'center', paddingVertical: 20 }}
                                                                    selectedValue={this.state.selectedOtherService_value[index].qty}
                                                                    onValueChange={(value) => {
                                                                        let tempArry=this.state.selectedOtherService_value
                                                                            tempArry[index].qty=value
                                                                                // let selected_value=new Set();
                                                                                this.state.otherServiceSelected.set({service_id:item.id,qty:value});
                                                                        this.setState({selectedOtherService_value:tempArry});
                                                                        console.log("othe service selected value and id==>"+value+","+tempArry[index].id);
                                                                        let temp=this.state.otherServiceSelected;
                                                                        let arry = Array.from(temp);

                                                                        console.log("Selected Value Array ==> "+JSON.stringify(arry));  
                                                                        // this.setState({otherServicesdata:arry});    
                                                                        // this.setState({otherServiceSelected:arry});
                                                                        // console.log("Selected Value Array ==> "+JSON.stringify(this.state.a));
                                                                        // this.setState({otherServiceSelected:arry});
                                                                        // console.log("Selected Value Array ==> "+this.state.otherServiceSelected);

                                                        
                                                                    }}
                                                                >
                                                                    <Picker.Item label='Select' value='-1' />
                                                                {
                                                                    this.state.countList.map((item,index)=>
                                                                    
                                                                     <Picker.item key={item}  label={""+item} value={item}/>
                                                                    )
                                                                  
                                                                    }
                                                                </Picker>
                                                                
                                                                
                                                                </View>
                                                            </View>
                                                           
                                                      
                                                                    
                                                      )}

                                                        /> 
                                                 
                                                 
                                                 

                                                       
                                                    <TouchableOpacity  
                                                            onPress={()=>{
                                                                this.setState({modalVisible:false});
                                                                // this.getOtherServices();
                                                            //   this.props.navigation.navigate('PaymentMethod');
                                                                 this.getcalculatingBooking();

                                                        }}
                                                        style={[StyleLocationDetails.logButton, {marginTop:0, marginBottom:0,} ]}>
                                                        <Text style={StyleLocationDetails.logButtonText}>{Constants.SUBMIT}</Text>
                                                    </TouchableOpacity> 
                                                </View>

                                            </View>
                                        </View>
                                    </Modal>
                
                <FooterBar navigation={navigation}/>            
        
        </View>
        )
    }

}