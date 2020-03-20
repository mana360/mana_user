/** 
 * 
 *  Dependency  required
 * "@react-native-community/async-storage": "^1.8.1",
 * 
 * */

import AsyncStorage from '@react-native-community/async-storage';
/* ----------Storage Key Constants------------ */
const AUTH_TOKEN = "auth_token"


/* ----------EOF Storage Key Constants------------ */




/* ----------- Public Export Methods ---------- */
export async function getAuthToken() {
    let value = await _getData(AUTH_TOKEN)
    return value
}
export async function setAuthToken(value, callback = undefined) {
    let returnValue = await _setData(AUTH_TOKEN, value, callback)
    return returnValue;
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