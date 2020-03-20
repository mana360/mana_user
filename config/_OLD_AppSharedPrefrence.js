//Dev - Vivek Pagar

import AsyncStorage from '@react-native-community/async-storage';

const IS_LOGIN = "is_login";
const USER_DATA="user_data";

export function setIsLogin(value) {
  //AsyncStorage.setItem(IS_LOGIN,value)
  storeData(IS_LOGIN, value)
}

export function  IsLogin(callback) {
  // AsyncStorage.getItem(IS_LOGIN,(value:any)=>{
  //     callBack(value)
  // })
  getData(IS_LOGIN, (value) => {
      
      if (value == null || value == undefined || value == false) {
          callback(value)
      } else {
          callback(value)
      }
  })
}

export function setUserData(value){
    storeData(USER_DATA,value)
}

export async function getUserData(callback){
    await getData(USER_DATA, (value)=>{
        if (value == null || value == undefined || value == false) {
            callback(value)
        } else {
            callback(value)
        } 
    })
}

export async function clearPreference(callback){
    await clearAllData(callback)
}

let storeData = async (key,value) => {
    try {
        await AsyncStorage.setItem(key, value)

    } catch (e) {
        // saving error
    }
}
let getData = async (key,callback) => {
    try {
        const value = await AsyncStorage.getItem(key)
        callback(value)
    } catch (e) {
        // error reading value
    }
}
 let clearAllData=async(callback)=>{
     if(callback==undefined){
        await AsyncStorage.clear()
     }else{
    await AsyncStorage.clear().then((e)=>callback())
     }
}
 let clearData=async(key,callback)=>{
    await AsyncStorage.removeItem(key,(e)=>{callback(e)})
}