/* screen -MANAPPCUS0014,15,23,28,48
    design by -mayur s
 */
import React from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity, FlatList } from 'react-native';
import { Card, CardItem } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import { StyleDashboard } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import TruckBooking from './TruckBooking';
import WarehouseServices from './WarehouseServices';
import TruckingWarehouseServices from './TruckingWarehouseServices';
import CollectMyLoad from './CollectMyLoad';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { MainPresenter } from '../config/MainPresenter'
import ApiConstants from '../config/ApiConstants';
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: null,
            inputLabelTrip: '',
            reviewTrip: '',
            modal_Visible: false,
            screen_title: 'Dashboard',
            fill1: "90",
            role_id:"",
            active_status:"",
            notifications_count:"",

            dashboard_data: [
                // { title: "Truck Bookings", desc: "Lorem ipsum sit amet, consecture adiscipline  elit, Lorem sed do eipsm temport jsheeon ut labore", percent: "60" },
                // { title: "Warehouse Services", desc: "Lorem ipsum sit amet, consecture adiscipline  elit, Lorem sed do eipsm temport jsheeon ut labore", percent: "35" },
                // { title: "Trucking + Warehouse", desc: "Lorem ipsum sit amet, consecture adiscipline  elit, Lorem sed do eipsm temport jsheeon ut labore", percent: "25" },
                // { title: "Collect My Load", desc: "Lorem ipsum sit amet, consecture adiscipline  elit, Lorem sed do eipsm temport jsheeon ut labore", percent: "70" },
            ],
        }
    }
    componentDidMount() {
       
        this.presenter.callGetApi(ApiConstants.getDashboardData, "", true);
        this.getUserStatus();
    }

