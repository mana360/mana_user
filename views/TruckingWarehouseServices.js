/* screen -MANAPPCUS028
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import {  Card,CardItem} from "native-base";
import { StyleTruckBooking } from '../config/CommonStyles';
import Constants from '../config/Constants';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default class TruckingWarehouseServices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            truckWarehouseServiceData:[
                {title:"Current Trips",  type:"current",  desc:"fnsldfn fnsldfn fnsldfn fnsldfn fnsldfn lorempipsom", percent:45},
                {title:"Upcoming Trips", type:"upcoming", desc:"fnsldfn fnsldfn fnsldfn fnsldfn fnsldfn lorempipsom", percent:70},
            ],
        }
    }
 
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1,backgroundColor:Constants.COLOR_GREY }}>
                <FlatList
                    data={this.state.truckWarehouseServiceData}
                    extraData={this.state}
                    keyExtractor={(index)=>{index.toString()}}
                    numColumns={1}
                    renderItem={
                        ({item, index})=>
                            <View style={StyleTruckBooking.row}>
                                 <View style={StyleTruckBooking.col1}>
                                     <AnimatedCircularProgress
                                        size={90}
                                        width={10}
                                        fill={item.percent}
                                        rotation="90"
                                        lineCap="round"
                                        duration={1200}
                                        tintColor="#9ABD08"
                                        backgroundColor="#E8E8E8">
                                        { (fill) => ( <Text style={{color:"#9ABD08"}}> { item.percent } </Text>) }
                                    </AnimatedCircularProgress>

                                </View>
                                <View style={StyleTruckBooking.col2}>
                                     <Text style={[StyleTruckBooking.labelText2]}>{item.title}</Text>
                                     <Text style={StyleTruckBooking.descText}>{item.desc}</Text>
                                     <TouchableOpacity style={StyleTruckBooking.button}
                                              onPress={()=>{
                                                  item.type=="current"
                                                  ?
                                                  this.props.navigation.navigate('TruckingWarehouseCurrentService')
                                                  :
                                                  this.props.navigation.navigate('TruckingWarehouseUpcomingTrip')
                                              }} 
                                    >
                                           <Text style={StyleTruckBooking.buttonLabel}>{Constants.ViewAll}</Text>
                                     </TouchableOpacity>
                                </View>
                            </View>
                    }
                />
            </View>
        )
    }
}