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
        marginTop: 10,
        marginBottom: 10,
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
        borderRadius: 25,
        marginTop: 65,
        width: '90%',
        marginBottom: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Constants.COLOR_GREEN,
    },
    buttonText: {
        paddingVertical: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    modalView: {
        width: wp('80%'),
        padding: 5,
        borderRadius: 5,
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
        color: Constants.COLOR_GREY_DARK,
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
        paddingLeft:15,
        marginLeft:20
    },
    icon: {
        width: 50,
        height: 50,
        marginLeft:5,
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
        width: '120%',
        height: 430,
        borderRadius: 205,
        top: '-175%',
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_PRIMARY,
    },
    ImageCurrentTrip: {
        width: 130,
        height: 130,
        borderRadius: 70,
        borderWidth: 8,
        borderColor: Constants.COLOR_WHITE,
        alignSelf: 'center',
        marginTop: '12%',
    },
    TripDetail_View: {
        backgroundColor: Constants.COLOR_GREY_DARK,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: 15,
        marginBottom: 15,
    },
    TripDetail_Text: {
        paddingBottom: 8,
        paddingTop: 8,
        textTransform: 'uppercase',
        fontSize: Constants.FONT_SIZE__MEDIUM,
        color: Constants.COLOR_WHITE
    },
    InputBox_Container: {
        height: 120,
        maxHeight: 120,
        marginVertical: 15,
        borderRadius: 10,
        paddingBottom: 50,
        borderWidth: 0.6,
        width: '90%',
        alignSelf: 'center',
        borderColor: Constants.COLOR_GREY_LIGHT,
    },
    ratingText: {
        fontWeight: 'bold',
        marginLeft: 40,
        color: Constants.COLOR_GREY_SHADED,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    labelView: {
        top: -11,
        zIndex: 1,
        marginLeft: 20,
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: Constants.COLOR_WHITE,
    },
    labelText: {
        paddingLeft: 5,
        paddingRight: 5,
        fontWeight: 'bold',
        color: Constants.COLOR_GREY_SHADED,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    textInputbox: {
        width: '100%',
        paddingBottom: 30,
        paddingLeft: 22,
        paddingRight: 5,
        alignSelf: 'center',
    },
    buttonView: {
        width: '90%',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: '10%',
        marginBottom: 20,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: Constants.COLOR_GREEN,
    },
    buttonText: {
        alignSelf: 'center',
        textTransform: "uppercase",
        color: Constants.COLOR_WHITE,
        fontWeight: 'bold'
    },
    modalView: {
        width: wp('80%'),
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
        color: Constants.COLOR_GREY_DARK,
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
const StyleViewCompletedDetail = StyleSheet.create({
    topCircle: {
        position: 'absolute',
        zIndex: -1,
        width: '120%',
        height: 420,
        borderRadius: 205,
        top: '-175%',
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_PRIMARY,
    },
    ImageCurrentTrip: {
        width: 130,
        height: 130,
        borderRadius: 70,
        borderWidth: 8,
        borderColor: Constants.COLOR_WHITE,
        alignSelf: 'center',
        marginTop: '12%',
    },
    label: {
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: Constants.COLOR_GREY_DARK,
    },
    bottomline: {
        borderBottomColor: Constants.COLOR_GREEN,
        borderBottomWidth: 5,
        width: '20%',
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: '2%',
        marginBottom: 25
    },
    row: {
        flexDirection: 'row',
        width: '90%',
        paddingTop: 15,
        paddingBottom: 15,
        alignSelf: 'center',
        borderBottomWidth: 1.5,
        borderBottomColor: Constants.COLOR_GREY
    },
    col1: {
        width: '50%'
    },
    col1Text: {
        paddingRight: 5,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
        fontWeight: 'bold',
    },
    col2: {
        width: '50%',
    },
    col2Text: {
        paddingLeft: 15,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,

    },
})
const StyleSignIn = StyleSheet.create({
    bgImage: {
        width: wp('100%'),
        height: '100%',
        zIndex: -1,
        position: 'absolute',
        resizeMode: 'stretch',
    },
    loginBox: {
        marginTop:15,
        width: wp('90%'),
        paddingRight: 15,
        paddingLeft: 15,
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: Constants.COLOR_WHITE,
    },
    LogoImageView:{
        borderRadius:85,
        top:-95, 
        height:170,
        width:'58%',
        justifyContent:'center',
        alignSelf:'center',
        position: 'absolute',
    },
    logoImage: {
        width: 158,
        top:1,
        height: 158,
        alignSelf: 'center',
    },
    loginLabel: {
        marginTop:85,
        alignSelf: 'center',
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_DARK
    },
    textInput_container: {
        marginVertical: 7
    },
    textInput_style: {
        borderWidth: 0.7,
        borderRadius: 50,
        paddingLeft: 25,
        marginVertical: 5,
        borderColor: Constants.COLOR_GREY_LIGHT
    },
    labelBox: {
        zIndex: 1,
        left: 15,
        paddingLeft: 2,
        paddingRight: 2,
        marginTop: -7,
        marginLeft: "3%",
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: Constants.COLOR_GREY_LIGHT
    },
    LabelBoxIcon: {
        width: 18,
        height: 18,
        marginHorizontal: 3,
    },
    labelBoxText: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: Constants.fontSizeLarge,
        color: Constants.COLOR_GREY_DARK,
    },
    loginButton: {
        width: wp('80%'),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        backgroundColor: Constants.COLOR_GREEN,
    },
    Login_buttonText: {
        color: Constants.COLOR_WHITE,
        textTransform: 'uppercase',
        padding: 15,
        fontWeight: 'bold',
    },
    forgotButton: {
        marginVertical:12
    },
    forgotLabel: {
        alignSelf: 'center',
        color: Constants.COLOR_GREY_LIGHT,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    memberButton: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },
    memberLabel: {
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE_LARGE,
    },

})
const StyleTermsAndCondition = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 5,
        padding: 5,
    },
    title: {
        fontWeight: 'bold',
        marginVertical: 3,
        fontSize: Constants.FONT_SIZE__MEDIUM,
        color: Constants.COLOR_GREY_DARK,
    },
    desc: {
        marginVertical: 2,
        textAlign: 'justify',
        fontSize: Constants.FONT_SIZE__MEDIUM,
        color: Constants.COLOR_GREY_LIGHT,
    },
})
const StyleDashboard = StyleSheet.create({
    topCircle: {
        width: wp('120'),
        height: hp('65'),
        borderRadius: 200,
        marginTop: '-85%',
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_PRIMARY,
    },
    cardView: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageView: {
        flex: 1,
        alignSelf: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageD: {
        width: 50,
        height: 50,
    },
    textD: {
        paddingRight: 1,
        marginTop: 5,
        fontSize: 8,
        textAlign: "center",
        alignSelf: 'center',
        textTransform: 'capitalize'
    },
    labelText: {
        marginTop: 10,
        marginBottom: 5,
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: "capitalize",
        color: Constants.COLOR_GREY_SHADED,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
    },
    bottomLine: {
        width: '20%',
        borderRadius: 20,
        borderBottomWidth: 5,
        alignSelf: 'center',
        borderBottomColor: Constants.COLOR_GREEN,
        marginBottom: 15
    },
    row: {
        borderBottomWidth: 1.3,
        marginBottom: 10,
        paddingBottom: 10,
        maxHeight:110,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: Constants.COLOR_WHITE,
        borderBottomColor: Constants.COLOR_GREY
    },
    col1: {
        width: '30%',
        paddingLeft: 20,
        paddingTop: 10
    },
    image: {
        width: 90,
        height: 90,
    },
    labelText2: {
        textTransform: "capitalize",
        fontWeight: 'bold',
        paddingBottom: 5,
    },
    descText: {
        color: Constants.COLOR_GREY_LIGHT,
        fontSize: Constants.FONT_SIZE_SMALL,
    },
    col2: {
        width: '70%',
        paddingLeft: 20,
        paddingRight: 10,
    },
})
const StyleTruckBooking = StyleSheet.create({
    topCircle: {
        width: '120%',
        height: 420,
        borderRadius: 200,
        marginTop: '-85%',
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_PRIMARY,
    },
    cardView: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageView: {
        flex: 1,
        alignSelf: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageD: {
        width: 50,
        height: 50
    },
    textD: {
        paddingRight: 1,
        marginTop: 5,
        fontSize: 8,
        textAlign: "center",
        alignSelf: 'center',
        textTransform: 'capitalize'

    },
    labelText: {
        marginTop: 10,
        marginBottom: 5,
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: "capitalize",
        color: Constants.COLOR_GREY_SHADED,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
    },
    bottomLine: {
        width: '20%',
        borderRadius: 20,
        borderBottomWidth: 5,
        alignSelf: 'center',
        borderBottomColor: Constants.COLOR_GREEN,
        marginBottom: 20
    },
    row: {
        marginTop: 5,
        marginBottom: 10,
        flexDirection: 'row',
        borderBottomWidth: 1.3,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: 'center',
        borderBottomColor: Constants.COLOR_GREY,
        backgroundColor: Constants.COLOR_WHITE
    },
    col1: {
        width: '30%',
        paddingLeft: 20,
    },
    image: {
        width: 90,
        height: 90,
    },
    labelText2: {
        paddingTop: 5,
        paddingBottom: 5,
        textTransform: "capitalize",
        fontWeight: 'bold',
        color: Constants.COLOR_GREY_DARK,
    },
    descText: {
        color: Constants.COLOR_GREY_LIGHT,
        fontSize: Constants.FONT_SIZE_SMALL,
    },

    button: {
        width: '35%',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: Constants.COLOR_GREEN
    },
    buttonLabel: {
        paddingTop: 5,
        paddingBottom: 5,
        textTransform: "uppercase",
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE__MEDIUM
    },
    col2: {
        width: '70%',
        paddingLeft: 20,
        paddingRight: 10,
    },
})
const StyleCurrentTrip = StyleSheet.create({
    row: {
        flex: 10,
        flexDirection: 'row',
        padding: 5,
        marginVertical: 5,
        backgroundColor: Constants.COLOR_WHITE,
    },
    col1: {
        flex: 1.5,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5,
    },
    icon: {
        width: 60,
        height: 60,
        paddingRight: 5,
        paddingLeft: 5,
        resizeMode: 'stretch',
    },
    col2: {
        paddingLeft: 5,
        flex: 8,
        alignContent: 'center',
        paddingLeft: 15,
    },
    title: {
        textTransform: "capitalize",
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        fontWeight: 'bold',
        padding: 5
    },
    bottomLine: {
        borderBottomWidth: 0.8,
        borderBottomColor: Constants.COLOR_GREY_DARK,
        marginBottom: 5,
    },
    imageIcon: {
        width: 13,
        height: 13,
        marginRight:3,
    },
    labeltext: {
        paddingLeft: 2,
        marginBottom: 8,
        fontWeight: 'bold',
        textAlign:"center",
        paddingBottom:2,
        textTransform: "capitalize",
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_SMALL,
    },
    datacss: {
        paddingLeft: 3,
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_SMALL
    },
    desc: {
        fontSize: Constants.FONT_SIZE__MEDIUM,
        color: Constants.COLOR_GREY_LIGHT,
    },
    col3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrow: {
        width: 20,
        height: 20,
        left: 5,
        alignSelf: 'center',
        resizeMode: 'stretch'
    },

})
const StyleViewCurrentTrip = StyleSheet.create({
    topCircle: {
        position: 'absolute',
        zIndex: -1,
        width: '120%',
        height: 420,
        borderRadius: 250,
        top: '-190%',
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_PRIMARY,
    },
    ImageCurrentTrip: {
        width: 130,
        height: 130,
        borderRadius: 70,
        borderWidth: 8,
        borderColor: Constants.COLOR_WHITE,
        alignSelf: 'center',
        marginTop: '8%',
        resizeMode: "cover"
    },
    sideImage: {
        width: 65,
        height: 65,
        borderWidth: 6,
        marginHorizontal: 15,
        borderColor: Constants.COLOR_WHITE,
        borderRadius: 35,
        resizeMode: "cover",
    },
    title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_DARK
    },
    bottomLine: {
        borderBottomColor: Constants.COLOR_GREEN,
        borderBottomWidth: 5,
        width: '15%',
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: 5,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        width: '90%',
        paddingTop: 15,
        paddingBottom: 15,
        alignSelf: 'center',
        borderBottomWidth: 1.5,
        borderBottomColor: Constants.COLOR_GREY
    },
    col1: {
        width: '50%'
    },
    col1Text: {
        paddingRight: 5,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
        fontWeight: 'bold',
    },
    col2: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    col2Text: {
        paddingLeft: 10,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
    },
    bottomButton: {
        paddingHorizontal: 25,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25,
        backgroundColor: Constants.COLOR_GREEN,
        borderRadius: 50,
    },
    buttonIcon: {
        width: 20,
        height: 20,
        padding: 5,
        marginRight: 5
    },
    buttonText: {
        color: Constants.COLOR_WHITE,
        paddingTop: 10,
        paddingBottom: 10,
        textTransform: "uppercase",
    },
})
const StyleViewUpcomingTrip = StyleSheet.create({
    topCircle: {
        position: 'absolute',
        zIndex: -1,
        width: '120%',
        height: 420,
        borderRadius: 205,
        top: '-195%',
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_PRIMARY,
    },
    ImageCurrentTrip: {
        width: 130,
        height: 130,
        borderRadius: 70,
        borderWidth: 8,
        borderColor: Constants.COLOR_WHITE,
        marginTop: 30,
        alignSelf: 'center',
        resizeMode: "cover",
    },
    imageSideView: {
    },
    sideImage: {
        width: 70,
        height: 70,
        borderWidth: 6,
        borderColor: Constants.COLOR_WHITE,
        borderRadius: 35,
    },
    title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_DARK
    },
    bottomLine: {
        borderBottomColor: Constants.COLOR_GREEN,
        borderBottomWidth: 5,
        width: '15%',
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: 5,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        width: '90%',
        paddingTop: 15,
        paddingBottom: 15,
        alignSelf: 'center',
        borderBottomWidth: 1.5,
        borderBottomColor: Constants.COLOR_GREY
    },
    col1: {
        width: '50%'
    },
    col1Text: {
        paddingRight: 5,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
        fontWeight: 'bold',
    },
    col2: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    col2Text: {
        paddingLeft: 10,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
    },
    tab: {
        backgroundColor: Constants.COLOR_FOOTER_GREY,
        borderRightWidth: 0.2,
        borderRightWidth:1,
        borderLeftWidth:1,
        borderColor:'white',
        borderRightColor: Constants.COLOR_WHITE,
    },
    tab_active: {
        borderRightWidth:2,
        borderColor:'white',
        backgroundColor: Constants.COLOR_GREEN_PROFILE,
        borderRightWidth: 0.2,
        borderRightColor: Constants.COLOR_WHITE,
    },
    tab_text: {
        fontSize: 12,
        textAlign:'center',
        textTransform:'uppercase',
        color: Constants.COLOR_WHITE,
    },
    tab_active_text: {
        textAlign:'center',
        textTransform:'uppercase',
        color: Constants.COLOR_WHITE,
        fontSize: 12,
    },
    bottomButton: {
        paddingHorizontal: 25,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor: Constants.COLOR_RED,
        borderRadius: 50,
    },
    buttonIcon: {
        width: 20,
        height: 20,
        padding: 5,
        marginRight: 5
    },
    buttonText: {
        color: Constants.COLOR_WHITE,
        paddingTop: 10,
        paddingBottom: 10,
        textTransform: "uppercase",
    },
    InvoiceModalView: {
        backgroundColor: Constants.COLOR_WHITE,
        width: wp('95%'),
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'center',

    },
    InvoiceTitle: {
        color: Constants.COLOR_GREEN,
        textTransform: 'uppercase',
        fontSize: Constants.fontSizeLarge,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 5,
    },
    invoiceLabel: {
        textTransform: "capitalize",
        fontSize: Constants.FONT_SIZE_SMALL,
        paddingLeft: 2,
        paddingRight: 2,
    },
    InvoicebottomLine: {
        borderBottomWidth: 2,
        borderBottomColor: Constants.COLOR_GREY_DARK,
        width: '99%',
        alignSelf: 'center',
        borderRadius: 50,
    },
    buttonView: {
        backgroundColor: Constants.COLOR_GREEN,
        width: '50%',
        alignSelf: 'center',
        borderRadius: 20,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cancelModalView: {
        width: wp('80%'),
        borderRadius: 5,
        padding:10,
        backgroundColor: Constants.COLOR_WHITE,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    leftcrossView: {
        alignSelf: 'flex-end',
        right: 8,
        top: 8,
        marginBottom: 15
    },
    modalMsg: {
        width: wp('80%'),
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_DARK,
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: 'center',
        

    },
    cancelModalButton: {
        width: wp('30%'),
        justifyContent: 'center',
        marginHorizontal: 10,
        backgroundColor: Constants.COLOR_GREEN,
        paddingVertical: 10,
        borderRadius: 20,
    },
    cancelModalButtonText: {
        alignSelf: 'center',
        textTransform: "uppercase",
        color: Constants.COLOR_WHITE
    }
})
const StyleUpcomingTrip = StyleSheet.create({
    row: {
        flex: 10,
        flexDirection: 'row',
        padding: 5,
        marginVertical: 5,
        backgroundColor: Constants.COLOR_WHITE,
    },
    col1: {
        flex: 1.5,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5,
    },
    icon: {
        width: 60,
        height: 60,
        paddingRight: 5,
        paddingLeft: 5,
        resizeMode: 'stretch',
    },
    col2: {
        paddingLeft: 5,
        flex: 8,
        alignContent: 'center',
        paddingLeft: 15,
    },
    title: {
        textTransform: "capitalize",
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        fontWeight: 'bold',
        padding: 5
    },
    bottomLine: {
        borderBottomWidth: 0.8,
        borderBottomColor: Constants.COLOR_GREY_DARK,
        marginBottom: 5,
    },
    imageIcon: {
        width: 13,
        height: 13,
        marginRight:3,
    },
    labeltext: {
        paddingLeft: 2,
        marginBottom: 8,
        fontWeight: 'bold',
        textTransform: "capitalize",
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_SMALL,
    },
    datacss: {
        paddingLeft: 3,
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_SMALL
    },
    desc: {
        fontSize: Constants.FONT_SIZE__MEDIUM,
        color: Constants.COLOR_GREY_LIGHT,
    },
    col3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrow: {
        width: 20,
        height: 20,
        left: 5,
        alignSelf: 'center',
        resizeMode: 'stretch'
    },

})
const StyleInvoice = StyleSheet.create({
    InvoiceModalView: {
        backgroundColor: Constants.COLOR_WHITE,
        width: wp('95%'),
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        marginHorizontal: 10,
        alignSelf: 'center',
        height: hp('80%'),
        maxHeight: hp('80%'),
    },
    crossView: {
        alignSelf: 'flex-end',
        top: 5,
        right: 5
    },
    crossText: {
        color: Constants.COLOR_GREEN_DARK,
    },
    InvoiceTitle: {
        color: Constants.COLOR_GREEN,
        textTransform: 'uppercase',
        fontSize: Constants.fontSizeLarge,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 5,
    },
    invoiceLabel: {
        textTransform: "capitalize",
        fontSize: Constants.FONT_SIZE_SMALL,
        paddingLeft: 2,
        paddingRight: 2,
    },
    InvoicebottomLine: {
        borderBottomWidth: 2,
        borderBottomColor: Constants.COLOR_GREY_DARK,
        width: '99%',
        alignSelf: 'center',
        borderRadius: 50,
    },
    buttonView: {
        backgroundColor: Constants.COLOR_GREEN,
        width: '50%',
        alignSelf: 'center',
        borderRadius: 20,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: Constants.COLOR_WHITE,
        paddingTop: 10,
        paddingBottom: 10,
        textTransform: "uppercase",
    },
})
const StyleCollectMyLoad = StyleSheet.create({
    topCircle: {
        width: '120%',
        height: 420,
        borderRadius: 200,
        marginTop: '-85%',
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_PRIMARY,
    },
    cardView: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageView: {
        flex: 1,
        alignSelf: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageD: {
        width: 50,
        height: 50
    },
    textD: {
        paddingRight: 1,
        marginTop: 5,
        fontSize: 8,
        textAlign: "center",
        alignSelf: 'center',
        textTransform: 'capitalize'
    },
    labelText: {
        marginTop: 10,
        marginBottom: 2,
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: "capitalize",
        color: Constants.COLOR_GREY_SHADED,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
    },
    bottomLine: {
        width: '20%',
        borderRadius: 20,
        borderBottomWidth: 5,
        alignSelf: 'center',
        borderBottomColor: Constants.COLOR_GREEN,
        marginBottom: 20
    },
    row: {
        marginBottom: 10,
        flexDirection: 'row',
        borderBottomWidth: 1.3,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: 'center',
        borderBottomColor: Constants.COLOR_GREY,
        backgroundColor: Constants.COLOR_WHITE
    },
    col1: {
        width: '30%',
        paddingLeft: 20,
    },
    image: {
        width: 90,
        height: 90,
    },
    labelText2: {
        paddingTop: 5,
        paddingBottom: 5,
        textTransform: "capitalize",
        fontWeight: 'bold',
        color: Constants.COLOR_GREY_DARK,
    },
    descText: {
        color: Constants.COLOR_GREY_LIGHT,
        fontSize: Constants.FONT_SIZE_SMALL,
    },

    button: {
        width: '35%',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: Constants.COLOR_GREEN
    },
    buttonLabel: {
        paddingTop: 5,
        paddingBottom: 5,
        textTransform: "uppercase",
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE__MEDIUM
    },
    col2: {
        width: '70%',
        paddingLeft: 20,
        paddingRight: 10,
    },
    ServicesView: {
        backgroundColor: Constants.COLOR_WHITE,
    },
    ServImageView: {
        marginHorizontal: '5%',
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'column',
    },
    ServText: {
        fontSize: Constants.FONT_SIZE_SMALL,
        color: Constants.COLOR_GREY_DARK,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        alignSelf: 'center',

    },
    ServImage: {
        width: 70,
        height: 70,
    },
    modalCotainer: {
        width: wp('90%'),
        alignSelf: 'center',
        borderRadius: 5,
        backgroundColor: Constants.COLOR_WHITE,
    },
    modalText: {
        alignSelf: 'center',
        fontWeight: 'bold',
        paddingBottom: 10,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREEN
    },
    modalrow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    modalcol1: {
        width: '70%',
    },
    modalcol2: {
        width: '30%',
    },
    modalShareText:{
        paddingBottom:20,
        alignSelf:'center',
        fontWeight:'bold',
        color:Constants.COLOR_GREY_DARK,
        fontSize:Constants.FONT_SIZE_EXTRA_LARGE
    },
    modalReferText:{
        paddingVertical:5,
        alignSelf:'center',
        color:Constants.COLOR_GREEN,
        fontSize:Constants.FONT_SIZE_EXTRA_LARGE
    },
    modalTittle: {
        paddingLeft: 18,
        paddingBottom: 10,
        fontWeight: 'bold',
        color: Constants.COLOR_GREEN
    },
    keytext: {
        paddingLeft: 18,
        paddingBottom: 10,
        color: Constants.COLOR_GREY_DARK
    },
    valueText: {
        alignSelf: 'flex-start',
        paddingLeft: 20,
        color: Constants.COLOR_GREEN
    },
    textInput_container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20
    },
    textInput_style: {
        borderWidth: 0.7,
        borderRadius: 50,
        paddingLeft: 25,
        marginVertical: 5,
        width: '95%',
        borderColor: Constants.COLOR_GREY_LIGHT
    },
    labelBox: {
        zIndex: 1,
        left: 15,
        paddingLeft: 2,
        paddingRight: 2,
        marginTop: -7,
        marginLeft: "7%",
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: Constants.COLOR_GREY_LIGHT
    },
    LabelBoxIcon: {
        width: 18,
        height: 18,
        marginHorizontal: 3,
    },
    labelBoxText: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: Constants.fontSizeLarge,
        color: Constants.COLOR_GREY_DARK,
    },
    collWrapp:{
        flex:1,        
        position:'relative',
    },
    carouselWrapp:{        
        flex:1,
    },
    innpickTop:{
        flex:1,
        marginTop:0,
        position:"relative",  
        alignItems:"center",      
    },    
    bgpickImg: {
		width: '100%',       
        resizeMode:'contain',
    },   	
    outerCircle: {	
		position:'absolute',
		left:0,
		right:0,
		top:15,
        zIndex: 1,       
        alignItems:"center",      
	},
    innerCircle: {
		borderRadius: 100,
		width:125,
		height: 125,
        backgroundColor: '#fff', 
        justifyContent:"center",        
	},
    truckImg: {		
        width:90,
        height:90,
        zIndex:1,        
        resizeMode:'contain',   
        alignSelf:"center",        
    },
    whiteinnBox:{
        backgroundColor:'#fff',
        flex:1,
        alignItems:"center",
        paddingHorizontal:25,
        marginTop:-285,
    },
    chosetruckTxt:{
        textTransform:"uppercase",
        fontFamily: "Roboto-Medium",
        fontSize:Constants.FONT_SIZE_EXTRA_MEDIUM,
        color:Constants.COLOR_GREEN,
        marginTop:15,
    },
    weighTxt:{
        fontFamily: "Roboto-Medium",
        fontSize:Constants.FONT_SIZE_EXTRA_MEDIUM,
        color:Constants.COLOR_GREEN_DARK,
        marginTop:15,
    },
    truckDetails:{
        fontFamily: "Roboto-Regular",
        fontSize:Constants.FONT_SIZE_LARGE,
        color:Constants.COLOR_GREEN_DARK,
        marginTop:5,
        textAlign:"center",
        height:130,
        maxHeight:130,
    },
    grayBox:{
        backgroundColor:Constants.COLOR_GREY_DARK,
        width:'100%',
        borderRadius:6,
        paddingVertical:10,      
        alignItems:"center",
        marginTop:20,
        marginBottom:20,
    },
    maxTxt:{       
        color:'#fff',
        fontFamily: "Roboto-Medium",
        fontSize:Constants.FONT_SIZE_EXTRA_LARGE,
        textTransform:"uppercase",
    },
    truckBtn: {
		backgroundColor: Constants.COLOR_GREEN,
		borderRadius: 50,
		padding:10,
        alignItems:"center",       
        width:'90%',
	},
	truckBtnText: {
		color: '#fff',
		fontSize: 16,  	
		textTransform:'uppercase',	
		fontFamily: "Roboto-Medium",				
    },

})
const StyleMyProfile = StyleSheet.create({
    topCircle: {
        position: 'absolute',
        zIndex: -1,
        width: wp('120'),
        height: 430,
        borderRadius: 205,
        top: '-195%',
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_PRIMARY,
    },
    ProfileImage: {
        width: 130,
        height: 130,
        borderRadius: 70,
        borderWidth: 8,
        borderColor: Constants.COLOR_WHITE,
        alignSelf: 'center',
        marginTop: '8%',
        resizeMode: "cover"
    },
    sideImageView: {
     marginTop:25
    },
    sideImage: {
        width: 65,
        height: 65,
        borderWidth: 6,
        marginHorizontal: 15,
        borderColor: Constants.COLOR_WHITE,
        borderRadius: 35,
        resizeMode: "cover",
    },
    label: {
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_DARK,
    },
    bottomline: {
        borderBottomColor: Constants.COLOR_GREEN,
        borderBottomWidth: 5,
        width: '15%',
        alignSelf: 'center',
        marginTop: 5,
        borderRadius: 50,
        marginBottom: 10
    },
    row: {
        flexDirection: 'row',
        width: '90%',
        paddingTop: 15,
        paddingBottom: 15,
        alignSelf: 'center',
        borderBottomWidth: 1.5,
        borderBottomColor: Constants.COLOR_GREY
    },
    col1: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    Icon: {
        width: 20,
        height: 20,
    },
    col1Text: {
        paddingRight: 5,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    col2: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    col2Text: {
        paddingLeft: 20,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
    },
    ModalWrapper: {
        backgroundColor: Constants.COLOR_WHITE,
        width: wp('90%'),
        alignSelf: 'center',
        borderRadius: 5,
    },
    TextInputView: {
        paddingLeft: 20,
        borderWidth: 0.8,
        width: wp('80%'),
        height: 55,
        marginBottom: '8%',
        alignSelf: 'center',
        borderRadius: 50,
        borderColor: Constants.COLOR_GREY_DARK,
        backgroundColor: Constants.COLOR_WHITE,
    },
    LabelView: {
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 1,
        marginLeft: '8%',
        top: '-20%',
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: Constants.COLOR_WHITE
    },
    modalLabelText: {
        paddingLeft: 5,
        fontWeight:'bold',
        textAlign: "center",
        textTransform: "capitalize",
        color: Constants.COLOR_GREY_DARK
    },
    labelIcon: {
        width: 17,
        height: 17
    },
    TextInput: {
        fontSize: Constants.FONT_SIZE_LARGE
    },
    ButtonView: {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 30,
        backgroundColor: Constants.COLOR_GREEN,
    },
    ButtonLabel: {
        paddingVertical: 10,
        textTransform: "uppercase",
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE
    },
    UpdateBtn_view:{
        backgroundColor:Constants.COLOR_GREEN,
        width:'90%',
        alignSelf:'center',
        borderRadius:50,
        marginVertical:25,
        justifyContent:'center',
        alignItems:'center'
    },
    UpdateBtn_text:{
        textTransform:'uppercase',
        color:Constants.COLOR_WHITE,
        paddingVertical:12,
        fontSize:Constants.FONT_SIZE_LARGE
    }
})
const StyleEditProfile = StyleSheet.create({
    topCircle: {
        position: 'absolute',
        zIndex: -1,
        width: wp('120'),
        height: 430,
        borderRadius: 205,
        top: '-195%',
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_PRIMARY,
    },
    ProfileImage: {
        width: 130,
        height: 130,
        borderRadius: 70,
        borderWidth: 8,
        borderColor: Constants.COLOR_WHITE,
        alignSelf: 'center',
        marginTop: '8%',
        resizeMode: "cover"
    },
    sideImageView: {
        marginTop:25,
    },
    sideImage: {
        width: 65,
        height: 65,
        borderWidth: 6,
        marginHorizontal: 15,
        borderColor: Constants.COLOR_WHITE,
        borderRadius: 35,
        resizeMode: "cover",
    },
    label: {
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_DARK,
    },
    bottomline: {
        borderBottomColor: Constants.COLOR_GREEN,
        borderBottomWidth: 5,
        width: '15%',
        alignSelf: 'center',
        marginTop: 5,
        borderRadius: 50,
        marginBottom: 10
    },
    TextInputView: {
        paddingLeft: 20,
        borderWidth: 0.8,
        width: wp('90%'),
        height: 50,
        alignSelf: 'center',
        borderRadius: 50,
        marginBottom: 25,
        justifyContent: 'center',
        borderColor: Constants.COLOR_GREY_DARK,
        backgroundColor: Constants.COLOR_WHITE,
    },
    LabelView: {
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 1,
        marginLeft: '7%',
        top: '-22%',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: Constants.COLOR_WHITE
    },
    modalLabelText: {
        paddingLeft: 5,
        fontWeight:'bold',
        textAlign: "center",
        textTransform: "capitalize",
        color: Constants.COLOR_GREY_DARK
    },
    labelIcon: {
        width: 17,
        height: 17
    },
    TextInput: {
        fontSize: Constants.FONT_SIZE_LARGE,
        color:Constants.COLOR_GREY_DARK
    },
    ButtonView: {
        width: '90%',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 30,
        backgroundColor: Constants.COLOR_GREEN,
    },
    ButtonLabel: {
        paddingVertical: 12,
        textTransform: "uppercase",
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE
    },
})
const StyleForgotPassword = StyleSheet.create({
    textMsg: {
        textAlign: 'center',
        fontWeight: "bold",
        marginTop: '20%',
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_DARK
    },
    TextInputView: {
        paddingLeft: 20,
        borderWidth: 0.8,
        width: wp('90%'),
        height: 50,
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: 50,
        justifyContent: 'center',
        borderColor: Constants.COLOR_GREY_DARK,
        backgroundColor: Constants.COLOR_WHITE,
    },
    LabelView: {
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 1,
        marginLeft: '7%',
        top: '-22%',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: Constants.COLOR_WHITE
    },
    modalLabelText: {
        paddingLeft: 5,
        textAlign: "center",
        textTransform: "capitalize",
        color: Constants.COLOR_GREY_DARK
    },
    labelIcon: {
        width: 17,
        height: 17
    },
    TextInput: {
        fontSize: Constants.FONT_SIZE_LARGE
    },
    ButtonView: {
        backgroundColor: Constants.COLOR_GREEN,
        borderRadius: 50,
        alignSelf: 'center',
        width: '90%',
        paddingVertical: 10,
        position:"absolute",
        bottom:15,

    },
    forgotButtonView:{
        backgroundColor: Constants.COLOR_GREEN,
        borderRadius: 50,
        alignSelf: 'center',
        width: '40%',
        paddingVertical: 10,
        marginHorizontal:15,
    },
    buttonLabel: {
        alignSelf: 'center',
        textTransform: "uppercase",
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE_LARGE
    },
    ModalView: {
        backgroundColor: Constants.COLOR_WHITE,
        width: wp('90%'),
        alignSelf: 'center',
        borderRadius: 5,
        justifyContent: 'center',
    },
    modalTextMSg: {
        alignSelf: 'center',
        color: Constants.COLOR_GREEN,
        fontWeight: "bold",
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        marginTop: 15,
        marginBottom: 25,
    },
    ModaltextInput: {
        width: wp('60%'),
        borderWidth: 1,
        borderRadius: 5,
        letterSpacing: 15,
        marginVertical: '4%',
        textAlign: 'center',
        borderStyle: 'dashed',
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_GREY,
        borderColor: Constants.COLOR_GREY_LIGHT,
    },
    resendText: {
        fontWeight:"bold",
        alignSelf: 'center',
        textDecorationLine: "underline",
        color: Constants.COLOR_GREEN
    },
    modalButtonView: {
        backgroundColor: Constants.COLOR_GREEN,
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    modalButtonLabel: {
        textTransform: 'uppercase',
        color: Constants.COLOR_WHITE,
        paddingHorizontal: 35,
        paddingVertical: 10
    },
})
const StyleSignUp = StyleSheet.create({
    bgImage: {
        width: wp('100%'),
        height: '100%',
        zIndex: -1,
        position: 'absolute',
        resizeMode: 'stretch',
    },
    loginBox: {
        padding: 15,
        borderRadius:5,
        marginTop: 15,
        justifyContent: 'center',
        backgroundColor: Constants.COLOR_WHITE,
    },
    LogoImageView:{
        position:'absolute',
        borderRadius:85,
        top:-110,
        height:170,
        width:'57%',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
    },
    logoImage: {
        width: 140,
        height: 140,
        top:10,
        alignSelf: 'center',
    },
    loginLabel: {
        marginTop:50,
        marginBottom:5,
        alignSelf: 'center',
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_DARK
    },
    textInput_container: {
        marginVertical: 9
    },
    textInput_style: {
        height:45,
        borderWidth: 0.7,
        borderRadius: 50,
        paddingLeft: 25,
        borderColor: Constants.COLOR_GREY_LIGHT
    },
    labelBox: {
        zIndex: 1,
        left: 15,
        marginTop: -10,
        marginLeft: "3%",
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: Constants.COLOR_GREY_LIGHT
    },
    LabelBoxIcon: {
        width: 18,
        height: 18,
        marginHorizontal: 3,
    },
    labelBoxText: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: Constants.fontSizeLarge,
        color: Constants.COLOR_GREY_DARK,
    },
    loginButton: {
        width: wp('80%'),
        borderRadius: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Constants.COLOR_GREEN,
    },
    Login_buttonText: {
        color: Constants.COLOR_WHITE,
        textTransform: 'uppercase',
        padding: 13,
        fontWeight: 'bold',
    },
    policyView: {
        flexDirection: "row",
        paddingLeft: 20,
        marginVertical: 5,
    },
    policyButton: {},
    policyImage: {
        width: 18,
        height: 18,
        marginRight: 5
    },
    referaltxtinputView: {
        borderWidth: 0.7,
        borderRadius: 50,
        marginVertical: 5,
        borderColor: Constants.COLOR_GREY_LIGHT
    },
    PolicyLabel: {
        color: Constants.COLOR_GREEN,
    },
    memberButton: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
    },
    memberLabel: {
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    modalCotainer: {
        width: wp('90%'),
        alignSelf: 'center',
        borderRadius: 5,
        backgroundColor: Constants.COLOR_WHITE,
    },
    ModalMsg: {
        paddingRight: 5,
        fontWeight: 'bold',
        paddingLeft: 10,
        alignSelf: 'center',
        paddingBottom: 25,
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE
    }

})
const StyleDiscountVouchers = StyleSheet.create({
    pagebody:{
        flex:1, 
        backgroundColor:Constants.colorGrey,
        padding:15,
    },
    voucherbgimg:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%', 
        flex:1,
        position:'relative',
        marginVertical:5,
    },
    vourimg:{
        width:'100%',
        height:80,
        resizeMode:'stretch',
    },
    vouchertxtbox:{
        position:'absolute',
        left:10, 
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
    },
    voucerinnerimg:{
        flex:2,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        resizeMode:'contain',
    },
    voucerinnertxt:{ 
        flex:7,
        marginLeft:20,
        flexDirection:'column',
        width:'100%',
    },
    voucerinntxthead:{
        color: Constants.COLOR_GREEN_PROFILE,
        fontFamily: 'Roboto-Medium',
        fontSize: Constants.FONT_SIZE_LARGE,
        width:'90%',
        paddingBottom:2,
        fontSize:14,
        borderBottomColor: '#cfcfcf',
        borderBottomWidth: 1,
        textTransform:'uppercase',
    },
    voucervaiddiscountbtn: {
        flexDirection: 'row',
        width: '90%',
        flex: 2,
        marginTop: 2,
    },
    voucervaiddiscount: {
        flexDirection: 'column',
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    voucerdate: {
        color: Constants.COLOR_BLACK_LIGHT,
        fontFamily: 'Roboto-Regular',
        fontSize: Constants.FONT_SIZE__MEDIUM,
    },
    voucerdiscount: {
        color: Constants.COLOR_GREEN,
        fontFamily: 'Roboto-Regular',
        fontSize: Constants.FONT_SIZE__MEDIUM,
    },
    voucerbtn:{
        alignItems:'flex-end',
        flex:1,
        justifyContent:'center',
    },
    voucerapplybtn:{
        backgroundColor: Constants.COLOR_GREEN, 
        color:Constants. COLOR_WHITE,
        paddingHorizontal:18,
        paddingVertical:2, 
        borderRadius:20,
        fontSize: Constants.FONT_SIZE__MEDIUM, 
    }
})
const styleDiscountVoucher = StyleSheet.create({
    bgImage: {
        position: "absolute",
        zIndex: -1,
        alignSelf: 'center',
        height: 90,
        width: '95%', marginHorizontal: 15,
        resizeMode: 'stretch',
    },
    titleView: {
        paddingVertical: 5,
        borderBottomWidth: 0.5,
        marginBottom: 15,
        paddingBottom: 5,
        width: '80%',
        alignSelf: 'center',
        borderBottomColor: Constants.COLOR_GREY_LIGHT,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE
    },
    title: {
        textTransform: "uppercase",
        color: Constants.COLOR_GREEN,
        fontWeight: 'bold'
    },
    discountText: {
        fontSize: Constants.FONT_SIZE__MEDIUM,
        color: Constants.COLOR_GREEN,
        width:'43%',
    },
    validityDate: {
        fontSize: Constants.FONT_SIZE__MEDIUM,
        paddingLeft: 10,
        color: Constants.COLOR_GREY_DARK,
        width:'50%',
    }
})
const StyleMyBooking = StyleSheet.create({
    newBookingIcom: {
        width: 100,
        height: 70,
        resizeMode: 'stretch',
        alignSelf: 'center',
    },
    newBookingInstructionText: {
        textAlign: 'center',
        marginVertical: 15,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
    },
    newBookingButtonView: {
        width: 160,
        padding: 10,
        borderRadius: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Constants.COLOR_GREEN,
    },
    newBookingButtonText: {
        textTransform: 'uppercase',
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE__MEDIUM,
    },
    tab: {
        backgroundColor: "rgba(92,167,108,1)",
        borderRightWidth: 0.2,
        borderRightColor: Constants.colorGreenDark,
    },
    tab_active: {
        backgroundColor: "rgba(92,167,108,1)",
        borderRightWidth: 0.2,
        borderRightColor: Constants.colorGreenDark,
    },
    tab_text: {
        fontSize: Constants.fontSizeExtraLarge,
        color: Constants.COLOR_BLACK,
    },
    tab_active_text: {
        color: Constants.COLOR_WHITE,
        fontSize: Constants.fontSizeExtraLarge,
    },
    bookingRow: {
        padding: 0,
        marginVertical: 5,
    },
    bookingId: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: Constants.COLOR_GREEN,
        fontSize: Constants.FONT_SIZE__MEDIUM,
    },
    bookingStatus: {
        textAlign: 'right',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: Constants.FONT_SIZE__MEDIUM,
    },
    labelText: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_MEDIUM,
    },
    valueText: {
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_MEDIUM,
    },
})
const StyleMyBookingDetails = StyleSheet.create({
    detailsRow: {
        flex: 2,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        marginVertical: 5,
        marginHorizontal: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(64,64,64,0.5)",
    },
    detailsKey: {
        fontWeight: 'bold',
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_MEDIUM,
        textTransform: 'capitalize',
    },
    detailsValue: {
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_MEDIUM,
    },
    buttionView: {
        width: 160,
        padding: 10,
        borderRadius: 40,
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Constants.COLOR_GREEN,
    },
    buttonText: {
        color: Constants.COLOR_WHITE,
        textTransform: 'uppercase',
        fontSize: Constants.FONT_SIZE__MEDIUM,
    },
    infoView: {
        position: 'absolute',
        zIndex: +1,
        right: '5%',
        top: '20%',
        width: wp(35),
    },
    infoViewTitle: {
        color: Constants.COLOR_GREY_DARK,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 3,
        fontSize: Constants.FONT_SIZE_SMALL,
    },
    infoViewDesc: {
        textAlign: 'center',
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_SMALL,
    },
    infoViewShape: {
        position: 'absolute',
        top: -7,
        right: -6,
        width: 0,
        height: 0,
        marginTop: -1,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 15,
        borderTopWidth: 15,
        borderRightColor: 'transparent',
        borderTopColor: Constants.COLOR_WHITE,
        transform: [{ rotate: '-45deg' }],
    },
    reasonView: {
        padding: 10,
        borderRadius: 3,
        justifyContent: 'center',
        backgroundColor: Constants.COLOR_WHITE,
    },
    reasonCloser: {
        position: 'absolute',
        top: 5,
        right: 8,
        width: 15,
        height: 15,
    },
    reasonTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'capitalize',
        color: Constants.COLOR_GREEN,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    reasonTextView: {
        height: 100,
        maxHeight: 100,
        marginTop: 10,
        paddingLeft: 5,
        marginBottom: 10,
        marginHorizontal: 8,
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: "rgba(64,64,64,0.5)",
    },
    reasonText: {
        fontSize: Constants.FONT_SIZE__MEDIUM,
    },
    reasonNote: {
        marginVertical: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Constants.COLOR_RED,
        fontSize: Constants.FONT_SIZE__SMALL,
    },
    reasonButtonView: {
        width: '45%',
        padding: 10,
        borderRadius: 30,
        marginVertical: 8,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Constants.COLOR_GREEN,
    },
    reasonButtonText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE_MEDIUM,
    },
})
const StyleMapView = StyleSheet.create({
    MainContainer: {
        flex: 1,
    },
    mapStyle: {
        flex:1,
    },
    bottom_btn:{
        backgroundColor:Constants.COLOR_GREEN,
        justifyContent:'center',
        borderRadius:50,
        alignSelf:'center',
        width:"40%",
        position: "absolute",
        bottom:15,
        paddingVertical:12,




    }
})
const StyleViewMap = StyleSheet.create({
    mapStyle: {
        height:'100%',
        left: 0,
        right: 0,
    }, 
    viewmaprbs:{
        flex:1,
        marginTop:35,
        marginHorizontal:20,
    },
    maplocationtxt:{
        flex:1,   
        width:'100%', 
        flexDirection:'row',
    },
    mapimgwid:{
        flex:1, 
    },
    mapimg:{
        marginTop:2,
        width: 20,
        height: 20,
    },
    maptxtwid:{
        flex:10,
    },
    maptxt:{
        width:'100%',
        fontSize: Constants.FONT_SIZE_LARGE, 
        color: 'grey', 
    },
    maplocationbtn:{
        flex:1,
        width:'100%',
    },
    mapbottbtn:{
       alignItems:'center',
       backgroundColor: Constants.COLOR_GREEN,
       paddingVertical:13,
       borderRadius:50,
       justifyContent:'center',
    },
    mapbottbtntxt:{
        color:Constants.COLOR_WHITE,
        textTransform:'uppercase',
        fontFamily:'Roboto-Medium',
    }
})
const StylePaymentMethod = StyleSheet.create({
    paymentamount:{
        flex:1, 
        backgroundColor:'#f0f0f0',
        padding:20,
        
    },
    paymentamounttxt:{
        flexDirection:'row',
        flex:2,
        paddingVertical:15,
        borderBottomColor: '#c6c6c6',
        borderBottomWidth: 1, 
        
    },
    paymentamountlefttxt:{
        flex:1,
        fontSize:Constants.FONT_SIZE_EXTRA_LARGE ,
        color: Constants.COLOR_GREY_SHADED,
        fontFamily:'Roboto-Medium',
    },
    paymentamountrighttxt:{
        flex:1,
        textAlign: 'right',
        fontSize:Constants.FONT_SIZE_EXTRA_LARGE ,
        color: Constants.COLOR_GREY_SHADED,
        fontFamily:'Roboto-Medium',
        paddingRight:10,
    },
    paymenttotal:{
        flex:1,
        fontSize:Constants.FONT_SIZE_EXTRA_LARGE ,
        color: Constants.COLOR_GREEN,
        textTransform:'uppercase',
        fontFamily:'Roboto-Bold',
    },
    paymenttotalamount:{
        flex:1,
        textAlign: 'right',
        fontSize:Constants.FONT_SIZE_EXTRA_LARGE ,
        color: Constants.COLOR_GREEN,
        fontFamily:'Roboto-Bold',
        paddingRight:10,
    },
    paymentmethod:{
        flex:1,
        marginTop:80,
        backgroundColor:'#fff',
        padding:20,
        flexDirection:'column',
        marginTop:60,
    },
    choosetext:{
        textAlign:'center',
        fontSize:Constants.FONT_SIZE_EXTRA_LARGE ,
        color: Constants.COLOR_GREEN,
        fontFamily:'Roboto-Bold',
    },
    choosetype:{
        flex:2,
        flexDirection:'row',
        marginVertical:20,
    },
    cashpickup:{
        flex:1,
        paddingVertical:15,
        alignItems:'center',
        borderRadius:4,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#4a4a4a' ,
        marginHorizontal:5,
    },
    cashpickuptxt:{
        fontSize:Constants.FONT_SIZE_LARGE ,
        color: '#4a4a4a',
        fontFamily:'Roboto-Medium',  
    },
    onlinepay:{
        flex:1,
        paddingVertical:15,
        alignItems:'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#7bc145',
        marginHorizontal:5,
    },
    onlinepaytxt:{
        fontSize:Constants.FONT_SIZE_LARGE ,
        color: Constants.COLOR_PRIMARY ,
        fontFamily:'Roboto-Medium',
    },
    paymentmethodpaybtn:{
        flex:1,
    },
    paybtn:{
        backgroundColor:Constants.COLOR_GREEN,
        borderRadius:20,
        paddingVertical:12,
        alignItems:'center',
    },
    paybtntxt:{
        fontSize:Constants.FONT_SIZE_EXTRA_LARGE ,
        color: '#fff',
        fontFamily:'Roboto-Medium',  
    },

    popmodule:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        paddingHorizontal:'5%',
      },
      popmain:{
        backgroundColor:'#fff',
        width:'100%',
        padding:20,
        borderRadius:6,
        position:'relative',
      },
      popclose:{
        position:'absolute',
        right:0,
        top:0,
        padding:12,
      },
      popcloseimg:{
        width:15,
        height:15,
      },
      popbody:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      },
      popbodyimg:{
        width:75,
        height:75,
      },
      popbodytxt:{
        color:Constants.COLOR_FOOTER_GREY,
        fontSize:Constants.FONT_SIZE_EXTRA_LARGE ,
        fontFamily:'Roboto-Medium',
        marginVertical:15,
      },
      popbtnwidth:{
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:Constants.COLOR_GREEN,
        borderRadius:20,
        width:100,
      },
      popgrnbtn:{
          textAlign:'center',
          color:Constants.COLOR_WHITE,
      },
      modal_cancleBtn:{
        width:'40%',
        backgroundColor:Constants.COLOR_GREEN,
        alignSelf:'center',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
      },
      modal_cancleBtntext:{
          color:Constants.COLOR_WHITE,
          paddingVertical:10,
          fontSize:Constants.FONT_SIZE_EXTRA_LARGE
      },
      popbodythanksimg:{
        width:90,
        height:90,
        resizeMode:'contain',
      },
      popbodythankstxt:{
        fontSize:Constants.FONT_SIZE_EXTRA_LARGE ,
        color:Constants.COLOR_FOOTER_GREY,
        fontFamily:'Roboto-Medium', 
        marginVertical:10,
      },
      popbodynotification:{
        backgroundColor:Constants.COLOR_GREY,
        padding:20,
        borderRadius:4,
        marginVertical:10,
      },
      popbodynotificationtxt:{
        fontSize:Constants.FONT_SIZE_LARGE ,
        color:Constants.COLOR_FOOTER_GREY,
        fontFamily:'Roboto-Medium', 
        textAlign:'center',
      },


})
const StyleLocationDetails = StyleSheet.create({
    locationWrapp:{
        flex:1,
        paddingLeft:25,
        paddingRight:25,
        paddingTop:36,
    },
    iconView:{
        position:"absolute",
        right:16,
        top:12,
    },
    labelIconLoc: {
        width: 20,
        height: 20,
	},
    inputContainer: {
	    backgroundColor: '#fff',  
		borderColor: '#ccc',  
		width:'100%',		
		position:'relative',
		borderRadius: 50,
		borderWidth: 0.8,
		height:45,
        marginBottom: 35,  
	},
	labelBoxNew: {	 
		position:'absolute',
		left:20,
		top:-11,
		backgroundColor:'#fff',
		paddingLeft:0,
		paddingRight:4,
		flexDirection: 'row',
	},
	labelTextNew: {
		color: '#717880',
		paddingLeft:6,
		fontSize: 15,  	
		fontFamily: "Roboto-Medium",			
	},
	inputBox: {
        width:'85%',
		color: 'rgba(64,64,64,0.8)',
		fontSize: Constants.FONT_SIZE_LARGE,
		paddingLeft:26,
		paddingRight:38,
        fontFamily: "Roboto-Light",		
        marginTop:4,	
    },
    nextAddrBtn: {
		backgroundColor: Constants.COLOR_GREEN,
		borderRadius: 50,
        padding:7,
        width:120,
        alignSelf:"flex-end",
        alignItems:"center",
        marginBottom:20,
	},
	nextAddrBtnText: {
		color: '#fff',
		fontSize: 12,
		textTransform:'uppercase',	
        fontFamily: "Roboto-Medium",
    },
    instructContainer: {
	    backgroundColor: '#fff',  
		borderColor: '#ccc',  
		width:'100%',		
		position:'relative',
		borderRadius: 10,
		borderWidth: 0.8,
		height:140,
        marginBottom: 35,  
        paddingRight:10,
	},    
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 140,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: '#4a4a4a',
        fontFamily: "Roboto-Light",	
        paddingLeft:25,
        marginTop:5,
    },
    logButton: {
		backgroundColor: Constants.COLOR_GREEN,
		borderRadius: 50,
		padding:12,
        alignItems:"center",
        marginVertical:20,
	},
	logButtonText: {
		color: '#fff',
		fontSize:Constants.FONT_SIZE_LARGE,  	
		textTransform:'uppercase',	
		fontFamily: "Roboto-Medium",				
    },
    IconClose:{
        position:"absolute",
        right:0,
        top:6,
        width:34,
        height:34,
    }
    
})
const StyleLoadCategory = StyleSheet.create({
    loadWrapp:{
        flex:1,
        paddingLeft:25,
        paddingRight:25,
        paddingTop:36,
    },
    loadBox:{
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:6,
        flexDirection: 'row',	
        flex:1,
        justifyContent:'center',     
        height:100,
        marginBottom:40,
    },
    loadLt:{
        flex:1,
        paddingLeft:0,
        paddingRight:0,
        alignSelf: 'center',
        alignItems:'center',
    },     
    radioBtn: {		
	},
	radioImage: {
		width:30,
		height:30,
    },
    loadRt:{
        flex:8,
    },    
    boxLoad: {
        width:110,
        height:120,
        borderRadius:6,
        backgroundColor: Constants.COLOR_GREEN,        
        left:0,
        top:-12,
        zIndex:1,  
        position:'absolute',
    },
    catImage: {
        flex: 1,     
        alignSelf: 'center',
        width:70,
        height:70,
        resizeMode: 'contain',	
    },        
    loadCatBox:{        
        paddingLeft:130,         
        flex: 1,     
        justifyContent:'center', 
    },
    loadCatTxt:{
        color:Constants.COLOR_GREEN,
        fontFamily: "Roboto-Bold",
        letterSpacing:0.3,	
        fontSize:18,	
    },    
})
const StyleBookingSummary = StyleSheet.create({
    booksummWrapp:{
        flex:1,
    },
    booksumminnWrapp:{
        flex:1,
        paddingHorizontal:25,
        paddingVertical:36,
    },
    topBox:{
        flex:1,
        backgroundColor:Constants.COLOR_GREY_DARK,
        borderRadius:3,
        marginBottom:40,
    },
    topinnBox:{
        flex:1,
        paddingVertical:22,
        paddingHorizontal:18,
        justifyContent:'center',
    },
    topinnTxt:{
        color:Constants.COLOR_WHITE,
        fontSize:Constants.FONT_SIZE_EXTRA_MEDIUM,
        fontFamily: "Roboto-Medium",
    },

    priceBox:{
        backgroundColor:Constants.COLOR_GREY,
        padding:5,
        paddingBottom:15,
        justifyContent:'center',
        alignItems:'center',
    },
    priceTxt:{
        width:'50%',
        paddingTop:7,
        fontFamily: "Roboto-Medium",
        fontSize:Constants.FONT_SIZE_EXTRA_LARGE,
        color:Constants.COLOR_FOOTER_GREY,
    },
    priceVol:{
        width:'40%',
        paddingTop:7,
        fontFamily: "Roboto-Medium",
        fontSize:20,
        color:Constants.COLOR_FOOTER_GREY,
        textAlign:'right'
    },
    discntBtn:{
        alignItems:'center',
        flex:1,
        marginTop:35,
        marginBottom:40,
    },
    discntText:{
        color: '#fff',
		fontSize: Constants.FONT_SIZE__MEDIUM,  	
		textTransform:'uppercase',	
        fontFamily: "Roboto-Medium",	
        backgroundColor: Constants.COLOR_GREEN,
        borderRadius: 50,
        paddingVertical:10,
        paddingHorizontal:18,
    },
    modalpopupBox: {
        flex:1,
        backgroundColor:'rgba(0,0,0,0.6)',
        justifyContent:'center',
        alignItems:'center',
    },
    modalinnBox: {
        borderRadius:5,
        width: wp('93%'),
        backgroundColor: Constants.COLOR_WHITE,
        position:'relative',
    },
    serpopSec:{
        paddingHorizontal:18,
        paddingVertical:30,          
    },
    othserTxt:{
        fontFamily: "Roboto-Medium",	
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,  	
        color: Constants.COLOR_GREY_DARK,
        textTransform:"uppercase",
        alignItems:'center',
        textAlign:'center',
        letterSpacing:0.3,
        marginBottom:30,
    },
    inputboxDropDown: {
	    backgroundColor: '#fff',  
		borderColor: '#ccc',  
		width:'100%',		
		position:'relative',
		borderRadius: 50,
		borderWidth: 0.8,
		height:50,
        marginBottom: 28,  
        paddingHorizontal:26,
	},
    dropInner:{
        fontSize:14,
        width:'100%',
        height: 'auto',
        fontFamily: "Roboto-Light",	
    },
    popCloseImg:{
        position:'absolute',
        right:25,
        top:20,
        width:26,
        height:26,
    },
    otherServiceBox:{
        flex:1, 
    },
    otherTxtser:{
        fontFamily: "Roboto-Medium",	
        fontSize: Constants.FONT_SIZE_EXTRA_MEDIUM,  	
        color: Constants.COLOR_GREY_DARK,
        letterSpacing:0.3,
        marginBottom:10,
    },
    grayBox:{
        backgroundColor:Constants.COLOR_GREY,
        borderRadius:6,
        padding:15,
    },
    ltSec:{
        justifyContent:'center',
    },
    rtSec:{
        alignItems:'flex-end',
    },
    removeImg:{
        width:25,
        height:25,
        marginLeft:15,
    },
})
const StyleNewBookingSummary = StyleSheet.create({
    booksumminnWrapp:{
        flex:1,
        paddingHorizontal:20,
        paddingVertical:20,
    },
    topBox:{
        flex:1,
        backgroundColor:Constants.COLOR_GREY_DARK,
        borderRadius:3,
        marginBottom:30,
    },
    topinnBox:{
        flex:1,
        paddingVertical:20,
        paddingHorizontal:18,
        justifyContent:'center',
    },
    topinnTxt:{
        color:Constants.COLOR_WHITE,
        fontSize:Constants.FONT_SIZE_EXTRA_LARGE,
        fontFamily: "Roboto-Medium",
    },


    priceBox:{
        flex:1,
        backgroundColor:Constants.COLOR_GREY,
        paddingHorizontal:25,
        paddingVertical:25,
        marginBottom:15,
    },
    priceTxt:{
        flex:1,
        alignItems:'flex-start',
        fontFamily: "Roboto-Medium",
        fontSize:Constants.FONT_SIZE_EXTRA_LARGE,
        color:Constants.COLOR_FOOTER_GREY,
        letterSpacing:0.5,
    },
    priceVol:{
        flex:1,
        textAlign:'right',
        alignItems:'flex-end',
        fontFamily: "Roboto-Medium",
        fontSize:Constants.FONT_SIZE_EXTRA_LARGE,
        color:Constants.COLOR_FOOTER_GREY,
        letterSpacing:0.5,
    },
    discntBtn:{
        alignItems:'center',
        flex:1,
        marginTop:35,
        marginBottom:40,
    },
    discntText:{
        color: '#fff',
		fontSize: Constants.FONT_SIZE__MEDIUM,  	
		textTransform:'uppercase',	
        fontFamily: "Roboto-Medium",	
        backgroundColor: Constants.COLOR_GREEN,
        borderRadius: 50,
        paddingVertical:10,
        paddingHorizontal:18,
    },
    modalpopupBox: {
        flex:1,
        backgroundColor:'rgba(0,0,0,0.6)',
        justifyContent:'center',
        alignItems:'center',
    },
    modalinnBox: {
        borderRadius:5,
        width: wp('93%'),
        height: hp('40'),
        backgroundColor: Constants.COLOR_WHITE,
        position:'relative',
    },
    serpopSec:{
        paddingHorizontal:18,
        paddingVertical:30,   
        flex:1,    
    },
    othserTxt:{
        fontFamily: "Roboto-Medium",	
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,  	
        color: Constants.COLOR_GREY_DARK,
        textTransform:"uppercase",
        alignItems:'center',
        textAlign:'center',
        letterSpacing:0.3,
        marginBottom:30,
    },
    inputboxDropDown: {
	    backgroundColor: '#fff',  
		borderColor: '#ccc',  
		width:'100%',		
		position:'relative',
		borderRadius: 50,
		borderWidth: 0.8,
		height:50,
        marginBottom: 28,  
        paddingHorizontal:26,
	},
    dropInner:{
        fontSize:14,
        width:'100%',
        height: 'auto',
        fontFamily: "Roboto-Light",	
    },
    popCloseImg:{
        position:'absolute',
        right:25,
        top:20,
        width:26,
        height:26,
    },
    otherServiceBox:{
        flex:1, 
        marginTop:-15,
    },
    otherTxtser:{
        fontFamily: "Roboto-Medium",	
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,  	
        color: Constants.COLOR_GREY_DARK,
        marginBottom:10,
    },
    grayBox:{
        flex:1,
        flexDirection:'row',
        backgroundColor:Constants.COLOR_GREY,
        borderRadius:6,
        paddingVertical:20,
        paddingHorizontal:20,
    },
    ltSec:{
        flex:8,       
        justifyContent:'center',
    },
    rtSec:{
        flex:2,       
        alignItems:'flex-end',
    },
    removeImg:{
        width:30,
        height:30,
    },
    logButtonText: {
		color: '#fff',
		fontSize:Constants.FONT_SIZE_LARGE,  	
		textTransform:'uppercase',	
		fontFamily: "Roboto-Medium",				
    },
})
const StyleSetUpProfile = StyleSheet.create({
   
    TextInputView: {
        paddingLeft: 20,
        borderWidth: 0.8,
        width: wp('90%'),
        height: 50,
        alignSelf: 'center',
        borderRadius: 50,
        marginVertical:15,
        justifyContent: 'center',
        borderColor: Constants.COLOR_GREY_DARK,
        backgroundColor: Constants.COLOR_WHITE,
    },
    LabelView: {
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 1,
        flexDirection:'row',
        marginLeft: '7%',
        top: '-22%',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: Constants.COLOR_WHITE
    },
    modalLabelText: {
        paddingLeft:2,
        fontWeight:'bold',
        textAlign: "center",
        textTransform: "capitalize",
        color: Constants.COLOR_GREY_DARK
    },
    ButtonView:{
        backgroundColor:Constants.COLOR_GREEN,
        justifyContent:'center',
        alignItems:'center',
        width:"43%",
        marginVertical:10,
        alignSelf:'center',
        borderRadius:50,

      },
    ButtonTextBottom:{
        color:Constants.COLOR_WHITE,
        textAlign:'center',
        textTransform:"uppercase"
    },
    modalView: {
        width: wp('80%'),
        padding: 5,
        borderRadius: 5,
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
        width: 70,
        height: 70,
    },
    modalMsg: {
        alignSelf: 'center',
        fontWeight: 'bold',
        textAlign:"center",
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_DARK,
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
const StyleSendOtp =StyleSheet.create({
    ModalView: {
        backgroundColor: Constants.COLOR_WHITE,
        width: wp('90%'),
        alignSelf: 'center',
        borderRadius: 5,
        justifyContent: 'center',
    },
    modalTextMSg: {
        alignSelf: 'center',
        color: Constants.COLOR_GREEN,
        fontWeight: "bold",
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        marginTop: 15,
        marginBottom: 25,
    },
    ModaltextInput: {
        width: wp('60%'),
        borderWidth: 1,
        borderRadius: 5,
        letterSpacing: 15,
        marginVertical: '4%',
        textAlign: 'center',
        borderStyle: 'dashed',
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_GREY,
        borderColor: Constants.COLOR_GREY_LIGHT,
    },
    resendText: {
        fontWeight:"bold",
        alignSelf: 'center',
        textDecorationLine: "underline",
        color: Constants.COLOR_GREEN
    },
    modalButtonView: {
        backgroundColor: Constants.COLOR_GREEN,
        borderRadius: 20,
        marginVertical:10,
        alignSelf: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    modalButtonLabel: {
        textTransform: 'uppercase',
        color: Constants.COLOR_WHITE,
        paddingHorizontal: 35,
        paddingVertical: 10
    },
})

export {
    StyleMyBookingDetails,
    StyleMyBooking,
    StyleHelpAndSupport,
    StyleTripHelpAndSupport,
    StyleNotification,
    StyleRateAndReview,
    StyleViewCompletedDetail,
    StyleSignIn,
    StyleTermsAndCondition,
    StyleDashboard,
    StyleTruckBooking,
    StyleCurrentTrip,
    StyleViewCurrentTrip,
    StyleViewUpcomingTrip,
    StyleInvoice,
    StyleUpcomingTrip,
    StyleCollectMyLoad,
    StyleMyProfile,
    StyleEditProfile,
    StyleForgotPassword,
    StyleSignUp,
    StyleLocationDetails,
    StyleLoadCategory,
    StyleBookingSummary,
    StyleDiscountVouchers,
    StyleViewMap,
    styleDiscountVoucher,
    StyleMapView,
    StylePaymentMethod,
    StyleNewBookingSummary,
    StyleSetUpProfile,
    StyleSendOtp,
}