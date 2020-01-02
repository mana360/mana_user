// import React from 'react';
// import Svg,{Polyline} from 'react-native-svg';
// import {View, Text, TouchableOpacity,ScrollView,StyleSheet,Image} from 'react-native';
// import { StylePercentageGraph } from '../config/CommonStyles';


// import { Svg, Defs, Rect, Mask, Circle } from 'react-native-svg';
// const WrappedSvg = () => (
//     <View style={{ aspectRatio: 1 }}>
//         <Svg height="100%" width="100%" viewBox="0 0 100 100">
//             <Defs>
//                 <Mask id="mask" x="0" y="0" height="100%" width="100%">
//                     <Rect height="100%" width="100%" fill="#fff" />
//                     <Circle r="45" cx="50" cy="50" />
//                 </Mask>
//             </Defs>
//             <Rect height="100%" width="100%" fill="rgba(0, 0, 0, 0.5)" mask="url(#mask)" fill-opacity="0" />
//         </Svg>
//     </View>
// );

// export class index extends Component {
//     render() {
//         return (
//             <View style={{ backgroundColor: '#FFFFFF', flex: 1, justifyContent: 'center', alignItems: 'center' }}>

//                 <View style={{ width: Dimensions.get('window').width, height: 300, position: 'absolute' }}>
//                     <WrappedSvg />
//                 </View>
//             </View>
//         );
//     }
// }