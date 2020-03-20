/* screen -MANAPPCUS001 
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StackActions, NavigationActions } from 'react-navigation';
import { getAuthToken } from '../config/AppSharedPreference';
export default class Splash extends React.Component {
    componentDidMount() {
        this.timer = setInterval(async () => {
            let routeName="SignIn"
            if (await getAuthToken()) {
                routeName="Dashboard"
            } 
            this.props.navigation.dispatch(
                StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: routeName })],
                }))
        }
            , 3000);
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <View style={{ flex: 1, }}>
                <Image style={{ width: wp("100%"), height: hp('100%') }}
                    source={require('../images/Splash_screen.jpg')}
                />
            </View>
        )
    }
}