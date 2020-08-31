/* screen -MANAPPCUS0011,53,54,55,59,
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, FlatList, } from 'react-native';
import HeaderBar from '../config/HeaderBar'
import { StyleTermsAndCondition } from '../config/CommonStyles'
import Constants from '../config/Constants'
import { MainPresenter } from '../config/MainPresenter';
import ApiConstants from '../config/ApiConstants';
import { ScrollView } from 'react-native-gesture-handler';
import HTML from 'react-native-render-html';
export default class TermsAndCondition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:""
    }
  }

  componentDidMount(){
    let param = {
      'flag' : this.props.navigation.getParam('flag')
    }
    this.presenter.callPostApi(ApiConstants.getPolicyContent, param, true)
  }


  onResponse(apiConstant,data){
 switch (apiConstant) {
  case ApiConstants.getPolicyContent : {
    if(data.status){
      this.setState({data : data.content})
    }else{
      this.presenter.getCommonAlertBox(data.message)
    }
    break;
  }
 
   default:
     break;
 }
  }
  render() {
    let { navigation } = this.props;
    let flag = this.props.navigation.getParam('flag', false);
    let isLogout = this.props.navigation.getParam('isLogout',false)

    return (
      <View style={{ flex: 1, backgroundColor: Constants.colorGrey }}>
        <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} />

        <HeaderBar
        isBack={true}
          title={
            flag==4
            ?
            "Terms & Conditions"
            :
            flag==3
            ?
            "Cancellation Policy"
            :
            flag==2
            ?
            "Payment Policy"
            :
            flag==1
            ?
            "Privacy Policy"
            :  ""
          }
           isBack={true} isLogout={ isLogout ? true : false } navigation={navigation} />
       <ScrollView style={{width:'100%',}} bounces={false}>
         <View style={{flex:1,padding:15}} >
           {/* <Text style={{fontSize:12,textAlign:'justify',color:'black'}}>{this.state.data}</Text> */}
           {/* <Text style={{fontSize:12,textAlign:'justify',color:'black'}}>{this.state.data.replace( /(&nbsp;|<([^>]+)>)/ig, "")}</Text> */}
          
          <HTML html={this.state.data}/>
         </View>

       </ScrollView>
      </View>
    )
  }
}