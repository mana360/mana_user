/* screen -MANAPPCUS001 
    design by -mayur s
    api by  Udayraj
 */
import React, { Component } from 'react';
import { View, Image, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StackActions, NavigationActions } from 'react-navigation';
import { getAuthToken, clearAllData, setFirebaseToken, getFirebaseToken} from '../config/AppSharedPreference';
import { MainPresenter } from '../config/MainPresenter'
import ApiConstants from '../config/ApiConstants';
import firebase from '@react-native-firebase/app'
import messaging from '@react-native-firebase/messaging'

export default class Splash extends React.Component {

    channel=""

    constructor(props){
        super(props)
        this.state={
            isNotifcation:false
        }
    }

    componentDidMount() {
        if(Platform.OS=="android"){
            this.firebaseForAndroid()
        }
        if(Platform.OS=="ios"){

        }
        this.init()
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        this.notificationListener;
        this.notificationOpenedListener;
    }

    async firebaseForAndroid(){
        this.checkFirebasePermission()
        this.getFirebaseMessageListener()

        messaging().onMessage( (notification)=>{
            //when app is working in foreground
            console.log("notification ====> "+JSON.stringify(notification))
        } )

        messaging().setBackgroundMessageHandler((notification)=>{
            //when app is working in background
        })
    }

    async checkFirebasePermission(){
        let enabled = await messaging().hasPermission();
        if(enabled){
            this.getFirebaseToken()
        }else{
            this.getFirebasePermission()
        }
    }

    async getFirebaseToken(){
        let fcm_token = await messaging().getToken()
        console.log("fcm token ====> "+fcm_token)
        await setFirebaseToken(fcm_token)
    }

    async getFirebasePermission(){
        try{
            await messaging().requestPermission();
        }catch(error){

        }
    }

    async getFirebaseMessageListener(){
        this.notificationListener = messaging().onNotificationOpenedApp( (notification)=>{
            const {title, body} = notification;
            console.log("Notif Title ===> "+title)
            this.displayFirebaseNotification(notification)
        })
    }

    displayFirebaseNotification(notification){

    }



    messageListener = async () => {
        //Triggered when a particular notification has been received in foreground
        this.notificationListener = firebase.notifications().onNotification((notification) => {
            const { title, body } = notification;
            console.log("1  ==== "+ notification.title)
            this.displayNotification(notification)
        });
    
        //If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
      
        this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
          if (notificationOpen) {
            const { title, body } = notificationOpen.notification;
            console.log("2 === "+ title)
            this.displayNotification(notificationOpen.notification)
            this.props.navigation.navigate("Notification")
        }   
        });
    
        //If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
      
        const notificationOpen = await firebase.notifications().getInitialNotification();
        if (notificationOpen) {
            const { title, body } = notificationOpen.notification;
            console.log("3 === "+ title)
            this.displayNotification(notificationOpen.notification)
            this.props.navigation.navigate("Notification")
           
        }

        //Triggered for data only payload in foreground
        this.messageListener = firebase.messaging().onMessage((message) => {
          console.log(JSON.stringify(message));
        });
    }

    displayNotification(notification){
        this.setState({isNotifcation:"true"})
        const localNotification = new firebase.notifications.Notification({
          show_in_foreground:true,
        })
          .setNotificationId('notification_id')
          .setTitle(notification.title)
          .setBody(notification.body) 
          .android.setChannelId(channel)
          .android.setSmallIcon('ic_launcher')
          .android.setPriority(firebase.notifications.Android.Priority.High) 
          .setData(notification.data);
        
          firebase.notifications()
          .displayNotification(localNotification) 
          .catch(err => console.log("Notification Builder Error == "+err))
    
        //   if(notification.title != null){
        //       this.props.navigation.navigate("Notification")
        //   }else if(notification.type == "Promocode"){
        //     this.props.navigation.navigate("Notification")
        //   }
        this.props.navigation.navigate("Notification")
    }

    firebaseForIOS(){
    }

    init(){
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