/* screen -MANAPPCUS005
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleNotification, StyleHelpAndSupport, StyleRateAndReview } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import { MainPresenter } from '../config/MainPresenter';
import ApiConstants from '../config/ApiConstants';
import moment from 'moment';
import StarRating from 'react-native-star-rating';

export default class Notification extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            noNotificationTextVisibility: false,
            dataSource: [],
            RatingModelVisisble:false,
            starCount:0,
            notificationItem:[],
            serviceTypeID:"",
            bookingID:'',


        }
    }
    
    componentDidMount() {
        this.getAllNotification()
    }

    getAllNotification(){
        this.presenter.callGetApi(ApiConstants.getNotifications, "", true)
    }

    callMarkAsReadApi(notification_id) {
        let param = {
            "noti_id" : notification_id,
            }

        this.presenter.callPostApi(ApiConstants.readNotification, param,true)
    }

    callRemoveNotification(notification_id) {
        this.presenter.callPostApi(ApiConstants.removeNotification, {
            "noti_id" : notification_id
        },true)
    }

    async submitRating(){
        let params = {
            'booking_id' : this.state.bookingID,
            'service_type_id':this.state.serviceTypeID,
            'rating_value':this.state.starCount,
            "rating_message":"",
                }
        await this.presenter.callPostApi(ApiConstants.RateBookings, params, true);
    }
    async onResponse(apiConstant, data) {
        switch (apiConstant) {
            case ApiConstants.getNotifications: {
                if (data.status) {
                    if (data.notification_list.length != 0) {
                        this.setState({
                            dataSource: data.notification_list,
                            noNotificationTextVisibility: false
                        })
                    } else {
                        this.setState({
                            dataSource: [],
                            noNotificationTextVisibility: true
                        })
                        
                    }
                } else {
                    // alert(data.message)
                }

                break;
            }

            case ApiConstants.readNotification :{
                if (data.status) {
                //  alert(data.message,[
                //                  {text: 'OK',
                //                   onPress:()=>{}},
                //                  ],{ cancelable: false })
                        if(this.state.notificationItem.booking_status=="completed"){
                            this.setState({RatingModelVisisble:true});
                        }else{
                this.presenter.getCommonAlertBox(data.message);
                        }
                 this.getAllNotification()            
                } else {
                    this.presenter.getCommonAlertBox(data.message);
                    // alert(data.message,
                    //     [
                    //         {text: 'OK', onPress:()=>{}},
                    //     ],
                    //     { cancelable: false })
                }
                break;
            }

            case ApiConstants.removeNotification :{
                if (data.status) {
                    // alert(data.message,[
                    //           {text: 'OK',
                    //              onPress:()=>{}},
                    //             ],{ cancelable: false });
                    this.presenter.getCommonAlertBox(data.message);
                    this.getAllNotification()
                   } else {
                    //    alert(data.message,
                    //        [
                    //            {text: 'OK', onPress:()=>{}},
                    //        ],
                    //        { cancelable: false })

                    this.presenter.getCommonAlertBox(data.message);
                    
                   }
                break;
            }

            case ApiConstants.RateBookings :{
                if(data.status){
                            this.setState({ RatingModelVisisble: false ,starCount:""});
                         
                        }
                        else{
                        
        
                        //   this.setState({ RatingModelVisisble: false })
                          this.presenter.getCommonAlertBox(data.message);
              
                        }
                break;
            }
           
        }
    }
    
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1, backgroundColor: Constants.COLOR_GREY }}>
                
                <HeaderBar title="Notifications" isBack={true} isLogout={true} navigation={navigation} />
                
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} navigation={this.props.navigation} />
                
                <Text style={{ flex: 1, textAlignVertical: 'center', textAlign: 'center', display: this.state.noNotificationTextVisibility ? 'flex' : 'none' }}>No New Notification</Text>
                
                <FlatList
                    style={{ marginVertical: 15, display: !this.state.noNotificationTextVisibility ? 'flex' : 'none' }}
                    numColumns={1}
                    data={this.state.dataSource}
                    extraData={this.state}
                    keyExtractor={index => index.toString()}
                    renderItem={({ item }, index) => {
                        return (
                            <TouchableOpacity style={StyleNotification.row}
                                onPress={() => {
                                    if (item.is_read == 1) {
                              
                                    //    this.props.navigation.navigate('RateAndReview', { item: item });
                                    } else  {
                                        // this.setState({RatingModelVisisble:true});
                                        console.log("NOTIFICATION ITEM===>"+JSON.stringify(item))
                                            this.setState({notificationItem:item,serviceTypeID:item.service_type_id,bookingID:item.booking_id});
                                        this.callMarkAsReadApi(item.noti_id);

                                    }
                                    // if(item.booking_status==1){
                                    //     this.setState({RatingModelVisisble:true})
                                    // }
                                }}>

                                <View style={StyleNotification.col1}>
                                     <Image
                                        source={require('../images/notification-icon.png')}
                                        style={
                                            // StyleNotification.icon
                                            {display:"none"}
                                            } />
                                    
                                </View>

                                <View style={StyleNotification.col2}>
                                    <Text style={StyleNotification.title}>{item.title} </Text>
                                    <Text style={StyleNotification.desc}>{item.message}
                                    </Text>
                                    <Text style={StyleNotification.dateTime}>{moment(item.data,"YYYY-MM-DD h:m:s").format("DD MMM YYYY hh:mm:A")}</Text>
                                </View>

                                <View style={StyleNotification.col1}>
                                
                                    <TouchableOpacity onPress = {()=>{
                                                if(item.is_read==1){
                                                    this.callRemoveNotification(item.noti_id)
                                                }
                                    }}>
                                        {item.is_read == 0 ? <Image
                                            source={require('../images/forward_icon.png')}
                                            style={StyleNotification.arrow} />
                                            :<Image
                                            source={require('../images/remove.png')}
                                            style={StyleNotification.arrow}
                                        />
                                        }

                                        </TouchableOpacity>
                                    
                                </View>

                            </TouchableOpacity>
                        )
                    }}
                />
                
                <FooterBar navigation={navigation} />
           <Modal
           visible={this.state.RatingModelVisisble}

        //    visible={true}
           transparent={true}
           >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>

                <View style={StyleHelpAndSupport.modalView}>

                <TouchableOpacity style={{ alignSelf: 'flex-end', top:10, right: 10 }}
                                onPress={() => {
                                    this.setState({ RatingModelVisisble: false })
                                }}
                            >
                                <Image source={require('../images/close.png')}
                                    style={{ width: 15, height: 15 }}
                                />
                            </TouchableOpacity>
                    <Text style={{color:Constants.COLOR_GREY_DARK,alignSelf:'center',fontSize:18}}>RATING</Text>
                    <View style={{ marginVertical: 10,paddingTop:45 }}>

                        <Text style={StyleRateAndReview.ratingText}>{Constants.RateYourTrip}</Text>
                        <StarRating disabled={true} maxStars={5}
                            fullStar={require('../images/star_fill.png')}
                            emptyStar={require('../images/star_emty.png')}
                            starSize={20}
                            spacing={2}
                            disabled={false}
                            containerStyle={{ width: 150, marginTop: 10, marginLeft: '12%' }}
                            rating={this.state.starCount}
                            selectedStar={(rating) => {
                                this.setState({ starCount: rating })
                            }}

                        />
                        </View>
                        <View style={{flexDirection:'row',justifyContent:"center",paddingTop:30,paddingBottom:15}}>
                            <TouchableOpacity style={{backgroundColor:"green",justifyContent:'center',width:'35%',borderRadius:20,right:25,paddingVertical:10}}
                            onPress={()=>{
                                this.submitRating();
                            }}
                            >
                                <Text style={{color:Constants.COLOR_WHITE,alignSelf:'center',alignSelf:'center',}}>SUBMIT</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:"green",justifyContent:'center',width:'35%',borderRadius:20,left:25,paddingVertical:10}}
                            onPress={()=>{
                                this.setState({RatingModelVisisble:false});
                            }}
                            >
                           
                            <Text style={{color:Constants.COLOR_WHITE,alignSelf:'center',}}>BACK</Text>
                              
                            </TouchableOpacity> 
                        </View>
                </View>
               </View>
          
           </Modal>
            </View>
        )
    }
}