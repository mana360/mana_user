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
import TermsAndCondition from './views/TermsAndCondition';
import Dashboard from './views/Dashboard';
import TruckBooking from './views/TruckBooking';
import CurrentTrip from './views/CurrentTrip';
import ViewCurrentTrip from './views/ViewCurrentTrip';
import ViewUpcomingTrip from './views/ViewUpcomingTrip';
import Invoice from './views/InvoiceView';
import UpcomingTrip from './views/UpcomingTrip';
import WarehouseServices from './views/WarehouseServices';
import WarehouseServicesCurrentTrip from './views/WarehouseServiceCurrentTrip';
import WarehouseServiceUpcomingTrip from './views/WarehouseServiceUpcomingTrip';
import WarehouseServiceViewCurrentTrip from './views/WarehouseServiceViewCurrentTrip';
import WarehouseViewUpcomingDetail from './views/WareHouseViewUpcomingDetails';
import TruckingWarehouseServices from './views/TruckingWarehouseServices';
import TruckingWarehouseCurrentService from './views/TruckingWarehouseCurrentService';
import TruckingWarehouseUpcomingServices from './views/TruckingWarehouseCurrentTripDetails';
import TruckingWarehouseCurrentTripDetails from './views/TruckingWarehouseCurrentTripDetails';
import TruckingWarehouseUpcomingTrip from './views/TruckingWarehouseUpcomingTrip';
import TruckingWarehouseViewUpcomingTrip from './views/TruckingWarehouseViewUpcomingTrip';
import CollectMyLoad from './views/CollectMyLoad';
import MyProfile from './views/MyProfile';
import EditProfile from './views/EditProfile';
import ForgotPassword from './views/ForgotPassword';
import SetPassword from './views/SetPassword';
import SignUp from './views/SignUp';
import LocationDetails from './views/LocationDetails';
import LoadCategory from './views/LoadCategory';
import BookingSummary from './views/BookingSummary';
import NewBookingSummary from './views/NewBookingSummary';
import DiscountVoucher from './views/DiscountVoucher';
import MyBookings from './views/MyBookings'
import MyBookingDetails from './views/MyBookingDetails'
import DiscountVouchers from './views/DiscountVouchers';
import ViewMap from './views/ViewMap';
import MapViews from './views/MapView';
import PaymentMethod from './views/PaymentMethod';
import ProfileSetUp from './views/ProfileSetUp';
import SendOTP from './views/SendOTP';
import ViewCurrentTripAll from './views/ViewcurrentTrip_all';



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
    ViewCurrentTrip: {
      screen: ViewCurrentTrip,
      navigationOptions: () => ({ header: null })
    },
    ViewUpcomingTrip: {
      screen: ViewUpcomingTrip,
      navigationOptions: () => ({ header: null })
    },
    Invoice: {
      screen: Invoice,
      navigationOptions: () => ({ header: null })
    },
    UpcomingTrip: {
      screen: UpcomingTrip,
      navigationOptions: () => ({ header: null })
    },
    WarehouseServices: {
      screen: WarehouseServices,
      navigationOptions: () => ({ header: null })
    },
    WarehouseServicesCurrentTrip: {
      screen: WarehouseServicesCurrentTrip,
      navigationOptions: () => ({ header: null })
    },
    WarehouseServiceUpcomingTrip: {
      screen: WarehouseServiceUpcomingTrip,
      navigationOptions: () => ({ header: null })
    },
    WarehouseServiceViewCurrentTrip: {
      screen: WarehouseServiceViewCurrentTrip,
      navigationOptions: () => ({ header: null })
    },
    WarehouseViewUpcomingDetail: {
      screen: WarehouseViewUpcomingDetail,
      navigationOptions: () => ({ header: null })
    },
    TruckingWarehouseServices: {
      screen: TruckingWarehouseServices,
      navigationOptions: () => ({ header: null })
    },
    TruckingWarehouseCurrentService: {
      screen: TruckingWarehouseCurrentService,
      navigationOptions: () => ({ header: null })
    },
    TruckingWarehouseCurrentTripDetails: {
      screen: TruckingWarehouseCurrentTripDetails,
      navigationOptions: () => ({ header: null })
    },
    TruckingWarehouseUpcomingTrip: {
      screen: TruckingWarehouseUpcomingTrip,
      navigationOptions: () => ({ header: null })
    },
    TruckingWarehouseViewUpcomingTrip: {
      screen: TruckingWarehouseViewUpcomingTrip,
      navigationOptions: () => ({ header: null })
    },
    CollectMyLoad: {
      screen: CollectMyLoad,
      navigationOptions: () => ({ header: null })
    },
    DiscountVoucher: {
      screen: DiscountVoucher,
      navigationOptions: () => ({ header: null })
    },
    MyProfile: {
      screen: MyProfile,
      navigationOptions: () => ({ header: null })
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: () => ({ header: null })
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: () => ({ header: null })
    },
    SetPassword: {
      screen: SetPassword,
      navigationOptions: () => ({ header: null })
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: () => ({ header: null })
    },
    LocationDetails: {
      screen: LocationDetails,
      navigationOptions: () => ({ header: null })
    },
    LoadCategory: {
      screen: LoadCategory,
      navigationOptions: () => ({ header: null })
    },
    BookingSummary: {
      screen: BookingSummary,
      navigationOptions: () => ({ header: null })
    },   
    DiscountVouchers: {
      screen: DiscountVouchers,
      navigationOptions: () => ({ header: null })
    },
    DiscountVoucher: {
      screen: DiscountVoucher,
      navigationOptions: () => ({ header: null })
    },
    ViewMap: {
      screen: ViewMap,
      navigationOptions: () => ({ header: null })
    },
    MapViews: {
      screen: MapViews,
      navigationOptions: () => ({ header: null })
    },
    PaymentMethod: {
      screen: PaymentMethod,
      navigationOptions: () => ({ header: null })
    },
    MyBookings:{
      screen:MyBookings,
      navigationOptions:()=>({header:null})
    },
    MyBookingDetails:{
      screen:MyBookingDetails,
      navigationOptions:()=>({header:null})
    },
    NewBookingSummary:{
      screen:NewBookingSummary,
      navigationOptions:()=>({header:null})
    },
    ProfileSetUp:{
      screen:ProfileSetUp,
      navigationOptions:()=>({header:null})
    },
    SendOTP:{
      screen:SendOTP,
      navigationOptions:()=>({header:null})
    },
    ViewCurrentTripAll:{
      screen:ViewCurrentTripAll,
      navigationOptions:()=>({header:null})
    },
},
    {initialRouteName:"BookingSummary"}

)
export const AppNavigator = createAppContainer(AppNavigator1);