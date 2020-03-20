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
import { MainPresenter } from '../config/MainPresenter'
import ApiConstants from '../config/ApiConstants';
export default class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noNotificationTextVisibility:false,
            dataSource: [
                { id: 12, status: "Trip 1 delay", desc: "Lorem ipsum dolor sit amet, consectetur ", dateTime: "10 May 2018 10:24 AM", isCompleted: 'false' },
                { id: 5, status: "New Alert", desc: "Lorem ipsum dolor sit amet, consectetur", dateTime: "10 May 2018 10:24 AM", isCompleted: 'fasle' },
                { id: 1, status: "Trip4 Completed-Rate your Trip", desc: "Lorem ipsum dolor sit amet, consectetur", dateTime: "10 May 2018 10:24 AM", isCompleted: 'true' },

            ],

        }
    }
    componentDidMount() {
        this.presenter.callGetApi(ApiConstants.getNotifications, "", true)
    }

    onResponse(apiConstant, data) {
        switch (apiConstant) {
            case ApiConstants.getNotifications: {
                if (data.status) {
                    if (data.notification_list && data.notification_list.length != 0) {
                        this.setState({
                            dataSource: data.notification_list,
                            noNotificationTextVisibility:false
                        })
                    } else {
                        this.setState({
                            dataSource: [],
                            noNotificationTextVisibility:true
                        })
                        // alert(data.message)
                    }
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
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} navigation={this.props.navigation} />
                <Text style={{flex:1,textAlignVertical:'center',textAlign:'center',display:this.state.noNotificationTextVisibility?'flex':'none'}}>No New Notification</Text>
                <FlatList
                    style={{ marginVertical: 15,display:!this.state.noNotificationTextVisibility?'flex':'none' }}
                    numColumns={1}
                    data={this.state.dataSource}
                    extraData={this.state}
                    keyExtractor={index => index.toString()}
                    renderItem={({ item }, index) => {
                        return (
                            <TouchableOpacity style={StyleNotification.row}
                                onPress={() => {
                                    if (item.isCompleted == 'true') {
                                        this.props.navigation.navigate('RateAndReview', { notif_id: item.id });
                                    }
                                }}
                            >
                                <View style={StyleNotification.col1}>
                                    <Image
                                        source={require('../images/notification-icon.png')}
                                        style={StyleNotification.icon}
                                    />
                                </View>

                                <View style={StyleNotification.col2}>
                                    <Text style={StyleNotification.title}>{item.status} </Text>
                                    <Text style={StyleNotification.desc}>{item.desc}
                                    </Text>
                                    <Text style={StyleNotification.dateTime}>{item.dateTime}</Text>
                                </View>

                                <View style={StyleNotification.col1}>
                                    <Image
                                        source={require('../images/forward_icon.png')}
                                        style={StyleNotification.arrow}
                                    />
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