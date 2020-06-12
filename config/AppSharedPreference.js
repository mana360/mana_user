/** 
 *  Dependency  required
 * "@react-native-community/async-storage": "^1.8.1",
 * */

import AsyncStorage from '@react-native-community/async-storage';

const AUTH_TOKEN = "auth_token"
const USER_DATA = "user_data"
const FIREBASE_TOKEN="firebase_token"

export async function getAuthToken() {
    let value = await _getData(AUTH_TOKEN)
    return value
}

export async function setAuthToken(value, callback = undefined) {
     await _setData(AUTH_TOKEN, value, callback)
}

export async function getUserData(){
    let value= await _getData(USER_DATA)
    return value
}

export async function setUserData(userObj){
    let data =[]
    data.push(userObj)
    await setAuthToken(userObj.access_token)
    await _setData(USER_DATA,JSON.stringify(data))
}

export async function setFirebaseToken(token){
    await _setData(FIREBASE_TOKEN,token)
}

export async function getFirebaseToken(){
    let value= await _getData(FIREBASE_TOKEN)
    return value
}

export async function clearAllData(callback = undefined) {
    await AsyncStorage.clear((e) => {
        if (callback) {
            callback(e)
        }
    })

}

/*--------- EOF Public Export Methods ------------*/



/*--------- Private method------- */
let _getData = async (key, callback = undefined) => {
    value = await AsyncStorage.getItem(key,callback)
    return value;
}
let _setData = async (key, value, callback = undefined) => {
    await AsyncStorage.setItem(key, value,callback)
}
let _removeData = async (key, callback = undefined) => {
    await AsyncStorage.removeItem(key, callback)
}
/*---------EOF Private method------- */