getUserStatus(){
    this.presenter.callGetApi(ApiConstants.userStatus, "", true);
}
    onResponse(apiConstant, data) {
        switch (apiConstant) {
            case ApiConstants.getDashboardData:
                if (data.status) {
                    data.truck_booking
                    data.warehouse_booking
                    data.truck_warehouse_booking
                    data.cml_booking
                    data.referral_content
                    let localArray = []
                    if (data && data.dashboard_data && data.dashboard_data.truck_booking) {
                        let truck_booking = data.dashboard_data.truck_booking
                        localArray.push({
                            id: "truck_booking",
                            title: "Truck Bookings",
                            current_trips: truck_booking.current_trips ? truck_booking.current_trips : 0,
                            upcoming_trips: truck_booking.upcoming_trips ? truck_booking.upcoming_trips : 0,
                            desc: data.dashboard_data.referral_content
                        })
                    }
                    if (data && data.dashboard_data && data.dashboard_data.warehouse_booking) {
                        let warehouse_booking = data.dashboard_data.warehouse_booking
                        localArray.push({
                            id: "warehouse_booking",
                            title: "Warehouse Services",
                            current_trips: warehouse_booking.current_trips ? warehouse_booking.current_trips : 0,
                            upcoming_trips: warehouse_booking.upcoming_trips ? warehouse_booking.upcoming_trips : 0,
                            desc: data.dashboard_data.referral_content
                        })
                    }
                    if (data && data.dashboard_data && data.dashboard_data.truck_warehouse_booking) {
                        let truck_warehouse_booking = data.dashboard_data.truck_warehouse_booking
                        localArray.push({
                            id: "truck_warehouse_booking",
                            title: "Trucking + Warehouse",
                            current_trips: truck_warehouse_booking.current_trips ? truck_warehouse_booking.current_trips : 0,
                            upcoming_trips: truck_warehouse_booking.upcoming_trips ? truck_warehouse_booking.upcoming_trips : 0,
                            desc: data.dashboard_data.referral_content
                        })
                    }
                    if (data && data.dashboard_data && data.dashboard_data.cml_booking) {
                        let cml_booking = data.dashboard_data.cml_booking
                        localArray.push({
                            id: "cml_booking",
                            title: "Collect My Load",
                            current_trips: cml_booking.current_trips ? cml_booking.current_trips : 0,
                            upcoming_trips: cml_booking.upcoming_trips ? cml_booking.upcoming_trips : 0,
                            desc: data.dashboard_data.referral_content
                        })
                    }
                    console.log(localArray)
                    this.setState({
                        dashboard_data: localArray
                    })
                }
                break;
                case ApiConstants.userStatus:{
                    if (data.status) {
                        this.setState({role_id:data.userStatus.role_id,active_status:data.userStatus.active_status,notifications_count:data.userStatus.notifications_count});
                   console.log(data.userStatus);
                    }else{
                        alert(data.message);
                    }
                }
                break;

            default:
                break;
        }
    }
    getDashboard() {
        return (
            <View>
                <FlatList
                    data={this.state.dashboard_data}
                    extraData={this.state}
                    keyExtractor={(index) => index.toString()}
                    numColumns={1}
                    renderItem={
                        ({ item, index }) =>

                            <View style={StyleDashboard.row}>

                                <View style={StyleDashboard.col1}>

                                    <AnimatedCircularProgress
                                        size={90}
                                        width={10}
                                        fill={item.current_trips}
                                        rotation="0"
                                        lineCap="round"
                                        duration={1200}
                                        tintColor={
                                            index % 4 == 0 ? "#CD18EE" :
                                                index % 4 == 1 ? "#9ABD08" :
                                                    index % 5 == 2 ? "#FA4009" :
                                                        index % 4 == 3 ? "#57C9EB" : null
                                        }
                                        backgroundColor="#E8E8E8">
                                        {(fill) => (<Text style={{
                                            color:
                                                index % 4 == 0 ? "#CD18EE" :
                                                    index % 4 == 1 ? "#9ABD08" :
                                                        index % 5 == 2 ? "#FA4009" :
                                                            index % 4 == 3 ? "#57C9EB" : null
                                        }}> {item.current_trips} </Text>)}
                                    </AnimatedCircularProgress>

                                </View>

                                <View style={StyleDashboard.col2}>
                                    <Text style={[StyleDashboard.labelText2, {
                                        color:
                                            index % 4 == 0 ? "#CD18EE" :
                                                index % 4 == 1 ? "#9ABD08" :
                                                    index % 5 == 2 ? "#FA4009" :
                                                        index % 4 == 3 ? "#57C9EB" : null
                                    }]}>{item.title}</Text>
                                    <Text style={StyleDashboard.descText}>{item.desc}</Text>
                                </View>

                            </View>
                    }
                />

            </View>
        )
    }
    resetPage(){
        console.log("Resettting page")
        this.setState({screen_title:'Dashboard'})
    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1, backgroundColor: Constants.COLOR_GREY }}>
                <HeaderBar title={this.state.screen_title} isLogout={true} navigation={navigation} />
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', }}>
                    <ScrollView bounces={false}>
                        <View style={StyleDashboard.topCircle}>
                        </View>

                        <Card style={{ width: '90%', alignSelf: 'center', height: 115, maxHeight: 115, marginTop: -100, borderRadius: 5 }}>
                            <CardItem style={StyleDashboard.cardView} >

                                <TouchableOpacity style={StyleDashboard.ImageView}
                                    onPress={() => {
                                        //    this.props.navigation.navigate('TruckBooking')
                                        this.setState({ screen_title: "Truck Bookings" })
                                    }}
                                >
                                    <Image source={this.state.screen_title == "Truck Bookings" ? require('../images/Truck_Bookings_copy.png') : require('../images/Truck_Bookings.png')}
                                        style={[StyleDashboard.imageD]}
                                    />
                                    <Text style={this.state.screen_title == "Truck Bookings" ? [StyleDashboard.textD, { color: Constants.COLOR_GREEN }] : [StyleDashboard.textD]}>{Constants.TruckBooking}</Text>
                                </TouchableOpacity>

                                <LinearGradient colors={['white', 'grey', 'white']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                                    <View style={{ width: 0.7, height: 75, }}>
                                    </View>
                                </LinearGradient>

                                <TouchableOpacity style={StyleDashboard.ImageView}
                                    onPress={() => {
                                        this.setState({ screen_title: "Warehouse Services" })
                                    }}
                                >
                                    <Image source={this.state.screen_title == "Warehouse Services" ? require('../images/WarehouseServices_copy.png') : require('../images/Warehouse_Services.png')}
                                        style={StyleDashboard.imageD}
                                    />
                                    <Text style={this.state.screen_title == "Warehouse Services" ? [StyleDashboard.textD, { color: Constants.COLOR_GREEN }] : [StyleDashboard.textD]}>{Constants.WarehouseService}</Text>
                                </TouchableOpacity>

                                <LinearGradient colors={['white', 'grey', 'white']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                                    <View style={{ width: 0.7, height: 75, }}>
                                    </View>
                                </LinearGradient>

                                <TouchableOpacity style={StyleDashboard.ImageView}
                                    onPress={() => {
                                        this.setState({ screen_title: "Trucking Warehouse Services" })
                                    }}
                                >
                                    <Image source={this.state.screen_title == "Trucking Warehouse Services" ? require('../images/Trucking_+Warehouse.png') : require('../images/Trucking+Warehouse.png')}
                                        style={StyleDashboard.imageD}
                                    />
                                    <Text style={this.state.screen_title == "Trucking Warehouse Services" ? [StyleDashboard.textD, { color: Constants.COLOR_GREEN }] : [StyleDashboard.textD]}>{Constants.truckingwarehouse}</Text>
                                </TouchableOpacity>

                                <LinearGradient colors={['white', 'grey', 'white']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                                    <View style={{ width: 0.7, height: 75, }}>
                                    </View>
                                </LinearGradient>

                                <TouchableOpacity style={[StyleDashboard.ImageView, { borderRightWidth: 0 }]}
                                    onPress={() => {
                                        this.setState({ screen_title: "Pick My Load" })
                                    }}
                                >
                                    <Image source={this.state.screen_title == "Pick My Load" ? require('../images/Collect_My_Load_active.png') : require('../images/Collect_My_Load.png')}
                                        style={StyleDashboard.imageD}
                                    />
                                    <Text style={this.state.screen_title == "Pick My Load" ? [StyleDashboard.textD, { color: Constants.COLOR_GREEN }] : [StyleDashboard.textD]}>{Constants.CollectMyLoad}</Text>
                                </TouchableOpacity>

                            </CardItem>

                        </Card>

                        <Text style={StyleDashboard.labelText}>{Constants.TotalBookings}</Text>
                        <View style={StyleDashboard.bottomLine}>
                        </View>

                        <View>
                            {
                                this.state.screen_title == "Dashboard"
                                    ?
                                    this.getDashboard()
                                    :
                                    this.state.screen_title == "Truck Bookings"
                                        ?
                                        <TruckBooking navigation={navigation} data= {this.state.dashboard_data[0]}/>
                                        :
                                        this.state.screen_title == "Warehouse Services"
                                            ?
                                            <WarehouseServices navigation={navigation} data= {this.state.dashboard_data[1]}/>
                                            :
                                            this.state.screen_title == "Trucking Warehouse Services"
                                                ?
                                                <TruckingWarehouseServices navigation={navigation} data= {this.state.dashboard_data[2]}/>
                                                :
                                                this.state.screen_title == "Pick My Load"
                                                    ?
                                                    <CollectMyLoad navigation={navigation} data= {this.state.dashboard_data[3]}/>
                                                    :
                                                    null
                            }
                        </View>

                    </ScrollView>
                </View>

                <FooterBar navigation={navigation} onReset={this.resetPage.bind(this)} setReset={true}/>
            </View>
        )
    }
}