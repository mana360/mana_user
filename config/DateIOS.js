import React, { useState } from 'react'
import { View, TouchableOpacity,  Modal, DatePickerIOS} from 'react-native';
import moment from 'moment';
import Constants from './Constants';

export Class DatePickerIOS extends React.Component{
    
    constructor(props) {
        super(props)
        this.state ={
            isDateModalVisible:false,
            selected_date:"",
        }
    }
    
    onDateChange = (date) => {
        this.setState({selected_date: date});
    };

    render(){
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
                    <TouchableOpacity style={{width:120, backgroundColor:Constants.COLOR_GREEN, justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
                        <Text style={{color:Constants.COLOR_WHITE, fontSize:15, textAlign:'center'}}> Submit </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
}