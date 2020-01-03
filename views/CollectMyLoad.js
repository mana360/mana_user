/* screen -MANAPPCUS048,57,58,60
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Modal,TextInput} from 'react-native';
import { StyleCollectMyLoad } from '../config/CommonStyles';
import Constants from '../config/Constants';
import RBSheet from "react-native-raw-bottom-sheet";
import Carousel  from "react-native-carousel";

export default class CollectMyLoad extends React.Component {
    constructor() {
        super();
        this.state = {
            modalVisible_RateCard:false,
            ModalVisible_referFriend:false,

        }
    }
RateCard(){
    return(
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', }}>

        <View style={[StyleCollectMyLoad.modalCotainer, { width: '80%' }]}>
            <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10 }}
                onPress={() => {
                    this.setState({ modalVisible_RateCard:false})
                }}
            >
                <Image source={require('../images/close.png')}
                    style={{ width: 15, height: 15 }}
                />
            </TouchableOpacity>

            <Text style={StyleCollectMyLoad.modalText}>{Constants.RateCard}</Text>

            <View style={[StyleCollectMyLoad.modalrow, { borderBottomWidth: 0.5, borderBottomColor: Constants.COLOR_GREY_LIGHT, marginBottom: 10 }]}>
                <View style={StyleCollectMyLoad.modalcol1}>
                    <Text style={[StyleCollectMyLoad.modalTittle]}>{Constants.Size}</Text>
                </View>
                <View style={StyleCollectMyLoad.modalcol2}>
                    <Text style={StyleCollectMyLoad.modalTittle}>{Constants.Amount}</Text>
                </View>
            </View>

            <View style={StyleCollectMyLoad.modalrow}>
                <View style={StyleCollectMyLoad.modalcol1}>
                    <Text style={StyleCollectMyLoad.keytext}>{Constants.SmallLessthan}</Text>
                </View>
                <View style={StyleCollectMyLoad.modalcol2}>
                    <Text style={StyleCollectMyLoad.valueText}>$40/-</Text>
                </View>
            </View>

            <View style={StyleCollectMyLoad.modalrow}>
                <View style={StyleCollectMyLoad.modalcol1}>
                    <Text style={StyleCollectMyLoad.keytext}>{Constants.Medium}</Text>
                </View>
                <View style={StyleCollectMyLoad.modalcol2}>
                    <Text style={StyleCollectMyLoad.valueText}>$80/-</Text>
                </View>
            </View>

            <View style={[StyleCollectMyLoad.modalrow,{marginBottom:15}]}>
                <View style={StyleCollectMyLoad.modalcol1}>
                    <Text style={StyleCollectMyLoad.keytext}>{Constants.Large}</Text>
                </View>
                <View style={StyleCollectMyLoad.modalcol2}>
                    <Text style={StyleCollectMyLoad.valueText}>$120/-</Text>
                </View>
            </View>

        </View>
    </View>
    )
}
ReferAFriend(){
    return(
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', }}>
                <View style={[StyleCollectMyLoad.modalCotainer, { width: '90%' }]}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10, }}
                        onPress={() => {
                            this.setState({ ModalVisible_referFriend: false })
                        }}
                    >
                        <Image source={require('../images/close.png')}
                            style={{ width: 15, height: 15 }}
                        />
                    </TouchableOpacity>
                    <Text  style={StyleCollectMyLoad.modalReferText}>Refer a Friend</Text>
                    <Text style={StyleCollectMyLoad.modalShareText}>{Constants.ShareAppUsing}</Text>

                    <View style={StyleCollectMyLoad.textInput_container}>
                        <View style={{ width: '75%', alignSelf: 'center', paddingLeft: 15 }}>
                            <View style={StyleCollectMyLoad.labelBox}>
                                <Image style={StyleCollectMyLoad.LabelBoxIcon}
                                    source={require('../images/email_id.png')} />
                                <Text style={StyleCollectMyLoad.labelBoxText}>{Constants.Email}</Text>
                            </View>
                            <TextInput placeholder='Enter Email Id'
                                style={StyleCollectMyLoad.textInput_style}
                                value={this.state.email_id}
                                onChangeText={(newText) => {
                                    this.setState({ email_id: newText })
                                }}
                            />
                        </View>
                        <View style={{ width: '25%' }}>
                            <TouchableOpacity>
                                <Image source={require('../images/send.png')}
                                    style={{ width: 70, height: 50, resizeMode: 'cover', }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={StyleCollectMyLoad.textInput_container}>
                        <View style={{ width: '75%', alignSelf: 'center', paddingLeft: 15 }}>
                            <View style={StyleCollectMyLoad.labelBox}>
                                <Image style={StyleCollectMyLoad.LabelBoxIcon}
                                    source={require('../images/mobile_number.png')} />
                                <Text style={StyleCollectMyLoad.labelBoxText}>{Constants.MobileNumber}</Text>
                            </View>
                            <TextInput placeholder='Enter Mobile Number'
                                keyboardType="number-pad"
                                style={StyleCollectMyLoad.textInput_style}
                                value={this.state.mobile_number}
                                onChangeText={(newText) => {
                                    this.setState({ mobile_number: newText })
                                }}
                            />
                        </View>
                        <View style={{ width: '25%' }}>
                            <TouchableOpacity>
                            <Image source={require('../images/send.png')}
                                style={{ width: 70, height: 50, resizeMode: 'cover', }}
                            />

                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
    )
}
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1, backgroundColor: Constants.COLOR_GREY }}>

                <View style={StyleCollectMyLoad.row}>
                    <View style={StyleCollectMyLoad.col1}>
                        <Image source={require('../images/Warehouse_Services.png')}
                            style={StyleCollectMyLoad.image} />
                    </View>
                    <View style={StyleCollectMyLoad.col2}>
                        <Text style={[StyleCollectMyLoad.labelText2]}>{Constants.NewBooking}</Text>
                        <Text style={StyleCollectMyLoad.descText}>fnsldfn fnsldfn fnsldfn fnsldfn fnsldfn lorempipsom</Text>
                        <TouchableOpacity style={StyleCollectMyLoad.button}
                            onPress={() => {
                                this.RBSheet.open();
                            }}
                        >
                            <Text style={StyleCollectMyLoad.buttonLabel}>{Constants.ViewAll}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={StyleCollectMyLoad.row}>
                    <View style={StyleCollectMyLoad.col1}>
                        <Image source={require('../images/Warehouse_Services.png')}
                            style={StyleCollectMyLoad.image} />
                    </View>
                    <View style={StyleCollectMyLoad.col2}>
                        <Text style={[StyleCollectMyLoad.labelText2]}>{Constants.MyBooking}</Text>
                        <Text style={StyleCollectMyLoad.descText}>fnsldfn fnsldfn fnsldfnfnsldfnfnsldfnfnsldfn fnsldfn fnsldfn lorempipsom</Text>
                        <TouchableOpacity style={StyleCollectMyLoad.button}
                            onPress={() => {
                                alert('navigate to pml')
                            }}
                        >
                            <Text style={StyleCollectMyLoad.buttonLabel}>{Constants.ViewAll}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={StyleCollectMyLoad.ServicesView}>

                 <Text style={[StyleCollectMyLoad.labelText, { textTransform: "uppercase", fontSize: Constants.FONT_SIZE_LARGE }]}>{Constants.CollectMyloadOtherServices}</Text>

                 <View style={{ flexDirection: 'row', marginVertical: 15, justifyContent: 'center', }}>

                        <TouchableOpacity style={StyleCollectMyLoad.ServImageView}
                           onPress={()=>{
                               this.setState({ModalVisible_referFriend:true})
                           }}
                        >
                            <Image source={require('../images/Refer_A_Friend.png')}
                                style={StyleCollectMyLoad.ServImage}
                            />
                            <Text style={StyleCollectMyLoad.ServText}>{Constants.ReferAFriend}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={StyleCollectMyLoad.ServImageView}
                             onPress={()=>{
                                this.setState({modalVisible_RateCard:true});
                        }}
                        >
                            <Image source={require('../images/Rate_Card.png')}
                                style={StyleCollectMyLoad.ServImage}
                            />
                            <Text style={StyleCollectMyLoad.ServText}>{Constants.RateCard}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={StyleCollectMyLoad.ServImageView}
                            onPress={()=>{
                                this.props.navigation.navigate('DiscountVoucher');
                            }}
                        >
                            <Image source={require('../images/My_Discount_.png')}
                                style={[StyleCollectMyLoad.ServImage,]}
                            />
                            <Text style={StyleCollectMyLoad.ServText}>{Constants.MyDiscountVoucher}</Text>
                        </TouchableOpacity>

                  </View>

                </View>
               
                <Modal
                transparent={true}
                visible={this.state.modalVisible_RateCard}
                animationType='fade'
                >
                   {this.RateCard()}
                </Modal>
               
                <Modal
                transparent={true}
                visible={this.state.ModalVisible_referFriend}
                animationType='fade'>
                    {this.ReferAFriend()}
                </Modal>

                <RBSheet
                    ref={ref => {
                    this.RBSheet = ref;
                    }}
                    height={300}
                    duration={250}
                    customStyles={{
                    container: {
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                        backgroundColor:'transparent,'
                    }
                    }}
                >
                    <View style={StyleCollectMyLoad.collWrapp }>
                        <Carousel 
                           indicatorAtBottom={false} 
                        >
                            <View style={StyleCollectMyLoad.carouselWrapp}>                          
                               <View style={StyleCollectMyLoad.outerCircle}>
                                    <View style={StyleCollectMyLoad.innerCircle}>
                                        <Image style={StyleCollectMyLoad.truckImg}
                                                    source={require('../images/truck_icon.png')} />
                                    </View>
                                </View>   
                                                             
                            </View>
                            <View style={StyleCollectMyLoad.carouselWrapp}>
                                <Text>Page 1</Text>
                            </View>
                        </Carousel>  
                    </View>  
                </RBSheet>            

            </View>
        )
    }
}