/* screen -MANAPPCUS048,57,58,60
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, TextInput, FlatList } from 'react-native';
import { StyleCollectMyLoad, StyleLocationDetails, StyleTruckBooking } from '../config/CommonStyles';
import Constants from '../config/Constants';
import RBSheet from "react-native-raw-bottom-sheet";
import Carousel from "react-native-carousel";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { MainPresenter } from '../config/MainPresenter'
import ApiConstants from '../config/ApiConstants';
import { Table, TableWrapper, Row, Cell, Rows } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';

export default class CollectMyLoad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refer_emailId:"",
            refer_mobile_number:"",
            modalVisible_RateCard: false,
            ModalVisible_referFriend: false,
            truckList: [],
            collectMyLoadData: [
                // { title: "New Booking", type: "new", },
                //   { title: "My Booking", type: "my", desc: "fnsldfn fnsldfn fnsldfn fnsldfn fnsldfn lorempipsom", percent: 70 }, 
            ],

            truckdata_Head:[
                "SN","Truck Ton Capacity","Cargo Type","Rate/KM"
            ],
            otherServices_Head:[
                "SN","Other Services","Rate/KM"
            ],
            truckTableData: [],
              otherServicesData: []
        }
    }

    RateCard() {
        return (

            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', }}>

                <View style={[StyleCollectMyLoad.modalCotainer, { width: '95%' ,padding:25,justifyContent:'center'}]}>
                <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10,position:"absolute",paddingBottom:5}}
                            onPress={() => {
                                this.setState({ modalVisible_RateCard: false })
                            }}
                        >
                            <Image source={require('../images/close.png')}
                                style={{ width: 15, height: 15 }}
                            />
                    </TouchableOpacity>
              <ScrollView>
                 
                    
                    <Table borderStyle={{borderWidth: 1, borderColor:Constants.COLOR_GREY_DARK,}} style={{marginBottom:8}}>
                        <Row data={this.state.truckdata_Head} textStyle={{alignSelf:"center"}} />
                        <Rows data={this.state.truckTableData} textStyle={{alignSelf:"center"}} />
                    </Table>
                    <Table borderStyle={{borderWidth: 1, borderColor:Constants.COLOR_GREY_DARK}}>
                        <Row data={this.state.otherServices_Head} textStyle={{alignSelf:"center"}}/>
                        <Rows data={this.state.otherServicesData} textStyle={{alignSelf:"center"}}/>
                    </Table>
                    </ScrollView>
                </View>
            
            </View>


            // <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', }}>

            //     <View style={[StyleCollectMyLoad.modalCotainer, { width: '80%' }]}>
            //         <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10 }}
            //             onPress={() => {
            //                 this.setState({ modalVisible_RateCard: false })
            //             }}
            //         >
            //             <Image source={require('../images/close.png')}
            //                 style={{ width: 15, height: 15 }}
            //             />
            //         </TouchableOpacity>

            //         <Text style={StyleCollectMyLoad.modalText}>{Constants.RateCard}</Text>

            //         <View style={[StyleCollectMyLoad.modalrow, { borderBottomWidth: 0.5, borderBottomColor: Constants.COLOR_GREY_LIGHT, marginBottom: 10 }]}>
            //             <View style={StyleCollectMyLoad.modalcol1}>
            //                 <Text style={[StyleCollectMyLoad.modalTittle]}>{Constants.Size}</Text>
            //             </View>
            //             <View style={StyleCollectMyLoad.modalcol2}>
            //                 <Text style={StyleCollectMyLoad.modalTittle}>{Constants.Amount}</Text>
            //             </View>
            //         </View>

            //         <View style={StyleCollectMyLoad.modalrow}>
            //             <View style={StyleCollectMyLoad.modalcol1}>
            //                 <Text style={StyleCollectMyLoad.keytext}>{Constants.SmallLessthan}</Text>
            //             </View>
            //             <View style={StyleCollectMyLoad.modalcol2}>
            //                 <Text style={StyleCollectMyLoad.valueText}>$40/-</Text>
            //             </View>
            //         </View>

            //         <View style={StyleCollectMyLoad.modalrow}>
            //             <View style={StyleCollectMyLoad.modalcol1}>
            //                 <Text style={StyleCollectMyLoad.keytext}>{Constants.Medium}</Text>
            //             </View>
            //             <View style={StyleCollectMyLoad.modalcol2}>
            //                 <Text style={StyleCollectMyLoad.valueText}>$80/-</Text>
            //             </View>
            //         </View>

            //         <View style={[StyleCollectMyLoad.modalrow, { marginBottom: 15 }]}>
            //             <View style={StyleCollectMyLoad.modalcol1}>
            //                 <Text style={StyleCollectMyLoad.keytext}>{Constants.Large}</Text>
            //             </View>
            //             <View style={StyleCollectMyLoad.modalcol2}>
            //                 <Text style={StyleCollectMyLoad.valueText}>$120/-</Text>
            //             </View>
            //         </View>

            //     </View>
            // </View>
        )
    }

    ReferAFriend() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', }}>
                
                <View style={[StyleCollectMyLoad.modalCotainer, { width: '90%' }]}>
                    
                    <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10, }}
                        onPress={() => {
                            this.setState({ ModalVisible_referFriend: false })
                        }}
                    >
                        <Image source={require('../images/close.png')}
                            style={{ width: 15, height: 15 }}
                        />
                    </TouchableOpacity>
                    
                    <Text style={StyleCollectMyLoad.modalReferText}>Refer a Friend</Text>
                    
                    <Text style={StyleCollectMyLoad.modalShareText}>{Constants.ShareAppUsing}</Text>

                    <View style={StyleCollectMyLoad.textInput_container}>
                        <View style={{ width: '75%', alignSelf: 'center', paddingLeft: 15 }}>
                            <View style={StyleCollectMyLoad.labelBox}>
                                <Image style={StyleCollectMyLoad.LabelBoxIcon}
                                    source={require('../images/email_id.png')} />
                                <Text style={StyleCollectMyLoad.labelBoxText}>{Constants.Email}</Text>
                            </View>
                            <TextInput placeholder='Enter Email Id'
                                style={StyleCollectMyLoad.textInput_style}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={this.state.refer_emailId}
                                onChangeText={(newText) => {
                                    this.setState({ refer_emailId: newText })
                                }}
                            />
                        </View>
                        <View style={{ width: '25%' }}>
                            <TouchableOpacity
                                disabled={ this.state.refer_emailId=="" ? true : false }
                                onPress={()=>{
                                    this.referFriendApiCall(0)  // 0 = email
                                }}
                            >
                                <Image source={require('../images/send.png')}
                                    style={{ width: 70, height: 50, resizeMode: 'cover', }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={StyleCollectMyLoad.textInput_container}>
                        <View style={{ width: '75%', alignSelf: 'center', paddingLeft: 15 }}>
                            <View style={StyleCollectMyLoad.labelBox}>
                                <Image style={StyleCollectMyLoad.LabelBoxIcon}
                                    source={require('../images/mobile_number.png')} />
                                <Text style={StyleCollectMyLoad.labelBoxText}>{Constants.MobileNumber}</Text>
                            </View>
                            <TextInput placeholder='Enter Mobile Number'
                                keyboardType="number-pad"
                                style={StyleCollectMyLoad.textInput_style}
                                value={this.state.refer_mobile_number}
                                onChangeText={(newText) => {
                                    if(!isNaN(newText)){
                                        this.setState({ refer_mobile_number: newText })
                                    }else{
                                        this.setState({ refer_mobile_number: ""})
                                    }
                                }}
                            />
                        </View>
                        <View style={{ width: '25%' }}>
                            <TouchableOpacity
                                disabled={ this.state.refer_mobile_number=="" ? true : false }
                                onPress={()=>{
                                    this.referFriendApiCall(1)  // 1 = mobile
                                }}
                            >
                                <Image source={require('../images/send.png')}
                                    style={{ width: 70, height: 50, resizeMode: 'cover', }}
                                />

                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        )
    }

    componentDidMount() {
        this.presenter.callGetApi(ApiConstants.getRateCard, "", true);
        this.presenter.callGetApi(ApiConstants.getDashboardData, "", true);
        this.presenter.callGetApi(ApiConstants.getCMLTruckCategory,"",true);
    }

    referFriendApiCall(type){
        // type = 0 then refer friend by email
        // type = 1 then refer friend by mobile number
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(type==0){
            if(!emailRegex.test(this.state.refer_emailId)){
                alert("Please enter correct email Id.")
            }else{
                let params = {
                    "type" : 0,
                    "email_id" : this.state.refer_emailId,
                    "mobile_no":""
                }
                this.presenter.callPostApi(ApiConstants.referFriend, params, true)
            }
        }
        if(type==1){
            if(this.state.refer_mobile_number.length!=10){
                alert("Please enter correct mobile number.")
            }else{
                let params ={
                    "type" : 1,
                    "email_id" :"",
                    "mobile_no":this.state.refer_mobile_number
                }
                this.presenter.callPostApi(ApiConstants.referFriend, params, true)
            }
        }
    }

    onResponse(apiConstant, data) {
        switch (apiConstant) {
                case ApiConstants.getDashboardData:{
                    if (data.status) {
                        if (data && data.dashboard_data && data.dashboard_data.cml_booking) {
                            let current_trips = data.dashboard_data.cml_booking.current_trips;
                            let upcoming_trips = data.dashboard_data.cml_booking.upcoming_trips;
                            let localArray = [
                                { title: "Current Trips", type: "current", desc: data.dashboard_data.referral_content, percent: current_trips ? current_trips : 0 },
                                { title: "Upcoming Trips", type: "upcoming", desc: data.dashboard_data.referral_content, percent: upcoming_trips ? upcoming_trips : 0 },
                            ]
                            this.setState({
                                collectMyLoadData: localArray
                            })
                        }
                    } else {
                        alert(data.message)
                    }
                    break;
                }
                case ApiConstants.getCMLTruckCategory:{
                    if(data.status){
                        console.log(data);
                        this.setState({truckList:data.truck_category});
                        console.log('truck value===>',data.truck_category);
                    }else{
                        alert(data.message)
                    }

                    break;
                }
                case ApiConstants.getRateCard:{
                        if(data.status){
                            console.log("Other Services Data===>"+ JSON.stringify(data.booking_rates.other_service));
                            // console.log("Other Services Data===>"+ JSON.stringify(data.booking_rates));
                           var  truckTableData=[];
                           var otherServices_Data=[];
                           data.booking_rates.truck_type.forEach((currentItem,index)=>{
                            currentItem.category_list.forEach(child=>{
                                truckTableData[index]=[index+1 , currentItem.truck_type_name , child.categoty_name, child.rate]
                                  
                            })
                            })
                            this.setState({truckTableData:truckTableData});

                            console.log("=mayure =====>"+ JSON.stringify(data.booking_rates.other_service));

                                         data.booking_rates.other_service.forEach((currentItem,index) => {
                                          otherServices_Data[index]=[index+1,currentItem.other_service, currentItem.rate]
                                      console.log("msjhfkjahkajhfkjbkfjbakbafbamnbamn======>"+otherServices_Data);

                                             
                                         });

                            

                            this.setState({otherServicesData:otherServices_Data});
                            console.log("======>"+ this.state.otherServicesData);
                          }else{
                            console.log(data.message);
                          }
                        break;
                }
                case ApiConstants.referFriend:{
                    this.setState({ModalVisible_referFriend:false, refer_emailId:"", refer_mobile_number:""})
                    if(data.status){
                        alert(data.message)
                    }else{
                        alert(data.message)
                    }
                    break;
                }       
                default:
                    break;
        }
    }

    render() {
        let { navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: Constants.COLOR_GREY }}>
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} navigation={this.props.navigation} />
                <FlatList
                    data={this.state.collectMyLoadData}
                    extraData={this.state}
                    keyExtractor={(index) =>index.toString()}
                    numColumns={1}
                    renderItem={
                        ({ item, index }) =>
                            <View style={[StyleTruckBooking.row,{paddingVertical:20,paddingBottom:18}]}>
                                
                                {/* <View style={StyleTruckBooking.col1}>
                                    
                                    <AnimatedCircularProgress
                                        size={90}
                                        width={10}
                                        fill={item.percent}
                                        rotation="0"
                                        lineCap="round"
                                        duration={1200}
                                        tintColor="#9ABD08"
                                        backgroundColor="#E8E8E8">
                                        {(fill) => (<Text style={{ color: "#9ABD08" }}> {item.percent} </Text>)}
                                    </AnimatedCircularProgress>

                                </View> */}

                                <View style={StyleTruckBooking.col2}>
                                    
                                    
                                    
                                    <TouchableOpacity style={[StyleTruckBooking.button,{paddingHorizontal:15,width:'75%',alignSelf:'center'}]}
                                        onPress={() => {
                                            item.type == "upcoming"
                                                ?
                                                this.RBSheet.open()
                                                :
                                                this.props.navigation.navigate('MyBookings');
                                                null
                                        }}
                                    >
                                    <Text style={[StyleTruckBooking.labelText2,{color:Constants.COLOR_WHITE}]}>{item.type=="upcoming"?"New Bookings":"My Bookings"}</Text>
                                        
                                        {/* <Text style={StyleTruckBooking.buttonLabel}>{Constants.ViewAll}</Text> */}
                                    </TouchableOpacity>
                                
                                </View>
                            
                            </View>
                    }
                />

                <View style={StyleCollectMyLoad.ServicesView}>

                    <Text style={[StyleCollectMyLoad.labelText, { textTransform: "uppercase", fontSize: Constants.FONT_SIZE_LARGE }]}>{Constants.CollectMyloadOtherServices}</Text>

                    <View style={{ flexDirection: 'row', marginVertical: 15, justifyContent: 'center', }}>

                        <TouchableOpacity style={StyleCollectMyLoad.ServImageView}
                            onPress={() => {
                                this.setState({ ModalVisible_referFriend: true })
                            }}
                        >
                            <Image source={require('../images/Refer_A_Friend.png')}
                                style={StyleCollectMyLoad.ServImage}
                            />
                            <Text style={StyleCollectMyLoad.ServText}>{Constants.ReferAFriend}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={StyleCollectMyLoad.ServImageView}
                            onPress={() => {
                                this.setState({ modalVisible_RateCard: true });
                            }}
                        >
                            <Image source={require('../images/Rate_Card.png')}
                                style={StyleCollectMyLoad.ServImage}
                            />
                            <Text style={StyleCollectMyLoad.ServText}>{Constants.RateCard}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={StyleCollectMyLoad.ServImageView}
                            onPress={() => {
                                this.props.navigation.navigate('DiscountVoucher');
                            }}
                        >
                            <Image source={require('../images/My_Discount_.png')}
                                style={[StyleCollectMyLoad.ServImage,]}
                            />
                            <Text style={StyleCollectMyLoad.ServText}>{Constants.MyDiscountVoucher}</Text>
                        </TouchableOpacity>

                    </View>

                </View>

                <Modal
                    transparent={true}
                    visible={this.state.modalVisible_RateCard}
                    // visible={false}
                    animationType='fade'
                >
                    {
                    this.RateCard()
                    }
                </Modal>

                <Modal
                    transparent={true}
                    visible={this.state.ModalVisible_referFriend}
                    animationType='fade'>
                    {this.ReferAFriend()}
                </Modal>

                <RBSheet
                    ref={ref => { this.RBSheet = ref; }}
                    height={600}
                    duration={250}
                    customStyles={{
                        container: {
                            borderTopLeftRadius: 50,
                            borderTopRightRadius: 50,
                            backgroundColor: 'transparent',
                        }
                    }}
                >
                    <View style={StyleCollectMyLoad.collWrapp}>
                        <Carousel
                            indicatorAtBottom={true}
                            indicatorOffset={0}
                            delay={5000}
                            loop={true}
                            indicatorColor="#7bc145"
                            indicatorSpace={15}
                        >
                            {
                                this.state.truckList.map((item,index) =>
                                    <View style={StyleCollectMyLoad.carouselWrapp}>
                                        
                                        <View style={StyleCollectMyLoad.innpickTop}>
                                            <Image style={StyleCollectMyLoad.bgpickImg}
                                                source={require('../images/pickload_circle.png')}
                                            />
                                            
                                            <View style={StyleCollectMyLoad.outerCircle}>
                                                <View style={StyleCollectMyLoad.innerCircle}>
                                                    <Image style={StyleCollectMyLoad.truckImg}
                                                        source={{uri:Constants.BASE_URL.substr(0,Constants.BASE_URL.length-5)+item.image}}
                                                    />
                                                    
                                                </View>
                                            </View>

                                        </View>
                                            <View style={StyleCollectMyLoad.whiteinnBox}>
                                                
                                                <Text style={StyleCollectMyLoad.chosetruckTxt}>Choose truck</Text>
                                                
                                                <Text style={StyleCollectMyLoad.weighTxt}>{item.category_name}</Text>
                                                
                                                <Text style={StyleCollectMyLoad.truckDetails}>{item.desc}</Text>
                                                
                                                <View style={StyleCollectMyLoad.grayBox}>
                                                    <Text style={[StyleCollectMyLoad.maxTxt, { marginBottom: 6 }]}>Maximum Weight : {item.weight} TON</Text>
                                                    <Text style={StyleCollectMyLoad.maxTxt}>Size : {item.size} (m)</Text>
                                                </View>
                                                
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        this.RBSheet.close();
                                                        this.props.navigation.navigate('LocationDetails',{'truck_type_id':item.category_id});
                                                    }}
                                                    style={[StyleCollectMyLoad.truckBtn]}>
                                                    <Text style={StyleCollectMyLoad.truckBtnText}>Select Truck</Text>
                                                </TouchableOpacity>
                                            
                                            </View>
                                    </View>
                                )
                            }
                        </Carousel>
                    </View>
                </RBSheet>

            </View>
        )
    }
}