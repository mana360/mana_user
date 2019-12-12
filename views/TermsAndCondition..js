import React, { Component } from 'react';
import {View, Text, FlatList,} from 'react-native';
import HeaderBar from '../config/HeaderBar'
import {StyleTermsAndCondition} from '../config/CommonStyles'
import Constants from '../config/Constants'
export default class TermsAndCondition extends Component {
  constructor() {
    super();
    this.state = {
      data:[
        {title:"Lorem ipsum dolor si amet, consectetur adipisicing", desc:"Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing"},
        {title:"Lorem ipsum dolor si amet, consectetur adipisicing", desc:"Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing"},
        {title:"Lorem ipsum dolor si amet, consectetur adipisicing", desc:"Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing"},
        {title:"Lorem ipsum dolor si amet, consectetur adipisicing", desc:"Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing"},
        {title:"Lorem ipsum dolor si amet, consectetur adipisicing", desc:"Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing"},        {title:"Lorem ipsum dolor si amet, consectetur adipisicing", desc:"Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing"},      ]
      }
  }
  render() {
    let {navigation} = this.props
    return (
        <View style={{flex:1, backgroundColor:Constants.colorGrey}}>
          <HeaderBar title ="Terms & conditions" isBack={true} isLogout={true} navigation={navigation}/>
           <FlatList
              data={this.state.data}
              extraData={this.state}
              keyExtractor={(index)=>index.toString()}
              numColumns={1}
              bounces={false}
              renderItem={
                ({item})=>
                <View style={StyleTermsAndCondition.container}>
                    <Text style={StyleTermsAndCondition.title}>{item.title}</Text>
                    <Text style={StyleTermsAndCondition.desc}>{item.desc}</Text>
                </View>
                }
          />
        </View>
    )
  }
}