import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { getAuthToken } from '../config/AppSharedPreference';
import Constants from '../config/Constants';
export default class WebBrowser extends React.Component{

    constructor(props){
        super(props)
        this.state={
            html:null,
        }
    }

    componentDidMount(){
        this.payment_amount = this.props.navigation.getParam('payment_amount')
        console.log("payment amount on WebBrowser ==> "+this.payment_amount)
        this.user_id = this.props.navigation.getParam('user_id')
        console.log("user id ===> "+this.user_id)
        this.init()
    }

    async init(){
        this.authToken = await getAuthToken()
        console.log("Auth token ===> "+this.authToken)

        const data = JSON.stringify({'amount':parseFloat(this.payment_amount), 'user_id': parseInt(this.user_id)});
          fetch(Constants.PAYMENT_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: this.authToken
            },
            body: data,
          }).then(response => response.text()).then(text => {
            this.setState({ html: text });
            console.log("data sent ===> "+data)
          });
    }

    paymentDone(transaction_id){
        this.props.navigation.goBack()
        this.props.navigation.state.params.callback(1, transaction_id)  //1 = success, 2= failed
    }

    render(){
        const jsCode = "window.postMessage(document.getElementsById('tras_id').value)"
        const html = `
                    <html>
                        <head></head>
                        <body>
                            <script>
                            setTimeout(function () {
                                window.ReactNativeWebView.postMessage("Hello!")
                            }, 2000)
                            </script>
                    </body> </html>
                `;
        return(
            <WebView 
                style={{flex:1}}
                ref={(ref)=>{this.webView = ref}}
                bounces={false}
                originWhitelist={'["*"]'}
                source={{
                    html: this.state.html,
                    baseUrl: Constants.PAYMENT_URL,
                }}
                javaScriptEnabled = {true}
                domStorageEnabled = {true}
                startInLoadingState={true}
                injectedJavaScript={jsCode}
                onMessage={event => {
                    console.log("HTML Received value ===> "+event.nativeEvent.data)
                    if(event.nativeEvent.data!=""){
                        if(event.nativeEvent.data!=-1){
                            this.webView.stopLoading()
                            this.paymentDone(event.nativeEvent.data)
                        }
                    }
                }}
                onNavigationStateChange={(webViewState)=>{
                    console.log("web resp===> "+webViewState.url)
                }}
            />
        );
    }
}