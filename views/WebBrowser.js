import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
export default class WebBrowser extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.payment_amount = this.props.navigation.getParam('payment_amount')
        console.log("payment amount on WebBrowser ==> "+this.payment_amount)
        //  http://laravel.exceptionaire.tk/mana/QAP/public/mobile-payment
        //  http://laravel.exceptionaire.tk/mana/QAP/public/success_payment
        //  http://laravel.exceptionaire.tk/mana/QAP/public/failed_payment

        //https://sandbox.payfast.co.za/eng/process/payment?p-sb=1rbglh9bigl71j73jo2h6g9m31
    }

    render(){
        const jsCode = "window.postMessage(document.getElementsById('tras_id').value)"
        //const jsCode = `window.postMessage()`
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
                originWhitelist={'["*"]'}
                source={{ uri: 'http://laravel.exceptionaire.tk/mana/QAP/public/mobile-payment' }}
                javaScriptEnabled = {true}
                domStorageEnabled = {true}
                startInLoadingState={true}
                injectedJavaScript={jsCode}
                onMessage={event => {
                    //alert(event.nativeEvent.data);
                    console.log("HTML Received value ===> "+event.nativeEvent.data)
                }}
                onNavigationStateChange={(webViewState)=>{
                    console.log("web resp===> "+webViewState.url)
                    //console.log("resp====> "+JSON.stringify(jsCode))
                }}
            />
        );
    }
}