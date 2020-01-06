/* screen -MANAPPCUS0011,53,54,55,59,
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, FlatList, } from 'react-native';
import HeaderBar from '../config/HeaderBar'
import { StyleTermsAndCondition } from '../config/CommonStyles'
import Constants from '../config/Constants'
export default class TermsAndCondition extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { title: "Lorem ipsum dolor si amet, consectetur adipisicing", desc: "Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing" },
        { title: "Lorem ipsum dolor si amet, consectetur adipisicing", desc: "Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing" },
        { title: "Lorem ipsum dolor si amet, consectetur adipisicing", desc: "Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing" },
        { title: "Lorem ipsum dolor si amet, consectetur adipisicing", desc: "Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing" },
        { title: "Lorem ipsum dolor si amet, consectetur adipisicing", desc: "Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing" }, { title: "Lorem ipsum dolor si amet, consectetur adipisicing", desc: "Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing Lorem ipsum dolor si amet, consectetur adipisicing" },]
    }
  }
  render() {
    let { navigation } = this.props;
    let flag = this.props.navigation.getParam('flag');

    return (
      <View style={{ flex: 1, backgroundColor: Constants.colorGrey }}>
        <HeaderBar
          title={
            flag=="TermsAndCondition"
            ?
            "Terms & Conditions"
            :
            flag=="CancellationPolicy"
            ?
            "Cancellation Policy"
            :
            flag=="PaymentPolicy"
            ?
            "Payment Policy"
            :
            flag=="AboutUs"
            ?
            "About Us"
            : null
          }
           isBack={true} isLogout={true} navigation={navigation} />
        <FlatList
            data={this.state.data}
            extraData={this.state}
            keyExtractor={(index) => index.toString()}
            numColumns={1}
            bounces={false}
            renderItem={
            ({ item }) =>

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