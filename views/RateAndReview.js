/* screen -MANAPPCUS002
    design by -mayur
 */
import React, { Component } from 'react';
import {View, Text, TouchableOpacity,Image,ScrollView,Modal,FlatList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleRateAndReview} from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import StarRating from "react-native-star-rating";
export default class RateAndReview extends React.Component{
    constructor() {
        super();
        this.state = {
           starRatingCount:3.5
      }
    }
    onStarRatingPress(rating){
   this.setState({starRatingCount:rating})
    }
    render(){
        let {navigation} = this.props
        return(
            <View style={{flex:1}}>
                
             <HeaderBar title="Notification" isBack={true} isLogout={true} navigation={navigation}/>
                <View style={StyleRateAndReview.mainContainer}>
                    <View style={StyleRateAndReview.topCircle}>
                    </View>
                    <Image source={require('../images/current_trips.png')}
                            style={StyleRateAndReview.ImageCurrentTrip}
                    />
                    <View style={StyleRateAndReview.TripDetail_View}>
                        <Text style={StyleRateAndReview.TripDetail_Text}>{Constants.ViewYOurTripDetail}</Text>
                    </View>
                    <ScrollView style={StyleRateAndReview.InputBox_View}>
                          <View style={StyleRateAndReview.InputBox_Container}>
                                <View  style={StyleRateAndReview.labelView}>
                                    <Text style={StyleRateAndReview.labelText}>{Constants.RateYourTrip}</Text>
                                </View>
                                <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={this.state.starRatingCount}
                                selectedStar={()=>{
                                    this.onStarRatingPress(rating)
                                }}
                                  
                                />
                          </View>
                    </ScrollView>
                </View>
    
            <FooterBar navigation={navigation}/>
        </View>
        )
    }
}