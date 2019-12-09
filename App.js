import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Home from './views/Home'
import Splash from './views/Splash'
import HelpAndSupport from './views/HelpAndSupport';
import TripHelpAndSupport from './views/TripHelpAndSupport';
import Notification from './views/Notification';
import RateAndReview from './views/RateAndReview';

console.disableYellowBox = true;

const AppNavigator1 = createStackNavigator({
    Home :{
      screen:Home,
      navigationOptions:()=>({ header:null,})
    },
    Splash: {
      screen: Splash,
      navigationOptions: () => ({ header: null })
    },
    HelpAndSupport: {
      screen: HelpAndSupport,
      navigationOptions: () => ({ header: null })
    },
    TripHelpAndSupport: {
      screen: TripHelpAndSupport,
      navigationOptions: () => ({ header: null })
    },
    Notification: {
      screen: Notification,
      navigationOptions: () => ({ header: null })
    },
    RateAndReview: {
      screen: RateAndReview,
      navigationOptions: () => ({ header: null })
    },
},
     {initialRouteName:"RateAndReview"}
)
export const AppNavigator = createAppContainer(AppNavigator1);