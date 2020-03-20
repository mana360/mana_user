import React from 'react'

import { View, Text, Modal } from 'react-native'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
import Constants from '../config/Constants'
import { MainPresenter } from '../config/MainPresenter'
import ApiConstants from '../config/ApiConstants'
import { getAuthToken, setAuthToken } from '../config/AppSharedPreference'

export default class DynamicModal extends React.Component {
    state = {
        isLoader: false,
        resp: ''
    }
    componentDidMount() {
        this.updateUi()
    }

    onResponse(apiConstant, response) {
        this.setState({ resp: JSON.stringify(response) })
        if (apiConstant == "a") {
            alert("done")
        }
    }
    render() {
        // let loader = MainPresenter()
        return (
            <View style={[{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }]}>

                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} />
                <TouchableOpacity onPress={() => {
                    let params = {
                        "email": "eve.holt@reqres.in",
                        "password": "cityslicka"
                    }
                    let getParams = "page=2"
                    this.presenter.callPostApi(ApiConstants.login, params, true)
                    this.presenter.callGetApi(ApiConstants.users, getParams, true)
                   /*  setAuthToken("updated", () => {
                        this.updateUi()
                    }) */

                }}>
                    <Text>
                        dynamic file IT works {this.state.resp}
                    </Text>
                </TouchableOpacity>
                <Text>
                    ==>  {this.state.isLoader ? 'show' : 'hidden'}
                </Text>



            </View>
        )
    }
    async updateUi() {
        token = await getAuthToken()
        this.setState({ resp: token })
    }
}