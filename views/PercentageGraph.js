import React from 'react';
import Svg,{Polyline} from 'react-native-svg';
import {View, Text, TouchableOpacity,ScrollView,StyleSheet,Image} from 'react-native';
import { StylePercentageGraph } from '../config/CommonStyles';
export default class PercentageGraph extends React.Component{
    constructor(props){
        super(props);
        this.state={
          
        }
    }
    
    render(){
        const startPoint = [25, 25];
const controlPoint = [300, 175];
const endPoint = [25, 325];

const path = (
  <path
    d={`
      M ${startPoint}
      Q ${controlPoint} ${endPoint}
    `}
    fill="none"
    stroke="hotpink"
    strokeWidth={5}
  />
)
        let {navigation} = this.props
        return(
            <svg
            viewBox="0 0 200 350"
            style={{ maxHeight: 400 }}
          >
            {path}
          </svg>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageContainer: {
      alignItems: 'center',
      backgroundColor: 'yellow'
    },
    imageWrapper: {
      width: 125, // half of the image width
      height: 250,
      backgroundColor: 'transparent',
      overflow: 'hidden'
    },
    image: {
      width: 250,
      height: 250,
      borderRadius: 125, // half of the image width
      backgroundColor: 'transparent'
    }
  });