
/** 
 * 
 *  Dependency  required  
 * 
 * "@react-native-community/netinfo": "^5.6.2",
 * 
 * */
import React, { useState } from 'react'
import { View, Text, Modal, ActivityIndicator } from 'react-native'
import Constants from './Constants';
import ApiConstants from './ApiConstants';
import NetInfo from "@react-native-community/netinfo";
import { getAuthToken, clearAllData } from '../config/AppSharedPreference'


export class MainPresenter extends React.Component {
    BASE_URL = Constants.BASE_URL
    state = {
        isLoader: false
    }
    /* -------------Public method------------------- */
    async callPostApi(apiConstant, params, loader) {

        if (await !this._isNetworkAvailable()) {
            alert("No Network")
            return
        }

        this._initLoader(loader)
        
        let URL = this.BASE_URL + apiConstant
        
        let token = await getAuthToken()
        
        let options = this._getOptions('POST', token, params)
        
        this._requestLogging(URL, options)
        
        fetch(URL, options).then(it => {
            try {
                return it.json()

            } catch (e) {
                this._logging(it)
                console.log("json parse error = >" + e)
            }
        })
            .then(it => this._setResponse(apiConstant, it))
            .catch(e => console.error(e))
            .finally(() => { this._stopLoader() })
    }


    async callGetApi(apiConstant, queryParams, loader) {
        if (await !this._isNetworkAvailable()) {
            alert("No Network")
            return
        }

        this._initLoader(loader)

        let URL = this.BASE_URL + apiConstant + queryParams
        
        let token = await getAuthToken()
        
        let options = this._getOptions('GET', token)
        
        this._requestLogging(URL, options)
        
        fetch(URL, options).then(it => {
            try {
                return it.json()
            } catch (e) {
                this._logging(it)
                console.log("json parse error = >" + e)
            }

        }, (e) => { console.log(e) })
            .then(it => this._setResponse(apiConstant, it))
            .catch(e => console.error(e))
            .finally(() => { this._stopLoader() })
    }

    async callMultipartApi(apiConstant, params, loader) {
        if (await !this._isNetworkAvailable()) {
            alert("No Network")
            return
        }
        let authToken = await getAuthToken()

        this._initLoader(loader)
        let URL = this.BASE_URL + apiConstant

        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: authToken
            },
            body: this._createFormData(apiConstant, params)
        }

        console.log(' Multi part request 1 :  '+JSON.stringify(options.body))

        fetch(URL, options).then(it => it.json(), (e) => { console.log(e) })
            .then(it => this._setResponse(apiConstant, it))
            .catch(e => console.error(e))
            .finally(() => { this._stopLoader() })

    }

    async upload(apiConstant, params, loader) {
        
        if (await !this._isNetworkAvailable()) {
            alert("No Network")
            return
        }
        
        let authToken = await getAuthToken()

        this._initLoader(loader)
        let URL = this.BASE_URL + apiConstant
        let options = {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: authToken
          },
          method: 'POST'
        };
      
        options.body = new FormData();
        for (let key in params) {
          options.body.append(key, params[key]);
        }
      
        console.log('Multi part requests'+JSON.stringify(options.body))

        fetch(URL, options).then(it => 
            it.json(), (e) => {
            console.log(e)})
            .then(it => this._setResponse(apiConstant, it))
            .catch(e => console.error(e))
            .finally(() => { this._stopLoader() })
      }

    /* -------------EOF Public method------------- */

    /* -------------Private method--------------- */
    _createFormData(apiConstant, body) {
        const data = new FormData();
        let photo = body.file;
        delete body.file;

        Object.keys(body).forEach(key => {
            data.append(key, body[key]);
        });


        switch (apiConstant) {
            case ApiConstants.updateProfilePic: {
                data.append("profile_image", {
                    name: photo.fileName,
                    type: photo.type,
                    uri: Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
                });
                break;

    
            }
        }
        return data
    }
    _getOptions(method, authToken = undefined, body = undefined) {

        console.log('Parameters : '+JSON.stringify(body));

        return {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': authToken
            },
            body: body ? JSON.stringify(body) : undefined
        }

    }
    _requestLogging(URL, options) {
        this._logging(`-----------API CALL------------- \n API NAME : ` + URL + `\n`)
        this._logging(options)
        this._logging(`\n-----------EOF API CALL------------- \n`)

    }
    _logging(message) {
        console.log(message)
    }
    _setResponse(apiConstant, data) {
        try {
            this._logging(`---------API RESPONSE------------- \n`)
            this._logging(`API NAME : ${apiConstant} \n`)
            this._logging(`Response : ${JSON.stringify(data)} \n`)
            this._logging(`---------EOF API RESPONSE-------------\n`)
        } catch (e) {
            this._logging(`---------API RESPONSE------------- \n`)
            this._logging(`API NAME : ${apiConstant} \n`)
            this._logging(`Response : ${data} \n`)
            this._logging(`---------EOF API RESPONSE-------------\n`)
            console.log(e)
            data = {}
        }
        // if (data && data.status_code && data.status_code == "203") {
        //     if (this.props.navigation) {
        //         //clearAllData()
        //         //this.props.navigation.navigate('SignIn');
        //     }
        //     return
        // }
        if (this.props.onResponse) {
            this.props.onResponse(apiConstant, data?data:{})
        } else {
            alert('No \'onResponse\' callback register for api call')
        }
    }
    _initLoader(isloading) {
        if (isloading) {
            this.setState({ isLoader: true })
        }
    }
    _stopLoader() {
        this.setState({ isLoader: false })
    }

    async _isNetworkAvailable() {
        let returnValue = false
        await NetInfo.fetch().then(isConnected => {
            if (isConnected) {
                console.log("NetWork available")
                returnValue = true
            } else {
                console.log("NetWork Not Available")
                returnValue = false
            }
        }).catch(e => console.log(e))

        return returnValue

    }

    /* -------------EOF Private method--------------- */
    render() {
        return (
            <Modal
                transparent={true}
                visible={this.state.isLoader}>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'white', padding: 5, borderRadius: 3, alignItems: "center", justifyContent: 'center' }}>
                        <ActivityIndicator size="large" color={Constants.colorBlue} />
                    </View>
                </View>
            </Modal>
        )
    }
}