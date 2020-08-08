import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Modal, DatePickerIOS} from 'react-native';
import moment from 'moment';
import Constants from './Constants';

export class DateIOS extends React.Component{
    
    constructor(props) {
        super(props)
        this.state ={
            isDateModalVisible:false,
            isTimeModalVisible:false,
            selected_date: new Date(),
            selected_time: new Date(),
            input_date:"",
        }
    }
    
    onDateChange = (date) => {
        this.setState({selected_date:date})
    };

    onTimeChange = (time) =>{
        this.setState({selected_time : time})
    }

    getDateIOSPicker(){
        this.setState({isDateModalVisible:true})
    }

    getTimeIOSPicker(inputDate){
        this.setState({input_date : inputDate})
        this.setState({isTimeModalVisible:true})
    }

    validateTime(){
        let d = moment.utc(this.state.selected_time).local().format("YYYY-MM-DD")
        if(this.state.input_date==d){
            //console.log("today")
            let current_h = new moment().format("HH")
            let input_h = moment.utc(this.state.selected_time).local().format("HH")

            let current_m = new moment().format("mm")
            let input_m = moment.utc(this.state.selected_time).local().format("mm")

            if(current_h <= input_h){
                // hours are valid
                if(current_m < input_m){
                    this.setState({isTimeModalVisible:false})
                    this.props.getTime(this.state.selected_time)
                }else{
                    alert("Invalid time")
                    this.setState({isTimeModalVisible:false})
                    this.props.getTime("")
                }
            }else{
                if(current_m < input_m){
                    this.setState({isTimeModalVisible:false})
                    this.props.getTime(this.state.selected_time)
                }else{
                    alert("Invalid time")
                    this.setState({isTimeModalVisible:false})
                    this.props.getTime("")
                }
            }


        }else{
            //console.log("future")
            this.setState({isTimeModalVisible:false})
            this.props.getTime(this.state.selected_time)
        }
        this.setState({isTimeModalVisible:false})
        //this.props.getTime(this.state.selected_date)
    }

    getDateView(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:Constants.COLOR_WHITE}}>
                <DatePickerIOS
                    mode="date"
                    locale="en"
                    date={this.state.selected_date}
                    onDateChange={this.onDateChange}
                    minimumDate={new Date()}
                    format="YYYY/MM/DD"
                    style={{width:300, height:300, borderWidth:1, borderColor:'white'}}
                />
                <TouchableOpacity style={{width:120, padding:10, backgroundColor:Constants.COLOR_GREEN, justifyContent:'center', alignItems:'center', alignSelf:'center'}}
                    onPress={()=>{ 
                        this.setState({isDateModalVisible:false})
                        this.props.getDate(this.state.selected_date)
                    }}
                >
                    <Text style={{color:Constants.COLOR_WHITE, fontSize:14, textAlign:'center'}}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }

    getTimeView(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:Constants.COLOR_WHITE}}>
                <DatePickerIOS
                    mode="time"
                    locale="en"
                    date={this.state.selected_time}
                    onDateChange={this.onTimeChange}
                    style={{width:300, height:300, borderWidth:1, borderColor:'white'}}
                />
                <TouchableOpacity style={{width:120, padding:10, backgroundColor:Constants.COLOR_GREEN, justifyContent:'center', alignItems:'center', alignSelf:'center'}}
                    onPress={()=>{ 
                        this.validateTime()
                    }}
                >
                    <Text style={{color:Constants.COLOR_WHITE, fontSize:14, textAlign:'center'}}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render(){
        return(
            <Modal
                transparent={true}
                visible={
                    this.state.isDateModalVisible ? true
                    : this.state.isTimeModalVisible ? true
                    : false
                }
            >
                {
                    this.state.isDateModalVisible ? this.getDateView() : null
                }
                {
                    this.state.isTimeModalVisible ? this.getTimeView() : null
                }
            </Modal>
        )
    }
}