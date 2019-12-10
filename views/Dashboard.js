/* screen -MANAPPCUS002
    design by -mayur
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, Modal,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleDashboard } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import StarRating from "react-native-star-rating";
export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            starCount: null,
            inputLabelTrip: '',
            reviewTrip: '',
            modal_Visible:false,
        }
    }
    onStarRatingPress(rating) {
        this.setState({ starCount: rating })
     
    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>

                <HeaderBar title="DASHBOARD" isBack={true} isLogout={true} navigation={navigation} />
                <View style={{ flex: 1 }}>
                    <ScrollView style={{ width: '100%' }} bounces={false}>
                    <View style={{ marginBottom: 2 }}>
                            <View style={StyleDashboard.topCircle} />
                            <Image source={require('../images/current_trips.png')}
                                style={StyleDashboard.ImageCurrentTrip}
                            />
                        </View>
                    </ScrollView>
                </View>

                <FooterBar navigation={navigation} />
            </View>
        )
    }
}