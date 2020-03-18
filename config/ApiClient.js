import React, {} from 'react';
import {View,Modal} from 'react-native';
import {Spinner} from 'native-base';
import Constants from '../config/Constants';
import {getUserData} from '../config/AppSharedPrefrence';

export const Loader =({isLoading}) =>{
  return(
    <Modal
        animationType="fade"
        transparent={true}
        visible={isLoading}
       >
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0,0,0,0.5)'}}>
          <Spinner color={Constants.colorPrimary}/>
        </View>
    </Modal>
  )
}

function callApi(method, routeName, paramObject, authToken) {
  //loader show
  //Loader(true);
      console.log("API NAME ------> " + Constants.BASE_URL + routeName)
      console.log("METHOD ------> " + method)
      console.log("PARAMS ------> " + JSON.stringify(paramObject))
      let options = {
      method: method,
      headers: {
        Accept: 'application/json',
       'Content-Type': 'application/json',
        token: authToken
      },
      body: (method != 'GET') ? JSON.stringify(paramObject) : {},
      }
      
      //because Body not allowed for GET or HEAD requests
      if (method == 'GET') {
      delete options.body
      }
      
      return new Promise((resolve, reject) => {
      fetch(Constants.BASE_URL + routeName, options).then(response => {
         console.log("RESPONSE ---> "+JSON.stringify(response));
      return response.json() })
      .then((response) => {
      console.log("RESPONSE BODY ---> " + JSON.stringify(response))
      resolve(response)
      }, (response) => {
      console.log("RESPONSE ERROR ---> " + JSON.stringify(response))
      resolve(response)
      }).catch((e) => {
      console.log("RESPONSE CATCH ---> " + JSON.stringify(e))
      resolve({ status: false, data: {} })
      }).finally(() => {
      //hide loader
      Loader(false);
      });
      });
  }

  function callFormDataApi(method, routeName, paramObject, authToken) {
      
        console.log("API NAME ------> " + Constants.BASE_URL + routeName)
        console.log("METHOD ------> " + method)
        console.log("PARAMS ------> " + JSON.stringify(paramObject))
        let options = {
        method: method,
        headers: {
        // Accept: 'application/x-www-form-urlencoded',
         //'Content-Type': 'multipart/form-data',
        token: authToken
        },
        body: createFormData(paramObject),
      }

       //because Body not allowed for GET or HEAD requests
      if (method == 'GET') {
      delete options.body
      }
      
      return new Promise((resolve, reject) => {
      fetch(Constants.BASE_URL + routeName, options).then(response => {
         console.log("RESPONSE ---> "+JSON.stringify(response));
      return response.json() })
      .then((response) => {
      console.log("RESPONSE BODY ---> " + JSON.stringify(response))
      resolve(response)
      }, (response) => {
      console.log("RESPONSE ERROR ---> " + JSON.stringify(response))
      resolve(response)
      }).catch((e) => {
      console.log("RESPONSE CATCH ---> " + JSON.stringify(e))
      resolve({ status: false, data: {} })
      }).finally(() => {
      //hide loader
      Loader(false);
      });
      });
}

const createFormData = (body) => {
      const data = new FormData();
      let photo = body.docFile
      delete body.docFile
      //
      data.append("docFile",{
      name: photo.fileName,
      type: photo.type,
      //path:photo.path,
      uri: Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", ""),
      });

      Object.keys(body).forEach(key => {
      data.append(key, body[key]);
      });

     

      return data;
  };

export function register (params){
  let apiCall=  callApi('POST', 'register', params,'')
  return apiCall
}

export function login (params){

  let apiCall=  callApi('POST', Constants.LOGIN, params,'')
  return apiCall
}

export async function getFaq(params){
  let userToken = ''
      await getUserData((value)=>{
        userToken=value
      })
  let apiCall = callApi('POST', Constants.FAQ, params, userToken)
  return apiCall
}

export async function  samplePostMethod(params){
      let userToken = ''
      await getUserData((value)=>{
        userToken=value
      })
      return callApi('POST', Constants.LOGOUT, params, userToken)
 }

export async function sampleGetMethod(){
      let data = ''
      await getUserData((value)=>{
        data=value

      })
      return callApi('GET', Constants.NOTIFICATIONS, {}, data)
}