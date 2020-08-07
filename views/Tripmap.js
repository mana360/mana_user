import React from 'react'
import { View, Image,} from 'react-native'
import HeaderBar from '../config/HeaderBar';
import MapView from "react-native-maps";
import {Marker} from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import MapViewDirections from 'react-native-maps-directions'
import Constants from '../config/Constants';
import { MainPresenter } from '../config/MainPresenter';

export default class Tripmap extends React.Component {

    constructor(props){
        super(props)
        this.state={
            current_lat:"",
            current_lng:"",
            pickup_coords:"",
            dropoff_coords:"",
        }
    }

    componentDidMount(){
        this.setState({
            pickup_coords  : this.props.navigation.getParam('pickup_coords'),
            dropoff_coords : this.props.navigation.getParam('dropoff_coords')
        })
        this.updateCurrentLocation()
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    updateCurrentLocation(){
        Geolocation.getCurrentPosition((position) => {
            let temp_latitude = parseFloat(position.coords.latitude)
            let temp_longitude = parseFloat(position.coords.longitude)
            this.setState({ current_lat:temp_latitude, current_lng:temp_longitude })
            },
            (error) => { console.log(error.code, error.message) },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        )
        this.timer = setInterval(()=>{
            this.updateCurrentLocation()
        },10000) //10 seconds of interval
    }

    onResponse(apiConstant, data){

        switch(apiConstant){
            case 1:{
                if(data.status){

                }else{
                    this.presenter.getCommonAlertBox(data.message)
                }
                break;
            }
        }

    }

    render(){
        let {navigation}=this.props
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} />
                <HeaderBar isBack={true} title="Trip Map"  navigation={navigation}/>
                {
                    this.state.current_lat!="" ?
                    <MapView  
                        ref={(ref)=>{this.googleMap=ref}}
                        style={{flex:1}}
                        showsUserLocation={false}
                        zoomEnabled={true}
                        zoomControlEnabled={false}
                        resetOnChange={true}
                        initialRegion={{  
                            latitude: this.state.current_lat,
                            longitude:this.state.current_lng,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        onMapReady={()=>{
                            this.googleMap.animateToRegion({
                                latitude: this.state.current_lat,
                                longitude: this.state.current_lng,
                                latitudeDelta: 0.0059397161733585335,
                                longitudeDelta: 0.005845874547958374
                            })
                            this.current_marker.animateMarkerToCoordinate({
                                latitude: this.state.current_lat,
                                longitude: this.state.current_lng,
                                latitudeDelta: 0.0059397161733585335,
                                longitudeDelta: 0.005845874547958374
                            }, 10000)
                        }}
                        // onLayout={ () => this.googleMap.fitToCoordinates(
                        //         [{ latitude: this.state.current_lat, longitude: this.state.current_lng,}],
                        //         { edgePadding: { top: 5, right: 5, bottom: 5, left: 5 }, animated: true }
                        //     )
                        // }
                    >
                        <Marker  
                            ref={(ref)=>{this.current_marker = ref}}
                            coordinate={{ latitude:this.state.current_lat, longitude:this.state.current_lng}}
                            title={""}  
                            description={""}
                        >
                            <View style={{backgroundColor:Constants.COLOR_GREEN, justifyContent:'center', alignItems:'center', padding:5, borderRadius:50}}>
                                <Image source={require('../images/truck_icon.png')} style={{width:35, height:35, resizeMode:'contain', tintColor:Constants.COLOR_WHITE}}/>
                            </View>
                        </Marker>

                        <MapViewDirections
                            origin={this.state.pickup_coords}
                            destination={this.state.dropoff_coords}
                            apikey={Constants.GOOGLE_MAP_KEY}
                            strokeWidth={1}
                            strokeColor={Constants.COLOR_BLACK}
                            mode="DRIVING"
                            // waypoints={ this.state.waypoints_list}
                            // optimizeWaypoints={false}
                            resetOnChange={true}
                            onStart={(params) => {
                                // console.log("Started routing between"+JSON.stringify(params.origin)+" and "+JSON.stringify(params.destination));
                            }}
                            onReady={result => {
                                console.log(`Distance normal = ${result.distance} km`)
                                console.log(`Duration normal = ${result.duration} min.`)
                                this.googleMap.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        right: (width / 10),
                                        bottom: (height / 10),
                                        left: (width / 10),
                                        top: (height / 10),
                                    }
                                });
                            }}
                            onError={(errorMessage) => {
                                console.log('GOT AN ERROR --- > '+errorMessage);
                            }}
                        />

                    </MapView>
                    :
                    <View style={{flex:1}}>
                        {/* empty region */}
                    </View>
                }
            </View>
        )
    }
}