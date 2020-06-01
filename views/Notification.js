/* screen -MANAPPCUS005
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleNotification } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import { MainPresenter } from '../config/MainPresenter';
import ApiConstants from '../config/ApiConstants';
import moment from 'moment';

export default class Notification extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            noNotificationTextVisibility: false,
            dataSource: [],

        }
    }
    
    componentDidMount() {
        this.presenter.callGetApi(ApiConstants.getNotifications, "", true)
    }

    async getAllNotification(){
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
                    alert(data.message)
                }

                break;
            }

            case ApiConstants.readNotification :{
                if (data.status) {
                 alert(
                    data.message,[
                                 {text: 'OK',
                                  onPress:()=>this.getAllNotification()},
                                 ],{ cancelable: false })
                } else {
                    alert(data.message,
                        [
                            {text: 'OK', onPress:()=>{}},
                        ],
                        { cancelable: false })
                }
                break;
            }

            case ApiConstants.removeNotification :{
                if (data.status) {
                    alert(data.message)
                } else {
                    alert(data.message)
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
                
                <MainPresenter ref={(ref) => { this.presenter = ref }} 
                onResponse={this.onResponse.bind(this)}
                 navigation={this.props.navigation} />
                
                <Text style={{ flex: 1, textAlignVertical: 'center', textAlign: 'center',
                 display: this.state.noNotificationTextVisibility ? 'flex' : 'none' }}>No New Notification</Text>
                
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
                                
                                    if (item.is_read == 'true') {
                                       this.props.navigation.navigate('RateAndReview', { notif_id: item.id });
                                    } else  {
                                        this.callMarkAsReadApi(item.noti_id)
                                    }
                                }}
                            >
                                <View style={StyleNotification.col1}>
                                     <Image
                                        source={require('../images/notification-icon.png')}
                                        style={StyleNotification.icon} />
                                    
                                </View>

                                <View style={StyleNotification.col2}>
                                    <Text style={StyleNotification.title}>{item.title} </Text>
                                    <Text style={StyleNotification.desc}>{item.message}
                                    </Text>
                                    <Text style={StyleNotification.dateTime}>{moment(item.datetime).format("DD MMM YYYY hh:mm:A")}</Text>
                                </View>

                                <View style={StyleNotification.col1}>
                                <TouchableOpacity onPress = {()=>{
                                            alert(item.is_read)
                                 }}>

                                    {item.is_read == false ? <Image
                                        source={require('../images/forward_icon.png')}
                                        style={StyleNotification.arrow} />
                                        :<Image
                                        source={require('../images/remove.png')}
                                        style={StyleNotification.arrow}
                                    />
                                    }

                                    </TouchableOpacity>
                                    {/* <Image
                                        source={require('../images/forward_icon.png')}
                                        style={StyleNotification.arrow}
                                    /> */}
                                </View>

                            </TouchableOpacity>
                        )
                    }}
                />
                
                <FooterBar navigation={navigation} />
           
            </View>
        )
    }
}