/* screen -MANAPPCUS064
    design by -Harshad 
    dev + api by Udayraj
 */
import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, DatePickerAndroid, TimePickerAndroid, TextInput, Modal, FlatList} from 'react-native';
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
        this.loadCategoryString="";

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
            isTimerError:true,

            selectedItems:[],
            LoadCategoryItems:[],
            LoadCategoryItemsTemp:'',
            LoadCategoryItemsSelected:[],
            isLoadCategoryVisible:false,
            isOtherLoadCategorySelected:false,
            otherLoadCategoryText:"",
        };
        this.truck_type_id="";
        this.truck_name="";
        this.truck_desc="";
        this.load_category_id="";
        this.other_flag="";
        this.category_name="";

    }
    
    componentDidMount(){
        this.initService();
        console.log("truck name ==> "+this.props.navigation.getParam('truck_category_name'))
    }

    async initService(){
     this.truck_type_id=this.props.navigation.getParam('truck_type_id');    
     this.truck_name = this.props.navigation.getParam('truck_category_name');
     this.truck_desc = this.props.navigation.getParam('truck_desc');

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
                this.setState({ pickup_date: moment(finalDate).format('YYYY-MM-DD') })
                console.log("selected date ===>" + this.state.pickup_date)
            }

        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }

    async openTimer() {
        var { action, minute, hour, second } = await TimePickerAndroid.open({
            is24Hour: true,
            mode:"spinner"
        });
        if (action === TimePickerAndroid.dismissedAction) {
            this.setState({ pickup_time: "" })
            return;
        }
        const selectedTime = hour+":"+minute;
        console.log("selected = time ==> "+selectedTime)

        let currentHour = new moment().format('H')
        let currentMinute = new moment().format('m')

        if(this.state.pickup_date == new moment().format('YYYY-MM-DD')){
            if(hour>=currentHour){
                if(minute>=currentMinute){
                    console.log("Time is valid")
                    this.setState({ pickup_time:  selectedTime+":00", isTimerError:false})
                }else{
                    // alert('Enter correct minutes in time.')    
                }

            }else{
                // alert('Enter correct hours in time.')
            }

            // if(moment(selectedDT).isBefore(new moment().format('YYYY-MM-DD H:m'))){
            //     alert("Enter correct time.")
            // }
            // else{
            //     console.log("time correct")
            //     this.setState({ pickup_time:  selectedTime+":00", isTimerError:false})
            // }
        }else{
            this.setState({ pickup_time:  selectedTime, isTimerError:false})
        }
        
    }

    getMapInfo(resp) {
        console.log("RESP AALA RE ====>" + resp.results[1].formatted_address);
    }
    
    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
        console.log("new item ===> "+JSON.stringify(selectedItems))
    };

    onResponse(apiConstant, data) {
        switch (apiConstant) {
          case ApiConstants.LoadCategoryList: {
              if(data.status){
                  this.setState({loadCategoryList : data.load_category,isLoadCategoryFilled:1});
                  let cat=""
                  this.state.loadCategoryList.map((item)=>{
                      cat ={
                          "category_id" : item.category_id,
                          "category_name": item.category_name,
                          "isChecked":false
                      }
                      this.state.LoadCategoryItems.push(cat)
                      cat=""
                  })
                }
              else {
                  alert(data.message);
              }
            break;
          }

          case ApiConstants.getotherServices:{
              if(data.status){
                        this.setState({otherServicesList:data.other_services});
              }else{

              }
              break;

          }
          
        }
    }

    isValid(){
        if(this.state.LoadCategoryItemsSelected==""){
            alert("Please Select Load Category");
            return false
        }
        if(this.state.isOtherLoadCategorySelected && this.state.otherLoadCategoryText==""){
            alert("Please Enter Other Load Category");
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
        // if(this.state.isTimerError==false){
        //     alert("Please enter correct time")
        //     return false
        // }
        return true
    }
    
    getloadCategoryList(){
    this.presenter.callGetApi(ApiConstants.LoadCategoryList,"",true);
    }

    getAddress(flag){
        //MapViews removed
        this.props.navigation.navigate('placePicker', {
            flag_location:flag, address: (resp) => {
                console.log("callback flag==>"+flag);
                console.log("received location ==>"+JSON.stringify(resp))
                        if(flag=="1"){
                            this.setState({
                                pick_up_address:resp.address,
                                pick_up_address_lat:resp.latitude,
                                pick_up_address_long:resp.longitude
                                    });
                        }
                        if(flag=="2"){
                                this.setState({
                                drop_off_address:resp.address,
                                drop_off_address_lat:resp.latitude,
                                drop_off_address_long:resp.longitude
                                });
                        }
                        if(flag=='3'){
                            this.setState({
                                drop_off_address_1:resp.address,
                                drop_off_address_1_lat:resp.latitude,
                                drop_off_address_1_long:resp.longitude
                                });
                        }
            }
        })
    }

    closeCategoryModal(){
        this.loadCategoryString=""
        let cat=""
        this.state.LoadCategoryItems.map((item)=>{
            cat ={
                "category_id" : item.category_id,
                "category_name": item.category_name
            }
            if(item.category_name=="Others" && item.isChecked){
                this.setState({isOtherLoadCategorySelected:true})
            }else{
                this.setState({isOtherLoadCategorySelected:false, otherLoadCategoryText:""})
            }
            if(item.isChecked==true){
                //check if already exists, if exists then remove
                if(!this.isExists(item)){
                    this.state.LoadCategoryItemsSelected.push(cat)
                    this.loadCategoryString = this.loadCategoryString+item.category_id+","
                }
            }
        })
        console.log("item selected are ====>"+JSON.stringify(this.state.LoadCategoryItemsSelected))
        console.log("load cat ==="+this.loadCategoryString)
        this.setState({isLoadCategoryVisible:false,})
    }

    isExists(e){
        let isPresent = false
        this.state.LoadCategoryItemsSelected.map((item)=>{
            if(item.category_id == e.category_id){
                //exists
                isPresent = true
            }
        })
        return isPresent
    }

    render() {

        let { navigation } = this.props;
        return (
            <View style={{ flex: 1, }}>

                <HeaderBar title="Location Details" isBack={true} isLogout={true} navigation={navigation} />

                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} />

                <ScrollView bounces={false} style={{ width: wp('100%') }}>

                    <View style={{ flex: 1, backgroundColor: Constants.COLOR_WHITE }}>

                        <View style={StyleLocationDetails.locationWrapp}>

                            <View style={[StyleLocationDetails.inputContainer,{}]}>
                                <View style={StyleLocationDetails.labelBoxNew}>
                                    <Text style={StyleLocationDetails.labelTextNew}>{Constants.PickUpAddress}</Text>
                                </View>
                                <Text style={[StyleLocationDetails.inputBox,{marginTop:10}]} numberOfLines={1}>
                                    {this.state.pick_up_address=="" ?"Enter Pickup Address" :this.state.pick_up_address}
                                </Text>
                                {/* <TextInput
                                    placeholder='Enter Pickup Address'
                                    placeholderTextColor="#a4a4a4"
                                    editable={false}
                                    ref={(ref) => { this.pick_up_address = ref }}
                                    //value={this.state.pick_up_address}
                                    value="abcde fh gjhid uh asdoa uwhe 23io4j 8snn"
                                    onChangeText={
                                        (value) => {
                                            this.setState({ pick_up_address: value })
                                        }
                                    }
                                    style={[StyleLocationDetails.inputBox,{display:'none'}]} /> */}
                              
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

                            <View style={this.state.add_nextAddress == '1' ? [StyleLocationDetails.inputContainer, { marginBottom: 20, width: '94%' }] : [StyleLocationDetails.inputContainer, { marginBottom: 20}]}>
                                <View style={StyleLocationDetails.labelBoxNew}>
                                    <Text style={StyleLocationDetails.labelTextNew}>{Constants.DropOffAddress} 1</Text>
                                </View>
                                <Text style={[StyleLocationDetails.inputBox,{marginTop:10}]} numberOfLines={1}>
                                    {this.state.drop_off_address=="" ?"Drop Off Address" :this.state.drop_off_address}
                                </Text>
                                {/* <TextInput placeholder='Drop Off Address'
                                    placeholderTextColor="#a4a4a4"
                                    editable={false}
                                    ref={(ref) => { this.drop_off_address = ref }}
                                    value={this.state.drop_off_address}
                                    onChangeText={
                                        (value) => {
                                            this.setState({ drop_off_address: value })
                                        }
                                    }
                                    style={StyleLocationDetails.inputBox} /> */}
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
                                <Text style={[StyleLocationDetails.inputBox,{marginTop:10}]} numberOfLines={1}>
                                    {this.state.drop_off_address_1=="" ?"Drop Off Address" :this.state.drop_off_address_1}
                                </Text>
                                {/* <TextInput placeholder='Drop Off Address'
                                    placeholderTextColor="#a4a4a4"
                                    editable={false}
                                    ref={(ref) => { this.drop_off_address = ref }}
                                    value={this.state.drop_off_address_1}
                                    onChangeText={
                                        (value) => {
                                            this.setState({ drop_off_address_1: value })
                                        }
                                    }
                                    style={[StyleLocationDetails.inputBox, { marginLeft: 15 }]} /> */}
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
                                    value={this.state.drop_off_address_1Details}
                                    onChangeText={
                                        (value) => {
                                            this.setState({ drop_off_address_1Details: value })
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
                                    onPress={() => { this.state.pickup_date =="" ? alert('Please select date first.') : this.openTimer() }}
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

                            <View style={[StyleLocationDetails.inputContainer,{}]}>
                                <View style={StyleLocationDetails.labelBoxNew}>
                                    <Text style={[StyleLocationDetails.labelTextNew, { textTransform: 'capitalize' }]}>{Constants.LOAD_CATEGORY}</Text>
                                </View>
                                <TouchableOpacity style={{justifyContent:'center', alignItems:'center', marginTop:15}}
                                    onPress={()=>{ 
                                        this.setState({LoadCategoryItemsSelected:[], isLoadCategoryVisible:true}) 
                                    }}
                                >
                                    <Text style={{textAlign:'center'}}>Select category</Text>
                                </TouchableOpacity>

                                {/* <Picker
                                    ref={(ref)=>{this.input_loadcategory = ref}}
                                    mode='dropdown'
                                    style={{ color: Constants.COLOR_GREY_DARK, width: '95%', alignSelf: 'center', paddingVertical: 20 }}
                                    selectedValue={this.state.load_category}
                                    onValueChange={(value) => {
                                        this.setState({ load_category: value });
                                        console.log(value);
                                        this.state.loadCategoryList.map((Item,index)=>{
                                           if(value==Item.category_name){
                                                this.load_category_id=Item.category_id;
                                                this.other_flag=Item.other_flag
                                                this.category_name=Item.category_name
                                                this.setState({load_category_id:Item.category_id,other_flag:Item.other_flag});
                                                console.log("id===> "+this.load_category_id)
                                                console.log("flag===> "+this.other_flag)
                                           }
                                        })
                                    }}
                                >
                                    <Picker.Item key={0} label='Select Load Category' value='-1' />
                                 {
                                     this.state.isLoadCategoryFilled==1
                                     ?
                                     this.state.loadCategoryList.map((item,index)=>
                                    
                                         <Picker.item key={item.category_id}  label={""+item.category_name} value={item.category_name}/>
                                     )
                                     :null 
                                    }
                                </Picker> */}
                            </View>

                            <View style={[StyleLocationDetails.inputContainer,{display : this.state.isOtherLoadCategorySelected ?'flex':'none'}]}>
                                <View style={StyleLocationDetails.labelBoxNew}>
                                    <Text style={[StyleLocationDetails.labelTextNew, { textTransform: 'capitalize' }]}>Other category</Text>
                                </View>
                                <TouchableOpacity style={{justifyContent:'center', alignItems:'center', marginTop:1}}
                                    onPress={()=>{ this.setState({isLoadCategoryVisible:true});
                                  
                                 }}
                                >
                                    <TextInput
                                        placeholder='Enter other category'
                                        placeholderTextColor="#a4a4a4"
                                        value={this.state.otherLoadCategoryText}
                                        onChangeText={
                                            (value) => {
                                                this.setState({ otherLoadCategoryText: value })
                                            }
                                        }
                                        style={StyleLocationDetails.inputBox}
                                    />
                                </TouchableOpacity>
                                    {/* <Text>{
                                        this.state.LoadCategoryItems.map((item,index)=>{
                                                item.category_name
                                        })
                                        }</Text> */}
                            </View>
                                <Text style={this.state.LoadCategoryItemsSelected==""?{display:'none'}:{paddingVertical:15,alignSelf:"center",paddingBottom:5,color:"grey",fontSize:14}}>Selected Load Category</Text>

                                    <View style={
                                                    this.state.LoadCategoryItemsSelected==""?{display:'none'}
                                                    :
                                                    {paddingVertical:10,width:"90%",flexDirection:'column',backgroundColor:Constants.COLOR_GREY_LIGHT,alignSelf:'center'}
                                                }>
                                       {   
                                        this.state.LoadCategoryItemsSelected.map((item,index)=>(
                                            <Text style={{paddingHorizontal:5}}>{item.category_name} ,</Text>
                                        ))
                                        }  
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
                                    if(this.state.isOtherLoadCategorySelected){
                                        this.state.LoadCategoryItemsSelected.map((item)=>{
                                            if(item.category_name=="Others"){
                                                item.category_name=this.state.otherLoadCategoryText
                                            }
                                        })
                                    }
                                    console.log("sending cat ===>"+JSON.stringify(this.state.LoadCategoryItemsSelected))
                                    this.loadCategoryString = this.loadCategoryString.slice(0,-1)
                                    console.log("string====> "+this.loadCategoryString)

                                    let drop_list =[
                                        {
                                            'drop_location': this.state.drop_off_address,
                                            'drop_latlng'  : this.state.drop_off_address_lat+","+this.state. drop_off_address_long,
                                            'drop_address' : this.state.drop_off_addressDetails
                                        },
                                        {
                                            'drop_location': this.state.drop_off_address_1,
                                            'drop_latlng'  : this.state.drop_off_address_1_lat+","+this.state. drop_off_address_long,
                                            'drop_address' : this.state. drop_off_address_1Details
                                        }
                                    ]

                                    let booking_data={
                                        "truck_trip_id" : this.truck_type_id,
                                        "truck_name":this.truck_name,
                                        "truck_desc":this.truck_desc,
                                        "pick_up_address": this.state.pick_up_address,
                                        "pick_up_address_lat":this.state.pick_up_address_lat,
                                        "pick_up_address_long":this.state.pick_up_address_long,
                                        "pick_up_addressDetails":this.state.pick_up_addressDetails,

                                        "drop_list" : drop_list,

                                        "drop_off_address":this.state.drop_off_address,
                                        "drop_off_address_lat":this.state.drop_off_address_lat,
                                        "drop_off_address_long":this.state. drop_off_address_long,
                                        "drop_off_addressDetails":this.state.drop_off_addressDetails,

                                        "drop_off_address_1": this.state.drop_off_address_1,
                                        "drop_off_address_1_lat":this.state.drop_off_address_1_lat,
                                        "drop_off_address_1_long":this.state.drop_off_address_1_long,
                                        "drop_off_address_1Details": this.state.drop_off_address_1Details,

                                        "pickupDate":this.state.pickup_date,
                                        "pickupTime":this.state.pickup_time,
                                        "instruction":this.state.instruction_1,
                                        "category_name":this.category_name,
                                        "load_category":this.state.LoadCategoryItemsSelected,
                                        "loadCategoryString":this.loadCategoryString,
                                        //"load_category":this.state.other_flag==1?this.state.load_Category_Manualtext:this.state.load_category,
                                        //"load_category_id":this.other_flag==0?this.load_category_id:this.other_flag,
                                       " other_flag":this.other_flag,
                                    }

                                    if(!this.isValid()){
                                    }else{
                                        this.props.navigation.navigate('BookingSummary',{'booking_data':booking_data});
                                    }
                                }}
                                style={StyleLocationDetails.logButton}
                            >
                                <Text style={StyleLocationDetails.logButtonText}>{Constants.Next}</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ScrollView>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.isLoadCategoryVisible}
                >
                    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(52, 52, 52, 0.8)'}}>
                        <View style={{width:'90%', maxHeight:300, backgroundColor:'white', padding:10, margin:15}}>
                            <TouchableOpacity style={{justifyContent:'flex-end', alignItems:'flex-end'}}
                                onPress={()=>{ this.closeCategoryModal()}}>
                                <Image source={require('../images/close.png')} style={{width:20, height:20, resizeMode:'cover'}}/>
                            </TouchableOpacity>
                                <Text style={{color:Constants.COLOR_GREY_DARK, fontSize:16, fontWeight:'bold', textAlign:'center'}}>Select category</Text>
                                <FlatList
                                    data={this.state.LoadCategoryItems}
                                    extraData={this.state}
                                    keyExtractor={(item, index)=>index.toString()}
                                    numColumns={1}
                                    renderItem={
                                        ({item,index})=>
                                        <TouchableOpacity style={{flexDirection:'row', padding:5, marginVertical:5}}
                                            onPress={()=>{
                                                const temp =[...this.state.LoadCategoryItems]
                                                temp[index].isChecked = ! temp[index].isChecked
                                                this.setState({LoadCategoryItems : temp})
                                            }}
                                        >
                                            <Image
                                                source={ item.isChecked ? require("../images/radio_buttons_selected.png") : require("../images/radio_buttons.png")}
                                                style={{width:20, height:20, resizeMode:'cover'}}
                                            />
                                            <Text style={{fontSize:14, marginLeft:10}}>{item.category_name} </Text>
                                        </TouchableOpacity>
                                    }
                                />
                                <TouchableOpacity style={{width:200, paddingVertical:7, alignSelf:'center', justifyContent:'center', alignItems:'center', backgroundColor:Constants.COLOR_GREEN}}
                                    onPress={()=>{this.closeCategoryModal()}}
                                >
                                    <Text style={{textAlign:'center', fontSize:16, color:Constants.COLOR_WHITE}}>Submit</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <FooterBar navigation={navigation} />

            </View>
        )
    }
}