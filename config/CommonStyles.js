import { Dimensions, StyleSheet } from 'react-native';
import Constants from '../config/Constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StyleHelpAndSupport = StyleSheet.create({
    supportTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: Constants.fontSizeExtraLarge,
        color: Constants.COLOR_GREY_DARK,
        textTransform: "capitalize",
    },
    userImage: {
        width: 120,
        height: 120,
        resizeMode: "cover",
        marginRight: 10,
        borderRadius: 60,
        borderWidth: 8,
        borderColor: Constants.COLOR_WHITE,
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'stretch',
    },
    name: {
        marginLeft: 10,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
    },
    pickerView: {
        padding: 15,
        paddingLeft: 25,
        marginHorizontal: 15,
        borderWidth: 0.3,
        borderRadius: 40,
        marginVertical: 25,
        borderColor: Constants.COLOR_GREY_LIGHT,
    },
    pickerTitle: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    picker: {
        height: 30,
        maxHeight: 70,
    },
    messageView: {
        height: 150,
        maxHeight: 150,
        padding: 15,
        paddingLeft: 25,
        marginHorizontal: 15,
        marginTop: 20,
        borderWidth: 0.3,
        borderRadius: 7,
        borderColor: Constants.COLOR_GREY_LIGHT,
    },
    messageTitle: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    messageText: {
        justifyContent: 'center',
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    buttonView: {
        padding: 10,
        borderRadius: 25,
        marginTop: "20%",
        marginBottom: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Constants.COLOR_GREEN,
    },
    buttonText: {
        paddingTop: 10,
        textAlign: 'center',
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE_LARGE,
        textTransform: 'uppercase',
    },
    modalView: {
        width: wp('80%'),
        height: hp('35%'),
        justifyContent: 'center',
        backgroundColor: Constants.COLOR_WHITE
    },
    leftCross_View: {
        alignSelf: 'flex-end',
    },
    leftCrossText: {
        right: 10,
        top: 1,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_LIGHT,

    },
    modalImage: {
        alignSelf: 'center',
        width: 100,
        height: 100,
    },
    modalMsg: {
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_LIGHT,
        marginVertical: 10,
    },
    modalButton: {
        width: '40%',
        borderRadius: 50,
        backgroundColor: Constants.COLOR_GREEN,
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    modalButtonText: {
        paddingTop: 10,
        paddingBottom: 10,
        alignSelf: 'center',
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

})
const StyleTripHelpAndSupport = StyleSheet.create({
    supportTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: Constants.fontSizeExtraLarge,
        color: Constants.COLOR_GREY_DARK,
        textTransform: "capitalize",
    },
    userImage: {
        width: 120,
        height: 120,
        resizeMode: "cover",
        marginRight: 10,
        borderRadius: 60,
        borderWidth: 8,
        borderColor: Constants.COLOR_WHITE,
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'stretch',
    },
    name: {
        marginLeft: 10,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
    },
    pickerView: {
        padding: 15,
        paddingLeft: 25,
        marginHorizontal: 15,
        borderWidth: 0.3,
        borderRadius: 40,
        marginVertical: 25,
        borderColor: Constants.COLOR_GREY_LIGHT,
    },
    pickerTitle: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    picker: {
        height: 30,
        maxHeight: 70,
    },
    messageView: {
        height: 150,
        maxHeight: 150,
        padding: 15,
        paddingLeft: 25,
        marginHorizontal: 15,
        marginTop: 20,
        borderWidth: 0.3,
        borderRadius: 7,
        borderColor: Constants.COLOR_GREY_LIGHT,
    },
    messageTitle: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    messageText: {
        justifyContent: 'center',
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    bottomButtonView: {
        flexDirection: 'row',
        marginTop: 45,
        marginBottom: 20,
    },
    bottomButtonlabel: {
        backgroundColor: Constants.COLOR_GREEN,
        width: '40%',
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    bottomButtonText: {
        padding: 10,
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE_LARGE,
        textTransform: 'uppercase',
    },
    modalView: {
        width: wp('80%'),
        height: hp('35%'),
        justifyContent: 'center',
        backgroundColor: Constants.COLOR_WHITE
    },
    leftCross_View: {
        alignSelf: 'flex-end',
        width: 10,
    },
    leftCrossText: {
        right: 10,
        top: 1,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_LIGHT,

    },
    modalImage: {
        alignSelf: 'center',
        width: 100,
        height: 100,
    },
    modalMsg: {
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_LIGHT,
        marginVertical: 10,
    },
    modalButton: {
        width: '40%',
        borderRadius: 50,
        backgroundColor: Constants.COLOR_GREEN,
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    modalButtonText: {
        paddingTop: 10,
        paddingBottom: 10,
        alignSelf: 'center',
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

})
const StyleNotification = StyleSheet.create({
    row: {
        flex: 10,
        flexDirection: 'row',
        padding: 5,
        marginVertical: 5,
        backgroundColor: Constants.COLOR_WHITE,
    },
    col1: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5,
    },
    col2: {
        flex: 8,
        alignContent: 'center',
        paddingLeft: 15,
    },
    icon: {
        width: 45,
        height: 45,
        resizeMode: 'stretch',
    },
    title: {
        fontWeight: 'bold',
        marginVertical: 3,
        textTransform: "capitalize",
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
    },
    desc: {
        marginVertical: 3,
        fontSize: Constants.FONT_SIZE__MEDIUM,
        color: Constants.COLOR_GREY_LIGHT,
    },
    dateTime: {
        marginVertical: 3,
        fontSize: Constants.FONT_SIZE_SMALL,
        color: Constants.COLOR_GREY_SHADED,
    },
    arrow: {
        width: 25,
        height: 25,
        left: 5,
        resizeMode: 'stretch'
    },

})
const StyleRateAndReview = StyleSheet.create({
    topCircle: {
        position: 'absolute',
        zIndex: -1,
        width: 420,
        height: 420,
        borderRadius: 205,
        top: '-50%',
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_PRIMARY,

    },
    mainContainer: {
        flex: 1,
    },
    ImageCurrentTrip: {
        width:130,
        height:130,
        borderRadius:70,
        borderWidth:8,
        borderColor:Constants.COLOR_WHITE,
        alignSelf:'center',
        marginTop:'20%',
    },
    TripDetail_View:{
        backgroundColor:Constants.COLOR_GREY_DARK,
        width:'50%',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:50
    },
    TripDetail_Text:{
        paddingBottom:8,
        paddingTop:8,
        textTransform:'uppercase',
        fontSize:Constants.FONT_SIZE__MEDIUM,
        color:Constants.COLOR_WHITE
    },
    InputBox_View:{ 
        marginTop:15
    },
    InputBox_Container:{
    
    },
    labelView:{
 marginLeft:'12%'
    },
    labelText:{
        fontWeight:'bold',
        color:Constants.COLOR_GREY_SHADED,
        fontSize:Constants.FONT_SIZE_LARGE,

    }
})

export {
    StyleHelpAndSupport,
    StyleTripHelpAndSupport,
    StyleNotification,
    StyleRateAndReview
}