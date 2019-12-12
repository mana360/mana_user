import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Home from './views/Home'
import Splash from './views/Splash'
import HelpAndSupport from './views/HelpAndSupport';
import TripHelpAndSupport from './views/TripHelpAndSupport';
import Notification from './views/Notification';
import RateAndReview from './views/RateAndReview';
import ViewCompletedTripDetail from './views/ViewCompletedTripDetail';
import SignIn from './views/Signin';
import TermsAndCondition from './views/TermsAndCondition.';
import Dashboard from './views/Dashboard';
import TruckBooking from './views/TruckBooking';
import CurrentTrip from './views/CurrentTrip';

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
    ViewCompletedTripDetail: {
      screen: ViewCompletedTripDetail,
      navigationOptions: () => ({ header: null })
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: () => ({ header: null })
    },
    TermsAndCondition: {
      screen: TermsAndCondition,
      navigationOptions: () => ({ header: null })
    },
    Dashboard: {
      screen: Dashboard,
      navigationOptions: () => ({ header: null })
    },
    TruckBooking: {
      screen: TruckBooking,
      navigationOptions: () => ({ header: null })
    },
    CurrentTrip: {
      screen: CurrentTrip,
      navigationOptions: () => ({ header: null })
    },
},
     {initialRouteName:"TruckBooking"}
)
export const AppNavigator = createAppContainer(AppNavigator1);