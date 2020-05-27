/* screen -MANAPPCUS001 
    design by -mayur s
    api by  Udayraj
 */
import React, { Component } from 'react';
import { View, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StackActions, NavigationActions } from 'react-navigation';
import { getAuthToken, clearAllData } from '../config/AppSharedPreference';
import { MainPresenter } from '../config/MainPresenter'
import ApiConstants from '../config/ApiConstants';
export default class Splash extends React.Component {

    componentDidMount() {
        let count = 0;
        this.timer = setInterval(async () => {
            count+=1;
            if(count == 3){
                clearInterval(this.timer)
                this.checkUser()
            }
        }
        , 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    async checkUser(){
        if (await getAuthToken()) {
            this.presenter.callGetApi(ApiConstants.userStatus, "", true);   // checking for the status of user account
        }else{
            await clearAllData()
            this.props.navigation.dispatch(
                StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
                }))
        }
    }

    async onResponse(apiConstant, data) {
        switch(apiConstant){
            case ApiConstants.userStatus :{
                if(data.status){
                    this.props.navigation.dispatch(
                      StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
                      }))
                  }else{
                      if(data.status_code == 203){
                          // incomplete profile setup
                          if(data.msg=="Unauthorized user."){
                            this.props.navigation.dispatch(
                                StackActions.reset({
                                index: 0,
                                actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
                            }))
                          }else{
                            this.props.navigation.dispatch(
                                StackActions.reset({
                                index: 0,
                                actions: [NavigationActions.navigate({ routeName: 'ProfileSetUp' })],
                            }))
                          }
                      }else{
                        await clearAllData()
                        this.props.navigation.dispatch(
                            StackActions.reset({
                              index: 0,
                              actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
                            }))
                      }
                  }
                break
            }
        }
    }

    render() {
        return (
            <View style={{ flex: 1, }}>
            <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} />
                <Image style={{ width: wp("100%"), height: hp('100%') }}
                    source={require('../images/Splash_screen.jpg')}
                />
            </View>
        )
    }
}