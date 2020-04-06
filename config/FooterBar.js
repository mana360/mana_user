/*
    design by : Udayraj 
 */
import React from 'react';
import {View,Image,StyleSheet ,TouchableOpacity,} from 'react-native';
import {Footer} from 'native-base'
import Constants from './Constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class FooterBar extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerMode:'none',
      navigationOptions: {
        headerVisible: false,
      }
    };
  };
  constructor(props){
    super(props)
  }
  render(){
  return (
     <Footer style={{backgroundColor:Constants.COLOR_FOOTER_GREY, padding:5, margin:0, justifyContent:'center', alignItems:'center', alignContent:'center',}}>
        <View style={{flex:4, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

            <View style={styles.footerCol}>
                <TouchableOpacity
                  onPress={()=>{
                     this.props.navigation.navigate('Dashboard')
                     this.props.onReset()
                  }}
                >
                  <Image
                    source={require('../images/home.png')}
                    style={styles.footerIcon}
                  />
                </TouchableOpacity>
            </View>

            <View style={styles.footerCol}>
                <TouchableOpacity
                   onPress={()=>{
                    this.props.navigation.navigate('MyProfile')
                 }}
                >
                  <Image
                    source={require('../images/profile.png')}
                    style={styles.footerIcon}
                  />
                </TouchableOpacity>
            </View>

            <View style={styles.footerCol}>
                <TouchableOpacity
                   onPress={()=>{
                    this.props.navigation.navigate('Notification')
                 }} 
                >
                  <Image
                    source={require('../images/notification.png')}
                    style={styles.footerIcon}
                  />
                </TouchableOpacity>
            </View>

            <View style={styles.footerCol}>
                <TouchableOpacity
                      onPress={()=>{
                        this.props.navigation.navigate('HelpAndSupport')
                     }}    
                >
                  <Image
                    source={require('../images/support.png')}
                    style={styles.footerIcon}
                  />
                </TouchableOpacity>
            </View>
        </View>
    </Footer>
 );
 }
};
const styles = StyleSheet.create({
footerCol:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
},
footerIcon:{
  width:35,
  height:35,
  resizeMode:'cover',
},
});
export default FooterBar;