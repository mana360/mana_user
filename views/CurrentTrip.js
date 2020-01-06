/* screen -MANAPPCUS016
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { StyleCurrentTrip } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
export default class CurrentTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource:[
                {id:12, title:"Nyc-Syc", date:"27 May 2018", pickUpTime:"10:24 PM",dropUpTime:"11:00 AM"},
                {id:15, title:"Nyc Sys", date:"27 May 2018", pickUpTime:"10:24 PM",dropUpTime:"11:00 AM"},
                {id:16, title:"Nyc 3chruch", date:"27 May 2018", pickUpTime:"10:24 PM",dropUpTime:"11:00 AM"},
              ]
        }
    }
    render() {

        let { navigation } = this.props
        let isTruck = this.props.navigation.getParam('flag_truck_booking')
        let isWarehouse=this.props.navigation.getParam('flag_warehouse_services')
        let isTruckingWarehouse=this.props.navigation.getParam('flag_Trucking_warehouse')
        //let isWareHouse= 
        return (
            <View style={{ flex: 1, backgroundColor: Constants.COLOR_GREY }}>
                <HeaderBar 
                    title="Current Trips"
                    isBack={true} isLogout={true} navigation={navigation} />
                <FlatList
                    style={{ marginVertical: 15 }}
                    numColumns={1}
                    data={this.state.dataSource}
                    renderItem={({ item }, index) => {
                        return (
                            <TouchableOpacity style={StyleCurrentTrip.row} onPress={() => {this.props.navigation.navigate('ViewCurrentTrip') }}>

                                <View style={StyleCurrentTrip.col1}>
                                    <Image
                                        source={require('../images/Truck_Bookings_copy.png')}
                                        style={StyleCurrentTrip.icon}
                                    />
                                </View>
                              
                                <View style={StyleCurrentTrip.col2}>
                                    <View style={StyleCurrentTrip.bottomLine}>
                                        <Text style={StyleCurrentTrip.title}>{item.title}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', paddingTop: 3 }}>
                                        <Image source={require('../images/date_icon.png')}
                                            style={[StyleCurrentTrip.imageIcon]}
                                        />
                                        <Text style={StyleCurrentTrip.labeltext}>{Constants.Date}</Text>
                                        <Text style={StyleCurrentTrip.datacss}>{item.date}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../images/time_icon.png')}
                                            style={StyleCurrentTrip.imageIcon}
                                        />
                                        <Text style={StyleCurrentTrip.labeltext}>{Constants.PickUpTime}</Text>
                                        <Text style={StyleCurrentTrip.datacss}>{item.pickUpTime}</Text>

                                        <Image source={require('../images/time_icon.png')}
                                            style={[StyleCurrentTrip.imageIcon, { marginLeft: 10 }]}
                                        />
                                        <Text style={StyleCurrentTrip.labeltext}>{Constants.PickUpTime}</Text>
                                        <Text style={StyleCurrentTrip.datacss}>{item.dropUpTime}</Text>
                                    </View>
                                </View>
                              
                                <View style={StyleCurrentTrip.col3}>
                                    <Image
                                        source={require('../images/forward_icon.png')}
                                        style={StyleCurrentTrip.arrow}
                                    />
                                </View>
                            
                            </TouchableOpacity>

                        )
                    }}
                    extraData={this.state}
                    keyExtractor={item => item.id}
                />
               
                <FooterBar navigation={navigation} />
          
            </View>
        )
    }
}