/* screen -MANAPPCUS017,17-1
    design by -mayur s
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
export default class ViewCurrentTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: null,
            inputLabelTrip: '',
            reviewTrip: '',
            modal_Visible: false,
            invoiceModal_Visible: false,
        }
    }
    render() {
        let { navigation } = this.props
       
        return (
            <View style={{ flex: 1 }}>

                <HeaderBar title="VIEW CURRENT TRIP" isBack={true} isLogout={true} navigation={navigation}/>
                <View style={{ flex: 1 }}>
                    <ScrollView style={{ width: '100%' }} bounces={false}>
                     
                        <View style={{ marginBottom: 2 }}>

                            <View style={StyleViewCurrentTrip.topCircle} />

                            <View style={{ flexDirection: 'row', justifyContent: 'center',alignItems:"center" }}>

                                <TouchableOpacity style={{ marginTop: 25, }}
                                    onPress={() => {
                                        return (
                                            this.setState({ invoiceModal_Visible: true })
                                        )
                                    }}
                                >
                                    <Image source={require('../images/invoice_details.png')}
                                        style={StyleViewCurrentTrip.sideImage} />
                                </TouchableOpacity>

                                <Image source={require('../images/current_trips.png')}
                                    style={StyleViewCurrentTrip.ImageCurrentTrip}
                                />
                                <TouchableOpacity style={{ marginTop: 25, }}
                                    onPress={() => {
                                        this.props.navigation.navigate('HelpAndSupport', { flag: false })
                                    }}
                                >
                                    <Image source={require('../images/support_icon.png')}
                                        style={StyleViewCurrentTrip.sideImage}
                                    />
                                </TouchableOpacity>
                            </View>
                      
                        </View>

                        <Text style={StyleViewCurrentTrip.title}>NYC - SYS</Text>
                        <View style={StyleViewCurrentTrip.bottomLine}></View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.CurrentStatus}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>On Route to destination</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.EstimatedTimetonextstatus}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>10:50 PM</Text>
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
                                <Text style={StyleViewCurrentTrip.col2Text}>11/03/2019</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.DriverName}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>Amanda.P</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.ContactNo}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>524786918</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.Partnername}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>Uric</Text>
                            </View>
                        </View>

                        <View style={StyleViewCurrentTrip.row}>
                            <View style={StyleViewCurrentTrip.col1}>
                                <Text style={StyleViewCurrentTrip.col1Text}>{Constants.ContactNo}</Text>
                            </View>
                            <View style={StyleViewCurrentTrip.col2}>
                                <Text style={StyleViewCurrentTrip.col2Text}>75848596</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={StyleViewCurrentTrip.bottomButton}
                            onPress={() => {
                                this.props.navigation.navigate('MapViews',{flag:'truck'})
                                // this.RBSheet.open(); //delay msg
                            }}
                        >
                            <Image source={require('../images/live_geo_pin.png')}
                                style={StyleViewCurrentTrip.buttonIcon}
                            />
                            <Text style={StyleViewCurrentTrip.buttonText}>{Constants.LiveGeoPin}</Text>
                        </TouchableOpacity>

                    </ScrollView>
                   
                    <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        height={200}
                        duration={1000}

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