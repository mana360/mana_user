import React, {Fragment} from 'react';
import { View,} from 'react-native';
import NetInfo from "@react-native-community/netinfo";

//Dev - Udayraj
class CommonFunctions extends React.Component{
    isUserEmailValid = (email) =>{
        console.log(email)
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        return emailRegex.test(email)
    }

    isUserPasswordValid = (password) => {
        var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@_$!%*#?&])[A-Za-z\d@_$!%*#?&]{5,}$/
        return passwordRegex.test(password)
    }

    isEmpty = (value)=>{
        console.log(value)
        if(value === ""){
            return false
        }else{
            return true
        }
    }

    isNetworkConnected = () =>{
        NetInfo.isConnected.fetch().then(isConnected =>{
            if(isConnected){
                return true
            }else{
                alert('Connection lost')
                return false
            }
        })
    }    

    render(){
        return(
            <View>
            </View>
        )
    }
}

CommonFunctions = new CommonFunctions()
export default CommonFunctions;