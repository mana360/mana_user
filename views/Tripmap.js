import React from 'react'
import { View, Image,Dimensions, PermissionsAndroid, Platform, Text, TouchableOpacity} from 'react-native'
import MapView from "react-native-maps";
import {Marker} from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import MapViewDirections from 'react-native-maps-directions'
import Constants from '../config/Constants';
import { MainPresenter } from '../config/MainPresenter';
import ApiConstants from '../config/ApiConstants';
const { width, height } = Dimensions.get('window');
export default class Tripmap extends React.Component {

    constructor(props){
        super(props)
        this.state={
            current_lat:"",
            current_lng:"",
            pickup_coords:"",
            dropoff_coords:"",
            driver_lat:"",
            driver_lng:"",
            drop1_lat:"",
            drop1_lng:"",
            is_map_error:0,
            isRefresh:true,
        }
    }

     componentDidMount(){
        this.driver_id = this.props.navigation.getParam('driver_id')
        console.log("driver id ===> "+this.driver_id)
        this.setState({
            pickup_coords  : this.props.navigation.getParam('pickup_coords'),
            dropoff_coords : this.props.navigation.getParam('dropoff_coords')
        })
        let latlng = this.props.navigation.getParam('pickup_coords').split(",")
        this.setState({
            current_lat : parseFloat(latlng[0]),
            current_lng : parseFloat(latlng[1])
        })
        if(this.props.navigation.getParam('drop1')!=""){
            let drop1_latlng = this.props.navigation.getParam('drop1').split(",")
            this.setState({
                drop1_lat : parseFloat(drop1_latlng[0]),
                drop1_lng : parseFloat(drop1_latlng[1])
            })
        }
        this.init()
        this.timer = setInterval(()=>{
            this.state.isRefresh ? this.getDriverLocation() : null
         }, 20000)
    }

    componentWillUnmount(){
        this.setState({isRefresh:false})
        clearInterval(this.timer)
    }

    async init(){
        if(Platform.OS=="android"){
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.updateCurrentLocation()
            }
        }else{
            this.updateCurrentLocation()
        }
        this.getDriverLocation()
    }

    updateCurrentLocation(){
        Geolocation.getCurrentPosition((position) => {
            let temp_latitude = position.coords.latitude
            let temp_longitude = position.coords.longitude
            console.log("coords======> "+temp_latitude +" +++++ "+temp_longitude)
            this.setState({ current_lat: parseFloat(temp_latitude), current_lng: parseFloat(temp_longitude) })
            },
            (error) => { 
                this.setState({is_map_error:1})
                console.log(error.code, error.message)
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        )
    }

    getDriverLocation(){
        let param = {
            driver_id : this.driver_id
        }
        if(this.presenter!=null){
            this.presenter.callPostApi(ApiConstants.getDriverLocation, param, false)
        }
    }

    onResponse(apiConstant, data){

        switch(apiConstant){
            case ApiConstants.getDriverLocation:{
                if(data.status){
                    console.log("driver location ====> "+JSON.stringify(data))
                    let latlng = data.location_details.driver_latlng.split(",")
                    this.setState({
                        driver_lat: parseFloat(latlng[0]),
                        driver_lng: parseFloat(latlng[1])
                    })
                }else{
                    this.presenter.getCommonAlertBox(data.message)
                }
                break;
            }
        }

    }

    getMapView(){
        return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', width:'100%', height:'100%'}}>
            <MapView  
                        ref={(ref)=>{this.googleMap=ref}}
                        style={{flex:1, width:'100%', height:'100%'}}
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
                            {
                                this.state.driver_lat!=""
                                ?
                                    this.current_marker.animateMarkerToCoordinate({
                                    latitude: this.state.driver_lat,
                                    longitude: this.state.driver_lng,
                                    latitudeDelta: 0.0059397161733585335,
                                    longitudeDelta: 0.005845874547958374
                                }, 10000)
                                : null
                            }
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
                        </Marker>
                        {
                            this.state.drop1_lat!=""
                            ?
                            <Marker  
                                ref={(ref)=>{this.current_marker = ref}}
                                coordinate={{ latitude:this.state.drop1_lat, longitude:this.state.drop1_lng}}
                                title={""}  
                                description={""}
                            >
                            </Marker>
                            : null
                        }

                        {
                            this.state.driver_lat!=""
                            ?
                            <Marker
                                ref={(ref)=>{this.driver_marker = ref}}
                                coordinate={{ latitude:this.state.driver_lat, longitude:this.state.driver_lng}}
                                title={""}  
                                description={""}
                            >
                                <View style={{backgroundColor:Constants.COLOR_GREEN, justifyContent:'center', alignItems:'center', padding:5, borderRadius:50}}>
                                    <Image source={require('../images/truck_icon.png')} style={{width:35, height:35, resizeMode:'contain', tintColor:Constants.COLOR_WHITE}}/>
                                </View>
                            </Marker>
                            : null
                        }

                        <MapViewDirections
                            origin={this.state.pickup_coords}
                            destination={this.state.dropoff_coords}
                            apikey={Constants.GOOGLE_MAP_KEY}
                            strokeWidth={2}
                            strokeColor={Constants.COLOR_BLACK}
                            mode="DRIVING"
                            resetOnChange={true}
                            onStart={(params) => {
                                // console.log("Started routing between"+JSON.stringify(params.origin)+" and "+JSON.stringify(params.destination));
                            }}
                            onReady={result => {
                                console.log(`Distance normal = ${result.distance} km`)
                                console.log(`Duration normal = ${result.duration} min.`)
                                // this.googleMap.fitToCoordinates(result.coordinates, {
                                //     edgePadding: {
                                //         right: (width / 10),
                                //         bottom: (height / 10),
                                //         left: (width / 10),
                                //         top: (height / 10),
                                //     }
                                // });
                            }}
                            onError={(errorMessage) => {
                                console.log('GOT AN ERROR --- > '+errorMessage);
                            }}
                        />

                    </MapView>
        </View>
        )
    }

    render(){
        let {navigation}=this.props
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} />
                {
                    this.state.current_lat!="" ? this.getMapView()
                    :
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{textAlign:'center', fontSize:14,}}>Loading Map</Text>
                        {
                            this.state.is_map_error==1 ?
                            <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{justifyContent:'center', alignItems:'center'}}>
                                <Text> GPS Location Failed, click to go back </Text>
                            </TouchableOpacity>
                            : null
                        }
                    </View>
                }
            </View>
        )
    }
}