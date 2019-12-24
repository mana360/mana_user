/* screen -MANAPPCUS030
    design by -mayur
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleViewCurrentTrip, StyleCurrentTrip } from '../config/CommonStyles';
import RBSheet from "react-native-raw-bottom-sheet";
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import Invoice from './InvoiceView';
import TripHelpAndSupport from './TripHelpAndSupport';
export default class TruckingWarehouseCurrentTripDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            starCount: null,
            inputLabelTrip: '',
            reviewTrip: '',
            modal_Visible: false,
            invoiceModal_Visible:false
        }
    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>

                <HeaderBar title="TRUCKING + WAREHOUSE    CURRENT TRIP DETAILS" isBack={true} isLogout={true} navigation={navigation} />
                <View style={{ flex: 1 }}>
                    <ScrollView style={{ width: '100%' }} bounces={false}>
                        <View style={{ marginBottom: 2 }}>
                            <View style={StyleViewCurrentTrip.topCircle}>
                            </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <TouchableOpacity style={{marginTop:55}}
                                        onPress={()=>{
                                            this.setState({invoiceModal_Visible:true})
                                        }}
                                    >
                                        <Image source={require('../images/invoice_details.png')}
                                            style={StyleViewCurrentTrip.sideImage}
                                        />
                                    </TouchableOpacity>
                                
                                    <Image source={require('../images/Trucking_+Warehouse.png')}
                                        style={StyleViewCurrentTrip.ImageCurrentTrip}
                                    />
                                    
                                    <TouchableOpacity style={{marginTop:55}}
                                        onPress={()=>{
                                                this.props.navigation.navigate('HelpAndSupport',{flag_truckingWarehouse:false});
                                        }}
                                    >
                                        <Image source={require('../images/support_icon.png')}
                                        style={StyleViewCurrentTrip.sideImage}
                                        />
                                    </TouchableOpacity>
                                </View>
                      </View>

                        <Text style={StyleViewCurrentTrip.title}>Current Trip:NYC - SYS</Text>
                        <View style={StyleViewCurrentTrip.bottomLine}></View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.PartnerName}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>ABC Services</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.Telephonenumber}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>+56985874451</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.EstimatedTimetonextstatus}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>11:00PM</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.EstimatedTimeTocmpleteTrip}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>11 PM</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.EstimatedDateTocmpleteTrip}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>11/12/2019</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.DriverName}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>85968784455</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.PhoneNumber}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>+8956234541</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.LiveGeoPin}</Text>
                            </View>
                            <TouchableOpacity style={StyleViewCurrentTrip.col2}>
                            <Image source={require('../images/live_geo_pin.png')}
                                    style={{width:20,height:20,tintColor:Constants.COLOR_GREEN,marginRight:5,marginLeft:3}}/>
                            <Text style={{color:Constants.COLOR_GREEN}}>{Constants.ViewMap}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.CurrentStatus}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>On Route to Destination</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.CargoHandling}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>NO</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.CargoHandlingCharges}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>NA</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.CargoType}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>75848596</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.StorageType}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>Refrigirator</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.WarehoueType}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>Public</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.BasicDescription}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>loremp ipsomeloremp ipsomeloremp ipsomeloremp ipsomeloremp ipsome</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.Quantity}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>7</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.Size}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>38 Kg</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.CargoInssurance}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>Yes</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.VolumetricWeight}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>18 kg</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.Dimension}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>100*50*50</Text>
                            </View>
                        </View>
                        
                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.Dimension}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>100*50*50</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.Location}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>Street 2 Lane 3,ryc</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.DurationOfWarehouse}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>12/01/2019  to 13/01/2019</Text>
                            </View>
                        </View>

                    </ScrollView>
                    
                </View>

                <FooterBar navigation={navigation} />

                <Modal
                                    animationType='fade'
                                    transparent={true}
                                    visible={this.state.invoiceModal_Visible}
                                >
                                    <Invoice clickCallback={() => {
                                        this.setState({ invoiceModal_Visible: false });
                                    }} />
                </Modal>
            </View>
        )
    }
}