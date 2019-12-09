/* screen -MANAPPCUS001
    design by -mayur
 */
import React, { Component } from 'react';
import {View,Image} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StackActions, NavigationActions } from 'react-navigation';
export default class Splash extends React.Component{
    componentDidMount(){
        this.timer = setInterval( () => {
         this.props.navigation.dispatch(
             StackActions.reset({
             index: 0,
             actions: [NavigationActions.navigate({ routeName: 'Login'})],
             }))
           }      
           , 3000);
     }
     componentWillUnmount(){
         clearInterval(this.timer)
     }
    render(){
        return(
            <View style={{flex:1,}}>
              <Image style={{width:wp("100%"),height:hp('100%')}}
                source={require('../images/Splash_screen.jpg')}
             /> 
            </View>
        )
    }
}