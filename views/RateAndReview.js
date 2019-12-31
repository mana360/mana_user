/* screen -MANAPPCUS007
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleRateAndReview } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import StarRating from "react-native-star-rating";
export default class RateAndReview extends React.Component {
    constructor() {
        super();
        this.state = {
            starCount: null,
            inputLabelTrip: '',
            reviewTrip: '',
            modal_Visible: false,
        }
    }
    onStarRatingPress(rating) {
        this.setState({ starCount: rating })

    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>

                <HeaderBar title="Rate and Review" isBack={true} isLogout={true} navigation={navigation} />

                <View style={{ flex: 1 }}>

                    <ScrollView style={{ width: '100%' }} bounces={false}>

                        <View style={{ marginBottom: 2 }}>
                            <View style={StyleRateAndReview.topCircle} />
                            <Image source={require('../images/current_trips.png')}
                                style={StyleRateAndReview.ImageCurrentTrip}
                            />
                        </View>

                        <View>

                            <TouchableOpacity style={StyleRateAndReview.TripDetail_View}
                                onPress={()=>{
                                    this.props.navigation.navigate('ViewCompletedTripDetail')
                                }}
                            >
                                <Text style={StyleRateAndReview.TripDetail_Text}>{Constants.ViewYOurTripDetail}</Text>
                            </TouchableOpacity>

                            <View style={{ marginVertical: 10 }}>

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
                                        this.onStarRatingPress(rating)
                                    }}

                                />
                            </View>

                            <View style={StyleRateAndReview.InputBox_Container}>
                                <View style={StyleRateAndReview.labelView}>
                                    <Text style={StyleRateAndReview.labelText}>{Constants.LabelYourTrip}</Text>
                                </View>
                                <TextInput style={[StyleRateAndReview.textInputbox]}
                                    placeholder='Write your review here'
                                    multiline={true}
                                    value={this.state.inputLabelTrip}
                                    onChangeText={(newtext) => {
                                        this.setState({ inputLabelTrip: newtext })
                                    }}
                                />
                            </View>

                            <View style={StyleRateAndReview.InputBox_Container}>
                                <View style={StyleRateAndReview.labelView}>
                                    <Text style={StyleRateAndReview.labelText}>{Constants.ReviewYourTrip}</Text>
                                </View>
                                <TextInput style={[StyleRateAndReview.textInputbox]}
                                    placeholder='Write your review here'
                                    multiline={true}
                                    value={this.state.reviewTrip}
                                    onChangeText={(newtext) => {
                                        this.setState({ reviewTrip: newtext })
                                    }}
                                />
                            </View>

                            <TouchableOpacity style={StyleRateAndReview.buttonView}
                                onPress={() => {
                                    this.setState({ modal_Visible: true })
                                }}
                            >
                                <Text style={StyleRateAndReview.buttonText}>{Constants.SUBMIT}</Text>
                            </TouchableOpacity>

                        </View>

                    </ScrollView>

                </View>

                <FooterBar navigation={navigation} />

                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={this.state.modal_Visible}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View style={StyleRateAndReview.modalView}>
                            <TouchableOpacity style={{ alignSelf: 'flex-end', top:10, right: 10 }}
                                onPress={() => {
                                    this.setState({ modal_Visible: false })
                                }}
                            >
                                <Image source={require('../images/close.png')}
                                    style={{ width: 15, height: 15 }}
                                />
                            </TouchableOpacity>
                            <Image style={StyleRateAndReview.modalImage}
                                source={require('../images/sent_icon.png')}
                            />
                            <Text style={StyleRateAndReview.modalMsg}>{Constants.ReviewSentSuccessfully}</Text>
                            <TouchableOpacity style={StyleRateAndReview.modalButton}
                                onPress={() => {
                                    this.setState({ modal_Visible: false });
                                    this.props.navigation.navigate('Dashboard')
                                }}
                            >
                                <Text style={StyleRateAndReview.modalButtonText}>{Constants.SEND}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
               
                </Modal>

            </View>
        )
    }
}