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

  //this function is just to test api call in app need to change later 
  export function getAllLangContent(params){
  let apiCall=  callApi('POST', 'get_lang_content', params,'')
  return apiCall
}

//https://php.exceptionaire.tk/Development/filedone_devnew/api/get_lang_content

// export function register (params){
//   let apiCall=  callApi('POST', 'register', params,'')
//   return apiCall
// }

// export function login (params){

//   let apiCall=  callApi('POST', Constants.LOGIN, params,'')
//   return apiCall
// }



// export async function  uploadImageToServer(params){
//       let userToken = ''
//       await getUserData((value)=>{
//         userToken=value
//       })
//       return callApi('POST', Constants.LOGOUT, params, userToken)
//  }

// export async function logoutUser(params){
//       let userToken = ''
//       await getUserData((value)=>{
//         userToken=value
//       })
//       return callApi('GET', Constants.LOGOUT, {}, userToken)
//     }

// export async function getNotifications(){
//       let data = ''
//       await getUserData((value)=>{
//         data=value

//       })
//       return callApi('GET', Constants.NOTIFICATIONS, {}, data)
// }



// export  function resetPassword(params){
 
//   let apiCall = callApi('POST', Constants.RESETPASSWORD, params, params.token)
//   return apiCall
// }

// export async function forgotPassword(params){
//   let apiCall = callApi('POST', Constants.FORGOTPASSWORD, params, '')
//   return apiCall
// }

// export async function checkOtp(params){
//   let userToken=''
//   await getUserData((value)=>{
//     userToken=value
//   })
//   let apiCall = callApi('POST', Constants.CHECKOTP, params, userToken)
//   return apiCall
// }


// export async function getProfilePage(){
//   let userToken=''
//   await getUserData((value)=>{
//     userToken=value
//   })
//   let apiCall = callApi('GET', Constants.USERPROFILE, '', userToken)
//   return apiCall
// }

// export async function updateImages(params){
//   let userToken=''
//   await getUserData((value)=>{
//     userToken=value
//   })
//   console.log(JSON.stringify(userToken))
//   let apiCall = callFormDataApi('POST', Constants.UPDATEUSERIMAGES, params, userToken)
//   return apiCall
// }

// export async function updateProfile(params){
//   let userToken=''
//   await getUserData((value)=>{
//     userToken=value
//   })
//   let apiCall = callApi('POST', Constants.UPDATEPROFILE, params, userToken)
//   return apiCall
// }


// export function getSupport(){
//   let apiCall = callApi('GET', Constants.SUPPORT, {}, '')
//   return apiCall 
// }

// export async function submitSupport(params){
//   let userToken=''
//   await getUserData((value)=>{
//     userToken=value
//   })
//   let apiCall = callApi('POST', Constants.SUPPORTSUBMIT, params, userToken)
//   return apiCall
// }

// export async function changePassword(params){
//   let userToken=''
//   await getUserData((value)=>{
//     userToken=value
//   })
//   let apiCall = callApi('POST', Constants.CHANGEPASSWORD, params, userToken)
//   return apiCall
// }


// export async function resendOTP(params){
//   let userToken=''
//   await getUserData((value)=>{
//     userToken=value
//   })
//   let apiCall = callApi('POST', Constants.RESENDOTP, params, userToken)
//   return apiCall
// }