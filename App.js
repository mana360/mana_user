import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Home from './views/Home'
import Splash from './views/Splash'

console.disableYellowBox = true;

const AppNavigator1 = createStackNavigator({
    Home :{
      screen:Home,
      navigationOptions:()=>({ header:null,})
    },
    Splash: {
      screen: Splash,
      navigationOptions: () => ({ header: null })
    },
},
     {initialRouteName:"Splash"}
)
export const AppNavigator = createAppContainer(AppNavigator1);