import React, { useState } from 'react'
import { View, TouchableOpacity,  Modal, DatePickerIOS} from 'react-native';
import moment from 'moment';
import Constants from './Constants';

export class DatePickerIOS extends React.Component{
    
    constructor(props) {
        super(props)
        this.state ={
            isDateModalVisible:false,
            isTimeModalVisible:false,
            selected_date:"",
            selected_time:"",
        }
    }
    
    onDateChange = (date) => {
        this.setState({selected_date: date});
    };

    onTimeChange = (time) =>{
        this.setState({selected_time : time})
    }

    getDateIOSPicker(){
        this.setState({isDateModalVisible:true})
        return(
            <Modal
                transparent={true}
                visible={this.state.isDateModalVisible}
            >
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <DatePickerIOS
                        mode="date"
                        date={this.state.selected_date}
                        onDateChange={this.onDateChange}
                    />
                    <TouchableOpacity style={{width:120, backgroundColor:Constants.COLOR_GREEN, justifyContent:'center', alignItems:'center', alignSelf:'center'}}
                        onPress={()=>{ 
                            this.setState({isDateModalVisible:false})
                            this.props.getDate(this.state.selected_date)
                        }}
                    >
                        <Text style={{color:Constants.COLOR_WHITE, fontSize:14, textAlign:'center'}}> Submit </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }

    getTimeIOSPicker(){
        this.setState({isTimeModalVisible:true})
        return(
            <Modal
                transparent={true}
                visible={this.state.isTimeModalVisible}
            >
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <DatePickerIOS
                        mode="time"
                        date={this.state.selected_time}
                        onDateChange={this.onTimeChange}
                    />
                    <TouchableOpacity style={{width:120, backgroundColor:Constants.COLOR_GREEN, justifyContent:'center', alignItems:'center', alignSelf:'center'}}
                        onPress={()=>{
                            this.setState({isTimeModalVisible:false})
                            this.props.getTime(this.state.selected_time)
                        }}
                    >
                        <Text style={{color:Constants.COLOR_WHITE, fontSize:14, textAlign:'center'}}> Submit </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }

    render(){
        return(
            <View></View>
        )
    }
}