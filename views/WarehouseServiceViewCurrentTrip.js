/* screen -MANAPPCUS025
    design by -mayur s

    DONT USED THIS FILE
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { StyleViewCurrentTrip } from '../config/CommonStyles';
import RBSheet from "react-native-raw-bottom-sheet";
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import Invoice from './InvoiceView';
export default class WarehouseServiceViewCurrentTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: null,
            inputLabelTrip: '',
            reviewTrip: '',
            invoiceModal_Visible: false,
            modal_Visible: false,
        }
    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>

                <HeaderBar title="VIEW CURRENT TRIP" isBack={true} isLogout={true} navigation={navigation} />
                <View style={{ flex: 1 }}>

                    <ScrollView style={{ width: '100%' }} bounces={false}>

                        <View style={{ marginBottom: 2 }}>
                            <View style={StyleViewCurrentTrip.topCircle} />

                            <View style={{ flexDirection: 'row', justifyContent: 'center',alignItems:'center' }}>
                                <TouchableOpacity style={{ marginTop: 25 }}
                                    onPress={() => {
                                        this.setState({ invoiceModal_Visible: true })
                                    }}
                                >
                                    <Image source={require('../images/invoice_details.png')}
                                        style={[StyleViewCurrentTrip.sideImage, {}]}
                                    />
                                </TouchableOpacity>
                                <Image source={require('../images/WarehouseServices_copy.png')}
                                    style={StyleViewCurrentTrip.ImageCurrentTrip}
                                />
                                <TouchableOpacity style={{ marginTop: 25 }}
                                    onPress={() => {
                                        this.props.navigation.navigate('HelpAndSupport', { flag: false });
                                    }}
                                >
                                    <Image source={require('../images/support_icon.png')}
                                        style={[StyleViewCurrentTrip.sideImage, {}]}
                                    />
                                </TouchableOpacity>

                            </View>

                        </View>

                        <Text style={StyleViewCurrentTrip.title}>ABC Services</Text>
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
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.TelephoneNo}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>+4587541635</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.Duration}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>12/01/2019 to 18/01/2019</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.CargoHandling}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>No</Text>
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
                                <Text style={StyleViewCurrentTrip.col2Text}>Cargo type1</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.StorageType}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>Refrigerator</Text>
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
                                <Text style={StyleViewCurrentTrip.col2Text}>loremp_ispsome_loremp_ispsome_loremp_ispsome_loremp_ispsome_loremp_ispsome_loremp_ispsome_loremp_ispsome_</Text>
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
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.CargoInssurance}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>Yes</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.Size}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>38Kg</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.Dimension}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>100*50*50 inches</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.VolumetricWeight}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>18kg</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.CurrentStatus}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>in storage</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={StyleViewCurrentTrip.bottomButton}
                             onPress={() => {
                                this.props.navigation.navigate('MapViews',{flag:'warehouse'})
                                // this.RBSheet.open(); //delay msg
                            }}
                        >
                            <Image source={require('../images/live_geo_pin.png')}
                                style={StyleViewCurrentTrip.buttonIcon}
                            />
                            <Text style={StyleViewCurrentTrip.buttonText}>{Constants.warehouseLocation}</Text>
                        </TouchableOpacity>

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
                        }}
                    />
                </Modal>
            
                <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        height={200}
                        duration={1}

                        customStyles={{
                            container: {
                                borderTopLeftRadius: 50,
                                borderTopRightRadius: 50,
                            }
                        }}
                    >
                        <Image source={require('../images/ROAD_BLOCK.jpg')}
                            style={{ width: 100, resizeMode: 'stretch', height: 100, alignSelf: 'center', marginTop: 20 }} />
                        <Text style={{
                            textAlign: 'center', width: '70%', textTransform: 'uppercase', fontWeight: 'bold', marginHorizontal: 30, paddingLeft: 10,
                            paddingTop: 10, fontSize: Constants.FONT_SIZE_LARGE, color: 'grey', alignSelf: 'center'
                        }}>{Constants.WillCauseDelayBecauseOfSomeRoadBloc}</Text>

                    </RBSheet>
            
            </View>
        )
    }
}