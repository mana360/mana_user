import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, Modal, TouchableOpacity, TouchableHighlightBase } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleViewUpcomingTrip, StyleUpcomingTrip } from '../config/CommonStyles';
import RBSheet from "react-native-raw-bottom-sheet";
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import { thisExpression } from '@babel/types';
import Invoice from './InvoiceView';
export default class WarehouseViewUpcomingDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            starCount: null,
            inputLabelTrip: '',
            reviewTrip: '',
            invoiceModal_Visible: false,
            cancelModal_Visible: false,
            isSuccesfull:false,
        }
    }
    delete_trip() {
        return (
            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <View style={StyleViewUpcomingTrip.cancelModalView}>
                    <TouchableOpacity style={StyleViewUpcomingTrip.leftcrossView}
                        onPress={() => {
                            this.setState({ cancelModal_Visible: false })
                        }}
                    >
                         <Image source={require('../images/close.png')} 
                                 style={{width:12,height:12,}}
                         />
                    </TouchableOpacity>

                    <Text style={StyleViewUpcomingTrip.modalMsg}>{Constants.Cancelleation_msg}</Text>
                    <Text style={StyleViewUpcomingTrip.modalMsg}>{Constants.cancellation_msgDelete}</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
                        <TouchableOpacity style={StyleViewUpcomingTrip.cancelModalButton}
                                onPress={()=>{
                                    this.setState({isSuccesfull:true})
                                }}
                        >
                            <Text style={StyleViewUpcomingTrip.cancelModalButtonText}>{Constants.YES}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={StyleViewUpcomingTrip.cancelModalButton}
                            onPress={() => {
                                this.setState({ cancelModal_Visible: false })
                            }}>
                            <Text style={StyleViewUpcomingTrip.cancelModalButtonText}>{Constants.NO}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    TripCancelledSuccessfully() {
return(
    <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
    <View style={StyleViewUpcomingTrip.cancelModalView}>
          <TouchableOpacity style={StyleViewUpcomingTrip.leftcrossView}
              onPress={() => {
                  this.setState({ cancelModal_Visible: false,isSuccesfull:false })
              }}
          >
              <Image source={require('../images/close.png')} 
                    style={{width:12,height:12,top:5,right:5}}
              />
          </TouchableOpacity>
          <Image style={{ width: 80, height: 80, alignSelf: 'center', marginVertical: 5 }}
          source={require('../images/sent_icon.png')}
         />
         <Text style={[StyleViewUpcomingTrip.modalMsg, { marginTop: 5 }]}>{Constants.TripCanceledSuccessfully}</Text>
        <Text style={[StyleViewUpcomingTrip.modalMsg, { marginBottom: 5 }]}>{Constants.checkYourregisteredEmailIdPeneltyInfo}</Text>
     </View>
 </View> 
)
       
    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>

                <HeaderBar title="VIEW UPCOMING TRIP DETAILS" isBack={true} isLogout={true} navigation={navigation} />
                <View style={{ flex: 1 }}>
                    <ScrollView style={{ width: '100%' }} bounces={false}>
                        <View style={{ marginBottom: 2 }}>
                            <View style={StyleViewUpcomingTrip.topCircle} />

                            <View style={{ flexDirection: 'row', }}>
                                <Modal
                                    animationType='fade'
                                    transparent={true}
                                    visible={this.state.invoiceModal_Visible}
                                >
                                    <Invoice clickCallback={() => {
                                        this.setState({ invoiceModal_Visible: false });
                                    }} />
                                </Modal>
                                <TouchableOpacity style={StyleViewUpcomingTrip.imageSideView}
                                    onPress={() => {
                                        this.setState({ invoiceModal_Visible: true });
                                    }} >
                                    <Image source={require('../images/invoice_details.png')}
                                        style={StyleViewUpcomingTrip.sideImage}
                                    />
                                </TouchableOpacity>
                                <Image source={require('../images/WarehouseServices_copy.png')}
                                    style={StyleViewUpcomingTrip.ImageCurrentTrip}
                                />

                            </View>
                        </View>
                        <Text style={StyleViewUpcomingTrip.title}>PVR</Text>
                        <View style={StyleViewUpcomingTrip.bottomLine}></View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.PartnerName}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>PVR Service</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Telephonenumber}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>+56 4585965351</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Duration}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>12/01/2019 to 12/1/2019</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.WarehoueType}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>Public</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.StorageType}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>Refrigerator</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Quantity}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>7</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoType}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>Cargo type 1</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoHandling}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>NO</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoHandlingCharges}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>NA</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.BasicDescription}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>loremp_ ipsomeloremp_ ipsomeloremp_ ipsomeloremp_ ipsomeloremp_ ipsomeloremp_ ipsome</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoInssurance}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>Yes</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.SizeofgoodStored}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>38kg</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Dimension}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>100*50*50* inches</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.VolumetricWeight}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>18kg</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CostOfRecurring}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>US $35</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.frequency}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>Weekly</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CostOfWarehouseServices}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>US $450</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoDescription}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>Loremp ispsomeLoremp ispsomeLoremp ispsomeLorempispsome</Text>
                            </View>
                        </View>



                        <TouchableOpacity style={StyleViewUpcomingTrip.bottomButton}
                            onPress={() => {
                                this.setState({ cancelModal_Visible: true })
                            }}
                        >
                            <Text style={StyleViewUpcomingTrip.buttonText}>{Constants.CANCELTRIP}</Text>
                        </TouchableOpacity>
                        <Modal
                            animationType='fade'
                            transparent={true}
                            visible={this.state.cancelModal_Visible}
                            style={{ flex: 1 }}
                        >   
                        {
                        this.state.isSuccesfull
                        ?
                        this.TripCancelledSuccessfully()
                        :
                        this.delete_trip()
                        }
                    </Modal>

             </ScrollView>
         </View>

                <FooterBar navigation={navigation} />
            </View>
        )
    }
}