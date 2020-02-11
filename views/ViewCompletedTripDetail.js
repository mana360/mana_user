/* screen -MANAPPCUS008
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView,TouchableOpacity,Modal } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleViewCompletedDetail } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import Invoice from './InvoiceView';
export default class ViewCompletedTripDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invoiceModal_Visible:false,
            truck_data:[
                {title:"Chruch gate2-SYS",partner_name:"ABC Services",telephone_no:"+565564521",dateof_pickup:"11/04/2019",pickup_time:"1.00 AM",arrival_time:'05.00 AM',pickup_location:"275 N Marr Road,CA",destination_location:"NYC Lane 345,street 2",cargo_type:"CArgo Type 1",cargo_handling:"No",
                cargohandling_charged:"NA",recuring_requirement:"Yes",costof_recurring:"US $34",frequency:"weekly",costof_truckingservice:"US $345",status:"Completed"}
            ]
        }
    }
    onStarRatingPress(rating) {
        this.setState({ starCount: rating })
        alert(rating)
    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>

                <HeaderBar title="VIEW COMPLETED TRIP DETAILS" isBack={true} isLogout={true} navigation={navigation} />
                
                <View style={{ flex: 1 }}>

                    <ScrollView style={{ width: '100%' }} bounces={false}>

                        <View style={{ marginBottom: 2 }}>
                            <View style={StyleViewCompletedDetail.topCircle} />
                            <Image source={require('../images/current_trips.png')}
                                style={StyleViewCompletedDetail.ImageCurrentTrip}
                            />
                        </View>

                        <Text style={StyleViewCompletedDetail.label}>{this.state.truck_data[0].title}</Text>
                        <View style={StyleViewCompletedDetail.bottomline}></View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.PartnerName}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>{this.state.truck_data[0].partner_name}</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.Telephonenumber}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>{this.state.truck_data[0].telephone_no}</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.DateOfPickUp}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>{this.state.truck_data[0].dateof_pickup}</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.PickUpTime}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>{this.state.truck_data[0].pickup_time}</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.ArrivalTime}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>{this.state.truck_data[0].arrival_time}</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.PickUpLocation}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>{this.state.truck_data[0].pickup_location}</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.DestinationLocation}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>{this.state.truck_data[0].destination_location}</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.CargoType}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>{this.state.truck_data[0].cargo_type}</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.CargoHandling}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>{this.state.truck_data[0].cargo_handling}</Text>
                            </View>
                        </View>
                       
                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.CargoHandlingCharges}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>{this.state.truck_data[0].cargohandling_charged}</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.RecurringRequirement}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>{this.state.truck_data[0].recuring_requirement}</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.CostOfRecurring}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>{this.state.truck_data[0].costof_recurring}</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.frequency}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>{this.state.truck_data[0].frequency}</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.CostOfTruckingService}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>{this.state.truck_data[0].costof_truckingservice}</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.Status}</Text>
                            </View>
                            <View style={[StyleViewCompletedDetail.col2, { flexDirection: 'row' }]}>
                                <Text style={[StyleViewCompletedDetail.col2Text, { color: Constants.COLOR_GREEN, fontWeight: 'bold' }]}
                                >{this.state.truck_data[0].status}</Text>
                                <TouchableOpacity style={{marginLeft: '25%', top: -8}}
                                        onPress={()=>{
                                                this.setState({invoiceModal_Visible:true})
                                        }}    
                                >
                                    <Image source={require('../images/status_completed.png')}
                                        style={{ width: 45, height: 45, }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ScrollView>
             
                </View>

                <FooterBar navigation={navigation} />
               
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.invoiceModal_Visible}
                >
                    <Invoice clickCallback={() => {
                        this.setState({ invoiceModal_Visible: false });
                    }} />
                </Modal>
           
            </View>
        )
    }
}