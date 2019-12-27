/* screen -MANAPPCUS0045
    design by -mayur s
 */
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import {StyleMapView} from '../config/CommonStyles';
import HeaderBar from '../config/HeaderBar';
import { } from 'react-native-gesture-handler';
import { Header } from 'react-native/Libraries/NewAppScreen';
import FooterBar from '../config/FooterBar';

export default class MapViews extends React.Component {
    render() {
        let {navigation} = this.props
        let item =this.props.navigation.getParam('flag');
        return (
        <View style={{flex:1}}>
            <HeaderBar isBack={true} title="Map View" isLogout={true} navigation={navigation}/>
            <View style={StyleMapView.MainContainer}>

                <MapView
                    style={StyleMapView.mapStyle}
                    showsUserLocation={false}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                    initialRegion={{
                        latitude: 18.5581568,
                        longitude: 73.7828864,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>

                    <Marker
                        coordinate={{ latitude: 18.5581568, longitude: 73.7828864 }}
                        title={"JavaTpoint"}
                        description={"Java Training Institute"}
                        />
                </MapView>

            </View>
            <FooterBar navigation={navigation}/>
    </View>
        );
    }
}

