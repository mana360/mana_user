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

   isNetworkConnected = async () =>{
       let returnValue=false;
     await  NetInfo.fetch().then(isConnected =>{
            if(isConnected){
                returnValue=true;
            }else{
                alert('Connection lost')
           returnValue=false;
            }
        })
        return returnValue;
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