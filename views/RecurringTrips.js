/* screen -MANAPPCUS018
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleUpcomingTrip } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import { MainPresenter } from '../config/MainPresenter';
import ApiConstants from '../config/ApiConstants';
import moment from 'moment'

export default class RecurringTrips extends React.Component {

    
    constructor(props) {
        super(props);
        this.service_type_id="";
        this.state = {
            dataSource:[{"id":1,}],
            currentTrip:false,
            bookingID:"",
        }
    }
    componentDidMount() {
        this.inIt();
      
    }

inIt(){
let currentTrip = this.props.navigation.getParam('currentTrip');
let dataSource= this.props.navigation.getParam('reccurringItems');
let bookingID=this.props.navigation.getParam('booking_id');
this.service_type_id=this.props.navigation.getParam("service_type_id");
console.log("reccurring Booking List====>"+JSON.stringify(dataSource));

     this.setState({
         currentTrip:currentTrip,
        dataSource:dataSource,
        // bookingID:bookingID
    })
}
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1, backgroundColor: Constants.COLOR_GREY }}>

                <HeaderBar title={this.state.currentTrip==true?"Current Trips-Reccurring":"Upcoming Trips-Reccurring"} isBack={true} isLogout={true} navigation={navigation} />
                    <FlatList
                   style={{ marginVertical: 15 }}
                   numColumns={1}
                   data={ this.state.dataSource }
                   extraData={this.state}
                   keyExtractor={index => index.toString()}
                    renderItem={({ item }, index) => {
                        return (
                            <TouchableOpacity style={StyleUpcomingTrip.row} 
                                onPress={() => {
                                    
                                  if(this.state.currentTrip==true){
                                    this.props.navigation.navigate('ViewCurrentTrip',
                                    {'booking_id':item.truck_booking_id,'service_type_id':1,"bookingItem":item});
                                  }else{
                                    this.props.navigation.navigate('ViewUpcomingTrip', {'booking_id':item.truck_booking_id, 'service_type_id':this.service_type_id, 'flag_upcoming_Trip':1})                                   
                                  }
                                }}
                            >

                                <View style={StyleUpcomingTrip.col1}>
                                    <Image
                                        source={require('../images/Truck_Bookings_copy.png')}
                                        style={StyleUpcomingTrip.icon}   
                                    />
                                </View>

                                <View style={StyleUpcomingTrip.col2}>
                                    
                                    <View style={StyleUpcomingTrip.bottomLine}>
                                        <Text style={StyleUpcomingTrip.title}>
                                            {  item.pickup_location?
                                                `${item.pickup_location} - ${item.Last_drop_location}`:""
                                     
                                            }
                                        </Text>
                                    </View>
                               
                                    <View style={this.service_type_id==3?{ flexDirection: 'row', paddingTop: 3 }:{display:'none'}}>
                                    <Image source={require('../images/date_icon.png')}
                                            style={[StyleUpcomingTrip.imageIcon]}
                                        />

                                        <Text style={StyleUpcomingTrip.labeltext}>{this.service_type_id==3? Constants.PICKEDUP:null}</Text>
                                        <Text style={StyleUpcomingTrip.datacss}>
                                            { moment(item.pickedup_date_time).format("DD/MM/YYYY  hh:mm A")
                                                
                                            }
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingTop: 3 }}>
                                      
                                        <Image source={require('../images/date_icon.png')}
                                            style={[StyleUpcomingTrip.imageIcon]}
                                        />

                                        <Text style={StyleUpcomingTrip.labeltext}>{Constants.pickupDate}</Text>
                                        <Text style={StyleUpcomingTrip.datacss}>
                                            { item.date_of_pickup? moment(item.date_of_pickup).format("DD/MM/YYYY"):""
                                               
                                            }
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../images/time_icon.png')}
                                            style={StyleUpcomingTrip.imageIcon}
                                        />
                                        <Text style={StyleUpcomingTrip.labeltext}>{Constants.dropoffDate}</Text>
                                        <Text style={StyleUpcomingTrip.datacss}>
                                            {  item.arrivalDateAndTime?
                                                 moment(item.arrivalDateAndTime,"YY-MM-DD").format("DD/MM/YYYY"):"" }
                                        </Text>
                                        <Image source={require('../images/time_icon.png')}
                                            style={[StyleUpcomingTrip.imageIcon, { marginLeft: 10, display : 'flex' }]}
                                        />
                                        <Text style={[StyleUpcomingTrip.labeltext,{display : 'flex' }]}>{Constants.DropUpTime}</Text>
                                        <Text style={[StyleUpcomingTrip.datacss,  {display : 'flex'}]}>{item.arrivalDateAndTime?moment(item.arrivalDateAndTime,"hh:m:s").format("hh:mm A"):""}</Text>
                                    </View>
                                
                                </View>

                                <View style={StyleUpcomingTrip.col3}>
                                    <Image
                                        source={require('../images/forward_icon.png')}
                                        style={StyleUpcomingTrip.arrow}
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